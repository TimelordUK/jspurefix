import { IFixSessionStore } from './fix-session-store'
import { SessionId } from './session-id'
import { MemorySessionStore } from './memory-session-store'

/**
 * Factory for creating session stores.
 */
export interface IFixSessionStoreFactory {
  create (sessionId: SessionId): IFixSessionStore
}

/**
 * Factory for creating in-memory session stores.
 */
export class MemorySessionStoreFactory implements IFixSessionStoreFactory {
  create (sessionId: SessionId): IFixSessionStore {
    return new MemorySessionStore(sessionId)
  }
}
