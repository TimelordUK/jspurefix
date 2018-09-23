import { ILooseObject } from '../collections/collection'

export class MsgPayload {
  public encoded: Buffer
  constructor (public readonly msgType: string, public readonly obj: ILooseObject) {
  }
}
