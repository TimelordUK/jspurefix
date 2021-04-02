import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IXMLnonFIX {
  header: Iheader
  trailer: Itrailer
}
