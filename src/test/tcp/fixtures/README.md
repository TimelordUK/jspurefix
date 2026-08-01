# test fixtures

`self-signed.key` / `self-signed.crt` are a throwaway self-signed certificate used only by the
TLS transport tests in this directory. They are checked in deliberately.

- **This key is public and has no security value.** It is not used by any sample, any session
  config, or any code outside `src/test`. Do not reuse it for anything.
- `CN=localhost`, `subjectAltName = DNS:localhost, IP:127.0.0.1`, valid until 2046.
- Being self-signed and issued by nothing the client trusts, it is exactly the case
  [#94](https://github.com/TimelordUK/jspurefix/issues/94) is about: a peer we cannot chain-verify.

Committing it replaces an earlier approach that shelled out to `openssl` at test load. That made
the suite depend on an `openssl` binary being on `PATH` *and* having a usable default config -
it fails outright on a machine whose `openssl.cnf` is broken (mingw64 installs are one case),
which is a poor trade for a certificate with no secret in it.

Regenerate with:

```sh
openssl req -x509 -newkey rsa:2048 -keyout self-signed.key -out self-signed.crt \
  -days 7300 -nodes -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
```
