import { IMsgApplication } from '../msg-application'

export interface ISessionDescription {
  readonly application?: IMsgApplication
  readonly Name: string
  readonly Username: string
  readonly Password: string
  HeartBtInt: number
  readonly SenderCompId: string
  readonly TargetCompID: string
  readonly ResetSeqNumFlag: boolean
  readonly LastSentSeqNum?: number
  readonly LastReceivedSeqNum?: number
  readonly SenderSubID: string
  readonly TargetSubID: string
  readonly BeginString: string
  readonly BodyLengthChars?: number,
}
