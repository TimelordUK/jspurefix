import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface ISequenceReset {
  header: Iheader
  GapFillFlag?: boolean// 123
  NewSeqNo: number// 36
  trailer: Itrailer
}
