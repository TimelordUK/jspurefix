import { IHtmlOptions } from './html-options'

export class HttpTransaction {
  constructor (public readonly msgType: string,
    public readonly options: IHtmlOptions) {
  }
}
