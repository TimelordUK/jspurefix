/*
****************************************************************
* The presence of DiscretionInstructions component block on an *
* order indicates that the trader wishes to display one price  *
* but will accept trades at another price.                     *
****************************************************************
*/
export interface IDiscretionInstructions {
  DiscretionInst?: string// 388
  DiscretionOffsetValue?: number// 389
  DiscretionMoveType?: number// 841
  DiscretionOffsetType?: number// 842
  DiscretionLimitType?: number// 843
  DiscretionRoundDirection?: number// 844
  DiscretionScope?: number// 846
}
