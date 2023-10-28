import { IFinancingContractualDefinitionGrp } from './financing_contractual_definition_grp'
import { IFinancingTermSupplementGrp } from './financing_term_supplement_grp'
import { IFinancingContractualMatrixGrp } from './financing_contractual_matrix_grp'

export interface IFinancingDetails {
  AgreementDesc?: string// [1] 913 (String)
  AgreementID?: string// [2] 914 (String)
  AgreementVersion?: string// [3] 1961 (String)
  AgreementDate?: Date// [4] 915 (LocalDate)
  AgreementCurrency?: string// [5] 918 (String)
  AgreementCurrencyCodeSource?: string// [6] 2952 (String)
  MasterConfirmationDesc?: string// [7] 1962 (String)
  MasterConfirmationDate?: Date// [8] 1963 (LocalDate)
  MasterConfirmationAnnexDesc?: string// [9] 1964 (String)
  MasterConfirmationAnnexDate?: Date// [10] 1965 (LocalDate)
  BrokerConfirmationDesc?: string// [11] 1966 (String)
  FinancingContractualDefinitionGrp?: IFinancingContractualDefinitionGrp// [12] NoContractualDefinitions.40040, ContractualDefinition.40041
  FinancingTermSupplementGrp?: IFinancingTermSupplementGrp// [13] NoFinancingTermSupplements.40046, FinancingTermSupplementDesc.40047, FinancingTermSupplementDate.40048
  FinancingContractualMatrixGrp?: IFinancingContractualMatrixGrp// [14] NoContractualMatrices.40042, ContractualMatrixSource.40043 .. ContractualMatrixTerm.40045
  CreditSupportAgreementDesc?: string// [15] 1967 (String)
  CreditSupportAgreementDate?: Date// [16] 1968 (LocalDate)
  CreditSupportAgreementID?: string// [17] 1969 (String)
  GoverningLaw?: string// [18] 1970 (String)
  DocumentationText?: string// [19] 1513 (String)
  EncodedDocumentationTextLen?: number// [20] 1525 (Length)
  EncodedDocumentationText?: Buffer// [21] 1527 (RawData)
  TerminationType?: number// [22] 788 (Int)
  StartDate?: Date// [23] 916 (LocalDate)
  EndDate?: Date// [24] 917 (LocalDate)
  DeliveryType?: number// [25] 919 (Int)
  MarginRatio?: number// [26] 898 (Float)
}
