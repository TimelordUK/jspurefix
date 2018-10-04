import { IHtmlOptions } from '../session-description'

export class HttpTransaction {
  constructor (public readonly msgType: string,
               public readonly options: IHtmlOptions) {
  }
}
