import { ILegFinancingContractualDefinitionsGrp } from './leg_financing_contractual_definitions_grp'
import { ILegFinancingTermSupplementGrp } from './leg_financing_term_supplement_grp'
import { ILegFinancingContractualMatrixGrp } from './leg_financing_contractual_matrix_grp'

export interface ILegFinancingDetails {
  LegAgreementDesc?: string// [1] 2497 (String)
  LegAgreementID?: string// [1] 2498 (String)
  LegAgreementVersion?: string// [1] 2499 (String)
  LegAgreementDate?: Date// [1] 2496 (LocalDate)
  LegAgreementCurrency?: string// [1] 2495 (String)
  LegMasterConfirmationDesc?: string// [1] 2511 (String)
  LegMasterConfirmationDate?: Date// [1] 2510 (LocalDate)
  LegMasterConfirmationAnnexDesc?: string// [1] 2512 (String)
  LegMasterConfirmationAnnexDate?: Date// [1] 2509 (LocalDate)
  LegBrokerConfirmationDesc?: string// [1] 2500 (String)
  LegCreditSupportAgreementDesc?: string// [1] 2502 (String)
  LegCreditSupportAgreementDate?: Date// [1] 2501 (LocalDate)
  LegCreditSupportAgreementID?: string// [1] 2503 (String)
  LegGoverningLaw?: string// [1] 2507 (String)
  LegDocumentationText?: string// [1] 2505 (String)
  EncodedLegDocumentationTextLen?: number// [1] 2494 (Length)
  EncodedLegDocumentationText?: Buffer// [1] 2493 (RawData)
  LegTerminationType?: number// [1] 2514 (Int)
  LegStartDate?: Date// [1] 2513 (LocalDate)
  LegEndDate?: Date// [1] 2506 (LocalDate)
  LegDeliveryType?: number// [1] 2504 (Int)
  LegMarginRatio?: number// [1] 2508 (Float)
  LegFinancingContractualDefinitionsGrp?: ILegFinancingContractualDefinitionsGrp[]// [1] Def.42199
  LegFinancingTermSupplementGrp?: ILegFinancingTermSupplementGrp[]// [2] Desc.42201, Dt.42202
  LegFinancingContractualMatrixGrp?: ILegFinancingContractualMatrixGrp[]// [3] Src.42204, Dt.42205, Trm.42206
}
