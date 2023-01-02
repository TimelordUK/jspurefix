import { FixmlEncoder } from '../../buffer/fixml'
import { IJsFixConfig } from '../../config'
import { MsgTransmitter } from '../msg-transmitter'
import { ILooseObject } from '../../collections/collection'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { ElasticBuffer } from '../../buffer'

@injectable()
export class FixmlMsgTransmitter extends MsgTransmitter {
  public time: Date

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config.sessionContainer.resolve<ElasticBuffer>(DITokens.TransmitBuffer), config.definitions, config.description)
    this.encoder = config.sessionContainer.resolve<FixmlEncoder>(DITokens.MsgEncoder)
  }

  public encodeMessage (msgType: string, obj: ILooseObject): any {
    const adapter = this?.config?.description?.application?.http?.adapter
    if (adapter) {
      adapter.beginMessage(msgType)
    }
    const fe = this.encoder as FixmlEncoder
    const factory = this.config.factory
    obj.StandardHeader = factory?.header()
    fe.encode(obj, msgType)
    return obj.StandardHeader
  }
}
