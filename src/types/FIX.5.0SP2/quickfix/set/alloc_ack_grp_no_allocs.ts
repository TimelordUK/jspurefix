import { IAllocRegulatoryTradeIDGrp } from './alloc_regulatory_trade_id_grp'
import { INestedParties } from './nested_parties'

export interface IAllocAckGrpNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocPrice?: number// [3] 366 (Float)
  AllocPositionEffect?: string// [4] 1047 (String)
  IndividualAllocID?: string// [5] 467 (String)
  ParentAllocID?: string// [6] 1593 (String)
  FirmMnemonic?: string// [7] 1729 (String)
  ClearedIndicator?: number// [8] 1832 (Int)
  AllocLegRefID?: string// [9] 2727 (String)
  AllocRegulatoryTradeIDGrp?: IAllocRegulatoryTradeIDGrp// [10] NoAllocRegulatoryTradeIDs.1908, AllocRegulatoryTradeID.1909 .. AllocRegulatoryTradeIDScope.2399
  IndividualAllocRejCode?: number// [11] 776 (Int)
  NestedParties?: INestedParties// [12] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  AllocHandlInst?: number// [13] 209 (Int)
  AllocText?: string// [14] 161 (String)
  EncodedAllocTextLen?: number// [15] 360 (Length)
  EncodedAllocText?: Buffer// [16] 361 (RawData)
  FirmAllocText?: string// [17] 1732 (String)
  EncodedFirmAllocTextLen?: number// [18] 1733 (Length)
  EncodedFirmAllocText?: Buffer// [19] 1734 (RawData)
  SecondaryIndividualAllocID?: string// [20] 989 (String)
  AllocCustomerCapacity?: string// [21] 993 (String)
  IndividualAllocType?: number// [22] 992 (Int)
  AllocQty?: number// [23] 80 (Float)
  AllocCalculatedCcyQty?: number// [24] 2515 (Float)
  CustodialLotID?: string// [25] 1752 (String)
  VersusPurchaseDate?: Date// [26] 1753 (LocalDate)
  VersusPurchasePrice?: number// [27] 1754 (Float)
  CurrentCostBasis?: number// [28] 1755 (Float)
  AllocAvgPxGroupID?: string// [29] 2770 (String)
  AllocAvgPxIndicator?: number// [30] 2769 (Int)
}
