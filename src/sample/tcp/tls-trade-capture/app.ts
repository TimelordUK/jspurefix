import 'reflect-metadata'
import { AppLauncher } from '../trade-capture/app-launcher'

const l = new AppLauncher(
  'data/session/test-initiator-tls.json',
  'data/session/test-acceptor-tls.json'
)
l.exec()
