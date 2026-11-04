// The smaller open-source pieces listed on /open-source (standards,
// libraries, XRPL work). Each tool has its own page in src/content/tools.
// Figures carry their as-of date; keep them in step with the tool pages,
// the Stellar Development Foundation case study and the network pages.

export interface Standard {
  name: string;
  what: string;
  status: string;
  people: string;
}

export const standards: Standard[] = [
  { name: 'SEP-53, Sign and Verify Messages', what: 'Stellar standard for signing and verifying offchain messages. Co-authored by Pamphile Roy.', status: 'Final, June 2026', people: 'pamphile-roy' },
  { name: 'SEP-61, Trustline Onboarder', what: 'Onboarding users to regulated assets, including assets that need issuer authorization. By Willem Wyndham, Enzo Soyer, Pamphile Roy and Hugo Heer.', status: 'Draft, merged October 2026', people: 'willem-wyndham' },
  { name: 'SEP-52, Key Sharing Method', what: 'A method for sharing Stellar keys. Co-authored by Pamphile Roy.', status: 'Draft', people: 'pamphile-roy' },
  { name: 'Contract admin and upgrades', what: 'A common admin and upgrade interface for Soroban contracts, drafted by Willem Wyndham and Pamela Selle with a Stellar Development Foundation engineer.', status: 'Draft', people: 'willem-wyndham' },
  { name: 'JavaScript SDK contract client', what: 'contract.Client and AssembledTransaction in Stellar’s official JavaScript SDK, written by Chad Ostrowski.', status: 'In the official SDK', people: 'chad-ostrowski' },
  { name: 'Rust crates', what: 'sep5 key derivation (225k downloads) and stellar-ledger signing (87k downloads), used by the Stellar CLI, and a Stellar RPC client. By Willem Wyndham and Elizabeth Engelman.', status: 'Used by the Stellar CLI', people: 'elizabeth-engelman' },
  { name: 'Trezor Stellar package', what: 'Trezor’s Stellar package upgraded to Stellar SDK v17 by Pamela Selle.', status: 'Shipped, September 2026', people: 'pamela-selle' },
  { name: 'Carbon Coin (XRPL)', what: 'An XRPL multi-purpose token with a 2-of-3 multisig issuer, freeze and clawback, built by Chad Ostrowski.', status: 'Testnet demo, September 2026', people: 'chad-ostrowski' },
  { name: 'Loam and SmartDeploy', what: 'The tools we started in 2023, from which Stellar Scaffold and the Stellar Registry grew. Across the four, our Stellar crates have 125,107 downloads (November 2, 2026).', status: 'Since 2023', people: 'willem-wyndham' },
  { name: 'XRPL Rust library', what: 'Fixes contributed upstream by Willem Wyndham.', status: 'Contributor', people: 'willem-wyndham' },
];
