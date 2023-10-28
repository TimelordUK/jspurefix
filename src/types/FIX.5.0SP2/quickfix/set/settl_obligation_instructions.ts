import { ISettlObligationInstructionsNoSettlOblig } from './settl_obligation_instructions_no_settl_oblig'

export interface ISettlObligationInstructions {
  NoSettlOblig?: ISettlObligationInstructionsNoSettlOblig[]// [1] NetGrossInd.430, SettlObligID.1161 .. SettlPartySubIDType.786
}
