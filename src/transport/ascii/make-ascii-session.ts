import { AsciiSession } from './ascii-session'
import { IJsFixConfig } from '../../config/js-fix-config'

export interface MakeAsciiSession { (config: IJsFixConfig): AsciiSession
}
