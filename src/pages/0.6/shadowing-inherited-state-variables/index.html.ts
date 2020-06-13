// metadata
export const version = "0.6.10"
export const title = "Shadowing Inherited State Variables"
export const description = "An example of shadowing state variables by inheritance"

const html = `<p>Unlike functions, state variables cannot be overridden by re-declaring it
in the child contract.</p>
<p>Let&#39;s learn how to correctly override inherited state variables.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

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
