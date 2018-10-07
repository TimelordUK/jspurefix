import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config/js-fix-config'
import { Launcher } from '../../launcher'
import { HttpJsonSampleAdapter } from '../../../transport/http/http-json-sample-adapter'
import { httpInitiator } from '../../../transport/http/http-initiator'
import { acceptor } from '../../../transport/fixml/acceptor'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-http-initiator.json',
      'data/session/test-http-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return acceptor(config, (c) => new HttpServer(c))
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    config.description.application.http.adapter = new HttpJsonSampleAdapter(config)
    return httpInitiator(config, (c) => new HttpClient(c))
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
})
