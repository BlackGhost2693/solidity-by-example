// metadata
export const version = "0.8.13"
export const title = "Bitwise Operators"
export const description = "Learn about bitwise operators in Solidity"
export const codes = [
  {
    fileName: "Bitwise.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IEJpdHdpc2VPcHMgewogICAgLy8geCAgICAgPSAxMTEwID0gOCArIDQgKyAyICsgMCA9IDE0CiAgICAvLyB5ICAgICA9IDEwMTEgPSA4ICsgMCArIDIgKyAxID0gMTEKICAgIC8vIHggJiB5ID0gMTAxMCA9IDggKyAwICsgMiArIDAgPSAxMAogICAgZnVuY3Rpb24gYW5kKHVpbnQgeCwgdWludCB5KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4geCAmIHk7CiAgICB9CgogICAgLy8geCAgICAgPSAxMTAwID0gOCArIDQgKyAwICsgMCA9IDEyCiAgICAvLyB5ICAgICA9IDEwMDEgPSA4ICsgMCArIDAgKyAxID0gOQogICAgLy8geCB8IHkgPSAxMTAxID0gOCArIDQgKyAwICsgMSA9IDEzCiAgICBmdW5jdGlvbiBvcih1aW50IHgsIHVpbnQgeSkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggfCB5OwogICAgfQoKICAgIC8vIHggICAgID0gMTEwMCA9IDggKyA0ICsgMCArIDAgPSAxMgogICAgLy8geSAgICAgPSAwMTAxID0gMCArIDQgKyAwICsgMSA9IDUKICAgIC8vIHggXiB5ID0gMTAwMSA9IDggKyAwICsgMCArIDEgPSA5CiAgICBmdW5jdGlvbiB4b3IodWludCB4LCB1aW50IHkpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB4IF4geTsKICAgIH0KCiAgICAvLyB4ICA9IDAwMDAxMTAwID0gICAwICsgIDAgKyAgMCArICAwICsgOCArIDQgKyAwICsgMCA9IDEyCiAgICAvLyB+eCA9IDExMTEwMDExID0gMTI4ICsgNjQgKyAzMiArIDE2ICsgMCArIDAgKyAyICsgMSA9IDI0MwogICAgZnVuY3Rpb24gbm90KHVpbnQ4IHgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludDgpIHsKICAgICAgICByZXR1cm4gfng7CiAgICB9CgogICAgLy8gMSA8PCAwID0gMDAwMSAtLT4gMDAwMSA9IDEKICAgIC8vIDEgPDwgMSA9IDAwMDEgLS0+IDAwMTAgPSAyCiAgICAvLyAxIDw8IDIgPSAwMDAxIC0tPiAwMTAwID0gNAogICAgLy8gMSA8PCAzID0gMDAwMSAtLT4gMTAwMCA9IDgKICAgIC8vIDMgPDwgMiA9IDAwMTEgLS0+IDExMDAgPSAxMgogICAgZnVuY3Rpb24gc2hpZnRMZWZ0KHVpbnQgeCwgdWludCBiaXRzKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4geCA8PCBiaXRzOwogICAgfQoKICAgIC8vIDggID4+IDAgPSAxMDAwIC0tPiAxMDAwID0gOAogICAgLy8gOCAgPj4gMSA9IDEwMDAgLS0+IDAxMDAgPSA0CiAgICAvLyA4ICA+PiAyID0gMTAwMCAtLT4gMDAxMCA9IDIKICAgIC8vIDggID4+IDMgPSAxMDAwIC0tPiAwMDAxID0gMQogICAgLy8gOCAgPj4gNCA9IDEwMDAgLS0+IDAwMDAgPSAwCiAgICAvLyAxMiA+PiAxID0gMTEwMCAtLT4gMDExMCA9IDYKICAgIGZ1bmN0aW9uIHNoaWZ0UmlnaHQodWludCB4LCB1aW50IGJpdHMpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB4ID4+IGJpdHM7CiAgICB9CgogICAgLy8gR2V0IGxhc3QgbiBiaXRzIGZyb20geAogICAgZnVuY3Rpb24gZ2V0TGFzdE5CaXRzKHVpbnQgeCwgdWludCBuKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyBFeGFtcGxlLCBsYXN0IDMgYml0cwogICAgICAgIC8vIHggICAgICAgID0gMTEwMSA9IDEzCiAgICAgICAgLy8gbWFzayAgICAgPSAwMTExID0gNwogICAgICAgIC8vIHggJiBtYXNrID0gMDEwMSA9IDUKICAgICAgICB1aW50IG1hc2sgPSAoMSA8PCBuKSAtIDE7CiAgICAgICAgcmV0dXJuIHggJiBtYXNrOwogICAgfQoKICAgIC8vIEdldCBsYXN0IG4gYml0cyBmcm9tIHggdXNpbmcgbW9kIG9wZXJhdG9yCiAgICBmdW5jdGlvbiBnZXRMYXN0TkJpdHNVc2luZ01vZCh1aW50IHgsIHVpbnQgbikgZXh0ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgLy8gMSA8PCBuID0gMiAqKiBuCiAgICAgICAgcmV0dXJuIHggJSAoMSA8PCBuKTsKICAgIH0KCiAgICAvLyBHZXQgcG9zaXRpb24gb2YgbW9zdCBzaWduaWZpY2FudCBiaXQKICAgIC8vIHggPSAxMTAwID0gMTAsIG1vc3Qgc2lnbmlmaWNhbnQgYml0ID0gMTAwMCwgc28gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiAzCiAgICBmdW5jdGlvbiBtb3N0U2lnbmlmaWNhbnRCaXQodWludCB4KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICB1aW50IGkgPSAwOwogICAgICAgIHdoaWxlICgoeCA+Pj0gMSkgPiAwKSB7CiAgICAgICAgICAgICsraTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGk7CiAgICB9CgogICAgLy8gR2V0IGZpcnN0IG4gYml0cyBmcm9tIHgKICAgIC8vIGxlbiA9IGxlbmd0aCBvZiBiaXRzIGluIHggPSBwb3NpdGlvbiBvZiBtb3N0IHNpZ25pZmljYW50IGJpdCBvZiB4LCArIDEKICAgIGZ1bmN0aW9uIGdldEZpcnN0TkJpdHMoCiAgICAgICAgdWludCB4LAogICAgICAgIHVpbnQgbiwKICAgICAgICB1aW50IGxlbgogICAgKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyBFeGFtcGxlCiAgICAgICAgLy8geCAgICAgICAgPSAxMTEwID0gMTQsIG4gPSAyLCBsZW4gPSA0CiAgICAgICAgLy8gbWFzayAgICAgPSAxMTAwID0gMTIKICAgICAgICAvLyB4ICYgbWFzayA9IDExMDAgPSAxMgogICAgICAgIHVpbnQgbWFzayA9ICgoMSA8PCBuKSAtIDEpIDw8IChsZW4gLSBuKTsKICAgICAgICByZXR1cm4geCAmIG1hc2s7CiAgICB9CgogICAgLy8gRmluZCBtb3N0IHNpZ25pZmljYW50IGJpdCB1c2luZyBiaW5hcnkgc2VhcmNoCiAgICBmdW5jdGlvbiBtb3N0U2lnbmlmaWNhbnRCaXRXaXRoQmluYXJ5U2VhcmNoKHVpbnQgeCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50OCByKQogICAgewogICAgICAgIC8vIHggPj0gMiAqKiAxMjgKICAgICAgICBpZiAoeCA+PSAweDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkgewogICAgICAgICAgICB4ID4+PSAxMjg7CiAgICAgICAgICAgIHIgKz0gMTI4OwogICAgICAgIH0KICAgICAgICAvLyB4ID49IDIgKiogNjQKICAgICAgICBpZiAoeCA+PSAweDEwMDAwMDAwMDAwMDAwMDAwKSB7CiAgICAgICAgICAgIHggPj49IDY0OwogICAgICAgICAgICByICs9IDY0OwogICAgICAgIH0KICAgICAgICAvLyB4ID49IDIgKiogMzIKICAgICAgICBpZiAoeCA+PSAweDEwMDAwMDAwMCkgewogICAgICAgICAgICB4ID4+PSAzMjsKICAgICAgICAgICAgciArPSAzMjsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDE2CiAgICAgICAgaWYgKHggPj0gMHgxMDAwMCkgewogICAgICAgICAgICB4ID4+PSAxNjsKICAgICAgICAgICAgciArPSAxNjsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDgKICAgICAgICBpZiAoeCA+PSAweDEwMCkgewogICAgICAgICAgICB4ID4+PSA4OwogICAgICAgICAgICByICs9IDg7CiAgICAgICAgfQogICAgICAgIC8vIHggPj0gMiAqKiA0CiAgICAgICAgaWYgKHggPj0gMHgxMCkgewogICAgICAgICAgICB4ID4+PSA0OwogICAgICAgICAgICByICs9IDQ7CiAgICAgICAgfQogICAgICAgIC8vIHggPj0gMiAqKiAyCiAgICAgICAgaWYgKHggPj0gMHg0KSB7CiAgICAgICAgICAgIHggPj49IDI7CiAgICAgICAgICAgIHIgKz0gMjsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDEKICAgICAgICBpZiAoeCA+PSAweDIpIHIgKz0gMTsKICAgIH0KfQo=",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BitwiseOps</span> </span>{
    <span class="hljs-comment">// x     = 1110 = 8 + 4 + 2 + 0 = 14</span>
    <span class="hljs-comment">// y     = 1011 = 8 + 0 + 2 + 1 = 11</span>
    <span class="hljs-comment">// x &amp; y = 1010 = 8 + 0 + 2 + 0 = 10</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">and</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-comment">// x | y = 1101 = 8 + 4 + 0 + 1 = 13</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">or</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">|</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 0101 = 0 + 4 + 0 + 1 = 5</span>
    <span class="hljs-comment">// x ^ y = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">xor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">^</span> y;
    }

    <span class="hljs-comment">// x  = 00001100 =   0 +  0 +  0 +  0 + 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// ~x = 11110011 = 128 + 64 + 32 + 16 + 0 + 0 + 2 + 1 = 243</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">not</span>(<span class="hljs-params"><span class="hljs-keyword">uint8</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint8</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-operator">~</span>x;
    }

    <span class="hljs-comment">// 1 &lt;&lt; 0 = 0001 --&gt; 0001 = 1</span>
    <span class="hljs-comment">// 1 &lt;&lt; 1 = 0001 --&gt; 0010 = 2</span>
    <span class="hljs-comment">// 1 &lt;&lt; 2 = 0001 --&gt; 0100 = 4</span>
    <span class="hljs-comment">// 1 &lt;&lt; 3 = 0001 --&gt; 1000 = 8</span>
    <span class="hljs-comment">// 3 &lt;&lt; 2 = 0011 --&gt; 1100 = 12</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftLeft</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> bits</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> bits;
    }

    <span class="hljs-comment">// 8  &gt;&gt; 0 = 1000 --&gt; 1000 = 8</span>
    <span class="hljs-comment">// 8  &gt;&gt; 1 = 1000 --&gt; 0100 = 4</span>
    <span class="hljs-comment">// 8  &gt;&gt; 2 = 1000 --&gt; 0010 = 2</span>
    <span class="hljs-comment">// 8  &gt;&gt; 3 = 1000 --&gt; 0001 = 1</span>
    <span class="hljs-comment">// 8  &gt;&gt; 4 = 1000 --&gt; 0000 = 0</span>
    <span class="hljs-comment">// 12 &gt;&gt; 1 = 1100 --&gt; 0110 = 6</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftRight</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> bits</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> bits;
    }

    <span class="hljs-comment">// Get last n bits from x</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBits</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Example, last 3 bits</span>
        <span class="hljs-comment">// x        = 1101 = 13</span>
        <span class="hljs-comment">// mask     = 0111 = 7</span>
        <span class="hljs-comment">// x &amp; mask = 0101 = 5</span>
        <span class="hljs-keyword">uint</span> mask <span class="hljs-operator">=</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }

    <span class="hljs-comment">// Get last n bits from x using mod operator</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBitsUsingMod</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// 1 &lt;&lt; n = 2 ** n</span>
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">%</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n);
    }

    <span class="hljs-comment">// Get position of most significant bit</span>
    <span class="hljs-comment">// x = 1100 = 10, most significant bit = 1000, so this function will return 3</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> ((x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
        }
        <span class="hljs-keyword">return</span> i;
    }

    <span class="hljs-comment">// Get first n bits from x</span>
    <span class="hljs-comment">// len = length of bits in x = position of most significant bit of x, + 1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFirstNBits</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">uint</span> n,
        <span class="hljs-keyword">uint</span> len
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Example</span>
        <span class="hljs-comment">// x        = 1110 = 14, n = 2, len = 4</span>
        <span class="hljs-comment">// mask     = 1100 = 12</span>
        <span class="hljs-comment">// x &amp; mask = 1100 = 12</span>
        <span class="hljs-keyword">uint</span> mask <span class="hljs-operator">=</span> ((<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> (len <span class="hljs-operator">-</span> n);
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }

    <span class="hljs-comment">// Find most significant bit using binary search</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBitWithBinarySearch</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint8</span> r</span>)
    </span>{
        <span class="hljs-comment">// x &gt;= 2 ** 128</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100000000000000000000000000000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">128</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">128</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 64</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10000000000000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">64</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">64</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 32</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">32</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">32</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 16</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">16</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">16</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 8</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">8</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">8</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 4</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 2</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x4</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
            r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 1</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x2</span>) r <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}
</code></pre>
`

export default html
