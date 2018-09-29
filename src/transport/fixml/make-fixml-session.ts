import { FixmlSession } from './fixml-session'
import { IJsFixConfig } from '../../config/js-fix-config'

export interface MakeFixmlSession { (config: IJsFixConfig): FixmlSession
}
