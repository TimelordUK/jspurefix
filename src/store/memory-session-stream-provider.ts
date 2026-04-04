import { ISessionStreamProvider } from './session-stream-provider'

/**
 * In-memory implementation of ISessionStreamProvider for testing.
 * Stores all data in buffers and strings for inspection.
 */
export class MemorySessionStreamProvider implements ISessionStreamProvider {
  private bodyBuffer: Buffer = Buffer.alloc(0)
  private headerLines: string[] = []
  private seqNumsContent: string | null = null
  private sessionTimeContent: string | null = null

  // Inspection methods for tests

  getBodyBytes (): Buffer {
    return Buffer.from(this.bodyBuffer)
  }

  getBodyString (): string {
    return this.bodyBuffer.toString('utf8')
  }

  getHeaderString (): string {
    return this.headerLines.join('\n')
  }

  getHeaderLinesSnapshot (): string[] {
    return [...this.headerLines]
  }

  getSeqNumsContent (): string | null {
    return this.seqNumsContent
  }

  getSessionTimeContent (): string | null {
    return this.sessionTimeContent
  }

  // ISessionStreamProvider implementation

  openBody (): void {
    // No-op for memory provider, body is always available
  }

  async appendBody (data: Buffer): Promise<number> {
    const offset = this.bodyBuffer.length
    this.bodyBuffer = Buffer.concat([this.bodyBuffer, data])
    return offset
  }

  async readBody (offset: number, length: number): Promise<Buffer> {
    return this.bodyBuffer.subarray(offset, offset + length)
  }

  getBodySize (): number {
    return this.bodyBuffer.length
  }

  async appendHeaderLine (line: string): Promise<void> {
    this.headerLines.push(line)
  }

  async readHeaderLines (): Promise<string[]> {
    return [...this.headerLines]
  }

  async readSeqNums (): Promise<string | null> {
    return this.seqNumsContent
  }

  async writeSeqNums (content: string): Promise<void> {
    this.seqNumsContent = content
  }

  async readSessionTime (): Promise<string | null> {
    return this.sessionTimeContent
  }

  async writeSessionTime (content: string): Promise<void> {
    this.sessionTimeContent = content
  }

  async reset (): Promise<void> {
    this.bodyBuffer = Buffer.alloc(0)
    this.headerLines = []
    this.seqNumsContent = null
    this.sessionTimeContent = null
  }

  async flush (): Promise<void> {
    // No-op for memory provider
  }

  async dispose (): Promise<void> {
    // No-op for memory provider
  }
}
