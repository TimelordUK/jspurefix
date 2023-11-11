import { IStandardHeader } from './set/standard_header'
import { IUsernameGrp } from './set/username_grp'
import { IThrottleParamsGrp } from './set/throttle_params_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserNotification {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UsernameGrp?: IUsernameGrp// [2] NoUsernames.809, Username.553
  UserStatus: number// [3] 926 (Int)
  ThrottleParamsGrp?: IThrottleParamsGrp// [4] NoThrottles.1610, ThrottleAction.1611 .. ThrottleMsgType.1619
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
