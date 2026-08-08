import 'reflect-metadata'

import { EncoderTest } from '../env/encoder-test'
import { AsciiSessionMsgFactory } from '../../transport/ascii/ascii-session-msg-factory'
import { ISessionDescription } from '../../transport/session/session-description'
import { ISessionMsgFactory } from '../../transport/session/session-msg-factory'
import { SessionContainer } from '../../runtime/session-container'
import { SessionLauncher } from '../../runtime/session-launcher'
import { DITokens } from '../../runtime/di-tokens'
import { ILooseObject } from '../../collections/collection'
import { MessageDefinition } from '../../dictionary/definition'

/**
 * https://github.com/TimelordUK/jspurefix/issues/93
 *
 * A counterparty routinely demands a Logon carrying a tag the standard message does
 * not - an account, a default application version, a free text token.  Naming it
 * under "Logon" in the session description is the no-code way to send it; a field the
 * dictionary does not declare on Logon is still dropped, but now says so.
 */

let encoderTest: EncoderTest
let logonDef: MessageDefinition

beforeAll(async () => {
  encoderTest = new EncoderTest()
  await encoderTest.init('session/test-initiator.json')
  logonDef = encoderTest.definitions.message.get('Logon')!
  expect(logonDef).toBeTruthy()
}, 45000)

function describedAs (logon?: ILooseObject): ISessionDescription {
  return { ...encoderTest.setup.clientConfig.description, Logon: logon }
}

describe('a Logon block in the session description', () => {
  test('its fields land on the logon object alongside the derived ones', () => {
    const factory = new AsciiSessionMsgFactory(describedAs({ MaxMessageSize: 4096 }))
    const lo = factory.logon()

    expect(lo.MaxMessageSize).toEqual(4096)
    // ... without displacing what the engine derives from the description
    expect(lo.Username).toEqual('js-client')
    expect(lo.HeartBtInt).toEqual(30)
  })

  test('a field the dictionary declares on Logon reaches the wire', () => {
    const factory = new AsciiSessionMsgFactory(describedAs({ MaxMessageSize: 4096 }))
    const fix = encoderTest.toFixMessage(factory.logon(), logonDef)

    expect(fix).toContain('383=4096')
  })

  test('it overrides a value the engine derived', () => {
    const factory = new AsciiSessionMsgFactory(describedAs({ Username: 'desk-7' }))

    expect(factory.logon().Username).toEqual('desk-7')
  })

  test('a null suppresses a field the engine would otherwise send', () => {
    const factory = new AsciiSessionMsgFactory(describedAs({ Username: null }))
    const fix = encoderTest.toFixMessage(factory.logon(), logonDef)

    expect(fix).not.toContain('553=')
    expect(fix).toContain('554=pwd-client')
  })

  test('absent, the logon is exactly what it always was', () => {
    const factory = new AsciiSessionMsgFactory(describedAs(undefined))
    const lo = factory.logon()

    expect(Object.keys(lo).sort()).toEqual(
      ['EncryptMethod', 'HeartBtInt', 'Password', 'ResetSeqNumFlag', 'Username'])
  })
})

describe('a field the dictionary does not declare', () => {
  test('is dropped - and reported, rather than vanishing in silence', () => {
    const transmitter = encoderTest.session
    const reported: string[] = []
    transmitter.on('unknown-field', (field: string, set: string) => {
      reported.push(`${set}.${field}`)
    })

    // Account is tag 1, and no field of Logon in FIX 4.4 - exactly the case in #93
    const factory = new AsciiSessionMsgFactory(describedAs({ Account: 'TVKD_001' }))
    const fix = encoderTest.toFixMessage(factory.logon(), logonDef)

    expect(fix).not.toContain('TVKD_001')
    expect(reported).toContain('Logon.Account')
  })

  test('is reported once, not on every message', () => {
    const transmitter = encoderTest.session
    const reported: string[] = []
    transmitter.on('unknown-field', (field: string, set: string) => {
      reported.push(`${set}.${field}`)
    })

    const factory = new AsciiSessionMsgFactory(describedAs({ Nonsense: 'x' }))
    encoderTest.toFixMessage(factory.logon(), logonDef)
    encoderTest.toFixMessage(factory.logon(), logonDef)

    expect(reported.filter(r => r === 'Logon.Nonsense')).toHaveLength(1)
  })
})

/** an application whose logon values are computed, so a block of constants will not do */
class TokenSessionMsgFactory extends AsciiSessionMsgFactory {
  public logon (): ILooseObject {
    return { ...super.logon(), Password: `token-${this.description.SenderCompId}` }
  }
}

describe('supplying a factory without subclassing the container', () => {
  test('SessionContainer takes a provider', () => {
    const sc = new SessionContainer((d: ISessionDescription) => new TokenSessionMsgFactory(d))
    const child = sc.newChild(encoderTest.setup.clientConfig.description)
    const factory = child.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)

    expect(factory).toBeInstanceOf(TokenSessionMsgFactory)
    expect(factory.logon().Password).toEqual('token-init-comp')
  })

  test('a provider returning null keeps the stock factory', () => {
    const sc = new SessionContainer(() => null)
    const child = sc.newChild(encoderTest.setup.clientConfig.description)
    const factory = child.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)

    expect(factory).toBeInstanceOf(AsciiSessionMsgFactory)
    expect(factory).not.toBeInstanceOf(TokenSessionMsgFactory)
  })

  test('a launcher need only override makeSessionMsgFactory', () => {
    class AppLauncher extends SessionLauncher {
      constructor () {
        super(null, null)
      }

      protected override makeSessionMsgFactory (description: ISessionDescription): ISessionMsgFactory {
        return new TokenSessionMsgFactory(description)
      }

      public container (): SessionContainer {
        return this.sessionContainer
      }
    }

    const child = new AppLauncher().container().newChild(encoderTest.setup.clientConfig.description)
    const factory = child.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)

    expect(factory).toBeInstanceOf(TokenSessionMsgFactory)
  })
})
