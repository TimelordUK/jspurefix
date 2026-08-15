import { ITcpTransportDescription } from './tcp/tcp-transport-description'
import { IHttpTransportDescription } from './http/http-transport-description'

export interface IMsgApplication {
  readonly name: string
  readonly type: string
  /**
   * An initiator which re-establishes its transport after the connection drops and
   * resumes the same session, rather than ending when the socket does.  Defaults to
   * false, which gives a single connection.  See "Reconnecting initiators" in the
   * README for the retry policy below.
   */
  readonly resilient: boolean
  /** how long to wait between attempts whilst trying to establish a connection.  Defaults to 5. */
  readonly reconnectSeconds: number
  /**
   * how long to keep attempting a connection before giving up.  Defaults to 60 for a
   * resilient initiator and 22 for a plain one.
   */
  readonly connectTimeoutSeconds?: number
  /** resilient only: how long after losing the transport before trying to get it back.  Defaults to 5. */
  readonly recoveryAttemptSeconds?: number
  /** resilient only: how long to wait after a failed recovery before trying again.  Defaults to 30. */
  readonly backoffFailConnectSeconds?: number
  readonly tcp?: ITcpTransportDescription
  readonly http?: IHttpTransportDescription
  readonly protocol: string
  readonly dictionary: string
}
