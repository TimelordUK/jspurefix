import { ILooseObject } from '../../collections/collection'
import { IStandardHeader } from '../../types/FIX4.4/repo'
import { ISessionDescription } from './session-description'

export interface ISessionMsgFactory {
  description: ISessionDescription
  reject: (msgType: string, seqNo: number, msg: string, reason: number) => ILooseObject
  logout: (msgType: string, text: string) => ILooseObject
  logon: (userRequestId?: string, isResponse?: boolean) => ILooseObject
  testRequest: (reqId?: string) => ILooseObject
  resendRequest: (from: number, to: number) => ILooseObject
  sequenceReset: (newSeq: number, gapFill?: boolean) => ILooseObject
  heartbeat: (testReqId: string) => ILooseObject
  header: (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>) => ILooseObject
  trailer: (checksum: number) => ILooseObject
  /**
   * Produce a factory of this same kind bound to another session description.
   *
   * An acceptor builds one of these per accepted connection, because the outbound
   * header carries that session's comp ids - and under a wildcard TargetCompID the
   * target is not known until the peer logs on.  Implementing this is what lets an
   * application's own factory survive into those per-session scopes; without it the
   * acceptor can only fall back to the stock factory for the protocol.
   *
   * ASessionMsgFactory supplies a default that reconstructs via the concrete
   * constructor, so a subclass taking (description, mutator) needs to do nothing.
   */
  cloneFor?: (description: ISessionDescription) => ISessionMsgFactory
}
