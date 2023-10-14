/*
****************************************************************
* The SecurityXML component is used for carrying security      *
* description or definition in an XML format. See "Specifying  *
* an FpML product specification from within the FIX Instrument *
* Block" for more information on using this component block    *
* with FpML as a guideline.                                    *
****************************************************************
*/
export interface ISecurityXML {
  SecurityXMLLen?: number// [1] 1184 (Int)
  SecurityXML?: string// [2] 1185 (String)
  SecurityXMLSchema?: string// [3] 1186 (String)
}
