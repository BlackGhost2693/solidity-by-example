// metadata
export const version = "0.6.0"
export const title = "Call"
export const description = "In Solidity call is a low level function to interact with other contracts"

const html = `<p><code>call</code> is a low level function to interact with other contracts.</p>
<p>This is the recommended method to use when you&#39;re just sending Ether via calling the <code>fallback</code> function.</p>
<p>However it is not the recommend way to call existing functions.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // Let&#39;s imagine that contract B does not have the source code for
    // contract A, but we do know the address of A and the function to call.
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call.value(msg.value).gas(5000)(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );

        emit Response(success, data);
    }

    // Calling a function that does not exist triggers the fallback function.
    function testCallDoesNotExist(address _addr) public {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}
</code></pre>
`

export default html
