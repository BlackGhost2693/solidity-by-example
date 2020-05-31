// metadata
export const version = "0.5.16"
export const title = "Calling Other Contract"
export const description = "In Solidity, contract can call other contracts in several ways"

const html = `<p>Contract can call other contracts in 2 ways.</p>
<p>The easiest way to is to just call it, like <code>A.foo(x, y, z)</code>.</p>
<p>Another way to call other contracts is to use the low-level <code>call</code>.</p>
<p>This method is not recommended.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Callee {
    uint public x;
    uint public value;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}

contract Caller {
    function setX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }

    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }

    function setXandSendEther(Callee _callee, uint _x) public payable {
        (uint x, uint value) = _callee.setXandSendEther.value(msg.value)(_x);
    }
}
</code></pre>
`

export default html
