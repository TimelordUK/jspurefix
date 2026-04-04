import * as path from 'path'

/**
 * Identifies a FIX session for file naming and lookup.
 * Format: {BeginString}-{SenderCompID}-{TargetCompID}
 */
export class SessionId {
  constructor (
    public readonly beginString: string,
    public readonly senderCompID: string,
    public readonly targetCompID: string
  ) {}

  /**
   * Creates a file prefix for QuickFix-compatible file naming.
   * Example: "FIX.4.4-SENDER-TARGET"
   */
  toFilePrefix (): string {
    return `${this.beginString}-${this.senderCompID}-${this.targetCompID}`
  }

  /**
   * Gets the full path for a specific file extension.
   */
  getFilePath (directory: string, extension: string): string {
    return path.join(directory, `${this.toFilePrefix()}.${extension}`)
  }

  toString (): string {
    return this.toFilePrefix()
  }
}
