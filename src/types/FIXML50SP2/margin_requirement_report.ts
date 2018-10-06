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
  MarginReqmtRptID: string// 1642
  MarginReqmtInqID?: string// 1635
  MarginReqmtRptType: number// 1638
  TotNumReports?: number// 911
  LastRptRequested?: boolean// 912
  UnsolicitedIndicator?: boolean// 325
  ClearingBusinessDate?: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  MarginClass?: string// 1639
  Currency?: string// 15
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  MarginAmount?: IMarginAmount[]
}
