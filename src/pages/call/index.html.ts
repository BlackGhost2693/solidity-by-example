// metadata
export const version = "0.8.13"
export const title = "Call"
export const description =
  "In Solidity call is a low level function to interact with other contracts"
export const codes = [
  {
    fileName: "Call.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFJlY2VpdmVyIHsKICAgIGV2ZW50IFJlY2VpdmVkKGFkZHJlc3MgY2FsbGVyLCB1aW50IGFtb3VudCwgc3RyaW5nIG1lc3NhZ2UpOwoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgZW1pdCBSZWNlaXZlZChtc2cuc2VuZGVyLCBtc2cudmFsdWUsICJGYWxsYmFjayB3YXMgY2FsbGVkIik7CiAgICB9CgogICAgZnVuY3Rpb24gZm9vKHN0cmluZyBtZW1vcnkgX21lc3NhZ2UsIHVpbnQgX3gpIHB1YmxpYyBwYXlhYmxlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICBlbWl0IFJlY2VpdmVkKG1zZy5zZW5kZXIsIG1zZy52YWx1ZSwgX21lc3NhZ2UpOwoKICAgICAgICByZXR1cm4gX3ggKyAxOwogICAgfQp9Cgpjb250cmFjdCBDYWxsZXIgewogICAgZXZlbnQgUmVzcG9uc2UoYm9vbCBzdWNjZXNzLCBieXRlcyBkYXRhKTsKCiAgICAvLyBMZXQncyBpbWFnaW5lIHRoYXQgY29udHJhY3QgQ2FsbGVyIGRvZXMgbm90IGhhdmUgdGhlIHNvdXJjZSBjb2RlIGZvciB0aGUKICAgIC8vIGNvbnRyYWN0IFJlY2VpdmVyLCBidXQgd2UgZG8ga25vdyB0aGUgYWRkcmVzcyBvZiBjb250cmFjdCBSZWNlaXZlciBhbmQgdGhlIGZ1bmN0aW9uIHRvIGNhbGwuCiAgICBmdW5jdGlvbiB0ZXN0Q2FsbEZvbyhhZGRyZXNzIHBheWFibGUgX2FkZHIpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICAvLyBZb3UgY2FuIHNlbmQgZXRoZXIgYW5kIHNwZWNpZnkgYSBjdXN0b20gZ2FzIGFtb3VudAogICAgICAgIChib29sIHN1Y2Nlc3MsIGJ5dGVzIG1lbW9yeSBkYXRhKSA9IF9hZGRyLmNhbGx7dmFsdWU6IG1zZy52YWx1ZSwgZ2FzOiA1MDAwfSgKICAgICAgICAgICAgYWJpLmVuY29kZVdpdGhTaWduYXR1cmUoImZvbyhzdHJpbmcsdWludDI1NikiLCAiY2FsbCBmb28iLCAxMjMpCiAgICAgICAgKTsKCiAgICAgICAgZW1pdCBSZXNwb25zZShzdWNjZXNzLCBkYXRhKTsKICAgIH0KCiAgICAvLyBDYWxsaW5nIGEgZnVuY3Rpb24gdGhhdCBkb2VzIG5vdCBleGlzdCB0cmlnZ2VycyB0aGUgZmFsbGJhY2sgZnVuY3Rpb24uCiAgICBmdW5jdGlvbiB0ZXN0Q2FsbERvZXNOb3RFeGlzdChhZGRyZXNzIF9hZGRyKSBwdWJsaWMgewogICAgICAgIChib29sIHN1Y2Nlc3MsIGJ5dGVzIG1lbW9yeSBkYXRhKSA9IF9hZGRyLmNhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVXaXRoU2lnbmF0dXJlKCJkb2VzTm90RXhpc3QoKSIpCiAgICAgICAgKTsKCiAgICAgICAgZW1pdCBSZXNwb25zZShzdWNjZXNzLCBkYXRhKTsKICAgIH0KfQo=",
  },
]

const html = `<p><code>call</code> is a low level function to interact with other contracts.</p>
<p>This is the recommended method to use when you&#39;re just sending Ether via calling the <code>fallback</code> function.</p>
<p>However it is not the recommend way to call existing functions.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Received</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">uint</span> amount, <span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">emit</span> Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-string">"Fallback was called"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">emit</span> Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, _message);

        <span class="hljs-keyword">return</span> _x <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Caller</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Response</span>(<span class="hljs-params"><span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> data</span>)</span>;

    <span class="hljs-comment">// Let&#x27;s imagine that contract Caller does not have the source code for the</span>
    <span class="hljs-comment">// contract Receiver, but we do know the address of contract Receiver and the function to call.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCallFoo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// You can send ether and specify a custom gas amount</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _addr.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-built_in">gas</span>: <span class="hljs-number">5000</span>}(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"foo(string,uint256)"</span>, <span class="hljs-string">"call foo"</span>, <span class="hljs-number">123</span>)
        );

        <span class="hljs-keyword">emit</span> Response(success, data);
    }

    <span class="hljs-comment">// Calling a function that does not exist triggers the fallback function.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCallDoesNotExist</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _addr.<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"doesNotExist()"</span>)
        );

        <span class="hljs-keyword">emit</span> Response(success, data);
    }
}
</code></pre>
`

export default html
