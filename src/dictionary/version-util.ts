import { FixVersion } from './fix-versions'

export abstract class VersionUtil {
  public static resolve (description: string): FixVersion {
    let version: FixVersion = FixVersion.Unknown
    if (description.indexOf('FIX.4.0') >= 0) {
      version = FixVersion.FIX40
    } else if (description.indexOf('FIX.4.1') >= 0) {
      version = FixVersion.FIX41
    } else if (description.indexOf('FIX.4.2') >= 0) {
      version = FixVersion.FIX42
    } else if (description.indexOf('FIX.4.3') >= 0) {
      version = FixVersion.FIX43
    } else if (description.indexOf('FIX.4.4') >= 0) {
      version = FixVersion.FIX44
    } else if (description.indexOf('FIX.5.0') >= 0) {
      version = FixVersion.FIX50
    } else if (description.indexOf('FIX.5.0SP1') >= 0) {
      version = FixVersion.FIX50SP1
    } else if (description.indexOf('FIX.5.0SP1') >= 0) {
      version = FixVersion.FIX50SP2
    }
    return version
  }
}
