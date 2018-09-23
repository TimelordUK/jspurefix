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
  UserRequestID: string// 923
  Username: string// 553
  UserStatus?: number// 926
  UserStatusText?: string// 927
  StandardHeader?: IStandardHeader
  ThrottleParamsGrp?: IThrottleParamsGrp[]
}
