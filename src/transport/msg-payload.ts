import { ILooseObject } from '../collections/collection'
import { SendCallback } from './send-callback'

export class MsgPayload {
  public encoded: Buffer
  constructor (public readonly msgType: string,
    public readonly obj: ILooseObject,
    /** invoked once this payload has been encoded, or has failed to encode */
    public readonly callback: SendCallback | null = null) {
  }
}
