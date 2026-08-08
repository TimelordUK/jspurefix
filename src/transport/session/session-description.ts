import { IMsgApplication } from '../msg-application'
import { StoreConfig } from '../../store/store-config'
import { ILooseObject } from '../../collections/collection'

export interface IDynamicSessionParams {
  readonly Name: string
  readonly SenderCompId: string
  readonly TargetCompID: string
  readonly ResetSeqNumFlag: boolean
  readonly SenderSubID: string
  readonly TargetSubID: string
  readonly BeginString: string
  readonly Username: string
  readonly Password: string
}

export interface ISessionDescription extends IDynamicSessionParams {
  readonly application?: IMsgApplication
  /**
   * Extra fields to place on the outbound Logon, merged over the ones the engine
   * derives from this description.  Counterparties routinely demand a tag the
   * standard Logon does not carry - an account, a default application version, a
   * free text token - and this is the no-code way to send it:
   *
   *   "Logon": { "Account": "TVKD_001", "DefaultApplVerID": "9" }
   *
   * A field named here still has to exist on Logon in the dictionary the session
   * loads, otherwise the encoder has no tag to write it to.  Set a field to null to
   * suppress one the engine would otherwise send.  See issues #93, #39, #96.
   */
  readonly Logon?: ILooseObject
  HeartBtInt: number
  LastSentSeqNum?: number
  readonly LastReceivedSeqNum?: number
  readonly BodyLengthChars?: number
  readonly store?: StoreConfig
}
