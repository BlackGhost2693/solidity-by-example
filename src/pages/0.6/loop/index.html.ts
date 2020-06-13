// metadata
export const version = "0.6.10"
export const title = "For and While Loop"
export const description = "Example of for and while loop in Solidity"

const html = `<p>Solidity supports <code>for</code>, <code>while</code>, and <code>do while</code> loops.</p>
<p>Don&#39;t write loops that are unbounded as this can hit the gas limit, causing your transaction to fail.</p>
<p>For the reason above, <code>while</code> and <code>do while</code> loops are rarely used.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Loop {
    function loop() public {
        // for loop
        for (uint i = 0; i &lt; 10; i++) {
            if (i == 3) {
                // Skip to next iteration with continue
                continue;
            }
            if (i == 5) {
                // Exit loop with break
                break;
            }
        }

        // while loop
        uint i;
        while (i &lt; 10) {
            i++;
        }
    }
}
</code></pre>
`

export default html
