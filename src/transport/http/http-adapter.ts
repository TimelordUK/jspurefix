import { IHtmlOptions } from './html-options'

export interface IHttpAdapter {
  getOptions (data: Buffer): IHtmlOptions
  beginMessage (msgType: string): void
  endMessage (m: any): Buffer
}
