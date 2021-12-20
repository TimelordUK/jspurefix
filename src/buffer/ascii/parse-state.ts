export enum ParseState {
  BeginField = 1,
  ParsingTag = 2,
  ParsingValue = 3,
  ParsingRawDataLength = 4,
  ParsingRawData = 5,
  MsgComplete = 6
}
