import { ISessionDescription } from './session-description'

export interface ISession50Description extends ISessionDescription {
  readonly SessionStatus?: number
  readonly DefaultApplVerID: string
  readonly DefaultApplExtID?: number
  readonly DefaultCstmApplVerID?: string
  readonly Text?: string
}
