---
title: Société Générale-FORGE
order: 1
eyebrow: Financial institution · Stellar
lede: EURCV, Société Générale-FORGE's regulated euro stablecoin, live on Stellar mainnet since January 2026. We built the issuance and governance contracts on Soroban, with compliance controls agreed with the FORGE compliance team.
cta: Issuing a regulated stablecoin? Talk to the engineers who took one to mainnet.
facts:
- label: Client
  value: Société Générale-FORGE
  style: plain
- label: Role
  value: Smart contract engineering and onchain architecture
  style: plain
- label: Network
  value: Stellar
  style: net
- label: Status
  value: Live since Jan 2026
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
  caption: Issuer, compliance and pause authorities as distinct onchain roles around one mainnet contract.
metrics:
- figure: €20M+
  label: Regulated stablecoin issued onchain
  receipt: https://stellar.expert/explorer/public/asset/EURCV-GCEYGIVOLAVBF2TG2RUSGTUJCIN75KEX3NGLMY4VPL4GFE5L355AXW3G
- figure: Live
  label: On Stellar mainnet since January 2026
  receipt: https://stellar.expert/explorer/public/asset/EURCV-GCEYGIVOLAVBF2TG2RUSGTUJCIN75KEX3NGLMY4VPL4GFE5L355AXW3G
- figure: '3'
  label: 'Distinct onchain roles: issuer, compliance, pause'
  receipt: ''
- figure: Verified
  label: Deployed bytecode matches the audited source
  receipt: ''
sections:
- id: challenge
  title: Challenge
  body: A regulated bank needed a euro stablecoin that satisfied institutional compliance, denylist controls, pausability, and auditable issuance, while living on a public network where anyone can read the ledger. The contracts had to be production-grade from day one, with no room for the experimental patterns common in DeFi.
- id: solution
  title: Solution
  body: |-
    We designed and built the Soroban contracts that mint, govern, and control EURCV, with role-separated administration, a denylist interface for compliance, and pause controls for incident response. Every privileged action is explicit and auditable, and the issuance flow maps cleanly onto the bank’s existing controls.

    Compliance controls were agreed with the FORGE compliance team before the first line of contract code.
- id: architecture
  title: Architecture highlights
  body: |-
    - Role-separated admin: issuer, compliance and pause authorities are distinct onchain roles
    - Denylist interface so flagged accounts can be blocked from transfers in line with regulation
    - Pausable transfers for incident response without touching balances
    - Source-verified contracts so anyone can confirm the deployed bytecode matches the audited source
    - Audited by Hacken before mainnet deployment
- id: outcome
  title: Outcome
  body: 'EURCV is live on Stellar mainnet with €20M+ issued onchain: regulated stablecoin, not TVL. The FORGE compliance team operates freeze and denylist controls, and the contracts are source-verified so any counterparty can check what is deployed.'
tech:
- Soroban
- Rust
- Stellar
- SEP-41
- Source verification
receipts: |-
  - [EURCV on the Stellar explorer](https://stellar.expert/explorer/public/asset/EURCV-GCEYGIVOLAVBF2TG2RUSGTUJCIN75KEX3NGLMY4VPL4GFE5L355AXW3G)
  - [Source-verified contract](#)
relatedService: Stablecoin issuance and governance
team:
- enzo-soyer
quote:
  label: Client
  text: ''
  author: ''
  role: ''
  portrait: ''
  portraitAlt: ''
  logo: /images/logos/logo-light-sgforge.webp
  logoAlt: Société Générale FORGE
ndaSummary: ''
client: Société Générale-FORGE
nda: false
workTitle: EURCV, a regulated euro stablecoin on Stellar mainnet
workLine: Issuance and governance contracts on Soroban, compliance controls agreed with the FORGE compliance team.
audience: Institutions
network: Stellar
year: 2025-2026
shortTitle: Société Générale-FORGE
---
