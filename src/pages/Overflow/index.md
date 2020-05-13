### Vulnerability

Integers in Solidity overflow / underflow without any errors.

```solidity
{{{Overflow}}}
```

### Preventative Techniques

- Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol" target="__blank">SafeMath</a> to will prevent arithmetic overflow and underflow
