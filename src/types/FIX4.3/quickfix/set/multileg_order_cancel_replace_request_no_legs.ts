import { IInstrumentLeg } from './instrument_leg'
import { INestedParties } from './nested_parties'

export interface IMultilegOrderCancelReplaceRequestNoLegs {
  InstrumentLeg: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegSide.624
  LegPositionEffect?: string// [2] 564 (String)
  LegCoveredOrUncovered?: number// [3] 565 (Int)
  NestedParties: INestedParties// [4] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubID.545
  LegRefID?: string// [5] 654 (String)
  LegPrice?: number// [6] 566 (Float)
  LegSettlmntTyp?: string// [7] 587 (String)
  LegFutSettDate?: Date// [8] 588 (LocalDate)
}
