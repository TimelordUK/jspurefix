export interface IMarketDataFeedTypes {
  MDFeedType?: string// [1] 1022 (String)
  MDSubFeedType?: string// [1] 1683 (String)
  MarketDepth?: number// [1] 264 (Int)
  MarketDepthTimeInterval?: number// [1] 2563 (Int)
  MarketDepthTimeIntervalUnit?: number// [1] 2564 (Int)
  MDRecoveryTimeInterval?: number// [1] 2565 (Int)
  MDRecoveryTimeIntervalUnit?: number// [1] 2566 (Int)
  MDBookType?: number// [1] 1021 (Int)
  MDSubBookType?: number// [1] 1173 (Int)
  PrimaryServiceLocationID?: string// [1] 2567 (String)
  SecondaryServiceLocationID?: string// [1] 2568 (String)
}
