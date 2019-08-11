const html = `<p>You can throw an error by calling <code>assert</code>, <code>require</code> or <code>revert</code>.</p>
<p>An error will undo all changes made to the state during a transaction.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Error {
    uint public i;

    // Require should be used to validate conditions such as:
    // - inputs
    // - return values from calls to other functions
    // - return values from calls to other contracts
    function testRequire(uint j) public {
        require(j &gt; 100, "j must be greater than 100");
        i += j;
    }

    // Assert should only be used to test for internal errors,
    // and to check invariants.
    // Try: testAssert(-1)
    function testAssert(uint j) public {
        i += j;
        assert(i &gt;= j);
    }

    // Revert can be used to throw an error.
    function testRevert(uint j) public {
        i += j;
        revert("Undoing state changes");
    }
}
</code></pre>
`

export default html
