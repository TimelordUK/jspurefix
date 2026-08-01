#!/usr/bin/env node
/*
 * Build jspurefix and pack it into a tarball that a consumer (jspf-demo, an
 * application repo) can install directly, without publishing to npm.
 *
 * Why a tarball rather than `npm link`:
 *   - a symlinked dependency resolves its own copy of reflect-metadata and
 *     tsyringe.  Two copies means two decorator metadata registries, and tsyringe
 *     silently fails to resolve anything registered through the other one.
 *   - the tarball is exactly what `npm publish` would upload, so packaging
 *     mistakes (a file missing from "files", a stale dist) surface here rather
 *     than in a release.
 *
 * Usage:
 *   npm run pack:local            -> ../.local-packages/jspurefix-<version>.tgz
 *                                    plus a stable ../.local-packages/jspurefix-local.tgz
 *   npm run pack:local -- --out D:\somewhere
 */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

/**
 * npm is a .cmd shim on windows, which node refuses to execFile directly, so go
 * through the shell.  One command string rather than an argv array - passing args
 * alongside shell:true is deprecated because they are concatenated unescaped.
 */
function npmRun (command, stdio) {
  // npm pack lists every file it adds - over 1MB of notices, well past the default
  // maxBuffer - so give it room and keep stderr off the pipe
  return execSync(`npm ${command}`, {
    cwd: repoRoot,
    stdio,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024
  })
}

const repoRoot = path.resolve(__dirname, '..')
const pkg = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'))

function arg (name, fallback) {
  const i = process.argv.indexOf(name)
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const outDir = path.resolve(arg('--out', path.join(repoRoot, '..', '.local-packages')))
fs.mkdirSync(outDir, { recursive: true })

console.log(`building ${pkg.name}@${pkg.version} ...`)
npmRun('run build', 'inherit')

console.log(`packing into ${outDir} ...`)
const packed = npmRun(`pack --pack-destination "${outDir}"`, ['ignore', 'pipe', 'ignore'])
  .trim().split(/\r?\n/).pop()

const tarball = path.join(outDir, packed)
// a stable name so consumers do not have to chase the version number
const stable = path.join(outDir, `${pkg.name}-local.tgz`)
fs.copyFileSync(tarball, stable)

const sizeMb = (fs.statSync(tarball).size / (1024 * 1024)).toFixed(1)
console.log('')
console.log(`  ${tarball}  (${sizeMb} MB)`)
console.log(`  ${stable}   (stable alias)`)
console.log('')
console.log('install it in a consumer with:')
console.log(`  npm install "${stable}"`)
