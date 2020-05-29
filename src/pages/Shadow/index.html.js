const html = `<p>Solidity 0.6 disallows shadowing state variables.</p>
<p>Let&#39;s learn how to correctly override inherited state variables.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// Shadowing is disallowed in Solidity 0.6
// This will not compile
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() public {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
</code></pre>
`

export default html
