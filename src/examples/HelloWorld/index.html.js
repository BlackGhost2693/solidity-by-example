const html = `<p><code>pragma</code> specifies the compiler version of Solidity.</p>
<pre><code class="language-solidity">/*
This code will not compile with a compiler earlier than version 0.5.1
and it will also not work on a compiler starting from version 0.6.0
*/
pragma solidity ^0.5.1;

contract HelloWorld {
    function hello() public returns (string memory) {
        return "Hello World!";
    }
}
</code></pre>
`

export default html