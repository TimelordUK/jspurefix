import { IStandardHeader } from './set/standard_header'
import { IUsernameGrp } from './set/username_grp'
import { IThrottleParamsGrp } from './set/throttle_params_grp'

/*
****************************************************
* UserNotification can be found in Volume 1 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IUserNotification {
  UserStatus: number// [2] 926 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  UsernameGrp?: IUsernameGrp[]// [2] Username.553
  ThrottleParamsGrp?: IThrottleParamsGrp[]// [3] Actn.1611, Typ.1612 .. TmUnit.1615
}
