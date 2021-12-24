import { container, DependencyContainer } from 'tsyringe'
import { DefinitionFactory } from '../util'
import { IJsFixConfig, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { DITokens } from './DITokens'
import { RuntimeFactory } from './make-config'

import { TcpAcceptorListener, RecoveringTcpInitiator,
  TcpInitiatorConnector, TcpInitiator } from '../transport/tcp'
import { HttpInitiator, HttpAcceptorListener } from '../transport/http'
import { ISessionMsgFactory, MsgTransmitter, ISessionDescription } from '../transport'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { FixmlMsgTransmitter } from '../transport/fixml/fixml-msg-transmitter'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'
import { MsgParser } from '../buffer'
import { AsciiParser } from '../buffer/ascii'
import { FiXmlParser } from '../buffer/fixml'

export class SessionContainer {

  public reset (): void {
    container.reset()
  }

  public registerGlobal (): void {
    container.registerInstance(DefinitionFactory, new DefinitionFactory())
    const lf = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions('info'))
    container.registerInstance(DITokens.JsFixLoggerFactory, lf)
    container.register<RuntimeFactory>(RuntimeFactory, {
      useClass: RuntimeFactory
    })
    container.register<TcpAcceptorListener>(TcpAcceptorListener, {
      useClass: TcpAcceptorListener
    })
    container.register<RecoveringTcpInitiator>(RecoveringTcpInitiator, {
      useClass: RecoveringTcpInitiator
    })
    container.register<TcpInitiatorConnector>(TcpInitiatorConnector, {
      useClass: TcpInitiatorConnector
    })
    container.register<TcpInitiator>(TcpInitiator, {
      useClass: TcpInitiator
    })
    container.register<HttpAcceptorListener>(HttpAcceptorListener, {
      useClass: HttpAcceptorListener
    })
    container.register<HttpInitiator>(HttpInitiator, {
      useClass: HttpInitiator
    })
  }

  protected makeSessionFactory (description: ISessionDescription): ISessionMsgFactory {
    const fixml = !this.isAscii(description)
    return fixml ?
      new FixmlSessionMsgFactory(description) :
      new AsciiSessionMsgFactory(description)
  }

  public newChild (description: ISessionDescription): DependencyContainer {
    const sessionContainer = container.createChildContainer()
    const sf = this.makeSessionFactory(description)
    sessionContainer.registerInstance(DITokens.ISessionDescription, description)
    sessionContainer.registerInstance(DITokens.ISessionMsgFactory, sf)
    return sessionContainer
  }

  public makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    return new Promise<DependencyContainer>((resolve, reject) => {
      const sessionContainer = this.newChild(description)
      const factory = sessionContainer.resolve<RuntimeFactory>(RuntimeFactory)
      factory.makeConfig().then((c: IJsFixConfig) => {
        this.registerSession(c, sessionContainer)
        resolve(sessionContainer)
      }).catch(e => {
        reject(e)
      })
    })
  }

  public isAscii (description: ISessionDescription): boolean {
    return description.application.protocol === 'ascii'
  }

  public isInitiator (description: ISessionDescription): boolean {
    return description.application.type === 'initiator'
  }

  public registerSession (c: IJsFixConfig, sessionContainer: DependencyContainer) {
    if (this.isAscii(c.description)) {
      sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
        useClass: AsciiMsgTransmitter
      })
      sessionContainer.register<MsgParser>(DITokens.MsgParser, {
        useClass: AsciiParser
      })
      sessionContainer.register(DITokens.maxMessageLen, {
        useValue: 160 * 1024
      })
    } else {
      sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
        useClass: FixmlMsgTransmitter
      })
      sessionContainer.register<MsgParser>(DITokens.MsgParser, {
        useClass: FiXmlParser
      })
      sessionContainer.register(DITokens.maxMessageLocations, {
        useValue: 10 * 1024
      })
    }
    c.sessionContainer = sessionContainer
    sessionContainer.registerInstance(DITokens.IJsFixConfig, c)
  }
}
