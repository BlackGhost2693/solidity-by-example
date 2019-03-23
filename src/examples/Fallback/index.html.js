const html = `<p>A <code>fallback function</code> is an anonymous function that does not take any arguments and does not return anything.</p>
<p>Fallback functions are executed when</p>
<ul>
<li>calling a function that does not exist</li>
<li>sending Ether directly to a contract</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Fallback {
    event EtherReceived(address sender, uint amount);

    // Fallback function must be declared as external.
    function () external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract TestFallback {
    // Try calling test(address of the Fallback contract)
    function test(Fallback fallback) public payable {
        // Send Ether to the Fallback contract.
        address(fallback).transfer(address(this).balance);

        // Calling a function that does not exist in Fallback contract
        address(fallback).call(abi.encodeWithSignature("nonExistingFunction()"));

        // Check the transaction logs. You will see the event "EtherReceived" emitted twice.
    }
}
</code></pre>
`

export default html
