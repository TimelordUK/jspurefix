import { IFinancingContractualDefinitionGrp } from './financing_contractual_definition_grp'
import { IFinancingTermSupplementGrp } from './financing_term_supplement_grp'
import { IFinancingContractualMatrixGrp } from './financing_contractual_matrix_grp'

export interface IFinancingDetails {
  LegAgreementDesc?: string// 2497
  LegAgreementID?: string// 2498
  LegAgreementVersion?: string// 2499
  LegAgreementDate?: Date// 2496
  LegAgreementCurrency?: string// 2495
  LegMasterConfirmationDesc?: string// 2511
  LegMasterConfirmationDate?: Date// 2510
  LegMasterConfirmationAnnexDesc?: string// 2512
  LegMasterConfirmationAnnexDate?: Date// 2509
  LegBrokerConfirmationDesc?: string// 2500
  LegCreditSupportAgreementDesc?: string// 2502
  LegCreditSupportAgreementDate?: Date// 2501
  LegCreditSupportAgreementID?: string// 2503
  LegGoverningLaw?: string// 2507
  LegDocumentationText?: string// 2505
  EncodedLegDocumentationTextLen?: string// 2494
  EncodedLegDocumentationText?: Buffer// 2493
  LegTerminationType?: number// 2514
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  LegDeliveryType?: number// 2504
  LegMarginRatio?: number// 2508
  FinancingContractualDefinitionGrp?: IFinancingContractualDefinitionGrp[]
  FinancingTermSupplementGrp?: IFinancingTermSupplementGrp[]
  FinancingContractualMatrixGrp?: IFinancingContractualMatrixGrp[]
}
