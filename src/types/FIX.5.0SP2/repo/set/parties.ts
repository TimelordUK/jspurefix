import { IPtysSubGrp } from './ptys_sub_grp'

/*
****************************************************************
* The Parties component block is used to identify and convey   *
* information on the entities both central and peripheral to   *
* the financial transaction represented by the FIX message     *
* containing the Parties Block. The Parties block allows many  *
* different types of entites to be expressed through use of    *
* the PartyRole field and identifies the source of the PartyID *
* through the the PartyIDSource.                               *
****************************************************************
*/
export interface IParties {
  PartyID?: string// 448
  PartyIDSource?: string// 447
  PartyRole?: number// 452
  PtysSubGrp?: IPtysSubGrp[]
}
