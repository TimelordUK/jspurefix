import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list status request message type is used by institutions *
* to instruct the broker to generate status messages for a     *
* list.                                                        *
****************************************************************
*/
export interface IListStatusRequest {
  StandardHeader: IStandardHeader
  ListID: string// 66
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
