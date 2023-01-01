import { ITcpTransportDescription } from './tcp/tcp-transport-description'
import { IHttpTransportDescription } from './http/http-transport-description'

export interface IMsgApplication {
  readonly name: string
  readonly type: string
  readonly resilient: boolean
  readonly reconnectSeconds: number
  readonly tcp?: ITcpTransportDescription
  readonly http?: IHttpTransportDescription
  readonly protocol: string
  readonly dictionary: string
}
