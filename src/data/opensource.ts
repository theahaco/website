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
    proof: 'Listed in the official Stellar documentation',
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
    proof: 'Audited by Veridise, no findings (November 2025). 218 contracts and assets named, 55 contract versions published on mainnet (October 2026)',
    built: ['willem-wyndham', 'pamela-selle', 'chad-ostrowski', 'zach-fedor'],
    links: [{ label: 'rgstry.xyz', href: 'https://rgstry.xyz' }],
  },
  {
    slug: 'nido',
    name: 'Nido',
    network: 'Stellar',
    what: 'A passkey wallet for Stellar. The account is a smart contract controlled by the user’s devices: no seed phrase, and no signing key on a server.',
    why: 'Self-custody without seed phrases, with spending limits, time-limited app permissions and recovery controls a bank’s technology-risk team can test.',
    role: 'Built by our engineers; open source (Apache-2.0)',
    status: 'Live on testnet; mainnet contracts deployed for an invite-only pilot (October 2026); public launch after an external audit',
    proofLabel: 'Testing',
    proof: '134 Rust tests, 91 of them with real passkey signatures and zero-knowledge proofs; about 1,000 TypeScript unit tests',
    built: ['willem-wyndham', 'elizabeth-engelman', 'enzo-soyer', 'chad-ostrowski'],
    links: [
      { label: 'nido.fyi', href: 'https://nido.fyi' },
      { label: 'GitHub', href: 'https://github.com/nidohq/nido' },
    ],
  },
  {
    slug: 'moonlight',
    name: 'Moonlight',
    network: 'Stellar',
    what: 'A privacy layer for Stellar payments: regulated providers relay them with one-time keys, so the ledger no longer shows which account paid whom.',
    why: 'Accountable privacy, without zero-knowledge proofs. Deposits, withdrawals and amounts stay visible, and providers keep their records for auditors off chain.',
    role: 'Protocol designed by Fabricius Zatti and built by our team',
    status: 'Limited mainnet release since its audit (July 2026)',
    proofLabel: 'Audit',
    proof: 'Runtime Verification, through the Stellar Audit Bank (July 2026): findings resolved or documented',
    built: ['fabricius-zatti', 'chad-ostrowski'],
    builtNote: 'Hugo Heer (browser wallet)',
    links: [{ label: 'GitHub', href: 'https://github.com/moonlight-protocol' }],
  },
  {
    slug: 'tansu',
    name: 'Tansu',
    network: 'Stellar',
    what: 'An onchain record that proves which code was released, what it contains and who approved it, with a governance system for each project.',
    why: 'Release evidence a third party can check without access to the vendor’s systems: commit hashes, software bills of materials and signed attestations, append-only.',
    role: 'Created and maintained by Pamphile Roy; funded as a Stellar public good through The Aha Company',
    status: 'Mainnet contract since October 2025; v3.0.0 (October 2026); internal security reviews, no external audit yet',
    proofLabel: 'Adoption',
    proof: 'Ran the Stellar Community Fund’s Public Goods Award on testnet: 19 proposals, $453k allocated in Q3 2026',
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
  { name: 'XRPL Rust library', what: 'Fixes contributed upstream by Willem Wyndham.', status: 'Contributor', people: 'willem-wyndham' },
];
