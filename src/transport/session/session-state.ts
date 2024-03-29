export enum SessionState {
  DisconnectedNoConnectionToday = 1,
  DisconnectedConnectionToday = 2,
  DetectBrokenNetworkConnection = 3,
  AwaitingConnection = 4,
  InitiateConnection = 5,
  NetworkConnectionEstablished = 6,
  InitiationLogonSent = 7,
  InitiationLogonReceived = 8,
  InitiationLogonResponse = 9,
  HandleResendRequest = 10,
  ReceiveMsgSeqNumTooHigh = 11,
  AwaitingProcessingResponseToResendRequest = 12,
  NoMessagesReceivedInInterval = 13,
  AwaitingProcessingResponseToTestRequest = 14,
  ReceiveLogout = 15,
  InitiateLogout = 16,
  ActiveNormalSession = 17,
  WaitingForALogon = 18,
  PeerLogonRejected = 20,
  WaitingLogoutConfirm = 21,
  ConfirmingLogout = 22,
  Stopped = 23,
  Idle = 24
}
