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
  StandardHeader: IStandardHeader
  UsernameGrp?: IUsernameGrp[]
  UserStatus: number// 926
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
