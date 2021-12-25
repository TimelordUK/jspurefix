import { IJsFixConfig } from '../../config'
import { FixSession } from './fix-session'

export interface MakeFixSession { (config: IJsFixConfig): FixSession
}
