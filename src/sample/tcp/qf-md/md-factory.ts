import {
  IMarketDataRequest,
  MDEntryType,
  SubscriptionRequestType
} from '../../../types/FIX4.4/quickfix'

export class MDFactory {
  public static BidOfferRequest (symbol: string): IMarketDataRequest {
    return {
      MDReqID: '1',
      SubscriptionRequestType: SubscriptionRequestType.SnapshotPlusUpdates,
      MarketDepth: 0,
      MDReqGrp: {
        NoMDEntryTypes: [
          {
            MDEntryType: MDEntryType.Bid
          },
          {
            MDEntryType: MDEntryType.Offer
          }
        ]
      },
      InstrmtMDReqGrp: {
        NoRelatedSym: [
          {
            Instrument: {
              StrikeCurrency: 'USD',
              Symbol: symbol
            }
          }
        ]
      }
    } as IMarketDataRequest
  }
}
