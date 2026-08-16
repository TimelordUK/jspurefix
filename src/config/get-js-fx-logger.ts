import { IJsFixLogger, JsFixLogFields } from './js-fix-logger'

export type GetJsFixLogger = (type: string, context?: JsFixLogFields) => IJsFixLogger
