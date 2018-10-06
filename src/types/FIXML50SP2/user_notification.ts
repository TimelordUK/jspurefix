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
  UserStatus: number// 926
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  UsernameGrp?: IUsernameGrp[]
  ThrottleParamsGrp?: IThrottleParamsGrp[]
}
