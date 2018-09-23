import { FixSession } from './fix-session'
import { IJsFixConfig } from '../config/js-fix-config'

export interface MakeAppSession { (config: IJsFixConfig): FixSession
}
