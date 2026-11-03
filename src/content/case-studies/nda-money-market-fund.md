---
title: A tokenized share class for a €130M money-market fund
order: 6
eyebrow: Financial institution · Stellar
lede: A regulated European private bank is adding a tokenized share class to its €130M money-market fund, on Stellar. In build; launch targeted for 2027.
cta: Bringing a fund onchain? Talk to the engineers building one.
facts:
- label: Client
  value: Regulated European private bank
  style: plain
- label: Role
  value: Onchain architecture and smart contract engineering
  style: plain
- label: Network
  value: Stellar
  style: net
- label: Status
  value: In build
  style: net
- label: Year
  value: 2025-2026
  style: plain
- label: Engagement
  value: Integration partner
  style: plain
hero:
  image: ''
  alt: ''
  caption: Fund units mapped one-to-one to the legal structure; transfer restrictions enforced at the contract layer.
metrics:
- figure: €130M
  label: Money-market fund adding a tokenized share class
  receipt: ''
- figure: '1:1'
  label: Onchain units to the fund's legal structure
  receipt: ''
- figure: Onchain
  label: Subscriptions and redemptions, by design
  receipt: ''
- figure: '2027'
  label: Launch targeted
  receipt: ''
sections:
- id: challenge
  title: Challenge
  body: Tokenizing a regulated fund means the onchain representation has to mirror the legal structure exactly, support controlled transfers, and remain auditable for regulators, all while being efficient enough to run at scale.
- id: solution
  title: Solution
  body: |-
    We designed a compliance-aware token architecture that ties onchain units to the fund structure, supports transfer restrictions, and gives the administrator the controls they need without weakening the security model.

    The engagement runs as a fixed-scope, milestone-based integration: one scoping session with the bank's technical lead, an MOU with verifiable milestones, a first release on testnet with the operations team, then mainnet deployment, runbooks and handover at launch.
- id: architecture
  title: Architecture highlights
  body: |-
    - Subscription: the investor pays in a regulated euro stablecoin
    - Fund units issued onchain to the investor's account, mapped one-to-one to the fund's legal structure
    - NAV updates and transfer-agent controls kept with the fund manager; transfer restrictions enforced at the contract layer
    - Redemption: units returned, euro stablecoin paid out
- id: outcome
  title: Outcome
  body: Milestones are validated with the Stellar Development Foundation as they are delivered. Launch is targeted for 2027, once the bank's custody and depositary integrations are in place; subscriptions and redemptions will then run onchain under the bank's existing compliance controls. Settlement then happens in the same transaction as the order, not in days, and the manager, the depositary and the distributor share one register instead of reconciling three.
tech:
- Soroban
- Rust
- Stellar
- RWA
receipts: ''
relatedService: Tokenized funds and deposits
team:
- enzo-soyer
quote:
  label: ''
  text: ''
  author: ''
  role: ''
  portrait: ''
  portraitAlt: ''
  logo: ''
  logoAlt: ''
ndaSummary: A tokenized share class for the €130M money-market fund of a regulated European private bank, in build on Stellar.
client: Regulated European private bank
nda: true
workTitle: A tokenized share class for a €130M money-market fund
workLine: Fund units mapped to the legal structure, transfer restrictions in the contract, subscriptions and redemptions onchain.
audience: Institutions
network: Stellar
year: 2025-2026
shortTitle: Tokenizing a €130M money-market fund for a regulated European private bank
---
