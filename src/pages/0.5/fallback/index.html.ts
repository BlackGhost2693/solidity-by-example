// metadata
export const version = "0.5.16"
export const title = "Fallback"
export const description = "Example of how to use fallback in Solidity"

const html = `<p><code>Fallback</code> is an anonymous function that does not take any arguments and does not return anything.</p>
<p>It is executed when</p>
<ul>
<li>a function that does not exist is called</li>
<li>Ether is sent directly to a contract</li>
</ul>
<p><code>Fallback</code> functions have a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Fallback {
    event Log(uint gas);

    // Fallback function must be declared as external.
    function () external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log(gasleft());
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent,) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }
}
</code></pre>
`

export default html
