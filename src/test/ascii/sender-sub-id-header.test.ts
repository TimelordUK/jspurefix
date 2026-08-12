import 'reflect-metadata'
import * as path from 'path'

import { SessionContainer } from '../../runtime'
import { DITokens } from '../../runtime/di-tokens'
import { ISessionDescription, ISessionMsgFactory, MsgTransmitter } from '../../transport'
import { IJsFixConfig } from '../../config'
import { ElasticBuffer } from '../../buffer'
import { MsgType } from '../../types'

/**
 * Regression cover for issue #69 — "Parameter SenderSubID missing during login".
 *
 * SenderSubID (tag 50) given in the session description was not stamped onto the
 * outbound header, so a counterparty requiring it (cTrader/cServer) never saw it and
 * the only workaround was to install a custom session message factory overriding
 * header(). It is part of the base header since dd9a540 — pin that so the field
 * cannot quietly fall out of AsciiSessionMsgFactory.header() again.
 */
const root = path.join(__dirname, '../../../data')

async function encodeLogon (extra: Partial<ISessionDescription> = {}): Promise<string> {
  const base = JSON.parse(JSON.stringify(require(path.join(root, 'session/test-initiator.json'))))
  const description: ISessionDescription = { ...base, ...extra }
  const fixContainer = new SessionContainer()
  fixContainer.reset()
  fixContainer.registerGlobal('error')
  const container = await fixContainer.makeSystem(description)
  const config = container.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
  config.delimiter = config.logDelimiter
  const transmitter = container.resolve<MsgTransmitter>(DITokens.MsgTransmitter)
  const txBuffer = container.resolve<ElasticBuffer>(DITokens.TransmitBuffer)
  const factory = container.resolve<ISessionMsgFactory>(DITokens.ISessionMsgFactory)
  transmitter.send(MsgType.Logon, factory.logon())
  return txBuffer.toString()
}

describe('SenderSubID on the outbound header (issue #69)', () => {
  test('tag 50 is written when the session description supplies SenderSubID', async () => {
    const wire = await encodeLogon({ SenderSubID: 'QUOTE' })
    expect(wire).toContain('|50=QUOTE|')
  })

  test('no custom session message factory is needed for it', async () => {
    // the workaround in #69 was overriding header() in a bespoke ISessionMsgFactory;
    // the stock factory is resolved here and must carry the field on its own
    const wire = await encodeLogon({ SenderSubID: 'QUOTE' })
    expect(wire).toContain('35=A')
    expect(wire).toContain('|50=QUOTE|')
  })

  test('tag 50 is absent when SenderSubID is not configured', async () => {
    const wire = await encodeLogon()
    expect(wire).not.toContain('|50=')
  })
})
