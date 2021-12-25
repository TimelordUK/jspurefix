import { container, DependencyContainer } from 'tsyringe'
import { DefinitionFactory } from '../util'
import { IJsFixConfig, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { DITokens } from './di-tokens'
import { RuntimeFactory } from './make-config'

import { TcpAcceptorListener, RecoveringTcpInitiator,
  TcpInitiatorConnector, TcpInitiator } from '../transport/tcp'
import { HttpInitiator, HttpAcceptorListener, HttpJsonSampleAdapter } from '../transport/http'
import { ISessionMsgFactory, MsgTransmitter, ISessionDescription } from '../transport'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { FixmlMsgTransmitter } from '../transport/fixml/fixml-msg-transmitter'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'
import { MsgParser } from '../buffer'
import { AsciiParser, AsciiSegmentParser } from '../buffer/ascii'
import { FiXmlParser } from '../buffer/fixml'
import { FixEntity } from '../transport/fix-entity'
import { IHttpAdapter } from '../transport/http/http-adapter'

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

  public asAscii (description: ISessionDescription, sessionContainer: DependencyContainer) {
    sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
      useClass: AsciiMsgTransmitter
    })
    sessionContainer.register<MsgParser>(DITokens.MsgParser, {
      useClass: AsciiParser
    })
    sessionContainer.register(DITokens.maxMessageLen, {
      useValue: 160 * 1024
    })
    sessionContainer.register<AsciiSegmentParser>(AsciiSegmentParser, {
      useClass: AsciiSegmentParser
    })

    if (this.isInitiator(description)) {
      sessionContainer.register<TcpInitiator>(TcpInitiator, {
        useClass: TcpInitiator
      })
      sessionContainer.register<RecoveringTcpInitiator>(RecoveringTcpInitiator, {
        useClass: RecoveringTcpInitiator
      })
      sessionContainer.register<TcpInitiatorConnector>(TcpInitiatorConnector, {
        useClass: TcpInitiatorConnector
      })
      if (description.application.resilient) {
        sessionContainer.register<FixEntity>(DITokens.FixEntity, {
          useClass: RecoveringTcpInitiator
        })
      } else {
        sessionContainer.register<FixEntity>(DITokens.FixEntity, {
          useClass: TcpInitiatorConnector
        })
      }
    } else {
      sessionContainer.register<FixEntity>(DITokens.FixEntity, {
        useClass: TcpAcceptorListener
      })
    }
  }

  public asFixml (description: ISessionDescription, sessionContainer: DependencyContainer) {
    sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
      useClass: FixmlMsgTransmitter
    })
    sessionContainer.register<MsgParser>(DITokens.MsgParser, {
      useClass: FiXmlParser
    })
    sessionContainer.register(DITokens.maxMessageLocations, {
      useValue: 10 * 1024
    })
    sessionContainer.register<HttpAcceptorListener>(HttpAcceptorListener, {
      useClass: HttpAcceptorListener
    })
    sessionContainer.register<HttpInitiator>(HttpInitiator, {
      useClass: HttpInitiator
    })
    if (this.isInitiator(description)) {
      sessionContainer.register<FixEntity>(DITokens.FixEntity, {
        useClass: HttpInitiator
      })
      sessionContainer.register<IHttpAdapter>(DITokens.IHttpAdapter, {
        useClass: HttpJsonSampleAdapter
      })
    } else {
      sessionContainer.register<FixEntity>(DITokens.FixEntity, {
        useClass: HttpAcceptorListener
      })
    }
  }

  public registerSession (c: IJsFixConfig, sessionContainer: DependencyContainer) {
    if (this.isAscii(c.description)) {
      this.asAscii(c.description, sessionContainer)
    } else {
      this.asFixml(c.description, sessionContainer)
    }
    c.sessionContainer = sessionContainer
    sessionContainer.registerInstance(DITokens.IJsFixConfig, c)
    sessionContainer.registerInstance(DITokens.Definitions, c.definitions)
  }
}
