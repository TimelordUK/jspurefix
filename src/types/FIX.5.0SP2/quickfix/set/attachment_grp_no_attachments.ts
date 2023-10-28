import { IAttachmentKeywordGrp } from './attachment_keyword_grp'

export interface IAttachmentGrpNoAttachments {
  AttachmentName?: string// [1] 2105 (String)
  AttachmentMediaType?: string// [2] 2106 (String)
  AttachmentClassification?: string// [3] 2107 (String)
  AttachmentExternalURL?: string// [4] 2108 (String)
  AttachmentEncodingType?: number// [5] 2109 (Int)
  UnencodedAttachmentLen?: number// [6] 2110 (Int)
  EncodedAttachmentLen?: number// [7] 2111 (Length)
  EncodedAttachment?: Buffer// [8] 2112 (RawData)
  AttachmentKeywordGrp?: IAttachmentKeywordGrp// [9] NoAttachmentKeywords.2113, AttachmentKeyword.2114
}
