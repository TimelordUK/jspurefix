import { SkeletonSession } from '../../sample/tcp/skeleton/skeleton-session'
import { ElasticBuffer, MsgView } from '../../buffer'
import { ILooseObject } from '../../collections/collection'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Experiment } from './experiment'

export class SkeletonRunner {
  clientSkeleton: SkeletonSession
  serverSkeleton: SkeletonSession

  constructor (public readonly experiment: Experiment, public readonly logoutSeconds: number = 1) {
    this.clientSkeleton = new SkeletonSession(experiment.client.config, logoutSeconds, false)
    this.serverSkeleton = new SkeletonSession(experiment.server.config, logoutSeconds, false)
    this.clientSkeleton.checkMsgIntegrity = true
    this.serverSkeleton.checkMsgIntegrity = true

    experiment.client.transport.receiver.on('msg', (_: string, view: MsgView) => {
      experiment.client.views.push(view.clone())
      this.watchdog()
    })

    experiment.server.transport.receiver.on('msg', (_: string, view: MsgView) => {
      experiment.server.views.push(view.clone())
      this.watchdog()
    })

    this.clientSkeleton.on('error', e => {
      experiment.client.errors.push(e)
    })

    this.serverSkeleton.on('error', e => {
      experiment.server.errors.push(e)
    })
  }

  watchdog (): void {
    const experiment = this.experiment
    const cviews = experiment.client.views
    const sviews = experiment.server.views

    const cerrors = experiment.client.errors
    const serrors = experiment.server.errors

    const clientStop = cviews.length > 20 || cerrors.length > 0
    const serverStop = sviews.length > 20 || serrors.length > 0
    const stop = clientStop || serverStop
    if (stop) {
      this.clientSkeleton.done()
      this.serverSkeleton.done()
    }
  }

  sendMsg (msgType: string, o: ILooseObject): void {
    let count = 0
    this.experiment.client.transport.receiver.on('msg', _ => {
      if (count === 0) {
        count++
        this.clientSkeleton.sendMessage(msgType, o)
      }
    })
  }

  sendText (followOn: string | null): void {
    const experiment = this.experiment
    if (!followOn) return
    let sent: boolean = false
    experiment.client.transport.transmitter.on('encoded', () => {
      const b1 = new ElasticBuffer()
      b1.writeString(followOn)
      if (!sent) {
        experiment.client.transport.duplex.writable.write(b1.slice())
        const at = experiment.client.transport.transmitter as AsciiMsgTransmitter
        at.msgSeqNum++
        sent = true
      }
    })
  }

  done (): void {
    this.clientSkeleton.done()
    this.serverSkeleton.done()
  }

  async wait (): Promise<void> {
    const experiment = this.experiment
    await Promise.all([
      this.clientSkeleton.run(experiment.client.transport),
      this.serverSkeleton.run(experiment.server.transport),
      new Promise((resolve, reject) => {
        let handle = null
        try {
          handle = setTimeout(() => {
            this.done()
            resolve(true)
          }, (this.logoutSeconds + 2) * 1000)
        } catch (e) {
          if (handle) {
            clearTimeout(handle)
          }
          this.done()
          reject(e)
        }
      })])
  }
}
