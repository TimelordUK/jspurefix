# Benchmarking

`jsfix-bench` drives fix bytes through the real parser and reports what the work
costs in time and in garbage. It exists so a change to a hot path can be argued
about with a number rather than an opinion.

```
npm run build
npm run bench
```

Always under `--expose-gc`, which the npm scripts do for you. Without it rounds
cannot be isolated from one another and the retained heap figures mean very
little; the report says so at the top when it is missing.

## What it measures

Two cases by default, over the same input:

| case | what it covers |
| --- | --- |
| `parse:view` | tokenise, discover the structure, build the `MsgView` |
| `parse:object` | the above, then `toObject()` to materialise the object graph |

Both matter. `parse:view` is the engine's own cost. `parse:object` is what a
drop copy consumer actually pays, and the gap between them is the price of
materialising a message rather than reading fields out of the view.

## Reading the report

```
parse:object
  rounds        8 x 4000 msgs (warmup 4000)
  per msg       median 239.922us   min 231.305us   p95 242.623us   max 242.623us
  throughput    4,168 msg/sec
  noise         1.80% of median (a change smaller than this means nothing)
  gc pass       4000 msgs uninterrupted: 25 minor  0 major  5.8ms paused
  gc rate       6250.0 minor/M msgs   0.0 major/M msgs   1445ms paused/M msgs
  retained      -0.00MB   -0.6 bytes/msg   heap at end of pass 116.08MB
```

- **rounds** each contribute one timing sample. One long run cannot tell you
  whether a number repeats.
- **min** is the closest reading to the true cost of the work - a round can only
  be made slower by interference, never faster - while **median** is what to
  expect in practice.
- **noise** is the run to run spread. Treat it as the resolution of the
  instrument: a change smaller than this is not evidence of anything.
- **gc rate** is collections per million messages. Node will not tell you how
  many bytes a stretch of code allocated, so scavenge frequency is the stand in.
  In practice it is far more repeatable than the timings - the same build tends
  to reproduce it exactly - which makes it the more sensitive of the two signals
  for spotting an allocation change.
- **retained** is what the pass left behind after a forced collection, not what
  it churned through. A steady state parser should sit near zero. Churn is what
  the gc figures are for.

## Why timing and memory are measured separately

Isolating a timed round means forcing a collection between rounds, and a forced
collection is itself a gc event - counting those would report the harness rather
than the engine. So the timed rounds collect between them and report no gc
figures, and a separate uninterrupted pass runs with the probe attached and
reports no timings. BenchmarkDotNet splits its memory diagnoser out of the
timed iterations for the same reason.

Node also dispatches a gc entry on the turn *after* the collection, and the
benchmark loop is synchronous, so the runner yields until delivery goes quiet
before reading the totals. A single yield loses most of them.

## Comparing against a baseline

```
npm run build
node --expose-gc dist/jsfix-bench --save=benchmarks/baseline.json --label="before"
# ... make a change, rebuild ...
node --expose-gc dist/jsfix-bench --baseline=benchmarks/baseline.json
```

```
parse:object
  per msg   239.922us -> 243.523us   +1.50%   noise   (noise floor +/-2.75%)
  minor gc  6250.0 -> 6250.0 per M msgs   +0.00%
```

A difference is only called `FASTER` or `SLOWER` when it is larger than the
spread both runs displayed. Anything else is reported as `noise`, because that
is what it is. Baselines are specific to the machine and node build that took
them - the report warns when they differ - so `benchmarks/` is not committed.

## Options

| flag | meaning |
| --- | --- |
| `--fix=<path>` | fix log to parse |
| `--dict=<name>` | dictionary, e.g. `qf44`, `repo44`, `qf50sp2` |
| `--delimiter=<char>` | field delimiter in the log, defaults to `\|` |
| `--depth=view,object` | which stages to measure |
| `--rounds=<n>` | measured rounds, one sample each |
| `--msgs=<n>` | messages per round |
| `--warmup=<n>` | messages discarded before measuring |
| `--save=<path>` | write the suite to json |
| `--baseline=<path>` | compare against a saved suite |
| `--json` | print the suite as json instead of a report |

Ready made suites: `bench:er`, `bench:er2`, `bench:nos`, `bench:md`, `bench:tc`.

Message counts are rounded up to a whole number of passes over the input file,
since a pass cannot be stopped part way. A log holding one message gives the
finest control.

## Warmup

The default warmup is 20,000 messages. V8 needs to see a function run several
thousand times before it stops interpreting it, so an unwarmed first round
measures the wrong code. If you lower it, check the noise figure has not risen -
that is what an under-warmed run looks like.
