import { IAttachmentKeywordGrp } from './attachment_keyword_grp'

export interface IAttachmentGrp {
  AttachmentName?: string// [1] 2105 (String)
  AttachmentMediaType?: string// [1] 2106 (String)
  AttachmentClassification?: string// [1] 2107 (String)
  AttachmentExternalURL?: string// [1] 2108 (String)
  AttachmentEncodingType?: number// [1] 2109 (Int)
  UnencodedAttachmentLen?: number// [1] 2110 (Int)
  EncodedAttachmentLen?: number// [1] 2111 (Length)
  EncodedAttachment?: Buffer// [1] 2112 (RawData)
  AttachmentKeywordGrp?: IAttachmentKeywordGrp[]// [1] Keywd.2114
}
