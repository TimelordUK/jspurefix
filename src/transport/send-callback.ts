import { ILooseObject } from '../collections/collection'

/**
 * What a send produced.  `header` is the StandardHeader the engine stamped on the
 * message - the sequence number it went out under, the sending time, the comp ids -
 * which is the piece applications most often need to correlate an outbound message
 * with an acknowledgement, a database row, or a resend.
 */
export interface SendResult {
  msgType: string
  /** the stamped StandardHeader, or null if the message never got that far */
  header: ILooseObject | null
  /** the bytes written to the transport */
  encoded: Buffer | null
}

/**
 * Called once per `send`, after the message has been encoded and pushed to the
 * transport, or as soon as encoding fails.
 *
 * `send` is otherwise fire and forget: it writes into a stream and returns, so
 * nothing tells the caller which sequence number their message went out under, and a
 * failure surfaces on the session's error channel with no way to tell which call
 * caused it.  See https://github.com/TimelordUK/jspurefix/issues/86
 *
 * Note this fires when the message has been *encoded and handed to the transport*,
 * not when the socket has flushed it - the FIX session layer has no acknowledgement
 * of the latter either.
 *
 * A callback that throws is reported on the transmitter's error channel rather than
 * being allowed to tear down the encode stream.
 */
export type SendCallback = (error: Error | null, result: SendResult) => void
