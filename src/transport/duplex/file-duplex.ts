import { FixDuplex } from './fix-duplex'
import { ReadStream } from 'fs'

export class FileDuplex extends FixDuplex {
  constructor (public readonly fileName: string) {
    super(FileDuplex.makeReadable(fileName), null)
  }

  private static makeReadable (fileName: string): ReadStream {
    const fs: any = require('fs')
    return fs.createReadStream(fileName)
  }

  end (): void {
    // do nothing
  }
}
