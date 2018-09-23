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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  UsernameGrp?: IUsernameGrp[]
  ThrottleParamsGrp?: IThrottleParamsGrp[]
}
