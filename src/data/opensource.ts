// The open-source tools and standards shown on /open-source. Figures carry
// their as-of date; keep them in step with the Stellar Development
// Foundation case study and the network pages, which quote the same numbers.

export interface Tool {
  slug: string;
  name: string;
  network: string;
  what: string;
  why: string;
  role: string;
  status: string;
  proofLabel?: string;
  proof?: string;
  built: string[]; // team slugs, in credit order
  builtNote?: string; // credit not on a team page
  links: { label: string; href: string }[];
}

export const tools: Tool[] = [
  {
    slug: 'stellar-cli',
    name: 'Stellar CLI',
    network: 'Stellar',
    what: 'The Stellar network’s official command-line tool, maintained by the Stellar Development Foundation: build, deploy and call contracts, and manage keys.',
    why: 'Every team building on Stellar starts with it. We built the plugin system, contract calls generated from each contract’s interface, SEP-5 key management with Ledger signing tested in CI, and TypeScript client generation.',
    role: 'Core contributor: about a fifth of all commits, 2022 to 2025',
    status: 'Official SDF tool, v28.1.0 (September 2026)',
    proofLabel: 'Adoption',
    proof: '297k downloads on crates.io with its predecessor soroban-cli (October 2026)',
    built: ['willem-wyndham', 'elizabeth-engelman', 'chad-ostrowski'],
    links: [{ label: 'GitHub', href: 'https://github.com/stellar/stellar-cli' }],
  },
  {
    slug: 'scaffold-stellar',
    name: 'Scaffold Stellar',
    network: 'Stellar',
    what: 'A Stellar CLI plugin that sets up a full-stack project in one command: contracts, a web front end, a local network and typed clients.',
    why: 'A proof of concept starts from a reproducible, documented project instead of a blank repository. Deployment to public networks stays locked unless the project allows it, and every release ships with a software bill of materials.',
    role: 'Built and maintained by us since 2025, funded as a Stellar public good',
    status: '37 releases (October 2026); version 1.0 in preparation',
    proofLabel: 'Adoption',
    proof: '111 projects build on it and its crates have 21,492 downloads (2 November 2026). Listed in the official Stellar docs; OpenZeppelin’s Contracts Wizard exports any Stellar contract as a Scaffold Stellar package',
    built: ['willem-wyndham', 'zach-fedor', 'pamela-selle', 'chad-ostrowski', 'pamphile-roy', 'elizabeth-engelman'],
    links: [{ label: 'GitHub', href: 'https://github.com/stellar-scaffold/cli' }],
  },
  {
    slug: 'stellar-registry',
    name: 'Stellar Registry',
    network: 'Stellar',
    what: 'An onchain package manager for Stellar smart contracts: it publishes code under a name and a version, deploys named instances and resolves them by name.',
    why: 'An issuer can run its own namespace and govern which contract version its name points to. Compromised entries can be flagged and are refused by default.',
    role: 'Designed, built and operated by us',
    status: 'On mainnet since July 2026; contract release v0.8.0 (October 2026)',
    proofLabel: 'Audit and adoption',
    proof: 'Audited by Veridise, no findings (November 2025). 218 names in 67 namespaces on mainnet (2 November 2026) and 166,833 mainnet calls to contracts running Registry-published code (31 October 2026). Our team registered most third-party names so any developer can resolve them; a name implies no relationship with its issuer',
    built: ['willem-wyndham', 'pamela-selle', 'chad-ostrowski', 'zach-fedor'],
    links: [
      { label: 'rgstry.xyz', href: 'https://rgstry.xyz' },
      { label: 'Audit report', href: 'https://veridise.com/wp-content/uploads/2025/12/VAR-AhaLabs-20250903-scaffold-stellar-v3.pdf' },
    ],
  },
  {
    slug: 'nido',
    name: 'Nido',
    network: 'Stellar',
    what: 'A passkey wallet for Stellar. The account is a smart contract controlled by the user’s devices: no seed phrase, and no signing key on a server.',
    why: 'Self-custody without seed phrases, with spending limits enforced on chain by Perch, time-limited app permissions and recovery controls a bank’s technology-risk team can test.',
    role: 'Built by our engineers; open source (Apache-2.0)',
    status: 'Curated mainnet release since 26 October 2026; mainnet access stays curated until an external audit completes',
    proofLabel: 'Adoption and testing',
    proof: '54 mainnet wallets in the curated release, 705 testnet wallets since 1 June 2026 (our own testing included) and 8 apps integrating it (2 November 2026). 134 Rust tests, 91 of them with real passkey signatures and zero-knowledge proofs',
    built: ['willem-wyndham', 'elizabeth-engelman', 'enzo-soyer', 'chad-ostrowski'],
    links: [
      { label: 'nido.fyi', href: 'https://nido.fyi' },
      { label: 'GitHub', href: 'https://github.com/nidohq/nido' },
    ],
  },
  {
    slug: 'perch',
    name: 'Perch',
    network: 'Stellar',
    what: 'A policy layer for Stellar smart accounts: what each key may do, written as a reviewable document and enforced on chain.',
    why: 'Spending caps, session keys, scoped app access, and recovery by guardians or a zero-knowledge proof, compiled onto OpenZeppelin’s smart-account rules. Every Nido wallet runs on it.',
    role: 'Built and maintained by our team',
    status: 'On mainnet since October 2026, published through the Stellar Registry',
    proofLabel: 'Adoption',
    proof: '2,106 npm downloads since its 9 September release; 3 apps run their users on its session rules (2 November 2026)',
    built: [],
    links: [{ label: 'GitHub', href: 'https://github.com/stellar-registry/perch' }],
  },
  {
    slug: 'moonlight',
    name: 'Moonlight',
    network: 'Stellar',
    what: 'A privacy layer for Stellar payments. The provider knows each customer; the ledger shows amounts and flows between one-time keys, but no names.',
    why: 'Private, not anonymous: confidential to the market, identified to a regulated intermediary. No zero-knowledge proofs; amounts, entries and exits stay visible.',
    role: 'Protocol designed by Fabricius Zatti and built by our team',
    status: 'Limited mainnet release since July 2026, for invite-only pilots',
    proofLabel: 'Audit',
    proof: 'Core contracts audited by Runtime Verification through the SDF’s Soroban Audit Bank (report of 23 July 2026): no critical or high findings',
    built: ['fabricius-zatti', 'chad-ostrowski'],
    builtNote: 'Hugo Heer (browser wallet)',
    links: [
      { label: 'GitHub', href: 'https://github.com/moonlight-protocol' },
      { label: 'Audit report', href: 'https://github.com/Moonlight-Protocol/soroban-core/tree/main/audits' },
    ],
  },
  {
    slug: 'tansu',
    name: 'Tansu',
    network: 'Stellar',
    what: 'Onchain governance for open-source projects, and a record that proves which code was released, what it contains and who approved it.',
    why: 'Release evidence a third party can check without access to the vendor’s systems: commit hashes, software bills of materials and signed attestations, append-only.',
    role: 'Created and maintained by Pamphile Roy; funded as a Stellar public good through The Aha Company',
    status: 'Mainnet contract since October 2025; v3.0.0 (October 2026); internal security reviews, no external audit yet',
    proofLabel: 'Adoption',
    proof: 'The Stellar Community Fund votes its Public Goods Award on Tansu: 58 proposals approved over three rounds since Q2 2026, about $1.4M, the latest round on mainnet. 8 projects use it on mainnet (2 November 2026)',
    built: ['pamphile-roy', 'willem-wyndham', 'pamela-selle'],
    links: [
      { label: 'tansu.dev', href: 'https://tansu.dev' },
      { label: 'GitHub', href: 'https://github.com/Consulting-Manao/tansu' },
    ],
  },
  {
    slug: 'ghostsig',
    name: 'GhostSig',
    network: 'XRPL and Stellar',
    what: 'A passkey web wallet for XRPL and Stellar. Its key is derived from the user’s passkey at each signature and never stored; there is no backend.',
    why: 'One passkey wallet for XRPL and Stellar pilots, with XRPL multi-purpose tokens and trust lines, Stellar tokens and split backups.',
    role: 'Built and maintained by Pamphile Roy (MIT license)',
    status: 'Beta, mainnet enabled, not yet audited',
    proofLabel: 'Adoption',
    proof: 'Default module in the Stellar Wallets Kit (v2.7.0) and in XRPL Commons’ xrpl-connect (1.0.0)',
    built: ['pamphile-roy'],
    links: [{ label: 'ghostsig.dev', href: 'https://ghostsig.dev' }],
  },
];

export interface Standard {
  name: string;
  what: string;
  status: string;
  people: string;
}

export const standards: Standard[] = [
  { name: 'SEP-53, Sign and Verify Messages', what: 'Stellar standard for signing and verifying off-chain messages. Co-authored by Pamphile Roy.', status: 'Final, June 2026', people: 'pamphile-roy' },
  { name: 'SEP-61, Trustline Onboarder', what: 'Onboarding users to regulated assets, including assets that need issuer authorization. By Willem Wyndham, Enzo Soyer, Pamphile Roy and Hugo Heer.', status: 'Draft, merged October 2026', people: 'willem-wyndham' },
  { name: 'SEP-52, Key Sharing Method', what: 'A method for sharing Stellar keys. Co-authored by Pamphile Roy.', status: 'Draft', people: 'pamphile-roy' },
  { name: 'Contract admin and upgrades', what: 'A common admin and upgrade interface for Soroban contracts, drafted by Willem Wyndham and Pamela Selle with a Stellar Development Foundation engineer.', status: 'Draft', people: 'willem-wyndham' },
  { name: 'JavaScript SDK contract client', what: 'contract.Client and AssembledTransaction in Stellar’s official JavaScript SDK, written by Chad Ostrowski.', status: 'In the official SDK', people: 'chad-ostrowski' },
  { name: 'Rust crates', what: 'sep5 key derivation (225k downloads) and stellar-ledger signing (87k downloads), used by the Stellar CLI, and a Stellar RPC client. By Willem Wyndham and Elizabeth Engelman.', status: 'Used by the Stellar CLI', people: 'elizabeth-engelman' },
  { name: 'Trezor Stellar package', what: 'Trezor’s Stellar package upgraded to Stellar SDK v17 by Pamela Selle.', status: 'Shipped, September 2026', people: 'pamela-selle' },
  { name: 'Carbon Coin (XRPL)', what: 'An XRPL multi-purpose token with a 2-of-3 multisig issuer, freeze and clawback, built by Chad Ostrowski.', status: 'Testnet demo, September 2026', people: 'chad-ostrowski' },
  { name: 'Loam and SmartDeploy', what: 'The tools we started in 2023, from which Scaffold Stellar and the Stellar Registry grew. Across the four, our Stellar crates have 125,107 downloads (2 November 2026).', status: 'Since 2023', people: 'willem-wyndham' },
  { name: 'XRPL Rust library', what: 'Fixes contributed upstream by Willem Wyndham.', status: 'Contributor', people: 'willem-wyndham' },
];
