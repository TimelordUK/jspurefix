import 'reflect-metadata'

import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config'
import { DITokens, EngineFactory, SessionLauncher } from '../../../runtime'
import { DependencyContainer } from 'tsyringe'
import { FixEntity } from '../../../transport'
import { IHttpAdapter } from '../../../transport/http/http-adapter'

class AppLauncher extends SessionLauncher {
  public constructor () {
    super(
      'data/session/test-http-initiator.json',
      'data/session/test-http-acceptor.json')
  }

  protected override makeFactory (config: IJsFixConfig): EngineFactory {
    const isInitiator = this.isInitiator(config.description)
    return {
      makeSession: () => isInitiator ?
        new HttpClient(config) :
        new HttpServer(config)
    } as EngineFactory
  }

  protected override getInitiator (sessionContainer: DependencyContainer): Promise<any> {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    config.description.application.http.adapter = sessionContainer.resolve<IHttpAdapter>(DITokens.IHttpAdapter)
    const initiator = sessionContainer.resolve<FixEntity>(DITokens.FixEntity)
    return initiator.start()
  }
}

const l = new AppLauncher()
l.exec()
