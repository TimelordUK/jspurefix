import { IInstrumentScope } from './instrument_scope'

export interface IRiskInstrumentScopeGrpNoRiskInstrumentScopes {
  InstrumentScopeOperator?: number// [1] 1535 (Int)
  InstrumentScope?: IInstrumentScope// [2] InstrumentScopeSymbol.1536, InstrumentScopeSymbolSfx.1537 .. InstrumentScopeSettlType.1557
  RiskInstrumentMultiplier?: number// [3] 1558 (Float)
}
