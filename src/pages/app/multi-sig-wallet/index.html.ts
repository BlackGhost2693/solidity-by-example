// metadata
export const version = "0.8.13"
export const title = "Multi-Sig Wallet"
export const description = "An example of multi-sig wallet in Solidity"
export const codes = [
  {
    fileName: "MultiSigWallet.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IE11bHRpU2lnV2FsbGV0IHsKICAgIGV2ZW50IERlcG9zaXQoYWRkcmVzcyBpbmRleGVkIHNlbmRlciwgdWludCBhbW91bnQsIHVpbnQgYmFsYW5jZSk7CiAgICBldmVudCBTdWJtaXRUcmFuc2FjdGlvbigKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsCiAgICAgICAgdWludCBpbmRleGVkIHR4SW5kZXgsCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIHRvLAogICAgICAgIHVpbnQgdmFsdWUsCiAgICAgICAgYnl0ZXMgZGF0YQogICAgKTsKICAgIGV2ZW50IENvbmZpcm1UcmFuc2FjdGlvbihhZGRyZXNzIGluZGV4ZWQgb3duZXIsIHVpbnQgaW5kZXhlZCB0eEluZGV4KTsKICAgIGV2ZW50IFJldm9rZUNvbmZpcm1hdGlvbihhZGRyZXNzIGluZGV4ZWQgb3duZXIsIHVpbnQgaW5kZXhlZCB0eEluZGV4KTsKICAgIGV2ZW50IEV4ZWN1dGVUcmFuc2FjdGlvbihhZGRyZXNzIGluZGV4ZWQgb3duZXIsIHVpbnQgaW5kZXhlZCB0eEluZGV4KTsKCiAgICBhZGRyZXNzW10gcHVibGljIG93bmVyczsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSBwdWJsaWMgaXNPd25lcjsKICAgIHVpbnQgcHVibGljIG51bUNvbmZpcm1hdGlvbnNSZXF1aXJlZDsKCiAgICBzdHJ1Y3QgVHJhbnNhY3Rpb24gewogICAgICAgIGFkZHJlc3MgdG87CiAgICAgICAgdWludCB2YWx1ZTsKICAgICAgICBieXRlcyBkYXRhOwogICAgICAgIGJvb2wgZXhlY3V0ZWQ7CiAgICAgICAgdWludCBudW1Db25maXJtYXRpb25zOwogICAgfQoKICAgIC8vIG1hcHBpbmcgZnJvbSB0eCBpbmRleCA9PiBvd25lciA9PiBib29sCiAgICBtYXBwaW5nKHVpbnQgPT4gbWFwcGluZyhhZGRyZXNzID0+IGJvb2wpKSBwdWJsaWMgaXNDb25maXJtZWQ7CgogICAgVHJhbnNhY3Rpb25bXSBwdWJsaWMgdHJhbnNhY3Rpb25zOwoKICAgIG1vZGlmaWVyIG9ubHlPd25lcigpIHsKICAgICAgICByZXF1aXJlKGlzT3duZXJbbXNnLnNlbmRlcl0sICJub3Qgb3duZXIiKTsKICAgICAgICBfOwogICAgfQoKICAgIG1vZGlmaWVyIHR4RXhpc3RzKHVpbnQgX3R4SW5kZXgpIHsKICAgICAgICByZXF1aXJlKF90eEluZGV4IDwgdHJhbnNhY3Rpb25zLmxlbmd0aCwgInR4IGRvZXMgbm90IGV4aXN0Iik7CiAgICAgICAgXzsKICAgIH0KCiAgICBtb2RpZmllciBub3RFeGVjdXRlZCh1aW50IF90eEluZGV4KSB7CiAgICAgICAgcmVxdWlyZSghdHJhbnNhY3Rpb25zW190eEluZGV4XS5leGVjdXRlZCwgInR4IGFscmVhZHkgZXhlY3V0ZWQiKTsKICAgICAgICBfOwogICAgfQoKICAgIG1vZGlmaWVyIG5vdENvbmZpcm1lZCh1aW50IF90eEluZGV4KSB7CiAgICAgICAgcmVxdWlyZSghaXNDb25maXJtZWRbX3R4SW5kZXhdW21zZy5zZW5kZXJdLCAidHggYWxyZWFkeSBjb25maXJtZWQiKTsKICAgICAgICBfOwogICAgfQoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NbXSBtZW1vcnkgX293bmVycywgdWludCBfbnVtQ29uZmlybWF0aW9uc1JlcXVpcmVkKSB7CiAgICAgICAgcmVxdWlyZShfb3duZXJzLmxlbmd0aCA+IDAsICJvd25lcnMgcmVxdWlyZWQiKTsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBfbnVtQ29uZmlybWF0aW9uc1JlcXVpcmVkID4gMCAmJgogICAgICAgICAgICAgICAgX251bUNvbmZpcm1hdGlvbnNSZXF1aXJlZCA8PSBfb3duZXJzLmxlbmd0aCwKICAgICAgICAgICAgImludmFsaWQgbnVtYmVyIG9mIHJlcXVpcmVkIGNvbmZpcm1hdGlvbnMiCiAgICAgICAgKTsKCiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgX293bmVycy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBhZGRyZXNzIG93bmVyID0gX293bmVyc1tpXTsKCiAgICAgICAgICAgIHJlcXVpcmUob3duZXIgIT0gYWRkcmVzcygwKSwgImludmFsaWQgb3duZXIiKTsKICAgICAgICAgICAgcmVxdWlyZSghaXNPd25lcltvd25lcl0sICJvd25lciBub3QgdW5pcXVlIik7CgogICAgICAgICAgICBpc093bmVyW293bmVyXSA9IHRydWU7CiAgICAgICAgICAgIG93bmVycy5wdXNoKG93bmVyKTsKICAgICAgICB9CgogICAgICAgIG51bUNvbmZpcm1hdGlvbnNSZXF1aXJlZCA9IF9udW1Db25maXJtYXRpb25zUmVxdWlyZWQ7CiAgICB9CgogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIGVtaXQgRGVwb3NpdChtc2cuc2VuZGVyLCBtc2cudmFsdWUsIGFkZHJlc3ModGhpcykuYmFsYW5jZSk7CiAgICB9CgogICAgZnVuY3Rpb24gc3VibWl0VHJhbnNhY3Rpb24oCiAgICAgICAgYWRkcmVzcyBfdG8sCiAgICAgICAgdWludCBfdmFsdWUsCiAgICAgICAgYnl0ZXMgbWVtb3J5IF9kYXRhCiAgICApIHB1YmxpYyBvbmx5T3duZXIgewogICAgICAgIHVpbnQgdHhJbmRleCA9IHRyYW5zYWN0aW9ucy5sZW5ndGg7CgogICAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKAogICAgICAgICAgICBUcmFuc2FjdGlvbih7CiAgICAgICAgICAgICAgICB0bzogX3RvLAogICAgICAgICAgICAgICAgdmFsdWU6IF92YWx1ZSwKICAgICAgICAgICAgICAgIGRhdGE6IF9kYXRhLAogICAgICAgICAgICAgICAgZXhlY3V0ZWQ6IGZhbHNlLAogICAgICAgICAgICAgICAgbnVtQ29uZmlybWF0aW9uczogMAogICAgICAgICAgICB9KQogICAgICAgICk7CgogICAgICAgIGVtaXQgU3VibWl0VHJhbnNhY3Rpb24obXNnLnNlbmRlciwgdHhJbmRleCwgX3RvLCBfdmFsdWUsIF9kYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjb25maXJtVHJhbnNhY3Rpb24odWludCBfdHhJbmRleCkKICAgICAgICBwdWJsaWMKICAgICAgICBvbmx5T3duZXIKICAgICAgICB0eEV4aXN0cyhfdHhJbmRleCkKICAgICAgICBub3RFeGVjdXRlZChfdHhJbmRleCkKICAgICAgICBub3RDb25maXJtZWQoX3R4SW5kZXgpCiAgICB7CiAgICAgICAgVHJhbnNhY3Rpb24gc3RvcmFnZSB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uc1tfdHhJbmRleF07CiAgICAgICAgdHJhbnNhY3Rpb24ubnVtQ29uZmlybWF0aW9ucyArPSAxOwogICAgICAgIGlzQ29uZmlybWVkW190eEluZGV4XVttc2cuc2VuZGVyXSA9IHRydWU7CgogICAgICAgIGVtaXQgQ29uZmlybVRyYW5zYWN0aW9uKG1zZy5zZW5kZXIsIF90eEluZGV4KTsKICAgIH0KCiAgICBmdW5jdGlvbiBleGVjdXRlVHJhbnNhY3Rpb24odWludCBfdHhJbmRleCkKICAgICAgICBwdWJsaWMKICAgICAgICBvbmx5T3duZXIKICAgICAgICB0eEV4aXN0cyhfdHhJbmRleCkKICAgICAgICBub3RFeGVjdXRlZChfdHhJbmRleCkKICAgIHsKICAgICAgICBUcmFuc2FjdGlvbiBzdG9yYWdlIHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25zW190eEluZGV4XTsKCiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgdHJhbnNhY3Rpb24ubnVtQ29uZmlybWF0aW9ucyA+PSBudW1Db25maXJtYXRpb25zUmVxdWlyZWQsCiAgICAgICAgICAgICJjYW5ub3QgZXhlY3V0ZSB0eCIKICAgICAgICApOwoKICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlZCA9IHRydWU7CgogICAgICAgIChib29sIHN1Y2Nlc3MsICkgPSB0cmFuc2FjdGlvbi50by5jYWxse3ZhbHVlOiB0cmFuc2FjdGlvbi52YWx1ZX0oCiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmRhdGEKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc3VjY2VzcywgInR4IGZhaWxlZCIpOwoKICAgICAgICBlbWl0IEV4ZWN1dGVUcmFuc2FjdGlvbihtc2cuc2VuZGVyLCBfdHhJbmRleCk7CiAgICB9CgogICAgZnVuY3Rpb24gcmV2b2tlQ29uZmlybWF0aW9uKHVpbnQgX3R4SW5kZXgpCiAgICAgICAgcHVibGljCiAgICAgICAgb25seU93bmVyCiAgICAgICAgdHhFeGlzdHMoX3R4SW5kZXgpCiAgICAgICAgbm90RXhlY3V0ZWQoX3R4SW5kZXgpCiAgICB7CiAgICAgICAgVHJhbnNhY3Rpb24gc3RvcmFnZSB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uc1tfdHhJbmRleF07CgogICAgICAgIHJlcXVpcmUoaXNDb25maXJtZWRbX3R4SW5kZXhdW21zZy5zZW5kZXJdLCAidHggbm90IGNvbmZpcm1lZCIpOwoKICAgICAgICB0cmFuc2FjdGlvbi5udW1Db25maXJtYXRpb25zIC09IDE7CiAgICAgICAgaXNDb25maXJtZWRbX3R4SW5kZXhdW21zZy5zZW5kZXJdID0gZmFsc2U7CgogICAgICAgIGVtaXQgUmV2b2tlQ29uZmlybWF0aW9uKG1zZy5zZW5kZXIsIF90eEluZGV4KTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRPd25lcnMoKSBwdWJsaWMgdmlldyByZXR1cm5zIChhZGRyZXNzW10gbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIG93bmVyczsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRUcmFuc2FjdGlvbkNvdW50KCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB0cmFuc2FjdGlvbnMubGVuZ3RoOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFRyYW5zYWN0aW9uKHVpbnQgX3R4SW5kZXgpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKAogICAgICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgICAgICB1aW50IHZhbHVlLAogICAgICAgICAgICBieXRlcyBtZW1vcnkgZGF0YSwKICAgICAgICAgICAgYm9vbCBleGVjdXRlZCwKICAgICAgICAgICAgdWludCBudW1Db25maXJtYXRpb25zCiAgICAgICAgKQogICAgewogICAgICAgIFRyYW5zYWN0aW9uIHN0b3JhZ2UgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbnNbX3R4SW5kZXhdOwoKICAgICAgICByZXR1cm4gKAogICAgICAgICAgICB0cmFuc2FjdGlvbi50bywKICAgICAgICAgICAgdHJhbnNhY3Rpb24udmFsdWUsCiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmRhdGEsCiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmV4ZWN1dGVkLAogICAgICAgICAgICB0cmFuc2FjdGlvbi5udW1Db25maXJtYXRpb25zCiAgICAgICAgKTsKICAgIH0KfQo=",
  },
  {
    fileName: "TestContract.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFRlc3RDb250cmFjdCB7CiAgICB1aW50IHB1YmxpYyBpOwoKICAgIGZ1bmN0aW9uIGNhbGxNZSh1aW50IGopIHB1YmxpYyB7CiAgICAgICAgaSArPSBqOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldERhdGEoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZVdpdGhTaWduYXR1cmUoImNhbGxNZSh1aW50MjU2KSIsIDEyMyk7CiAgICB9Cn0K",
  },
]

const html = `<p>Let&#39;s create an multi-sig wallet. Here are the specifications.</p>
<p>The wallet owners can</p>
<ul>
<li>submit a transaction</li>
<li>approve and revoke approval of pending transcations</li>
<li>anyone can execute a transcation after enough owners has approved it.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deposit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint</span> amount, <span class="hljs-keyword">uint</span> balance</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">SubmitTransaction</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to,
        <span class="hljs-keyword">uint</span> value,
        <span class="hljs-keyword">bytes</span> data
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ConfirmTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">RevokeConfirmation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ExecuteTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;

    <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">public</span> owners;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> isOwner;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> numConfirmationsRequired;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">Transaction</span> {
        <span class="hljs-keyword">address</span> to;
        <span class="hljs-keyword">uint</span> value;
        <span class="hljs-keyword">bytes</span> data;
        <span class="hljs-keyword">bool</span> executed;
        <span class="hljs-keyword">uint</span> numConfirmations;
    }

    <span class="hljs-comment">// mapping from tx index =&gt; owner =&gt; bool</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isConfirmed;

    Transaction[] <span class="hljs-keyword">public</span> transactions;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(isOwner[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"not owner"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">txExists</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(_txIndex <span class="hljs-operator">&lt;</span> transactions.<span class="hljs-built_in">length</span>, <span class="hljs-string">"tx does not exist"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">notExecuted</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>transactions[_txIndex].executed, <span class="hljs-string">"tx already executed"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">notConfirmed</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>isConfirmed[_txIndex][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"tx already confirmed"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> _owners, <span class="hljs-keyword">uint</span> _numConfirmationsRequired</span>) </span>{
        <span class="hljs-built_in">require</span>(_owners.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"owners required"</span>);
        <span class="hljs-built_in">require</span>(
            _numConfirmationsRequired <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span>
                _numConfirmationsRequired <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> _owners.<span class="hljs-built_in">length</span>,
            <span class="hljs-string">"invalid number of required confirmations"</span>
        );

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _owners.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _owners[i];

            <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"invalid owner"</span>);
            <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>isOwner[owner], <span class="hljs-string">"owner not unique"</span>);

            isOwner[owner] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
            owners.<span class="hljs-built_in">push</span>(owner);
        }

        numConfirmationsRequired <span class="hljs-operator">=</span> _numConfirmationsRequired;
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">emit</span> Deposit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">submitTransaction</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _value,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        <span class="hljs-keyword">uint</span> txIndex <span class="hljs-operator">=</span> transactions.<span class="hljs-built_in">length</span>;

        transactions.<span class="hljs-built_in">push</span>(
            Transaction({
                to: _to,
                <span class="hljs-built_in">value</span>: _value,
                data: _data,
                executed: <span class="hljs-literal">false</span>,
                numConfirmations: <span class="hljs-number">0</span>
            })
        );

        <span class="hljs-keyword">emit</span> SubmitTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, txIndex, _to, _value, _data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">confirmTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notConfirmed</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction <span class="hljs-operator">=</span> transactions[_txIndex];
        transaction.numConfirmations <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        isConfirmed[_txIndex][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        <span class="hljs-keyword">emit</span> ConfirmTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">executeTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction <span class="hljs-operator">=</span> transactions[_txIndex];

        <span class="hljs-built_in">require</span>(
            transaction.numConfirmations <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> numConfirmationsRequired,
            <span class="hljs-string">"cannot execute tx"</span>
        );

        transaction.executed <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> transaction.to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: transaction.<span class="hljs-built_in">value</span>}(
            transaction.data
        );
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"tx failed"</span>);

        <span class="hljs-keyword">emit</span> ExecuteTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">revokeConfirmation</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction <span class="hljs-operator">=</span> transactions[_txIndex];

        <span class="hljs-built_in">require</span>(isConfirmed[_txIndex][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"tx not confirmed"</span>);

        transaction.numConfirmations <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        isConfirmed[_txIndex][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">emit</span> RevokeConfirmation(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getOwners</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTransactionCount</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> transactions.<span class="hljs-built_in">length</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">address</span> to,
            <span class="hljs-keyword">uint</span> value,
            <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data,
            <span class="hljs-keyword">bool</span> executed,
            <span class="hljs-keyword">uint</span> numConfirmations
        </span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction <span class="hljs-operator">=</span> transactions[_txIndex];

        <span class="hljs-keyword">return</span> (
            transaction.to,
            transaction.<span class="hljs-built_in">value</span>,
            transaction.data,
            transaction.executed,
            transaction.numConfirmations
        );
    }
}
</code></pre>
<p>Here is a contract to test sending transactions from the multi-sig wallet</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> i;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callMe</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> j</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> j;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getData</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"callMe(uint256)"</span>, <span class="hljs-number">123</span>);
    }
}
</code></pre>
`

export default html
