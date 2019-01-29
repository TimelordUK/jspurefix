/*
****************************************************************
* The InstrumentLeg component block, like the Instrument       *
* component block, contains all the fields commonly used to    *
* describe a security or instrument.  In the case of the       *
* InstrumentLeg component block it describes a security used   *
* in multileg-oriented messages.                               *
*                                                              *
* Refer to the Instrument component block comments as this     *
* component block mirrors Instrument, except for the noted     *
* fields.                                                      *
*                                                              *
* Several multileg-oriented messages specify an Instrument Leg *
* component block. An instrument can have zero or more         *
* instrument legs. The fundamental business rule that applies  *
* to the multileg instrument is that the multileg instrument   *
* is defined as the combination of instrument legs. The        *
* multileg instrument must be able to be traded atomically    *
* that all instrument legs are traded or none are traded.      *
*                                                              *
* The LegRatioQty[623] is used to define the quantity of the   *
* leg that makes up a single unit of the multleg instrument.   *
* An option butterfly strategy is made up of three option      *
* legs.                                                        *
****************************************************************
*/
export interface IInstrumentLeg {
}
