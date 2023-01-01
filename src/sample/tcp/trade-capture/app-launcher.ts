import { EngineFactory, SessionLauncher } from '../../../runtime'
import { IJsFixConfig } from '../../../config'
import { TradeCaptureClient } from './trade-capture-client'
import { TradeCaptureServer } from './trade-capture-server'

export class AppLauncher extends SessionLauncher {
  public constructor (client: string = 'data/session/test-initiator.json',
    server: string = 'data/session/test-acceptor.json') {
    super(
      client,
      server)
  }

  protected override makeFactory (config: IJsFixConfig): EngineFactory {
    const isInitiator = this.isInitiator(config.description)
    return {
      makeSession: () => isInitiator
        ? new TradeCaptureClient(config)
        : new TradeCaptureServer(config)
    } as EngineFactory
  }
}
