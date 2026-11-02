---
title: Why Stellar is the right chain for tokenization
category: Institutions
lede: For a regulated issuer, the question is not which chain is fastest. It is where the controls a regulator expects are part of the ledger, where custodians already are, and where counterparties have already gone. On those three questions, Stellar is hard to beat.
author: enzo-soyer
authorName: Enzo Soyer
authorRole: Chief Executive Officer · President, The Aha Company France
date: ''
readMinutes: '3'
cover: ''
coverCaption: ''
authorBio: CEO of The Aha Company. Stellar Community Fund reviewer and co-author of SEP-61.
relatedWork: societe-generale-forge
relatedWorkLabel: EURCV, a regulated euro stablecoin on Stellar
audience: Institutions
network: Stellar
order: 3
---
## The controls are part of the ledger

On Stellar, a token issued with the network's built-in functions carries issuer controls at the protocol level: authorization required, so only approved accounts can hold it, then freeze and clawback. A regulated issuer gets the controls its compliance team asks for without writing or auditing token code. Transactions settle in about five seconds, for a fraction of a cent.

## Smart contracts where the rules need them

Since Soroban, every Stellar asset also has a smart-contract interface, the Stellar Asset Contract, so an issuer can add rules the built-in controls cannot express. For EURCV, Société Générale-FORGE's regulated euro stablecoin, we built an admin contract on Soroban that pauses the asset and bans accounts pre-emptively, two controls a native asset does not offer on its own. EURCV stays a native Stellar asset; the contract governs it.

## Institutions are already there

Franklin Templeton brought its money market fund to Stellar in 2021, the first US-registered fund on a public blockchain. Circle issues USDC and EURC on Stellar, Ondo's USDY went live in September 2025, and EURCV followed in 2026, after Ethereum, Solana and the XRP Ledger. The register of SAFO, the overnight fund from Spiko and Amundi, lives on Ethereum and Stellar. In May 2026, DTCC and the Stellar Development Foundation announced plans to tokenize DTC-custodied assets on Stellar, targeted for the first half of 2027.

## Custody is not a blocker

Custodians such as Taurus have supported Stellar since 2024, for custody and for issuance. Check one thing early: support for native assets usually comes first, and support for smart contract calls can come later. That decides how much an issuer can rely on contracts on day one.

## What to weigh

Stellar is not the deepest market: RWA.xyz counted $3.6B of tokenized assets on Stellar in October 2026, against $16.8B on Ethereum. A native asset has no asset-wide pause or rule engine of its own, so those come from a contract, with an audit to match. And most issuers go multi-chain sooner or later, so the useful question is which network carries the controls, not which one carries everything.

## Where to start

Start with the compliance policy, not the chain. If the built-in controls cover it, a native asset is the simplest thing to operate and to audit. If the product needs subscription, redemption and cash settlement onchain, add contracts on Soroban. Either way, choose the custodian before the token model.
