/*
****************************************************************
* The ApplicationSequenceControl is used for application       *
* sequencing and recovery. Consisting of ApplSeqNum (1181),    *
* ApplID (1180), ApplLastSeqNum (1350), and ApplResendFlag     *
* (1352), FIX application messages that carries this component *
* block will be able to use application level sequencing.      *
* ApplID, ApplSeqNum and ApplLastSeqNum fields identify the    *
* application id, application sequence number and the previous *
* application sequence number (in case of intentional gaps) on *
* each application message that carries this block.            *
****************************************************************
*/
export interface IApplicationSequenceControl {
  ApplID?: string// 1180
  ApplSeqNum?: number// 1181
  ApplLastSeqNum?: number// 1350
  ApplResendFlag?: boolean// 1352
}
