import { IAttachmentGrpNoAttachments } from './attachment_grp_no_attachments'

export interface IAttachmentGrp {
  NoAttachments?: IAttachmentGrpNoAttachments[]// [1] AttachmentName.2105, AttachmentMediaType.2106 .. AttachmentKeyword.2114
}
