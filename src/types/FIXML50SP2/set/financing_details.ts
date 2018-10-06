import { IFinancingContractualDefinitionGrp } from './financing_contractual_definition_grp'
import { IFinancingTermSupplementGrp } from './financing_term_supplement_grp'
import { IFinancingContractualMatrixGrp } from './financing_contractual_matrix_grp'

export interface IFinancingDetails {
  AgreementDesc?: string// 913
  AgreementID?: string// 914
  AgreementVersion?: string// 1961
  AgreementDate?: Date// 915
  AgreementCurrency?: string// 918
  MasterConfirmationDesc?: string// 1962
  MasterConfirmationDate?: Date// 1963
  MasterConfirmationAnnexDesc?: string// 1964
  MasterConfirmationAnnexDate?: Date// 1965
  BrokerConfirmationDesc?: string// 1966
  CreditSupportAgreementDesc?: string// 1967
  CreditSupportAgreementDate?: Date// 1968
  CreditSupportAgreementID?: string// 1969
  GoverningLaw?: string// 1970
  DocumentationText?: string// 1513
  EncodedDocumentationTextLen?: number// 1525
  EncodedDocumentationText?: Buffer// 1527
  TerminationType?: number// 788
  StartDate?: Date// 916
  EndDate?: Date// 917
  DeliveryType?: number// 919
  MarginRatio?: number// 898
  FinancingContractualDefinitionGrp?: IFinancingContractualDefinitionGrp[]
  FinancingTermSupplementGrp?: IFinancingTermSupplementGrp[]
  FinancingContractualMatrixGrp?: IFinancingContractualMatrixGrp[]
}
