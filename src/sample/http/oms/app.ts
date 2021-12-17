import { HttpServer } from './http-server'
import { HttpClient } from './http-client'
import { IJsFixConfig } from '../../../config'
import { Launcher } from '../../launcher'
import { httpInitiator, HttpJsonSampleAdapter } from '../../../transport'
import { acceptor } from '../../../transport/fixml'

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
}).catch(e => {
  console.log(e)
})
