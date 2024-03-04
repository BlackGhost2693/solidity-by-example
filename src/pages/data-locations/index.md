---
title: Data Locations - Storage, Memory and Calldata
version: 0.8.24
description: Data locations - storage, memory and calldata
keywords: [data, location, locations, storage, memory, calldata]
---

Variables are declared as either `storage`, `memory` or `calldata` to explicitly
specify the location of the data.

- `storage` - variable is a state variable (store on blockchain)
- `memory` - variable is in memory and it exists while a function is being called
- `calldata` - special data location that contains function arguments

```solidity
{{{DataLocations}}}
```
