import 'reflect-metadata'

import * as ts from 'typescript'
import * as path from 'path'

import {
  ASessionMsgFactory,
  AsciiSessionMsgFactory,
  ISessionDescription,
  ISessionMsgFactory,
  ILooseObject,
  IStandardHeader
} from '../../index'

const SRC = path.resolve(__dirname, '../..').split(path.sep).join('/') + '/'
const ROOT = SRC + 'index.ts'

/**
 * Issue #85 - an application overriding logon() or header() could not name the
 * types in those signatures, because ILooseObject and IStandardHeader were never
 * exported from the package root.  The reporter's only way through was a
 * `declare module "jspurefix/dist/transport/session/a-session-msg-factory"`
 * augmentation over a private path.  This is what that override looks like when
 * everything it needs comes from the root - if the barrel regresses, this file
 * stops compiling.
 */
class Issue85Factory extends AsciiSessionMsgFactory {
  public logon (userRequestId?: string): ILooseObject {
    return { ...super.logon(), Username: userRequestId ?? 'desk-7' }
  }

  public header (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    return super.header(msgType, seqNum, time, { ...overrideData, SenderSubID: 'desk-7' })
  }
}

function description (): ISessionDescription {
  return {
    BeginString: 'FIX.4.4',
    SenderCompId: 'init-comp',
    TargetCompID: 'accept-comp'
  } as ISessionDescription
}

describe('issue #85 - the session factory can be extended using root imports only', () => {
  test('an override typed entirely from the root behaves like the stock factory', () => {
    const factory: ISessionMsgFactory = new Issue85Factory(description())
    expect(factory).toBeInstanceOf(ASessionMsgFactory)
    expect(factory.logon().Username).toEqual('desk-7')
    const h = factory.header('A', 1, new Date()) as IStandardHeader
    expect(h.MsgType).toEqual('A')
    expect(h.MsgSeqNum).toEqual(1)
    expect(h.SenderSubID).toEqual('desk-7')
  })

  test('logon takes no required arguments, so a possibly-undefined id compiles', () => {
    const factory: ISessionMsgFactory = new Issue85Factory(description())
    const maybeId: string | undefined = undefined
    expect(factory.logon(maybeId, true).Username).toEqual('desk-7')
  })
})

describe('public surface', () => {
  /**
   * Every type named in the emitted .d.ts of a root export has to be reachable
   * from the root as well.  One that is not forces the consumer behind a
   * jspurefix/dist/... path - the shape of issue #85.  Nine of these were open
   * when #85 was fixed; keeping the count at zero is what stops the next one.
   */
  test('no type in a public signature is unreachable from the package root', () => {
    const program = ts.createProgram([ROOT], {
      target: ts.ScriptTarget.ES2019,
      module: ts.ModuleKind.CommonJS,
      experimentalDecorators: true,
      strictNullChecks: true,
      noEmit: true,
      skipLibCheck: true
    })
    const checker = program.getTypeChecker()
    const barrel = program.getSourceFile(ROOT)
    expect(barrel).toBeTruthy()
    const exported = checker.getExportsOfModule(checker.getSymbolAtLocation(barrel!)!)
    const reachable = new Set<ts.Declaration>()
    for (const s of exported) {
      const target = (s.flags & ts.SymbolFlags.Alias) !== 0 ? checker.getAliasedSymbol(s) : s
      for (const d of target.declarations ?? []) reachable.add(d)
    }

    const unreachable = new Set<string>()
    const inspect = (node: ts.Node, owner: string): void => {
      const walk = (n: ts.Node): void => {
        if (ts.isTypeReferenceNode(n) || ts.isExpressionWithTypeArguments(n)) {
          const name = ts.isTypeReferenceNode(n) ? n.typeName : n.expression
          const sym = checker.getSymbolAtLocation(name)
          if (sym) {
            const target = (sym.flags & ts.SymbolFlags.Alias) !== 0 ? checker.getAliasedSymbol(sym) : sym
            const decls = target.declarations ?? []
            const ours = decls.length > 0 && decls.every(d => d.getSourceFile().fileName.startsWith(SRC))
            const named = decls.some(d => reachable.has(d))
            if (ours && !named && (target.flags & ts.SymbolFlags.TypeParameter) === 0) {
              unreachable.add(`${target.getName()} (${decls[0].getSourceFile().fileName.slice(SRC.length)}) via ${owner}`)
            }
          }
        }
        ts.forEachChild(n, walk)
      }
      walk(node)
    }
    // only the type positions that survive into the emitted .d.ts - what is written
    // inside a method body never reaches a consumer
    const signatureTypes = (m: ts.SignatureDeclarationBase | ts.PropertyDeclaration | ts.PropertySignature): ts.TypeNode[] => {
      const out: ts.TypeNode[] = []
      if (m.type) out.push(m.type)
      const params = (m as ts.SignatureDeclarationBase).parameters ?? []
      for (const p of params) if (p.type) out.push(p.type)
      return out
    }
    const isVisible = (n: ts.Node): boolean => {
      const mods = ts.getCombinedModifierFlags(n as ts.Declaration)
      return (mods & ts.ModifierFlags.Private) === 0 && (mods & ts.ModifierFlags.Protected) === 0
    }

    for (const s of exported) {
      const target = (s.flags & ts.SymbolFlags.Alias) !== 0 ? checker.getAliasedSymbol(s) : s
      for (const d of target.declarations ?? []) {
        if (ts.isClassDeclaration(d) || ts.isInterfaceDeclaration(d)) {
          for (const m of d.members) {
            if (!isVisible(m)) continue
            const label = `${s.getName()}.${m.name ? m.name.getText() : 'constructor'}`
            for (const tn of signatureTypes(m as any)) inspect(tn, label)
          }
          for (const h of d.heritageClauses ?? []) inspect(h, `${s.getName()} (extends/implements)`)
        } else if (ts.isTypeAliasDeclaration(d)) {
          inspect(d.type, s.getName())
        } else if (ts.isFunctionDeclaration(d)) {
          for (const tn of signatureTypes(d)) inspect(tn, s.getName())
        } else if (ts.isVariableDeclaration(d) && d.type) {
          inspect(d.type, s.getName())
        }
      }
    }

    expect([...unreachable].sort()).toEqual([])
  }, 120000)

  /**
   * The http entities import express at module scope.  Naming them in the root
   * barrel would drag express into every consumer that only wanted a tcp
   * session, undoing the work that made it an optional dependency.
   */
  test('requiring the root barrel does not pull in the optional http dependencies', () => {
    jest.isolateModules(() => {
      require('../../index')
    })
    const sep = path.sep
    const eager = ['express', 'body-parser'].filter(d =>
      Object.keys(require.cache).some(k => k.includes(`node_modules${sep}${d}${sep}`)))
    expect(eager).toEqual([])
  })
})
