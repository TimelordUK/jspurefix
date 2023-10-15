export enum DITokens {
  // the JSON representation defining header
  ISessionDescription = 'ISessionDescription',
  // the main config interface created from application JSON config
  IJsFixConfig = 'IJsFixConfig',
  // the data dictionary holding all field definitions - represented in quickfix or repo
  Definitions = 'Definitions',
  // the main application session object type
  FixSession = 'FixSession',
  // used to construct loggers e.g. in Winston
  JsFixLoggerFactory = 'JsFixLoggerFactory',
  // used to construct session protocol messages - logon / heartbeat / reset
  ISessionMsgFactory = 'ISessionMsgFactory',
  // a tcp socket or string / file for unit testing - abstraction of physical transport
  FixDuplex = 'FixDuplex',
  // ASCII: format messages from objects and send to socket
  MsgTransmitter = 'MsgTransmitter',
  // ASCII: write object attributes in txt to transmit buffer
  MsgEncoder = 'MsgEncoder',
  // ASCII: receive bytes from socket and parse to tags
  MsgParser = 'MsgParser',
  // FIXML: user defined adapter used in HTTP to manage a transaction
  IHttpAdapter = 'IHttpAdapter',
  // the listener or connector depending on entity type.
  FixEntity = 'FixEntity',
  // the transport listener to construct sessions on connection
  Listener = 'Listener',
  // used to initiate a connection to listener in order to establish a transport
  Connector = 'Connector',
  // a self adjusting buffer to allow messages to be formatted
  ElasticBuffer = 'ElasticBuffer',
  // parse into this buffer
  ParseBuffer = 'ReceiveBuffer',
  // format into and clone from this buffer to transmit stream
  TransmitBuffer = 'SendBuffer',

  elasticBufferSize = 'elasticBufferSize',
  elasticBufferReturnSize = 'elasticBufferReturnSize',

  logDelimiter = 'logDelimiter',
  delimiter = 'delimiter',
  sessionId = 'sessionId',
  maxMessageLen = 'maxMessageLen',
  readStream = 'readStream',
  duplexParam = 'duplexParam',
  maxMessageLocations = 'maxMessageLocations'
}
