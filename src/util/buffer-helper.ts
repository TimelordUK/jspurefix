import { promisify } from 'util'
import * as fs from 'fs'

export async function getWords (path: string): Promise<string[]> {
  const readFile: (s: string) => Promise<Buffer> = promisify(fs.readFile)
  const res: Buffer = await readFile(path)
  return res.toString().split(' ').map((w: string) => w.trim())
}
