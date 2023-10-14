import { IStandardHeader } from './set/standard_header'
import { IUsernameGrp } from './set/username_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The User Notification message is used to notify one or more *
* users of an event or information from the sender of the     *
* message. This message is usually sent unsolicited from a    *
* marketplace (e.g. Exchange, ECN) to a market participant.   *
***************************************************************
*/
export interface IUserNotification {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UsernameGrp?: IUsernameGrp[]// [2] Username.553
  UserStatus: number// [3] 926 (Int)
  Text?: string// [4] 58 (String)
  EncodedTextLen?: number// [5] 354 (Int)
  EncodedText?: Buffer// [6] 355 (RawData)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
