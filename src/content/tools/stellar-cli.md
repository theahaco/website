---
name: Stellar CLI
order: 1
network: Stellar
category: Developer tooling
title: 'Stellar CLI: our core contributions to the network’s official command line'
metaTitle: 'Stellar CLI contributions: plugins, typed contract calls, key management | The Aha Company'
description: 'We are core contributors to the Stellar CLI, Stellar’s official command line: about a fifth of its commits from 2022 to 2025, including its plugin system.'
lede: 'The Stellar CLI is the official command-line tool of the Stellar network, maintained by the Stellar Development Foundation. Teams use it to build, deploy and call smart contracts and to manage keys. Our engineers wrote about a fifth of its commits from 2022 to 2025, including several of the parts developers use every day.'
summary: 'Core contributors to Stellar’s official command line: plugins, typed contract calls, key management.'
headline:
  figure: '~20%'
  label: of its commits, 2022 to 2025
facts:
- label: Network
  value: Stellar
- label: Our role
  value: Core contributor
- label: Owner
  value: Stellar Development Foundation
- label: Status
  value: v28.1.0 (September 2026)
  live: true
- label: Language
  value: Rust
- label: License
  value: Apache-2.0
metrics:
- figure: '~20%'
  label: Of all Stellar CLI commits, 2022 to 2025
  receipt: https://github.com/stellar/stellar-cli/graphs/contributors
- figure: 297k
  label: Downloads on crates.io, with its predecessor soroban-cli (October 2026)
  receipt: https://crates.io/crates/stellar-cli
- figure: 225k
  label: Downloads of sep5, our key-derivation crate inside the CLI (November 2026)
  receipt: ''
sections:
- id: what-it-does
  title: What it does
  body: |-
    Every team that builds smart contracts on Stellar starts with the Stellar CLI. It compiles contracts to WebAssembly, deploys them, calls their functions, manages keys, and builds, simulates, signs and sends transactions, on a local network, on testnet or on mainnet.

    The CLI belongs to the Stellar Development Foundation, which maintains it and sets its roadmap. We are among its core contributors.
- id: what-we-built
  title: What we built
  body: |-
    - **The plugin system**, which lets separate tools run as `stellar` subcommands. [Scaffold Stellar](/open-source/scaffold-stellar) and the [Stellar Registry](/open-source/stellar-registry), which we build, run this way as `stellar scaffold` and `stellar registry`.
    - **Contract calls generated from each contract’s interface**: every function of a deployed contract becomes a typed command.
    - **Key management**: SEP-5 key derivation through our sep5 crate, storage in the operating system’s keychain, and Ledger hardware signing, tested in CI.
    - **The transaction toolkit** (build, simulate, sign, send) and **TypeScript client generation**.
- id: related-work
  title: Related work
  body: |-
    The TypeScript clients the CLI generates run on `contract.Client` and `AssembledTransaction` in Stellar’s official JavaScript SDK, which Chad Ostrowski, on our team, wrote. Two of our Rust crates ship inside the CLI: sep5 for key derivation (225k downloads) and stellar-ledger for Ledger signing (87k downloads).
tech:
- Rust
- Soroban
- WebAssembly
- SEP-5
- Ledger
- TypeScript
receipts: |-
  - [Stellar CLI on GitHub](https://github.com/stellar/stellar-cli)
  - [Contributors](https://github.com/stellar/stellar-cli/graphs/contributors)
  - [stellar-cli on crates.io](https://crates.io/crates/stellar-cli)
built:
- willem-wyndham
- elizabeth-engelman
- chad-ostrowski
related:
- scaffold-stellar
- stellar-registry
cta: Building on Stellar? Talk to the engineers who write its tooling.
maintainer: Stellar Development Foundation
repo: https://github.com/stellar/stellar-cli
license: Apache-2.0
languages:
- Rust
---
