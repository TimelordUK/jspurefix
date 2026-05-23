# jspurefix

[![CI](https://github.com/TimelordUK/jspurefix/actions/workflows/ci.yml/badge.svg)](https://github.com/TimelordUK/jspurefix/actions/workflows/ci.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A fast, fully native TypeScript [FIX protocol](https://www.fixtrading.org/) engine for Node.js. Built around a data-dictionary driven parser, with first-class support for sessions over TCP/TLS, persistent message stores, sequence recovery, FIXML over HTTP, and generated typed interfaces for any FIX dialect.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Session Configuration](#session-configuration)
  - [TLS](#tls)
  - [Body length padding](#body-length-padding)
- [Persistence & Recovery](#persistence--recovery)
  - [Choosing a store](#choosing-a-store)
  - [`ResetSeqNumFlag` semantics](#resetseqnumflag-semantics)
  - [Resending messages](#resending-messages)
- [Working with Messages](#working-with-messages)
- [FIXML over HTTP](#fixml-over-http)
- [Data Dictionaries](#data-dictionaries)
- [`jsfix` CLI — log parsing & stats](#jsfix-cli--log-parsing--stats)
- [Performance](#performance)
- [Developing on jspurefix](#developing-on-jspurefix)
- [C# Port](#c-port)
- [License](#license)

## Features

- 100% native TypeScript — no native bindings, runs anywhere Node.js does
- ASCII (tag=value) and FIXML message encodings
- Repeating groups, components, nested structures and raw data fields
- Dictionary-driven: load QuickFIX XML or FIX repository definitions, compile typed interfaces
- Full session lifecycle: logon, heartbeats, test requests, resend requests, logout
- TLS-encrypted sessions over TCP
- Pluggable persistent message store (in-memory or file) with sequence recovery
- HTTP initiator/acceptor for FIXML
- Command-line tool for parsing FIX logs into tokens, JSON, or structure dumps
- Sample applications: trade capture, market data, FIXML OMS, recovering skeleton

## Installation

```shell
npm install jspurefix
cd node_modules/jspurefix && npm run unzip-repo
```

`unzip-repo` extracts the bundled FIX dictionaries. The `postinstall` hook will normally do this for you, but the command is exposed in case you need to re-run it.

A standalone demo project lives at [TimelordUK/jspf-demo](https://github.com/TimelordUK/jspf-demo) — the fastest way to see a working initiator/acceptor.

## Quickstart

Import the session types you need from `jspurefix` and the typed FIX messages for your dialect:

```typescript
import {
  AsciiSession,
  MsgView,
  IJsFixConfig,
  IJsFixLogger,
  Dictionary,
  MsgType,
  initiator,
  acceptor,
  makeConfig
} from 'jspurefix'

import {
  ITradeCaptureReport,
  ITradeCaptureReportRequest,
  ITradeCaptureReportRequestAck
} from 'jspurefix/dist/types/FIX4.4/repo'
```

A minimal session subclasses `AsciiSession` and implements two callbacks: `onReady` (connection up, logon confirmed) and `onApplicationMsg` (a non-session message arrived).

```typescript
class TradeCaptureClient extends AsciiSession {
  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}:TradeCaptureClient`)
  }

  protected onReady (view: MsgView): void {
    const tcr: ITradeCaptureReportRequest =
      TradeFactory.tradeCaptureReportRequest('all-trades', new Date())
    this.send(MsgType.TradeCaptureReportRequest, tcr)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    switch (msgType) {
      case MsgType.TradeCaptureReport: {
        const tc: ITradeCaptureReport = view.toObject()
        this.logger.info(`tc ${tc.TradeReportID} ${tc.Instrument.Symbol} ${tc.LastQty} @ ${tc.LastPx}`)
        break
      }
    }
  }
}
```

The full sample lives at `src/sample/tcp/trade-capture/` and runs both sides over a local socket:

```shell
npm run tcp-tc      # full trade-capture client/server demo
npm run tcp-sk      # bare skeleton: connect, log on, idle
npm run http-oms    # FIXML order/exec-report over HTTP
```

Each demo terminates after about a minute, or with Ctrl-C.

## Session Configuration

A session is described by a JSON file (or any object matching `ISessionDescription`). Example: `data/session/test-initiator.json`.

```json
{
  "application": {
    "type": "initiator",
    "name": "test_client",
    "reconnectSeconds": 10,
    "tcp": { "host": "localhost", "port": 2344 },
    "protocol": "ascii",
    "dictionary": "repo44"
  },
  "Username": "js-client",
  "Password": "pwd-client",
  "EncryptMethod": 0,
  "ResetSeqNumFlag": true,
  "HeartBtInt": 30,
  "SenderCompId": "init-comp",
  "TargetCompID": "accept-comp",
  "TargetSubID": "fix",
  "BeginString": "FIX.4.4"
}
```

### TLS

Add a `tls` block under `application.tcp`. The `ca` field is only needed for self-signed certificates; commercial vendors will supply this for you. `script/getKey.ps1` will generate a self-signed CA + client/server pair (requires `openssl` on the path).

```json
{
  "application": {
    "type": "initiator",
    "name": "test_client",
    "tcp": {
      "host": "localhost",
      "port": 2344,
      "tls": {
        "timeout": 10000,
        "sessionTimeout": 10000,
        "enableTrace": true,
        "key": "data/session/certs/client/client.key",
        "cert": "data/session/certs/client/client.crt",
        "ca": ["data/session/certs/ca/ca.crt"]
      }
    },
    "protocol": "ascii",
    "dictionary": "repo44"
  },
  "BeginString": "FIX4.4"
}
```

See `data/session/test-initiator-tls.json` for the complete file.

### Body length padding

`BodyLengthChars` controls how the tag-9 body-length field is zero-padded. Defaults to `7`; set to a smaller value (e.g. `6`) when interoperating with a counterparty that requires it.

```json
{ "BodyLengthChars": 6 }
```

## Persistence & Recovery

By default, every session uses an in-memory message store — sequence numbers and any stored messages are lost when the process exits. For production use you'll typically want either persisted sequences or a full file-backed store with replay.

### Choosing a store

Add a `store` block to the session description. Omit it to keep the in-memory default.

```json
{
  "store": { "type": "memory" }
}
```

```json
{
  "store": {
    "type": "file",
    "directory": "/var/fix/sessions"
  }
}
```

The file store writes QuickFIX-compatible files into the directory:

| File | Contents |
| --- | --- |
| `<session>.seqnums` | Current sender / target sequence numbers |
| `<session>.session` | Session creation timestamp |
| `<session>.header` | Index lines `seqnum,offset,length` into `.body` |
| `<session>.body` | Concatenated raw FIX messages for resend |

Session names are derived from `BeginString-SenderCompID-TargetCompID`.

You can also pass a custom factory programmatically via `IJsFixConfig.sessionStoreFactory` — useful for testing or for plugging in an alternative backend (Redis, S3, etc.).

### `ResetSeqNumFlag` semantics

- `"ResetSeqNumFlag": true` — every logon resets sender/target sequences back to 1. The engine clears the persisted store before sending the Logon, so the message correctly carries `MsgSeqNum=1` even after a reconnect with recovered state. (See [issue #140](https://github.com/TimelordUK/jspurefix/issues/140).)
- `"ResetSeqNumFlag": false` — sequences are preserved across logons. To seed initial sequences for a brand-new session (no persisted store), set `LastSentSeqNum` and `LastReceivedSeqNum`:

```json
{
  "ResetSeqNumFlag": false,
  "LastSentSeqNum": 10,
  "LastReceivedSeqNum": 11
}
```

With a file store configured, `LastSentSeqNum` / `LastReceivedSeqNum` are only consulted the first time a session is started; subsequent runs read from the persisted `.seqnums` file.

### Resending messages

When a counterparty asks for missed messages, the engine needs access to the originals. The file store keeps every encoded message and the bundled `AsciiSession.onResendRequest()` will replay from it automatically. If you're using the in-memory store and want resend support, override `onResendRequest()` with your own retrieval logic and set the duplicate flag on each replayed message:

```typescript
{
  ...messageBodyData,
  StandardHeader: { PossDupFlag: true, MsgSeqNum: sequenceNumber }
}
```

Example payload:

```json
{
  "ClOrdID": "acceptor-order-id",
  "HandlInst": "2",
  "OrdType": "2",
  "Side": "2",
  "TransactTime": "2021-08-03T08:23:57.041Z",
  "Symbol": "some ticker",
  "StandardHeader": {
    "PossDupFlag": true,
    "MsgSeqNum": 2
  }
}
```

## Working with Messages

A `MsgView` is a zero-copy view over the parse buffer. The view is only valid inside the callback that received it — clone it (`view.clone()`) if you need to hold onto it past the current tick. Most code converts the view to a typed object via `toObject()`.

```typescript
import { ITradeCaptureReport } from 'jspurefix/dist/types/FIX4.4/repo'
const tc: ITradeCaptureReport = view.toObject()
```

Read a single tag by name or number:

```typescript
expect(erView.getString(35)).toEqual('8')
expect(erView.getString('MsgType')).toEqual('8')
expect(erView.getTyped(9)).toEqual(6542)
expect(erView.getTyped('TotNumReports')).toEqual(19404)
```

Read several tags in one call:

```typescript
const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49])
```

Read all instances of a repeated tag:

```typescript
expect(erView.getStrings('PartyID')).toEqual(['magna.', 'iaculis', 'vitae,'])
```

Drill into a repeating group or component:

```typescript
const noMDEntriesView: MsgView = view.getView('NoMDEntries')
const firstEntry: MsgView = noMDEntriesView.getGroupInstance(1)
const expireTime: string = firstEntry.getString('ExpireTime')

const instrument: IInstrument = view.getView('Instrument').toObject()
```

Convert nested structures in one call:

```typescript
const legGrp: IInstrumentLeg[] = view.getView('InstrmtLegGrp.NoLegs').toObject()
```

Dump a tokenised view of every tag in a message:

```typescript
console.log(view.toString())
```

See `src/test/ascii/view-decode.test.ts` for many more examples.

## FIXML over HTTP

ASCII and FIXML sessions share the same `AsciiSession`-style application API — the framing is the only thing that changes. A small HTTP OMS demo lives at `src/sample/http/oms/`.

Build an order:

```typescript
public createOrder (symbol: string, side: Side, qty: number, price: number): INewOrderSingle {
  return {
    ClOrdID: `Cli${this.id++}`,
    Account: this.account,
    Side: side,
    Price: price,
    OrdType: OrdType.Limit,
    OrderQtyData: { OrderQty: qty } as IOrderQtyData,
    Instrument: {
      Symbol: symbol,
      SecurityID: '459200101',
      SecurityIDSource: SecurityIDSource.IsinNumber
    } as IInstrument,
    TimeInForce: TimeInForce.GoodTillCancelGtc
  } as INewOrderSingle
}
```

That renders to:

```xml
<FIXML>
  <Order ID="Cli1" Acct="TradersRUs" Side="1" Typ="2" Px="100.12" TmInForce="1">
    <Hdr SID="accept-comp" TID="init-comp" SSub="user123" TSub="INC"/>
    <Instrmt Sym="IBM" ID="459200101" Src="4"/>
    <OrdQty Qty="10000"/>
  </Order>
</FIXML>
```

The server receives the order and produces an execution report:

```typescript
protected onApplicationMsg (msgType: string, view: MsgView): void {
  if (msgType === 'Order') {
    const order: INewOrderSingle = view.toObject()
    const fill: IExecutionReport = this.factory.fillOrder(order)
    this.send('ExecutionReport', fill)
  }
}
```

Reply on the wire:

```xml
<FIXML>
  <ExecRpt ID="Cli1" ExecID="exec1" ExecTyp="I" Stat="2" Side="1" Typ="2"
           Px="100.12" LastPx="100.12" LeavesQty="0" AvgPx="100.12"
           TxnTm="2018-10-07T12:16:12.584">
    <Hdr SID="accept-comp" TID="init-comp" TSub="fix"/>
    <Instrmt Sym="IBM" ID="459200101" Src="4"/>
    <OrdQty Qty="10000"/>
  </ExecRpt>
</FIXML>
```

## Data Dictionaries

jspurefix ships definitions for FIX 4.0–4.4 and FIX 5.0 SP0/SP1/SP2 in both QuickFIX XML and FIX-repository formats, under bundled aliases such as `repo44`, `qf44`, `qf50sp2`. The alias map lives at `data/dictionary.json`.

To add a custom dialect:

1. Drop your QuickFIX-style XML into `data/`.
2. Add an alias to `data/dictionary.json`.
3. Generate typed interfaces under `src/types`:

   ```shell
   npm run cmd -- --dict=repo42 --compile
   ```

4. Reference the alias from your session description (`"dictionary": "repo42"`).

See [jspf-md-demo](https://github.com/TimelordUK/jspf-md-demo) for a worked example.

## `jsfix` CLI — log parsing & stats

The `jsfix-cmd` tool parses any FIX log given an appropriate dictionary.

Token dump for a specific message type:

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --tokens
```

```
[0] 8 (BeginString) = FIX4.4, [1] 9 (BodyLength) = 0000135
[2] 35 (MsgType) = AD[TradeCaptureReportRequest], [3] 49 (SenderCompID) = init-comp
[4] 56 (TargetCompID) = accept-comp, [5] 34 (MsgSeqNum) = 2
...
```

Per-type message counts for the file:

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --stats
```

```json
{ "0": 1, "5": 2, "A": 2, "AD": 1, "AQ": 2, "AE": 5 }
```

Convert to typed objects:

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --objects
```

Show the parser's view of nested structures within a message:

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --structures
```

Repeat-parse for benchmarking (`--repeats=N`):

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --stats --repeats=20
```

## Performance

Numbers below are illustrative — generated messages, single-threaded, parser-only (no I/O). Run them yourself with the corresponding `npm run` script.

| Benchmark | Script | Fields/msg | Length (chars) | I7-4770 @ 3.5 GHz | i7-12700H @ 2.3 GHz |
| --- | --- | --- | --- | --- | --- |
| Heartbeat | `npm run qf-bench-hb` | 10 | 131 | 3.8 µs/msg | 1.9 µs/msg |
| Logon | `npm run qf-bench-lo` | 22 | 214 | 5.9 µs/msg | 2.8 µs/msg |
| Execution Report | `npm run repo44-bench-er` | 58 | 604 | 14.6 µs/msg | — |
| Execution Report (large) | `npm run repo44-bench-er` | 646 | 6 572 | 206.2 µs/msg | 93.5 µs/msg |
| Security Definition | `npm run repo44-bench-sd` | 229 | 2 466 | 57.8 µs/msg | 30.9 µs/msg |
| Trade Capture | `npm run repo44-bench-tc` | 578 | 5 741 | 174.8 µs/msg | 90.8 µs/msg |

## Developing on jspurefix

Clone and build:

```shell
git clone https://github.com/TimelordUK/jspurefix.git
cd jspurefix
npm install         # postinstall unpacks the FIX dictionaries
npm run build
```

Run the test suite (Jest, single worker, with coverage):

```shell
npm test
```

The full suite currently runs 535 tests across 43 suites and takes ~70 s on a modern laptop. `script/build.sh` (unix) and `script\build.cmd` (windows) wrap install + build + test if you want a one-shot bootstrap.

Try a sample end-to-end:

```shell
npm run tcp-tc      # trade-capture client + server
```

## C# Port

This engine has been ported to C# as [cspurefix](https://github.com/TimelordUK/cspurefix), which is kept in lockstep with this codebase. If you're on .NET:

- **Source**: [TimelordUK/cspurefix](https://github.com/TimelordUK/cspurefix)
- **Demo**: [TimelordUK/purefix-standalone-demo](https://github.com/TimelordUK/purefix-standalone-demo)
- **NuGet**: [PureFix.Types.Core](https://www.nuget.org/packages/PureFix.Types.Core/)

## License

MIT. See [LICENSE](./LICENSE).
