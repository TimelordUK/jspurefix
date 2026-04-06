import { IFixSessionStore } from './fix-session-store'
import { SessionId } from './session-id'
import { MemorySessionStore } from './memory-session-store'
import { FileSessionStore } from './file-session-store'

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

/**
 * Factory for creating file-based session stores.
 */
export class FileSessionStoreFactory implements IFixSessionStoreFactory {
  constructor (private readonly directory: string) {}

  create (sessionId: SessionId): IFixSessionStore {
    return FileSessionStore.createWithFiles(sessionId, this.directory)
  }
}
