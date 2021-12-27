import { MakeFixSession } from '../transport'

export interface EngineFactory {
  makeSession: MakeFixSession
}
