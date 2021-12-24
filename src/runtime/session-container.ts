import { container, DependencyContainer } from 'tsyringe'
import { DefinitionFactory } from '../util'
import { IJsFixConfig, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { DITokens } from './DITokens'
import { RuntimeFactory } from './make-config'
import { RecoveringTcpInitiator, TcpAcceptorListener, TcpInitiator, TcpInitiatorConnector } from '../transport/tcp'
import { HttpAcceptorListener, HttpInitiator } from '../transport/http'
import { ISessionDescription, ISessionMsgFactory, MsgTransmitter } from '../transport'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { FixmlMsgTransmitter } from '../transport/fixml/fixml-msg-transmitter'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'

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
    } else {
      sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
        useClass: FixmlMsgTransmitter
      })
    }
    c.sessionContainer = sessionContainer
    sessionContainer.registerInstance(DITokens.IJsFixConfig, c)
  }
}
