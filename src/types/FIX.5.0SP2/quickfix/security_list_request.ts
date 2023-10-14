import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security List Request message is used to return a list *
* of securities from the counterparty that match criteria    *
* provided on the request                                    *
**************************************************************
*/
export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [7] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [8] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Currency?: string// [11] 15 (String)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Int)
  EncodedText?: Buffer// [14] 355 (RawData)
  TradingSessionID?: string// [15] 336 (String)
  TradingSessionSubID?: string// [16] 625 (String)
  SubscriptionRequestType?: string// [17] 263 (String)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
  SecurityListID?: string// [19] 1465 (String)
  SecurityListType?: number// [20] 1470 (Int)
  SecurityListTypeSource?: number// [21] 1471 (Int)
}
