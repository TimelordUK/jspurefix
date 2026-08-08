# Customising the Logon

Almost every counterparty wants something on the Logon that the standard message does
not carry — an account, a default application version, a broker-issued token, a free
text field. This is the single most asked question about jspurefix
([#93](https://github.com/TimelordUK/jspurefix/issues/93),
[#39](https://github.com/TimelordUK/jspurefix/issues/39),
[#96](https://github.com/TimelordUK/jspurefix/issues/96)) and it has a short answer
and a long one.

**The short answer:** two things must both be true, and people usually only do one.

1. The field must be **on the Logon object** the engine sends.
2. The field must be **declared on Logon in the dictionary** the session loads —
   otherwise the encoder has no tag to write and drops it.

Doing (1) without (2) is the classic failure: you add the field, nothing changes, and
nothing explains why. The engine warns when it drops a field, so watch the log:

```
warn  test_client:encoder  field 'Account' is not declared on Logon in this dictionary - it will not be sent
```

That message means you need step (2) — a dictionary — not more code.

---

## Step 1 — put the field on the message

Three ways, in increasing order of effort. Use the first one that fits.

### The `Logon` block (no code)

Name the extra fields under `Logon` in the session description. They are merged over
the fields the engine derives from the description, so you can add, override, or
suppress:

```json
{
  "application": {
    "type": "initiator",
    "name": "my_client",
    "tcp": { "host": "fix.broker.com", "port": 10400 },
    "protocol": "ascii",
    "dictionary": "repo44"
  },
  "BeginString": "FIX4.4",
  "SenderCompId": "TVKD",
  "TargetCompID": "MXVMDGW",
  "Password": "password",
  "HeartBtInt": 30,
  "ResetSeqNumFlag": true,

  "Logon": {
    "Account": "TVKD_001",
    "DefaultApplVerID": "9"
  }
}
```

- **Add** a field — name it with its value.
- **Override** a field the engine derived — `"Logon": { "HeartBtInt": 60 }`.
- **Suppress** a field — `"Logon": { "Username": null }`. (Simply leaving `Username`
  out of the description entirely has the same effect; a null or empty value is never
  encoded.)

Note this block applies to the Logon your session *sends*. An acceptor sends a Logon
too — its response — so a block configured on an acceptor appears on that response.

`EncryptMethod` is a special case: the engine always derives `0` (None) and ignores a
top-level `"EncryptMethod"` in the description. Set it through the block if you need
another value.

### An `ObjectMutator` (a callback)

When the values are computed at run time — a signature over the sequence number, a
nonce, a token fetched at start up — a static block will not do. Every session
message passes through the factory's mutator on its way out:

```typescript
import { ObjectMutator, ISessionDescription, MsgType } from 'jspurefix'
import { ILooseObject } from 'jspurefix/dist/collections/collection'

const stampToken: ObjectMutator = (
  description: ISessionDescription,
  type: string,
  o: ILooseObject): ILooseObject => {
  if (type !== MsgType.Logon) return o
  return { ...o, RawData: Buffer.from(signOn(description.SenderCompId)) }
}
```

The mutator is a constructor argument to any factory deriving from
`ASessionMsgFactory`, so install it with the factory (next section). It also sees
`StandardHeader` (as type `'StandardHeader'`), Logout, TestRequest, Heartbeat,
ResendRequest, SequenceReset and Reject — which is what makes it the right hook for
anything a counterparty demands on *every* message.

### Your own session message factory

Full control: subclass the stock factory and override `logon()`.

```typescript
import { AsciiSessionMsgFactory } from 'jspurefix'
import { ILooseObject } from 'jspurefix/dist/collections/collection'

export class BrokerSessionMsgFactory extends AsciiSessionMsgFactory {
  public logon (): ILooseObject {
    return {
      ...super.logon(),
      Password: this.freshToken(),
      Account: this.description.SenderCompId
    }
  }

  private freshToken (): string { /* ... */ }
}
```

Override `header()` the same way if a counterparty needs a header field on every
message. Call `super` and spread — do not rebuild the object from scratch, or you
will lose fields the engine relies on.

## Installing your factory

The launcher you already subclass has one method for this:

```typescript
class AppLauncher extends SessionLauncher {
  protected override makeSessionMsgFactory (
    description: ISessionDescription): ISessionMsgFactory | null {
    return new BrokerSessionMsgFactory(description)
  }
}
```

Return `null` for the stock factory. If you build the container yourself, pass a
provider instead:

```typescript
new SessionContainer(d => new BrokerSessionMsgFactory(d))
```

Both work for initiators and acceptors. An acceptor builds one factory **per accepted
connection**, so that each session's headers carry its own comp ids; your factory is
carried into those per-connection scopes rather than being replaced by the stock one
([#87](https://github.com/TimelordUK/jspurefix/issues/87)). That works automatically
for any factory whose constructor takes `(description, mutator)`. If yours takes
something else, override `cloneFor`:

```typescript
public override cloneFor (description: ISessionDescription): ISessionMsgFactory {
  return new MyFactory(description, this.apiKey)
}
```

> Older advice in issue #39 — `sessionContainer.clearInstances()`, re-register, and
> rebuild `JsFixConfig` inside `registerApplication` — is obsolete and will fight the
> per-connection session scopes. Use `makeSessionMsgFactory`.

---

## Step 2 — declare the field in a dictionary

The encoder is dictionary driven. It resolves each key on your object to a field of
the message being encoded, and a key it cannot resolve has no tag, so it is dropped.
`Account` is tag 1, but it is **not a field of Logon** in standard FIX 4.4 — so
putting it on the Logon object achieves nothing on its own.

Copy the QuickFIX XML for your dialect, add the field to the Logon message, and point
the session at it:

```xml
<message name='Logon' msgtype='A' msgcat='admin'>
  <field name='EncryptMethod' required='Y' />
  <field name='HeartBtInt' required='Y' />
  <field name='ResetSeqNumFlag' required='N' />
  <field name='Username' required='N' />
  <field name='Password' required='N' />
  <!-- what this counterparty demands -->
  <field name='Account' required='N' />
  <field name='DefaultApplVerID' required='N' />
</message>
```

The field must also exist in the `<fields>` section of the same file:

```xml
<field number='1' name='Account' type='STRING' />
```

Then reference it from the session description:

```json
{ "application": { "dictionary": "/abs/path/to/FIX44-BROKER.xml" } }
```

> **Path gotcha.** A *relative* dictionary path is resolved against the **jspurefix
> package root** (`node_modules/jspurefix`), not your project's working directory.
> Use an absolute path — `path.join(__dirname, 'dictionaries/FIX44-BROKER.xml')` —
> or register an alias in `data/dictionary.json` as described in the README under
> [Data Dictionaries](../README.md#data-dictionaries).

Generating typed interfaces for the dialect is optional — the engine reads the XML at
run time either way — but worth doing if you want `ILogon` to know about your field.

## Checklist when a tag still is not on the wire

1. Is there an `is not declared on Logon in this dictionary` warning in the log? →
   the dictionary is the problem, not your code.
2. Is the session actually loading the dictionary you edited? Relative paths resolve
   against the package root — see above.
3. Is the value `null`, `undefined` or `''`? Those are never encoded, by design.
4. Are you customising a factory the acceptor then replaces? Implement `cloneFor` if
   your constructor is not `(description, mutator)`.
5. Turn on `logReceivedMsgs` / the `onEncoded` hook on your session and read the
   encoded string directly — it is the ground truth.

## See also

- [docs/acceptor.md](acceptor.md) — per-connection session scopes and why the factory
  is cloned.
- `src/test/session/custom-logon.test.ts` — every behaviour above, exercised.
- `src/test/session/custom-session-msg-factory.test.ts` — factory survival into
  acceptor scopes.
