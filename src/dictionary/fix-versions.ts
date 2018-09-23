
export enum FixVersion {
    Unknown = 1,
    FIX40 = 1,
    FIX41 = 2,
    FIX42 = 3,
    FIX43 = 4,
    FIX44 = 5,
    FIX50 = 6,
    FIX50SP1 = 7,
    FIX50SP2 = 8,
    FIXML50SP2 = 9
}

export enum FixDefinitionSource {
  Unknown = 0,
  QuickFix = 1,
  FixmlRepo = 2,
  FixRepo = 3
}

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
