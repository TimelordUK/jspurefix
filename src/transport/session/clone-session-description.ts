import { IDynamicSessionParams, ISessionDescription } from './session-description'

/**
 * A session description with the readonly modifiers stripped.  The description is
 * immutable by design - it is loaded once from JSON and shared by everything in the
 * session - but an acceptor running in wildcard mode has to write the peer's
 * SenderCompID into its own copy once the Logon arrives.  Cast through this type so
 * the (deliberately rare) mutation is explicit at every call site.
 */
export type MutableSessionDescription = {
  -readonly [K in keyof ISessionDescription]: ISessionDescription[K]
}

/**
 * Shallow clone a session description, optionally overriding identity fields.
 *
 * Each connection accepted by a FIX acceptor needs its own description: the
 * SessionId (and therefore the message store), the outbound header comp ids and the
 * session registry key are all derived from it.  Sharing one description across
 * concurrent sessions makes every client collide on the same store.
 *
 * `application` and `store` are shared by reference - they are read only
 * configuration (host, port, dictionary, store directory) common to every session
 * on the listener.
 */
export function cloneSessionDescription (
  description: ISessionDescription,
  overrides?: Partial<IDynamicSessionParams>): ISessionDescription {
  return {
    ...description,
    ...(overrides ?? {})
  }
}

/**
 * Make a description writable.  Use only where the FIX protocol itself forces a
 * late binding - i.e. wildcard TargetCompID resolved from the peer's Logon.
 */
export function asMutable (description: ISessionDescription): MutableSessionDescription {
  return description
}
