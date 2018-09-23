import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IMarginAmount } from './set/margin_amount'

/*
***********************************************************
* MarginRequirementReport can be found in Volume 5 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IMarginRequirementReport {
  MDStatisticRptID: string// 2453
  BatchID?: string// 50000
  TransferReportType: number// 2444
  TotNumReports?: number// 911
  LastRptRequested?: string// 912
  UnsolicitedIndicator?: string// 325
  ClearingBusinessDate?: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  UnderlyingSecondaryAssetClass?: number// 2081
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  MarginAmount?: IMarginAmount[]
}
