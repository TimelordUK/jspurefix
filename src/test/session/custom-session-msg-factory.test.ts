import 'reflect-metadata'

import { Setup } from '../env/setup'
import { makeSessionScope } from '../../runtime/session-scope'
import { AsciiSessionMsgFactory } from '../../transport/ascii/ascii-session-msg-factory'
import { ASessionMsgFactory, ObjectMutator } from '../../transport/session/a-session-msg-factory'
import { ISessionDescription } from '../../transport/session/session-description'
import { ISessionMsgFactory } from '../../transport/session/session-msg-factory'
import { ILooseObject } from '../../collections/collection'
import { IStandardHeader } from '../../types/FIX4.4/repo'
import { DITokens } from '../../runtime/di-tokens'

/**
 * https://github.com/TimelordUK/jspurefix/issues/87
 *
 * An application supplies its own session message factory by overriding
 * SessionContainer.makeSessionFactory - typically to stamp extra header fields a
 * counterparty demands.  An acceptor builds a factory per accepted connection so
 * each session's headers carry its own comp ids; that must preserve the
 * application's factory rather than substituting the stock one, otherwise custom
 * header handling silently disappears on the acceptor path.
 */

let setup: Setup

beforeAll(async () => {
  setup = new Setup()
  await setup.init()
}, 45000)

/** the shape an application typically writes - extend the ascii factory */
class BrokerSessionMsgFactory extends AsciiSessionMsgFactory {
  public header (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    const h = super.header(msgType, seqNum, time, overrideData)
    h.OnBehalfOfCompID = 'broker-desk'
    return h
  }
}

/** a factory whose constructor does not take (description, mutator) */
class UnusualFactory extends ASessionMsgFactory {
  constructor (description: ISessionDescription, public readonly tag: string) {
    super(description, null)
  }

  public override cloneFor (description: ISessionDescription): ISessionMsgFactory {
    return new UnusualFactory(description, this.tag)
  }

  public logon (): ILooseObject { return {} }
  public logout (_msgType: string, _text: string): ILooseObject { return {} }
  public header (_msgType: string, _seqNum: number, _time: Date): ILooseObject {
    return { SenderCompID: this.description.SenderCompId, TargetCompID: this.description.TargetCompID }
  }
}

describe('custom session message factory', () => {
  test('survives into a per-connection session scope', () => {
    const config = { ...setup.serverConfig } as any
    config.factory = new BrokerSessionMsgFactory(setup.serverConfig.description)

    const scope = makeSessionScope(config, { TargetCompID: 'client-one' })

    expect(scope.factory).toBeInstanceOf(BrokerSessionMsgFactory)
    const header = scope.factory?.header('A', 1, new Date()) as any
    // the application's own field is still stamped ...
    expect(header.OnBehalfOfCompID).toBe('broker-desk')
    // ... and the header carries this session's target, not the listener's
    expect(header.TargetCompID).toBe('client-one')
  })

  test('the scope registers the cloned factory, so the transmitter resolves it', () => {
    const config = { ...setup.serverConfig } as any
    config.factory = new BrokerSessionMsgFactory(setup.serverConfig.description)

    const scope = makeSessionScope(config, { TargetCompID: 'client-two' })
    const registered = scope.sessionContainer.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)

    expect(registered).toBe(scope.factory)
    expect(registered).toBeInstanceOf(BrokerSessionMsgFactory)
    expect(registered).not.toBe(config.factory)
  })

  test('a mutator set on the application factory is carried across', () => {
    const mutator: ObjectMutator = (_d, _t, o) => ({ ...o, Account: 'desk-7' })
    const config = { ...setup.serverConfig } as any
    config.factory = new AsciiSessionMsgFactory(setup.serverConfig.description, mutator)

    const scope = makeSessionScope(config, { TargetCompID: 'client-three' })
    const header = scope.factory?.header('A', 1, new Date()) as any

    expect(header.Account).toBe('desk-7')
  })

  test('a factory with its own constructor shape controls its own cloning', () => {
    const config = { ...setup.serverConfig } as any
    config.factory = new UnusualFactory(setup.serverConfig.description, 'marker')

    const scope = makeSessionScope(config, { TargetCompID: 'client-four' })

    expect(scope.factory).toBeInstanceOf(UnusualFactory)
    expect((scope.factory as UnusualFactory).tag).toBe('marker')
    expect((scope.factory?.header('A', 1, new Date()) as any).TargetCompID).toBe('client-four')
  })

  test('falls back to the stock factory when none is configured', () => {
    const config = { ...setup.serverConfig } as any
    config.factory = null

    const scope = makeSessionScope(config, { TargetCompID: 'client-five' })

    expect(scope.factory).toBeInstanceOf(AsciiSessionMsgFactory)
    expect((scope.factory?.header('A', 1, new Date()) as any).TargetCompID).toBe('client-five')
  })
})
