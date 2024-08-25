import { IMsgApplication } from '../msg-application'

export interface IDynamicSessionParams {
  readonly Name: string
  readonly SenderCompId: string
  readonly TargetCompID: string
  readonly ResetSeqNumFlag: boolean
  readonly SenderSubID: string
  readonly TargetSubID: string
  readonly BeginString: string
  readonly Username: string
  readonly Password: string
}

export interface ISessionDescription extends IDynamicSessionParams {
  readonly application?: IMsgApplication
  HeartBtInt: number
  LastSentSeqNum?: number
  readonly LastReceivedSeqNum?: number
  readonly BodyLengthChars?: number
}
