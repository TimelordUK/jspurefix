import { DependencyContainer } from 'tsyringe'
import { IJsFixConfig, JsFixConfig } from '../config'
import { DITokens } from './di-tokens'
import { ElasticBuffer } from '../buffer/elastic-buffer'
import { ISessionDescription } from '../transport/session/session-description'
import { ISessionMsgFactory } from '../transport/session/session-msg-factory'
import { cloneSessionDescription } from '../transport/session/clone-session-description'
import { AsciiSessionMsgFactory } from '../transport/ascii/ascii-session-msg-factory'
import { FixmlSessionMsgFactory } from '../transport/fixml/fixml-session-msg-factory'

/**
 * A FIX acceptor serves many connections from one listener configuration.  Until
 * this existed every accepted connection shared the *same* parse buffer, transmit
 * buffer, session description and message factory, because those are registered as
 * instances on the single session container built at start up.  Two clients talking
 * to one acceptor would therefore interleave bytes in a shared ElasticBuffer and
 * compute the same SessionId - so the same message store file.
 *
 * A session scope is a tsyringe child container which re-registers exactly the
 * per-connection state.  Everything else (dictionary, transient parser/transmitter
 * classes, logger factory) is inherited from the parent, and resolving a parent
 * registration from the child still injects the child's instances, so an
 * AsciiParser resolved here receives this scope's ParseBuffer.
 *
 * Mirrors cspurefix TradeCaptureSessionFactory.CreatePerSessionConfigAndEncoder,
 * which had to do the same thing for the same reason.
 */
export function makeSessionScope (
  config: IJsFixConfig,
  overrides?: Partial<ISessionDescription>): IJsFixConfig {
  const parent: DependencyContainer = config.sessionContainer
  const scope = parent.createChildContainer()

  const description = cloneSessionDescription(config.description, overrides)
  const factory = makeSessionMsgFactory(description, config.factory)

  scope.registerInstance(DITokens.ISessionDescription, description)
  scope.registerInstance(DITokens.ISessionMsgFactory, factory)
  scope.registerInstance<ElasticBuffer>(DITokens.TransmitBuffer, cloneBuffer(parent, DITokens.TransmitBuffer))
  scope.registerInstance<ElasticBuffer>(DITokens.ParseBuffer, cloneBuffer(parent, DITokens.ParseBuffer))

  const scoped = new JsFixConfig(factory, config.definitions, description, config.delimiter, config.logFactory)
  scoped.logDelimiter = config.logDelimiter ?? scoped.logDelimiter
  scoped.sessionStoreFactory = config.sessionStoreFactory
  scoped.sessionContainer = scope
  scope.registerInstance(DITokens.IJsFixConfig, scoped)
  scope.registerInstance(DITokens.Definitions, config.definitions)

  return scoped
}

/**
 * A fresh buffer of the same capacity as the one the parent container holds, so the
 * sizing decisions made in SessionContainer.asAscii are honoured without repeating
 * them here.
 */
function cloneBuffer (parent: DependencyContainer, token: DITokens): ElasticBuffer {
  if (!parent.isRegistered(token, true)) {
    return new ElasticBuffer()
  }
  const existing = parent.resolve<ElasticBuffer>(token)
  return new ElasticBuffer(existing.size)
}

function makeSessionMsgFactory (
  description: ISessionDescription,
  current: ISessionMsgFactory | null): ISessionMsgFactory {
  const ascii = description.application?.protocol === 'ascii'
  const mutator = (current as any)?.mutator ?? null
  return ascii
    ? new AsciiSessionMsgFactory(description, mutator)
    : new FixmlSessionMsgFactory(description, mutator)
}
