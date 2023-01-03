export type INumericKeyed<T> = Record<number, T>

export type ILooseObject = Record<string, any>

export type IDictIteratorCb<T> = (key: string, val: T) => void
