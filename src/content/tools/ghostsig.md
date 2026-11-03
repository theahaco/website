---
name: GhostSig
order: 8
network: XRPL and Stellar
category: Wallet
title: 'GhostSig: a passkey wallet for XRPL and Stellar that stores no keys'
metaTitle: 'GhostSig: passkey web wallet for XRPL and Stellar | The Aha Company'
description: 'GhostSig, a passkey web wallet for XRPL and Stellar that stores no keys, default in the Stellar Wallets Kit and xrpl-connect. In beta.'
lede: 'GhostSig is a passkey web wallet for the XRP Ledger and Stellar. Its key is derived from the user’s passkey at each signature and never stored, and there is no backend. It is the default passkey module in the Stellar Wallets Kit and in XRPL Commons’ xrpl-connect. GhostSig is in beta, and the work continues.'
summary: 'One passkey wallet for XRPL and Stellar, with keys derived at each signature and never stored.'
headline:
  figure: '2'
  label: wallet kits ship it by default
facts:
- label: Networks
  value: XRPL and Stellar
- label: Our role
  value: Built and maintained by Pamphile Roy
- label: License
  value: MIT
- label: Status
  value: Beta, mainnet enabled, not yet audited
- label: Stack
  value: TypeScript, WebAuthn PRF, SLIP-10, SLIP-39
- label: Site
  value: ghostsig.dev
sections:
- id: what-it-does
  title: What it does
  body: |-
    GhostSig keeps no key. Each time the user signs, it derives the key from their passkey through the WebAuthn PRF extension, signs, and discards it. Nothing is written to storage, and there is no backend.

    - XRPL multi-purpose tokens and trust lines, and Stellar SEP-41 tokens
    - SLIP-39 split backups
    - A popup protocol any application can connect to, used by [Tansu](/open-source/tansu) and by Carbon Coin, our XRPL token demo
- id: where-it-ships
  title: Where it ships
  body: |-
    GhostSig is the default passkey module in the Stellar Wallets Kit (v2.7.0) and in XRPL Commons’ xrpl-connect (1.0.0), so apps built on either kit can offer it without extra work. One passkey wallet covers pilots on both networks.
- id: status
  title: Status
  body: |-
    GhostSig is in beta: mainnet is enabled, it has not been audited yet, and the work continues. Pamphile Roy built it and maintains it, under the MIT license. Our other passkey wallet, [Nido](/open-source/nido), is a smart-account wallet for Stellar only, with its rules enforced on chain.
tech:
- TypeScript
- WebAuthn PRF
- SLIP-10
- SLIP-39
- XRPL
- Stellar
receipts: |-
  - [ghostsig.dev](https://ghostsig.dev)
built:
- pamphile-roy
related:
- nido
- tansu
cta: Running a pilot on XRPL or Stellar? Talk to the engineers who build its wallets.
maintainer: Pamphile Roy
maintainerType: Person
license: MIT
languages:
- TypeScript
---
