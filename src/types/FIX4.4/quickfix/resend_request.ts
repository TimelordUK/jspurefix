import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IResendRequest {
  header: Iheader
  BeginSeqNo: number// 7
  EndSeqNo: number// 16
  trailer: Itrailer
}
