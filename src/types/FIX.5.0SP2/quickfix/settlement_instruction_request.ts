import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Settlement Instruction Request message is used to        *
* request standing settlement instructions from another party. *
****************************************************************
*/
export interface ISettlementInstructionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SettlInstReqID: string// [2] 791 (String)
  TransactTime: Date// [3] 60 (UtcTimestamp)
  Parties?: IParties[]// [4] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  AllocAccount?: string// [5] 79 (String)
  AllocAcctIDSource?: number// [6] 661 (Int)
  Side?: string// [7] 54 (String)
  Product?: number// [8] 460 (Int)
  SecurityType?: string// [9] 167 (String)
  CFICode?: string// [10] 461 (String)
  SettlCurrency?: string// [11] 120 (String)
  EffectiveTime?: Date// [12] 168 (UtcTimestamp)
  ExpireTime?: Date// [13] 126 (UtcTimestamp)
  LastUpdateTime?: Date// [14] 779 (UtcTimestamp)
  StandInstDbType?: number// [15] 169 (Int)
  StandInstDbName?: string// [16] 170 (String)
  StandInstDbID?: string// [17] 171 (String)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
