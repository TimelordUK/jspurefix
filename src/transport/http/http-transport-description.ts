import { IHtmlRoute } from './html-route'
import { IHttpAdapter } from './http-adapter'

export interface IHttpTransportDescription {
  readonly port: number
  readonly uri: string
  readonly options: IHtmlRoute[]
  adapter: IHttpAdapter
}
