import { ITlsOptions } from './tls-options'

export interface ITcpTransportDescription {
  readonly port: number
  readonly host: string
  readonly tls?: ITlsOptions
  /**
   * TCP keep-alive probe delay in milliseconds for connections accepted by this
   * listener.  Keep-alive is what lets the OS notice a peer that has vanished
   * without FIN or RST - the half open socket in issue #153.  Set 0 to disable.
   * Default 30000.
   */
  readonly keepAliveMs?: number
}
