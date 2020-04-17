const html = `<p>You need to send a transaction to the blockchain to write or update a state variable.</p>
<p>This means that you will have to pay a transaction fee.</p>
<p>On the other hand, you can read a data from a state variable, for free, without sending any transaction.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract SimpleStorage {
    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state varaible without sending a transaction.
    // Actually we don&#39;t need this function. The compiler automatically
    // creates getter functions for all public variables.
    function get() public view returns (uint) {
        return num;
    }
}
</code></pre>
`

export default html
