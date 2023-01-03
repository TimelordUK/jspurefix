import { IHtmlOptions } from './html-options'

export interface IHttpAdapter {
  getOptions: (data: Buffer) => IHtmlOptions | null
  beginMessage: (msgType: string) => void
  endMessage: (m: any) => Buffer
}
