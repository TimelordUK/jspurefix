import * as fs from 'fs'
import { ISessionStreamProvider } from './session-stream-provider'
import { SessionId } from './session-id'

/**
 * File-based implementation of ISessionStreamProvider.
 * Creates QuickFix-compatible files in the specified directory.
 *
 * Files created:
 * - {prefix}.body   — concatenated raw FIX messages
 * - {prefix}.header — index lines: "seqnum,offset,length"
 * - {prefix}.seqnums — sender/target sequence numbers
 * - {prefix}.session — session creation time
 */
export class FileSessionStreamProvider implements ISessionStreamProvider {
  private readonly bodyPath: string
  private readonly headerPath: string
  private readonly seqNumsPath: string
  private readonly sessionPath: string
  private bodyFd: number | null = null
  private bodySize: number = 0

  constructor (
    sessionId: SessionId,
    directory: string
  ) {
    fs.mkdirSync(directory, { recursive: true })
    this.bodyPath = sessionId.getFilePath(directory, 'body')
    this.headerPath = sessionId.getFilePath(directory, 'header')
    this.seqNumsPath = sessionId.getFilePath(directory, 'seqnums')
    this.sessionPath = sessionId.getFilePath(directory, 'session')
  }

  openBody (): void {
    if (this.bodyFd !== null) return
    this.bodyFd = fs.openSync(this.bodyPath, 'a+')
    const stat = fs.fstatSync(this.bodyFd)
    this.bodySize = stat.size
  }

  async appendBody (data: Buffer): Promise<number> {
    if (this.bodyFd === null) {
      this.openBody()
    }
    const offset = this.bodySize
    fs.writeSync(this.bodyFd!, data, 0, data.length, offset)
    this.bodySize += data.length
    return offset
  }

  async readBody (offset: number, length: number): Promise<Buffer> {
    if (this.bodyFd === null) {
      this.openBody()
    }
    const buf = Buffer.alloc(length)
    fs.readSync(this.bodyFd!, buf, 0, length, offset)
    return buf
  }

  getBodySize (): number {
    return this.bodySize
  }

  async appendHeaderLine (line: string): Promise<void> {
    await fs.promises.appendFile(this.headerPath, line + '\n', 'utf8')
  }

  async readHeaderLines (): Promise<string[]> {
    if (!fs.existsSync(this.headerPath)) return []
    const content = await fs.promises.readFile(this.headerPath, 'utf8')
    if (!content.trim()) return []
    return content.split('\n').filter(l => l.trim().length > 0)
  }

  async readSeqNums (): Promise<string | null> {
    if (!fs.existsSync(this.seqNumsPath)) return null
    return await fs.promises.readFile(this.seqNumsPath, 'utf8')
  }

  async writeSeqNums (content: string): Promise<void> {
    await fs.promises.writeFile(this.seqNumsPath, content, 'utf8')
  }

  async readSessionTime (): Promise<string | null> {
    if (!fs.existsSync(this.sessionPath)) return null
    return await fs.promises.readFile(this.sessionPath, 'utf8')
  }

  async writeSessionTime (content: string): Promise<void> {
    await fs.promises.writeFile(this.sessionPath, content, 'utf8')
  }

  async reset (): Promise<void> {
    if (this.bodyFd !== null) {
      fs.closeSync(this.bodyFd)
      this.bodyFd = null
    }
    this.bodySize = 0
    this.deleteIfExists(this.bodyPath)
    this.deleteIfExists(this.headerPath)
    this.deleteIfExists(this.seqNumsPath)
    this.deleteIfExists(this.sessionPath)
  }

  async flush (): Promise<void> {
    if (this.bodyFd !== null) {
      fs.fsyncSync(this.bodyFd)
    }
  }

  async dispose (): Promise<void> {
    if (this.bodyFd !== null) {
      fs.closeSync(this.bodyFd)
      this.bodyFd = null
    }
  }

  private deleteIfExists (filePath: string): void {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }
  }
}
