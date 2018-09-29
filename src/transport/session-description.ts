
export interface ITcpTransportDescription {
  readonly port: number
  readonly host: string,
}

export interface IHttpTransportDescription {
  readonly port: number
  readonly uri: string,
}

export interface IMsgApplication {
  readonly name: string
  readonly type: string,
  readonly reconnectSeconds: number
  readonly tcp?: ITcpTransportDescription,
  readonly http?: IHttpTransportDescription,
  readonly protocol: string,
  readonly dictionary: string
}

export interface ISessionDescription {
  readonly application?: IMsgApplication
  readonly Name: string
  readonly Username: string
  readonly Password: string
  HeartBtInt: number
  readonly SenderCompId: string
  readonly TargetCompID: string
  readonly ResetSeqNumFlag: boolean
  readonly SenderSubID: string
  readonly TargetSubID: string
  readonly BeginString: string
}
