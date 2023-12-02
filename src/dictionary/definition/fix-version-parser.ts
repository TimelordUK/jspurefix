import { FixVersion } from '../fix-versions'

export class FixVersionParser {
  public static getMajor (version: FixVersion): number {
    switch (version) {
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 5

      case FixVersion.FIX40:
      case FixVersion.FIX41:
      case FixVersion.FIX42:
      case FixVersion.FIX43:
      case FixVersion.FIX44:
        return 4
    }

    return 0
  }

  public static getMinor (version: FixVersion): number {
    switch (version) {
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 0

      case FixVersion.FIX40:
        return 0
      case FixVersion.FIX41:
        return 1
      case FixVersion.FIX42:
        return 2
      case FixVersion.FIX43:
        return 3
      case FixVersion.FIX44:
        return 4
    }

    return 0
  }

  public static getServicePack (version: FixVersion): number {
    switch (version) {
      case FixVersion.FIX50SP1:
        return 1
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 2
    }

    return 0
  }
}
