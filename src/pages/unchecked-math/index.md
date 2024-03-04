---
title: Unchecked Math
version: 0.8.24
description: An example of unchecked math in Solidity
keywords: [gas, unchecked, math, overflow, underflow]
---

Overflow and underflow of numbers in Solidity 0.8 throw an error. This can be disabled by using `unchecked`.

Disabling overflow / underflow check saves gas.

```solidity
{{{UncheckedMath}}}
```
