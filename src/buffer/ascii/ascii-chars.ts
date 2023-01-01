export abstract class AsciiChars {
  public static readonly Minus: number = '-'.charCodeAt(0)
  public static readonly Equal: number = '='.charCodeAt(0)
  public static readonly ForwardSlash: number = '/'.charCodeAt(0)
  public static readonly Plus: number = '+'.charCodeAt(0)
  public static readonly Tab: number = '\t'.charCodeAt(0)
  public static readonly Colon: number = ':'.charCodeAt(0)
  public static readonly Hyphen: number = '-'.charCodeAt(0)
  public static readonly Pipe: number = '|'.charCodeAt(0)
  public static readonly Carat: number = '^'.charCodeAt(0)
  public static readonly N: number = 'N'.charCodeAt(0)
  public static readonly Y: number = 'Y'.charCodeAt(0)
  public static readonly Zero: number = '0'.charCodeAt(0)
  public static readonly Nine: number = '9'.charCodeAt(0)
  public static readonly Dot: number = '.'.charCodeAt(0)
  public static readonly Eq: number = '='.charCodeAt(0)
  public static readonly Dq: number = '"'.charCodeAt(0)
  public static readonly Space: number = ' '.charCodeAt(0)
  public static readonly Cr: number = '\n'.charCodeAt(0)
  public static readonly Soh: number = 0x1

  public static firstChar (s: string): number {
    return s.charCodeAt(0)
  }
}
