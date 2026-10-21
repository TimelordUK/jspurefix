import * as crypto from 'crypto'
import * as _ from 'lodash'

// eCryptfs, behind encrypted home directories on Linux and encrypted shares on Synology, rejects
// a file name longer than this, so a package shipping one cannot be installed there
const MAX_FILE_NAME_LENGTH = 143
// the longest extension the build could add to a generated name: .js.map today, and .d.ts.map
// should declaration maps ever be switched on
const LONGEST_BUILD_EXTENSION = '.d.ts.map'
const MAX_STEM_LENGTH = MAX_FILE_NAME_LENGTH - LONGEST_BUILD_EXTENSION.length
const HASH_LENGTH = 8

/**
 * The file name, without extension, a generated type is written to and imported from.
 *
 * It is the snake_case form of the name. Nested groups are qualified by every component above
 * them, so a name can run past what a file system accepts; one that would is cut short and ends
 * in a hash of the full name, so two long names sharing a start still get different files.
 * Names that fit are returned exactly as before.
 */
export function typeFileName (name: string): string {
  const snake = _.snakeCase(name)
  if (snake.length <= MAX_STEM_LENGTH) {
    return snake
  }
  const hash = crypto.createHash('sha256').update(name).digest('hex').slice(0, HASH_LENGTH)
  const start = snake.slice(0, MAX_STEM_LENGTH - HASH_LENGTH - 1).replace(/_+$/, '')
  return `${start}_${hash}`
}
