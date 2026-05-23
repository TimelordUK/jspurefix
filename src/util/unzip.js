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

const zipFilePath = process.argv[2]
if (!zipFilePath) {
  console.error('usage: node unzip.js path/to/file.zip')
  process.exit(1)
}

function openZip (zipFilePath) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipFilePath, { lazyEntries: true }, (err, zf) => {
      if (err) reject(err)
      else resolve(zf)
    })
  })
}

function openEntryStream (zipfile, entry) {
  return new Promise((resolve, reject) => {
    zipfile.openReadStream(entry, (err, rs) => {
      if (err) reject(err)
      else resolve(rs)
    })
  })
}

async function extract (zipFilePath) {
  const zipfile = await openZip(zipFilePath)

  // `end` and `error` fire at most once for the lifetime of the zipfile —
  // register them once and reuse, otherwise per-iteration `once()` listeners
  // accumulate and trip MaxListenersExceededWarning.
  let lifecycleError = null
  let ended = false
  zipfile.on('error', (err) => { lifecycleError = err })
  zipfile.on('end', () => { ended = true })

  try {
    while (!ended && !lifecycleError) {
      const entry = await new Promise((resolve, reject) => {
        const onEntry = (e) => { cleanup(); resolve(e) }
        const onEnd = () => { cleanup(); resolve(null) }
        const onError = (err) => { cleanup(); reject(err) }
        function cleanup () {
          zipfile.off('entry', onEntry)
          zipfile.off('end', onEnd)
          zipfile.off('error', onError)
        }
        zipfile.once('entry', onEntry)
        zipfile.once('end', onEnd)
        zipfile.once('error', onError)
        zipfile.readEntry()
      })
      if (entry == null) break

      if (/\/$/.test(entry.fileName)) {
        await fs.promises.mkdir(entry.fileName, { recursive: true })
        continue
      }

      await fs.promises.mkdir(path.dirname(entry.fileName), { recursive: true })
      const readStream = await openEntryStream(zipfile, entry)
      await pipeline(readStream, fs.createWriteStream(entry.fileName))
      console.log(`${entry.fileName} (${entry.uncompressedSize} bytes)`)
    }
    if (lifecycleError) throw lifecycleError
  } finally {
    zipfile.close()
  }
}

extract(zipFilePath).catch((err) => {
  console.error(`unzip failed: ${err.message}`)
  process.exit(1)
})
