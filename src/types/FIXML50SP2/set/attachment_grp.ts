import { IAttachmentKeywordGrp } from './attachment_keyword_grp'

export interface IAttachmentGrp {
  UnderlyingMakeWholeBenchmarkCurveName?: string// 42890
  AttachmentMediaType?: string// 2106
  AttachmentClassification?: string// 2107
  AttachmentExternalURL?: string// 2108
  AttachmentEncodingType?: number// 2109
  UnencodedAttachmentLen?: number// 2110
  EncodedAttachmentLen?: string// 2111
  EncodedAttachment?: Buffer// 2112
  AttachmentKeywordGrp?: IAttachmentKeywordGrp[]
}
