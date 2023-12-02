import { FixVersion } from './fix-versions'

export abstract class VersionUtil {
  public static resolve (description: string): FixVersion {
    if (description === 'FIX.4.0') return FixVersion.FIX40
    if (description === 'FIX.4.1') return FixVersion.FIX41
    if (description === 'FIX.4.2') return FixVersion.FIX42
    if (description === 'FIX.4.3') return FixVersion.FIX43
    if (description === 'FIX.4.4') return FixVersion.FIX44
    if (description === 'FIX.5.0') return FixVersion.FIX50
    if (description === 'FIX.5.0SP1') return FixVersion.FIX50SP1
    if (description === 'FIX.5.0SP2') return FixVersion.FIX50SP2
    if (description === 'FIXML.5.0SP2') return FixVersion.FIXML50SP2
    return FixVersion.Unknown
  }
}
