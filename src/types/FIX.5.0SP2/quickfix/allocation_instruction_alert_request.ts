import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAlertRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocRequestID?: string// [2] 2758 (String)
  AllocGroupID?: string// [3] 1730 (String)
  AvgPxGroupID?: string// [4] 1731 (String)
  TradeDate?: Date// [5] 75 (LocalDate)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
