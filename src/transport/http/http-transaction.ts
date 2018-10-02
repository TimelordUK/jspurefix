import * as requestPromise from 'request-promise'

export class HttpTransaction {
  constructor (public readonly msgType: string,
               public readonly options: requestPromise.OptionsWithUri) {
  }
}
