/**
 * Provides stream access for session store operations.
 * Allows abstraction of file I/O for testing with in-memory buffers.
 */
export interface ISessionStreamProvider {
  /**
   * Opens or creates a read-write buffer for the message body file.
   * Must support random-access reads (by offset+length).
   */
  openBody (): void

  /**
   * Appends data to the body. Returns the offset at which data was written.
   */
  appendBody (data: Buffer): Promise<number>

  /**
   * Reads data from the body at the given offset and length.
   */
  readBody (offset: number, length: number): Promise<Buffer>

  /**
   * Gets the current body size (for calculating offsets).
   */
  getBodySize (): number

  /**
   * Appends a line to the header index file.
   */
  appendHeaderLine (line: string): Promise<void>

  /**
   * Reads all lines from the header index file.
   * Returns empty array if no data exists.
   */
  readHeaderLines (): Promise<string[]>

  /**
   * Reads the sequence numbers string.
   * Returns null if no data exists.
   */
  readSeqNums (): Promise<string | null>

  /**
   * Writes the sequence numbers string.
   */
  writeSeqNums (content: string): Promise<void>

  /**
   * Reads the session time string.
   * Returns null if no data exists.
   */
  readSessionTime (): Promise<string | null>

  /**
   * Writes the session time string.
   */
  writeSessionTime (content: string): Promise<void>

  /**
   * Resets all streams/files for a new session.
   */
  reset (): Promise<void>

  /**
   * Flushes any pending writes.
   */
  flush (): Promise<void>

  /**
   * Disposes of all resources.
   */
  dispose (): Promise<void>
}
