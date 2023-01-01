import { IJsFixConfig } from '../../config'
import { FixSession } from './fix-session'

export type MakeFixSession = (config: IJsFixConfig) => FixSession
