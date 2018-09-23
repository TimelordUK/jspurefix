export interface INumericKeyed<T> {
  [prop: number]: T
}

export interface ILooseObject {
  [prop: string]: any
}

export type IDictIteratorCb<T> = (key: string, val: T) => void
