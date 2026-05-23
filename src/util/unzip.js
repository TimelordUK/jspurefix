const yauzl = require('yauzl')
const path = require('path')
const fs = require('fs')
const { pipeline } = require('stream/promises')

// Extracts a zip file into the current working directory.
//
// Replaces an older copy of the yauzl example unzip script. The previous
// version drove a 60Hz progress interval via terminal backspaces and did
// not attach error handlers to any of the streams in its pipeline. In a
// non-TTY environment (eg. GitHub Actions) the backspaces produced
// unreadable output; worse, if any stream errored silently the script
// hung forever and CI runs were cancelled at the workflow timeout.
//
// Follows the canonical yauzl lazyEntries pattern: install 'entry' /
// 'end' / 'error' handlers once on the zipfile, drive the next read
// with zipfile.readEntry() at the end of each entry's work.
// NB: requires yauzl >= 3.3.1 — 3.3.0 truncates inflated streams on
// Node 26+ (the next entry's readStream stalls without emitting 'end').

const zipFilePath = process.argv[2]
if (!zipFilePath) {
  console.error('usage: node unzip.js path/to/file.zip')
  process.exit(1)
}

function extract (zipFilePath) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipFilePath, { lazyEntries: true }, (err, zipfile) => {
      if (err) {
        reject(err)
        return
      }

      zipfile.on('error', reject)
      zipfile.on('end', resolve)

      zipfile.on('entry', (entry) => {
        const next = () => zipfile.readEntry()

        if (/\/$/.test(entry.fileName)) {
          fs.promises.mkdir(entry.fileName, { recursive: true })
            .then(next, reject)
          return
        }

        fs.promises.mkdir(path.dirname(entry.fileName), { recursive: true })
          .then(() => new Promise((res, rej) => {
            zipfile.openReadStream(entry, (err, readStream) => {
              if (err) {
                rej(err)
                return
              }
              pipeline(readStream, fs.createWriteStream(entry.fileName))
                .then(() => {
                  console.log(`${entry.fileName} (${entry.uncompressedSize} bytes)`)
                  res()
                }, rej)
            })
          }))
          .then(next, reject)
      })

      zipfile.readEntry()
    })
  })
}

extract(zipFilePath).catch((err) => {
  console.error(`unzip failed: ${err.message}`)
  process.exit(1)
})
