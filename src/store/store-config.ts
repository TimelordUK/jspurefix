/**
 * Configuration for session message store.
 * Add to session description JSON to enable persistent storage.
 *
 * Examples:
 *   "store": { "type": "memory" }           — explicit in-memory (default)
 *   "store": { "type": "file" }             — file store in ./store directory
 *   "store": { "type": "file", "directory": "/var/fix/sessions" }
 *
 * Omitting the store block entirely uses in-memory storage.
 */
export interface StoreConfig {
  readonly type: 'memory' | 'file'
  readonly directory?: string
  readonly resendGapFillOnly?: boolean
}
