import { ILegFinancingContractualDefinitionsGrp } from './leg_financing_contractual_definitions_grp'
import { ILegFinancingTermSupplementGrp } from './leg_financing_term_supplement_grp'
import { ILegFinancingContractualMatrixGrp } from './leg_financing_contractual_matrix_grp'

export interface ILegFinancingDetails {
  LegAgreementDesc?: string// [1] 2497 (String)
  LegAgreementID?: string// [2] 2498 (String)
  LegAgreementVersion?: string// [3] 2499 (String)
  LegAgreementDate?: Date// [4] 2496 (LocalDate)
  LegAgreementCurrency?: string// [5] 2495 (String)
  LegAgreementCurrencyCodeSource?: string// [6] 2953 (String)
  LegMasterConfirmationDesc?: string// [7] 2511 (String)
  LegMasterConfirmationDate?: Date// [8] 2510 (LocalDate)
  LegMasterConfirmationAnnexDesc?: string// [9] 2512 (String)
  LegMasterConfirmationAnnexDate?: Date// [10] 2509 (LocalDate)
  LegBrokerConfirmationDesc?: string// [11] 2500 (String)
  LegFinancingContractualDefinitionsGrp?: ILegFinancingContractualDefinitionsGrp// [12] NoLegContractualDefinitions.42198, LegContractualDefinition.42199
  LegFinancingTermSupplementGrp?: ILegFinancingTermSupplementGrp// [13] NoLegFinancingTermSupplements.42200, LegFinancingTermSupplementDesc.42201, LegFinancingTermSupplementDate.42202
  LegFinancingContractualMatrixGrp?: ILegFinancingContractualMatrixGrp// [14] NoLegContractualMatrices.42203, LegContractualMatrixSource.42204 .. LegContractualMatrixTerm.42206
  LegCreditSupportAgreementDesc?: string// [15] 2502 (String)
  LegCreditSupportAgreementDate?: Date// [16] 2501 (LocalDate)
  LegCreditSupportAgreementID?: string// [17] 2503 (String)
  LegGoverningLaw?: string// [18] 2507 (String)
  LegDocumentationText?: string// [19] 2505 (String)
  EncodedLegDocumentationTextLen?: number// [20] 2494 (Length)
  EncodedLegDocumentationText?: Buffer// [21] 2493 (RawData)
  LegTerminationType?: number// [22] 2514 (Int)
  LegStartDate?: Date// [23] 2513 (LocalDate)
  LegEndDate?: Date// [24] 2506 (LocalDate)
  LegDeliveryType?: number// [25] 2504 (Int)
  LegMarginRatio?: number// [26] 2508 (Float)
}
