---
title: Upgradeable Proxy
version: 0.8.24
description: Example of upgradeable proxy
keywords: [app, application, delegatecall, upgradeable, proxy]
---

Example of upgradeable proxy contract. Never use this in production.

This example shows

- how to use `delegatecall` and return data when `fallback` is called.
- how to store address of `admin` and `implementation` in a specific slot.

```solidity
{{{UpgradeableProxy}}}
```
