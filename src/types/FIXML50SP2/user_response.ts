import { IStandardHeader } from './set/standard_header'
import { IThrottleParamsGrp } from './set/throttle_params_grp'

/*
************************************************
* UserResponse can be found in Volume 1 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IUserResponse {
  UserRequestID: string// [2] 923 (String)
  Username: string// [2] 553 (String)
  UserStatus?: number// [2] 926 (Int)
  UserStatusText?: string// [2] 927 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ThrottleParamsGrp?: IThrottleParamsGrp[]// [2] Actn.1611, Typ.1612 .. TmUnit.1615
}
