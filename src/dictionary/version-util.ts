import { FixVersion } from './fix-versions'

export abstract class VersionUtil {
  public static resolve (description: string): FixVersion {
    let version: FixVersion = FixVersion.Unknown
    if (description.includes('FIX.4.0')) {
      version = FixVersion.FIX40
    } else if (description.includes('FIX.4.1')) {
      version = FixVersion.FIX41
    } else if (description.includes('FIX.4.2')) {
      version = FixVersion.FIX42
    } else if (description.includes('FIX.4.3')) {
      version = FixVersion.FIX43
    } else if (description.includes('FIX.4.4')) {
      version = FixVersion.FIX44
    } else if (description.includes('FIX.5.0')) {
      version = FixVersion.FIX50
    } else if (description.includes('FIX.5.0SP1')) {
      version = FixVersion.FIX50SP1
    } else if (description.includes('FIX.5.0SP2')) {
      version = FixVersion.FIX50SP2
    } else if (description.includes('FIXML.5.0SP2')) {
      version = FixVersion.FIXML50SP2
    }
    return version
  }
}
