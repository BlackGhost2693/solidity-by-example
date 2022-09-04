// metadata
export const version = "0.8.13"
export const title = "Primitive Data Types"
export const description = "Primitive data types"
export const codes = [
  {
    fileName: "Primitives.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFByaW1pdGl2ZXMgewogICAgYm9vbCBwdWJsaWMgYm9vID0gdHJ1ZTsKCiAgICAvKgogICAgdWludCBzdGFuZHMgZm9yIHVuc2lnbmVkIGludGVnZXIsIG1lYW5pbmcgbm9uIG5lZ2F0aXZlIGludGVnZXJzCiAgICBkaWZmZXJlbnQgc2l6ZXMgYXJlIGF2YWlsYWJsZQogICAgICAgIHVpbnQ4ICAgcmFuZ2VzIGZyb20gMCB0byAyICoqIDggLSAxCiAgICAgICAgdWludDE2ICByYW5nZXMgZnJvbSAwIHRvIDIgKiogMTYgLSAxCiAgICAgICAgLi4uCiAgICAgICAgdWludDI1NiByYW5nZXMgZnJvbSAwIHRvIDIgKiogMjU2IC0gMQogICAgKi8KICAgIHVpbnQ4IHB1YmxpYyB1OCA9IDE7CiAgICB1aW50IHB1YmxpYyB1MjU2ID0gNDU2OwogICAgdWludCBwdWJsaWMgdSA9IDEyMzsgLy8gdWludCBpcyBhbiBhbGlhcyBmb3IgdWludDI1NgoKICAgIC8qCiAgICBOZWdhdGl2ZSBudW1iZXJzIGFyZSBhbGxvd2VkIGZvciBpbnQgdHlwZXMuCiAgICBMaWtlIHVpbnQsIGRpZmZlcmVudCByYW5nZXMgYXJlIGF2YWlsYWJsZSBmcm9tIGludDggdG8gaW50MjU2CiAgICAKICAgIGludDI1NiByYW5nZXMgZnJvbSAtMiAqKiAyNTUgdG8gMiAqKiAyNTUgLSAxCiAgICBpbnQxMjggcmFuZ2VzIGZyb20gLTIgKiogMTI3IHRvIDIgKiogMTI3IC0gMQogICAgKi8KICAgIGludDggcHVibGljIGk4ID0gLTE7CiAgICBpbnQgcHVibGljIGkyNTYgPSA0NTY7CiAgICBpbnQgcHVibGljIGkgPSAtMTIzOyAvLyBpbnQgaXMgc2FtZSBhcyBpbnQyNTYKCiAgICAvLyBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIGludAogICAgaW50IHB1YmxpYyBtaW5JbnQgPSB0eXBlKGludCkubWluOwogICAgaW50IHB1YmxpYyBtYXhJbnQgPSB0eXBlKGludCkubWF4OwoKICAgIGFkZHJlc3MgcHVibGljIGFkZHIgPSAweENBMzViN2Q5MTU0NThFRjU0MGFEZTYwNjhkRmUyRjQ0RThmYTczM2M7CgogICAgLyoKICAgIEluIFNvbGlkaXR5LCB0aGUgZGF0YSB0eXBlIGJ5dGUgcmVwcmVzZW50IGEgc2VxdWVuY2Ugb2YgYnl0ZXMuIAogICAgU29saWRpdHkgcHJlc2VudHMgdHdvIHR5cGUgb2YgYnl0ZXMgdHlwZXMgOgoKICAgICAtIGZpeGVkLXNpemVkIGJ5dGUgYXJyYXlzCiAgICAgLSBkeW5hbWljYWxseS1zaXplZCBieXRlIGFycmF5cy4KICAgICAKICAgICBUaGUgdGVybSBieXRlcyBpbiBTb2xpZGl0eSByZXByZXNlbnRzIGEgZHluYW1pYyBhcnJheSBvZiBieXRlcy4gCiAgICAgSXTigJlzIGEgc2hvcnRoYW5kIGZvciBieXRlW10gLgogICAgKi8KICAgIGJ5dGVzMSBhID0gMHhiNTsgLy8gIFsxMDExMDEwMV0KICAgIGJ5dGVzMSBiID0gMHg1NjsgLy8gIFswMTAxMDExMF0KCiAgICAvLyBEZWZhdWx0IHZhbHVlcwogICAgLy8gVW5hc3NpZ25lZCB2YXJpYWJsZXMgaGF2ZSBhIGRlZmF1bHQgdmFsdWUKICAgIGJvb2wgcHVibGljIGRlZmF1bHRCb287IC8vIGZhbHNlCiAgICB1aW50IHB1YmxpYyBkZWZhdWx0VWludDsgLy8gMAogICAgaW50IHB1YmxpYyBkZWZhdWx0SW50OyAvLyAwCiAgICBhZGRyZXNzIHB1YmxpYyBkZWZhdWx0QWRkcjsgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCn0K",
  },
]

const html = `<p>Here we introduce you to some primitive data types available in Solidity.</p>
<ul>
<li><code>boolean</code></li>
<li><code>uint</code></li>
<li><code>int</code></li>
<li><code>address</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Primitives</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> boo <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

    <span class="hljs-comment">/*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */</span>
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> u8 <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u <span class="hljs-operator">=</span> <span class="hljs-number">123</span>; <span class="hljs-comment">// uint is an alias for uint256</span>

    <span class="hljs-comment">/*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from int8 to int256
    
    int256 ranges from -2 ** 255 to 2 ** 255 - 1
    int128 ranges from -2 ** 127 to 2 ** 127 - 1
    */</span>
    <span class="hljs-keyword">int8</span> <span class="hljs-keyword">public</span> i8 <span class="hljs-operator">=</span> <span class="hljs-number">-1</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">-123</span>; <span class="hljs-comment">// int is same as int256</span>

    <span class="hljs-comment">// minimum and maximum of int</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> minInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">min</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> maxInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">max</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c</span>;

    <span class="hljs-comment">/*
    In Solidity, the data type byte represent a sequence of bytes. 
    Solidity presents two type of bytes types :

     - fixed-sized byte arrays
     - dynamically-sized byte arrays.
     
     The term bytes in Solidity represents a dynamic array of bytes. 
     It’s a shorthand for byte[] .
    */</span>
    <span class="hljs-keyword">bytes1</span> a <span class="hljs-operator">=</span> <span class="hljs-number">0xb5</span>; <span class="hljs-comment">//  [10110101]</span>
    <span class="hljs-keyword">bytes1</span> b <span class="hljs-operator">=</span> <span class="hljs-number">0x56</span>; <span class="hljs-comment">//  [01010110]</span>

    <span class="hljs-comment">// Default values</span>
    <span class="hljs-comment">// Unassigned variables have a default value</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> defaultBoo; <span class="hljs-comment">// false</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> defaultUint; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> defaultInt; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> defaultAddr; <span class="hljs-comment">// 0x0000000000000000000000000000000000000000</span>
}
</code></pre>
`

export default html
