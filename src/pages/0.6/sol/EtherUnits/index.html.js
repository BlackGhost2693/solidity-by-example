// metadata
export const version = "0.6.0"
export const title = "Ether and Wei"
export const description = "An example of Ether and Wei in Solidity"

const html = `<p>Transactions are paid with <code>ether</code>.</p>
<p>Similar to how one dollar is equal to 100 cent, one <code>ether</code> is equal to 10<sup>18</sup> <code>wei</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract EtherUnits {
    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = 1 wei == 1;

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10^18
    bool public isOneEther = 1 ether == 1e18;
}
</code></pre>
`

export default html
