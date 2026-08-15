import 'reflect-metadata'

import { describeConnectError, withConnectReason } from '../../transport/tcp/connect-error'

/**
 * What an application is told when a connection fails.
 *
 * Node raises an AggregateError when the host resolved to several addresses and every
 * attempt failed - the ordinary case, since 'localhost' is both ::1 and 127.0.0.1.  Its
 * own message is empty and the detail is in errors[], so an initiator that reported
 * e.message gave the caller an Error with nothing in it for the commonest failure
 * there is: nobody listening on the other end.
 */

/**
 * Reached through globalThis rather than named directly: AggregateError is ES2021 and
 * this project compiles against an older lib, but it exists at run time on every node
 * the engine supports.  So these are real AggregateErrors, not a hand made shape that
 * might drift from what node actually raises.
 */
const AggregateErrorCtor: new (errors: Error[]) => Error = (globalThis as any).AggregateError

function aggregate (messages: string[], code?: string): Error {
  const e: any = new AggregateErrorCtor(messages.map(m => new Error(m)))
  if (code) e.code = code
  return e as Error
}

/** what net.createConnection actually raises for a refused dual stack host */
function refusedAggregate (): Error {
  return aggregate([
    'connect ECONNREFUSED ::1:2349',
    'connect ECONNREFUSED 127.0.0.1:2349'
  ], 'ECONNREFUSED')
}

describe('describing a connect failure', () => {
  test('a plain error keeps its own message', () => {
    expect(describeConnectError(new Error('connect ETIMEDOUT 10.0.0.1:443')))
      .toBe('connect ETIMEDOUT 10.0.0.1:443')
  })

  test('an aggregate reports what each address said', () => {
    expect(describeConnectError(refusedAggregate()))
      .toBe('connect ECONNREFUSED ::1:2349; connect ECONNREFUSED 127.0.0.1:2349')
  })

  test('addresses failing the same way are not repeated', () => {
    const e = aggregate([
      'connect ECONNREFUSED 127.0.0.1:2349',
      'connect ECONNREFUSED 127.0.0.1:2349'
    ])
    expect(describeConnectError(e)).toBe('connect ECONNREFUSED 127.0.0.1:2349')
  })

  test('falls back to the code when nothing carries a message', () => {
    const e: any = new Error('')
    e.code = 'ENOTFOUND'
    expect(describeConnectError(e as Error)).toBe('ENOTFOUND')
  })

  test('an aggregate of empty errors still falls back to its own code', () => {
    expect(describeConnectError(aggregate(['', ''], 'ECONNREFUSED'))).toBe('ECONNREFUSED')
  })

  test('survives being handed nothing', () => {
    expect(describeConnectError(null)).toBe('unknown error')
    expect(describeConnectError(undefined)).toBe('unknown error')
  })
})

describe('the error an application catches', () => {
  test('an empty message is filled in, and the error itself is kept', () => {
    const original = refusedAggregate()
    const returned = withConnectReason(original)

    // the same object - code and errors are what a caller switches on, and wrapping
    // it in a fresh Error to carry the text would have thrown both away
    expect(returned).toBe(original)
    expect(returned.message).toBe('connect ECONNREFUSED ::1:2349; connect ECONNREFUSED 127.0.0.1:2349')
    expect((returned as any).code).toBe('ECONNREFUSED')
    expect((returned as any).errors).toHaveLength(2)
  })

  test('an error that already says something is left alone', () => {
    const e = new Error('connect ETIMEDOUT 10.0.0.1:443')
    expect(withConnectReason(e).message).toBe('connect ETIMEDOUT 10.0.0.1:443')
  })
})
