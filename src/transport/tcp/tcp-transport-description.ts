import { ITlsOptions } from './tls-options'

export interface ITcpTransportDescription {
  readonly port: number
  readonly host: string
  readonly tls?: ITlsOptions
}
