---
layout: About
title: About
---


# Blake Chan
---
[Blog](https://blog.csdn.net/smilejiasmile) **·** [Code](https://github.com/ai-chen2050) **·** [LinkedIn](https://www.linkedin.com/in/blake-chen-2825a9118) **·** [Twitter](https://www.twitter.com/Mr_chen5694) **·** [Mail](mailto:ai-chen2050@qq.com) **·** [Home](https://ai-chen2050.github.io/)

I am a software engineer, innovator, doer, and Mr. Curious. I've been digging into the web3 industry for many years, and I love the equal, transparent, and decentralized nature of web3. I am committed to advancing the web3 industry around the world.

These days I work across **distributed systems, verifiable logical clocks (VLC), high-performance blockchains, AI ↔ payments rails, and Lightning Network infrastructure** — mostly as an open-source contributor to [Hetu Project](https://github.com/hetu-project) and [Loka Network](https://github.com/loka-network).

I'm also interested in applying modern mathematical principles and related algorithms to engineering, and in basic sciences such as sociology, economics, organization management, and mathematical physics. I have a positive and healthy attitude, am inclusive, and hold a firm belief in lifelong learning.

Previously, I received my master's degree in [Software Engineering](http://www.sei.ecnu.edu.cn/) at [East China Normal University](https://www.ecnu.edu.cn/) and my bachelor's degree in [New Energy Science and Engineering](https://ss.jou.edu.cn/) at [Jiangsu Ocean University](https://www.jou.edu.cn/).

## Experience

| Company | Role | Period | Type |
| --- | --- | --- | --- |
| Nagara Labs ([Hetu](https://github.com/hetu-project) / [Loka](https://github.com/loka-network)) | Senior Web3 / Distributed Systems Engineer | 2024.04 – Present | Fulltime |
| [KAMI Vision](https://kamivision.com/) | Senior Web3 / DePIN Engineer | 2023.02 – 2023.12 | Fulltime |
| [Amber Group](https://www.linkedin.com/company/amberbtc/) | Blockchain Infra Dev / Searcher | 2022.04 – 2022.12 | Fulltime |
| Shanghai Jiansu Network Tech | Consortium Blockchain Dev | 2020.05 – 2022.04 | Fulltime |
| Shanghai [Distribution / Ontology](https://www.linkedin.com/company/onchain/) | Blockchain Wallet & Core Dev | 2017.08 – 2020.04 | Fulltime |

## What I'm Building (2024 – 2026)

### Hetu Project — Causality-driven infrastructure for the AI-native economy

- **[hetu-chain](https://github.com/hetu-project/hetu-chain)** — The mainnet interface of the Hetu subnet ecosystem (Cosmos-SDK + EVM, evolved from Evmos).
- **[Setu](https://github.com/hetu-project/Setu)** — A causally-driven distributed ledger system designed for AI-native economies (Rust).
- **[causalitygraph](https://github.com/hetu-project/causalitygraph)** — Decentralized data-collaboration network that achieves fast, verifiable causality and data consistency off-chain.
- **[prakasa](https://github.com/hetu-project/prakasa)** — Decentralized, privacy-preserving P2P GPU inference network built on Parallax.
- **[hetu-checkpoint](https://github.com/hetu-project/hetu-checkpoint)** — Verification network providing multi-dimensional security guarantees.
- **[aegean-consensus](https://github.com/hetu-project/aegean-consensus)** — BFT consensus protocol for multi-agent LLM systems.
- **[PoCW](https://github.com/hetu-project/PoCW)** — Proof of Causality Work — a protocol I helped iterate on for verifiable causal computation.

Earlier work on Hetu also included **VLC / TEE-VLC / Chronos / zchronod** — research and engineering on verifiable logical clocks running inside AWS Nitro Enclaves, integrated with libp2p, Sui's Mysticeti and FastPay-style protocols.

### Loka Network — Lightning-Network–native AI payment rails

- **[loka-chain](https://github.com/loka-network/loka-chain)** — Fully EVM-compatible chain with NeoBFT consensus and Block-STM parallel execution (forked & re-architected from Cronos).
- **[loka-p2p-lnd](https://github.com/loka-network/loka-p2p-lnd)** — Agentic-payments P2P Lightning node built natively on top of the Bitcoin Lightning Network.
- **[paycli](https://github.com/loka-network/paycli)** — Single-binary Payment CLI + Go SDK for L402 / Lightning payments (the basis of `lokapay`).
- **[loka-prism-l402](https://github.com/loka-network/loka-prism-l402)** — Reverse-proxy gateway that turns any API into a metered, micropayment-secured endpoint over HTTP 402.
- **[agents-pay-service](https://github.com/loka-network/agents-pay-service)** — Open-source Loka agentic Lightning-payment system for multi-agent AI, built on LNbits.
- **[loka-nostr-middleware](https://github.com/loka-network/loka-nostr-middleware)** — High-performance Rust Nostr relayer used by the Loka payment stack.

### Personal open source

- **[obsidian-wechat-public-platform](https://github.com/ai-chen2050/obsidian-wechat-public-platform)** ⭐ 150 — Publish Markdown notes from Obsidian straight to WeChat Official Account / 百度百家号.
- **[iso-relayer](https://github.com/ai-chen2050/iso-relayer)** — A high-performance, scalable ISO-relay for Nostr.
- **[gluex](https://github.com/ai-chen2050/gluex)** — A small Solana-stack experiment for cross-protocol glue in web3.
- **[ai-chen2050.github.io](https://github.com/ai-chen2050/ai-chen2050.github.io)** — Source code of this site (forked from `vuepress-theme-gungnir` and heavily modified).

## Earlier highlights (2017 – 2023)

### 2023 · KAMI Vision — DePIN / Web3Cam

- **zkCam** — A decentralized identity & video-evidence platform for IoT cameras: W3C DID + Schnorr ZKP authentication, proxy re-encryption for end-to-end sharing, on-chain integrity proofs. Designed the white-paper, the user / device / share-event data model and built most of the cloud-side APIs.
- **Decentralized CDN (DCDN)** — Researched Fleek / Saturn / Crust / IPFS-Cluster, then built a multi-node Gateway → IndexProvider → L1-node DCDN pipeline (libp2p + DHT discovery, BadgerDB index, multi-strategy cache, IPFS Cluster storage). Owned the L1 node, Gateway routing and the JSON-RPC interfaces between modules.
- **OTA & sharing service** — Device OTA flow, proxy-re-encryption sharing, OSS alarm event pipeline, AWS SES email channel, multi-Edge user/sharing/billing APIs.

### 2022 · Amber Group — On-chain alpha & MEV infrastructure

- **Alpha Explorer** — Amber's in-house MEV / NFT-Arb detector & PnL visualiser (Go, Task-Pipeline arch, MongoDB + Grafana). Owned the **NFT-Arb mode** end-to-end: ERC-721/1155 event parsing, profit calculation, OpenSea / LooksRare / X2Y2 / sudoswap / NFTX coverage, Grafana dashboards, and bridged in marketplace API keys.
- **Chain-node optimisation** — Optimised Fantom & Tron full nodes for the searcher stack: P2P broadcast tweaks, event subscription, pending-tx push, plus a hand-rolled Tron Go SDK (none existed officially) so the trading team could quantify on SunSwap / JustLend.
- **ETL & observability** — Built a Pulsar / ClickHouse / InfluxDB / Grafana / Tableau data pipeline for multi-chain (ETH/BSC/Polygon/FTM) buried-point collection, Dex-swap / lending-liquidation / Top-bot dashboards.

### 2020 – 2022 · Jiansu Network Tech — BEVIOS consortium chain

- **BEVIOS** — A graphene-plug-in consortium-chain base shipped to *上海一网通办*, *东方网* (digital-copyright traceability), and Shanghai Jinghua's NFT trading platform. Features: pluggable consensus (Raft / Async-Pipeline-BFT / BEVY), DAG-driven parallel execution, TEE-based privacy compute, WASM + EVM dual VM, commercially-metered resources (DPU / Bandwidth / dRAM / dROM), K8s/Docker BaaS deployment.
- Personally drove tech selection (vs. Fisco-BCOS / ChainMaker), built the HistoryLog sync tool, integrated PostgreSQL to power a block explorer, added EVM-VM support, and shipped several system contracts.

### 2017 – 2020 · Distribution / Ontology — Custodian & wallets

- **Custodian** — A B2B multi-currency digital-asset custody platform (BTC / ETH / EOS / ...). Built the new-currency wallet backend (Go Chain Engine + Java business side, RESTful, MySQL + Redis): node sync, deposit parsing, Ledger-backed legal-address generation, withdrawal, reconciliation and risk-control checks.
- Earlier — built Ontology / Neo ecosystem tooling and contributed to wallet core dev for the team.

## Publications

- **Patent** — [A general-purpose WASM contract virtual machine technical solution for cross-blockchain contract ecological integration and reuse.](https://www.zhangqiaokeyan.com/patent-detail/06120114021718.html)
- **Patent** — A real-time, online, multi-instance blockchain runtime VM intelligent management & control platform.

## Off-keyboard

Wide range of interests — reading, thinking, and the development of basic sciences such as sociology, economics, organization management, and mathematical physics. Thanks for stopping by — if any of the above resonates, drop me a line or **⭐ a repo**.
