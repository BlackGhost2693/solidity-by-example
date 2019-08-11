const html = `<p>Transactions cost <code>gas</code>. You pay <code>gas price * gas</code> in Ether.</p>
<p>You specify the gas price. Transactions will be processed faster with higher gas price.</p>
<p>Unspent gas will be refunded.</p>
<p>There are two limits to the amount of gas you can spend</p>
<ul>
<li>gas limit set by you (how much you are willing to pay for the transaction)</li>
<li>maximum amount of gas allowed in a block set by the network</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Gas {
  // Transactions spend gas even if it does nothing.
  function doNothing() public {}

  // Transaction costs in ether = gas price * gas used
  function gasPrice() public returns (uint) {
    return tx.gasprice;
  }

  // Getter functions cost no gas when called by an external account.
  function getNothing() public pure {}

  // Using up all the gas throws and reverts state changes.
  uint public i = 0;

  function gasLimit() public {
    while(gasleft() &gt; 0) {
      i += 1;
    }
  }

  // Block gas limit
  function getBlockGasLimit() public view returns (uint) {
    return block.gaslimit;
  }
}
</code></pre>
`

export default html
