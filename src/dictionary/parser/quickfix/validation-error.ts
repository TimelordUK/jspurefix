export enum ValidationSeverity {
  Warning = 'Warning',
  Error = 'Error'
}

export interface ValidationError {
  readonly severity: ValidationSeverity
  readonly code: string
  readonly message: string
  readonly elementName?: string
  readonly elementType?: string
  readonly lineNumber?: number
  readonly suggestion?: string
}

export class DictionaryValidationException extends Error {
  constructor (public readonly errors: ReadonlyArray<ValidationError>) {
    const errorCount = errors.filter(e => e.severity === ValidationSeverity.Error).length
    const warningCount = errors.filter(e => e.severity === ValidationSeverity.Warning).length
    const header = `FIX dictionary validation failed with ${errorCount} error(s) and ${warningCount} warning(s):`
    const details = errors
      .filter(e => e.severity === ValidationSeverity.Error)
      .slice(0, 20)
      .map(e => {
        let line = `  [${e.code}] ${e.message}`
        if (e.lineNumber != null) line += ` (line ${e.lineNumber})`
        if (e.suggestion) line += ` — ${e.suggestion}`
        return line
      })
      .join('\n')
    super(`${header}\n${details}`)
    this.name = 'DictionaryValidationException'
  }
}
