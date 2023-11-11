import { IStandardHeader } from './set/standard_header'
import { IThrottleParamsGrp } from './set/throttle_params_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UserRequestID: string// [2] 923 (String)
  Username: string// [3] 553 (String)
  UserStatus?: number// [4] 926 (Int)
  ThrottleParamsGrp?: IThrottleParamsGrp// [5] NoThrottles.1610, ThrottleAction.1611 .. ThrottleMsgType.1619
  UserStatusText?: string// [6] 927 (String)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
