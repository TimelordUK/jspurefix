import { IFinancingContractualDefinitionGrp } from './financing_contractual_definition_grp'
import { IFinancingTermSupplementGrp } from './financing_term_supplement_grp'
import { IFinancingContractualMatrixGrp } from './financing_contractual_matrix_grp'

export interface IFinancingDetails {
  AgreementDesc?: string// [1] 913 (String)
  AgreementID?: string// [1] 914 (String)
  AgreementVersion?: string// [1] 1961 (String)
  AgreementDate?: Date// [1] 915 (LocalDate)
  AgreementCurrency?: string// [1] 918 (String)
  MasterConfirmationDesc?: string// [1] 1962 (String)
  MasterConfirmationDate?: Date// [1] 1963 (LocalDate)
  MasterConfirmationAnnexDesc?: string// [1] 1964 (String)
  MasterConfirmationAnnexDate?: Date// [1] 1965 (LocalDate)
  BrokerConfirmationDesc?: string// [1] 1966 (String)
  CreditSupportAgreementDesc?: string// [1] 1967 (String)
  CreditSupportAgreementDate?: Date// [1] 1968 (LocalDate)
  CreditSupportAgreementID?: string// [1] 1969 (String)
  GoverningLaw?: string// [1] 1970 (String)
  DocumentationText?: string// [1] 1513 (String)
  EncodedDocumentationTextLen?: number// [1] 1525 (Length)
  EncodedDocumentationText?: Buffer// [1] 1527 (RawData)
  TerminationType?: number// [1] 788 (Int)
  StartDate?: Date// [1] 916 (LocalDate)
  EndDate?: Date// [1] 917 (LocalDate)
  DeliveryType?: number// [1] 919 (Int)
  MarginRatio?: number// [1] 898 (Float)
  FinancingContractualDefinitionGrp?: IFinancingContractualDefinitionGrp[]// [1] Def.40041
  FinancingTermSupplementGrp?: IFinancingTermSupplementGrp[]// [2] Desc.40047, Dt.40048
  FinancingContractualMatrixGrp?: IFinancingContractualMatrixGrp[]// [3] Src.40043, Dt.40044, Trm.40045
}
