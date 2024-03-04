---
title: Bi-Directional Payment Channel
version: 0.8.24
description: An example of bi-directional payment channels in Solidity
keywords: [app, application, bi-directional, payment, channel, signature, cryptography]
---

Bi-directional payment channels allow participants `Alice` and `Bob` to repeatedly transfer Ether off chain.

Payments can go both ways, `Alice` pays `Bob` and `Bob` pays `Alice`.

```solidity
{{{BiDirectionalPaymentChannel}}}
```

```solidity
{{{ECDSA}}}
```
