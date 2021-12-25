import { ILooseObject } from '../collections/collection'

export interface ISaxNode {
  readonly name: string
  readonly attributes: ILooseObject
  readonly isSelfClosing: boolean
}
