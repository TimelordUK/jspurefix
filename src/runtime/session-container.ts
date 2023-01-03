import { container, DependencyContainer } from 'tsyringe'
import { DefinitionFactory } from '../util'
import { IJsFixConfig, JsFixLoggerFactory, JsFixWinstonLogFactory, WinstonLogger } from '../config'
import { DITokens } from './di-tokens'
import { RuntimeFactory } from './make-config'

import {
  TcpAcceptorListener, RecoveringTcpInitiator,
  TcpInitiatorConnector, TcpInitiator
} from '../transport/tcp'
import { HttpInitiator, HttpAcceptorListener, HttpJsonSampleAdapter } from '../transport/http'
import { ISessionMsgFactory, MsgTransmitter, ISessionDescription } from '../transport'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { FixmlMsgTransmitter } from '../transport/fixml/fixml-msg-transmitter'
import { FixmlSessionMsgFactory } from '../transport/fixml'
import { AsciiSessionMsgFactory } from '../transport/ascii'
import { ElasticBuffer, MsgEncoder, MsgParser } from '../buffer'
import { AsciiParser, AsciiParserState, AsciiSegmentParser } from '../buffer/ascii'
import { FixmlEncoder, FiXmlParser } from '../buffer/fixml'
import { FixEntity } from '../transport/fix-entity'
import { IHttpAdapter } from '../transport/http/http-adapter'

export class SessionContainer {
  public reset (): void {
    container.reset()
  }

  public registerGlobal (loggerFactory?: JsFixLoggerFactory): void
  public registerGlobal (level: string): void
  public registerGlobal (levelOrLoggerFactory: string | JsFixLoggerFactory = 'info'): void {
    container.registerInstance(DefinitionFactory, new DefinitionFactory())
    let lf: JsFixLoggerFactory
    if (typeof levelOrLoggerFactory === 'string') {
      lf = new JsFixWinstonLogFactory(WinstonLogger.consoleOptions(levelOrLoggerFactory))
    } else {
      lf = levelOrLoggerFactory
    }
    container.registerInstance(DITokens.JsFixLoggerFactory, lf)
    container.register<RuntimeFactory>(RuntimeFactory, {
      useClass: RuntimeFactory
    })
    container.register<ElasticBuffer>(DITokens.ElasticBuffer, {
      useClass: ElasticBuffer
    })
  }

  protected makeSessionFactory (description: ISessionDescription): ISessionMsgFactory {
    const fixml = !this.isAscii(description)
    return fixml
      ? new FixmlSessionMsgFactory(description)
      : new AsciiSessionMsgFactory(description)
  }

  public newChild (description: ISessionDescription): DependencyContainer {
    const sessionContainer = container.createChildContainer()
    const sf = this.makeSessionFactory(description)
    sessionContainer.registerInstance(DITokens.ISessionDescription, description)
    sessionContainer.registerInstance(DITokens.ISessionMsgFactory, sf)
    return sessionContainer
  }

  public async makeSystem (description: ISessionDescription): Promise<DependencyContainer> {
    return await new Promise<DependencyContainer>((resolve, reject) => {
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
    return description.application?.protocol === 'ascii'
  }

  public isInitiator (description: ISessionDescription): boolean {
    return description.application?.type === 'initiator'
  }

  public asAscii (description: ISessionDescription, sessionContainer: DependencyContainer): void {
    sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
      useClass: AsciiMsgTransmitter
    })
    sessionContainer.register<MsgParser>(DITokens.MsgParser, {
      useClass: AsciiParser
    })
    const parseSize = 160 * 1024
    const sendSize = 10 * 1024

    sessionContainer.register(DITokens.maxMessageLen, {
      useValue: parseSize
    })
    sessionContainer.register<AsciiSegmentParser>(AsciiSegmentParser, {
      useClass: AsciiSegmentParser
    })
    sessionContainer.register<AsciiParserState>(AsciiParserState, {
      useClass: AsciiParserState
    })

    sessionContainer.registerInstance<ElasticBuffer>(DITokens.TransmitBuffer, new ElasticBuffer(sendSize))
    sessionContainer.registerInstance<ElasticBuffer>(DITokens.ParseBuffer, new ElasticBuffer(parseSize))

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
      if (description.application?.resilient) {
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

  public asFixml (description: ISessionDescription, sessionContainer: DependencyContainer): void {
    sessionContainer.register<MsgTransmitter>(DITokens.MsgTransmitter, {
      useClass: FixmlMsgTransmitter
    })
    const sendSize = 10 * 1024

    sessionContainer.register<MsgParser>(DITokens.MsgParser, {
      useClass: FiXmlParser
    })
    sessionContainer.register(DITokens.maxMessageLocations, {
      useValue: sendSize
    })
    sessionContainer.register<MsgEncoder>(DITokens.MsgEncoder, {
      useClass: FixmlEncoder
    })
    sessionContainer.registerInstance<ElasticBuffer>(DITokens.TransmitBuffer, new ElasticBuffer(sendSize))
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

  protected asciiConstants (c: IJsFixConfig, sessionContainer: DependencyContainer): void {
    sessionContainer.register(DITokens.delimiter, {
      useValue: c.delimiter
    })
    sessionContainer.register(DITokens.logDelimiter, {
      useValue: c.logDelimiter
    })
  }

  public registerSession (c: IJsFixConfig, sessionContainer: DependencyContainer): void {
    if (this.isAscii(c.description)) {
      this.asAscii(c.description, sessionContainer)
      this.asciiConstants(c, sessionContainer)
    } else {
      this.asFixml(c.description, sessionContainer)
    }
    c.sessionContainer = sessionContainer
    sessionContainer.registerInstance(DITokens.IJsFixConfig, c)
    sessionContainer.registerInstance(DITokens.Definitions, c.definitions)
  }
}
