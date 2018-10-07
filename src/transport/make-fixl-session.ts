import { IJsFixConfig } from '../config/js-fix-config'
import { FixSession } from './fix-session'

export interface MakeFixSession { (config: IJsFixConfig): FixSession
}
