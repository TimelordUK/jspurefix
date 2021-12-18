import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { HttpAcceptorListener, HttpJsonSampleAdapter, HttpInitiator } from '../../../transport/http'

class AppLauncher extends Launcher {
  public constructor () {
    super(
      'data/session/test-http-initiator.json',
      'data/session/test-http-acceptor.json')
  }

  protected getAcceptor (config: IJsFixConfig): Promise<any> {
    return new HttpAcceptorListener(config, (c) => new HttpServer(c)).start()
  }

  protected getInitiator (config: IJsFixConfig): Promise<any> {
    config.description.application.http.adapter = new HttpJsonSampleAdapter(config)
    return new HttpInitiator(config, (c) => new HttpClient(c)).start()
  }
}

const l = new AppLauncher()
l.run().then(() => {
  console.log('finished.')
}).catch(e => {
  console.log(e)
})
