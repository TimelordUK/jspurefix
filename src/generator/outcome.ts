import { ILooseObject } from '../collections/collection'

/**
 * What the engine did with a scattered message, stated more precisely than "the objects
 * differ".
 *
 * The distinction earns its place because the two failures found so far are not equally
 * serious, and an application can defend against only one of them:
 *
 *  - **loses fields** — the scattered parse is a strict subset of the canonical one.
 *    Data is missing, but nothing present is false.  An application checking for the
 *    fields it needs will notice.
 *  - **mis-attributes** — the scattered parse contains something the canonical one does
 *    not: a value moved into a component that never carried it, or a value changed.
 *    Nothing looks wrong, and no amount of care at the application catches it.
 *
 * Keeping them apart is also what lets a corpus entry record an expectation sharp enough
 * to be worth freezing.  "Differs" would pass for the wrong reason.
 */

export enum CaseOutcome {
  /** the scattered ordering parses to the same object - the engine handled it */
  RoundTrips = 'round-trips',
  /** parses, but with fields dropped; every value present is still correct */
  LosesFields = 'loses-fields',
  /** parses, and carries a value the message did not say - the dangerous one */
  MisAttributes = 'mis-attributes',
  /** refused outright, which for a legal ordering is a defect, but a loud one */
  Rejected = 'rejected'
}

export interface IOutcome {
  readonly outcome: CaseOutcome
  /** leaf paths the canonical parse has and the scattered one does not */
  readonly missing: string[]
  /** leaf paths the scattered parse has and the canonical one does not */
  readonly added: string[]
  /** leaf paths in both, disagreeing */
  readonly changed: string[]
}

/**
 * every leaf of an object as `path -> json`, so two parses can be compared without
 * caring how the tree is shaped
 */
export function leaves (o: any, path: string = '', into: Map<string, string> = new Map<string, string>()): Map<string, string> {
  if (o === null || o === undefined || typeof o !== 'object' || o instanceof Date || Buffer.isBuffer(o)) {
    into.set(path, JSON.stringify(o))
    return into
  }
  for (const key of Object.keys(o)) {
    leaves(o[key], `${path}.${key}`, into)
  }
  return into
}

export function classify (canonical: ILooseObject | null, scattered: ILooseObject | null): IOutcome {
  if (!scattered) {
    return { outcome: CaseOutcome.Rejected, missing: [], added: [], changed: [] }
  }
  const a = leaves(canonical)
  const b = leaves(scattered)
  const missing: string[] = []
  const added: string[] = []
  const changed: string[] = []
  for (const [k, v] of a) {
    const other = b.get(k)
    if (other === undefined) {
      missing.push(k)
    } else if (other !== v) {
      changed.push(k)
    }
  }
  for (const k of b.keys()) {
    if (!a.has(k)) added.push(k)
  }
  missing.sort()
  added.sort()
  changed.sort()
  if (missing.length === 0 && added.length === 0 && changed.length === 0) {
    return { outcome: CaseOutcome.RoundTrips, missing, added, changed }
  }
  if (added.length > 0 || changed.length > 0) {
    return { outcome: CaseOutcome.MisAttributes, missing, added, changed }
  }
  return { outcome: CaseOutcome.LosesFields, missing, added, changed }
}

export function describeOutcome (o: IOutcome): string {
  switch (o.outcome) {
    case CaseOutcome.RoundTrips:
      return 'round trips - the scattered ordering parses to the same object'
    case CaseOutcome.LosesFields:
      return `loses ${o.missing.length} field(s): ${o.missing.join(', ')}`
    case CaseOutcome.MisAttributes:
      return `mis-attributes ${o.added.length + o.changed.length} value(s): ${[...o.added, ...o.changed].join(', ')}`
    case CaseOutcome.Rejected:
      return 'rejected - the parser refused a legal ordering'
    default:
      return 'unknown'
  }
}
