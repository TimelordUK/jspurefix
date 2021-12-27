import 'reflect-metadata'

import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { DependencyContainer } from 'tsyringe'
import { DITokens } from '../../../runtime'
import { FixEntity } from '../../../transport'
import { IHttpAdapter } from '../../../transport/http/http-adapter'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-http-initiator.json',
      'data/session/test-http-acceptor.json')
  }

  protected override registerApplication (sessionContainer: DependencyContainer) {
    const config: IJsFixConfig = sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
    const isInitiator = this.isInitiator(config.description)
    if (isInitiator) {
      sessionContainer.register(DITokens.FixSession, {
        useFactory: () => new HttpClient(config)
      })
    } else {
      sessionContainer.register(DITokens.FixSession, {
        useFactory: () => new HttpServer(config)
      })
    }
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
