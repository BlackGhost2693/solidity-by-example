// metadata
export const version = "0.6.0"
export const title = "Merkle Tree"
export const description = "Learn about Merkle tree in Solidity"

const html = `<p>Merkle tree allows you to cryptographically prove that an element is contained</p>
<p>in a set without revealing the entire set.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract MerkleProof {
    function verify(
        bytes32[] memory proof, bytes32 root, bytes32 leaf, uint index
    )
        public pure returns (bool)
    {
        bytes32 hash = leaf;

        for (uint i = 0; i &lt; proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (index % 2 == 0) {
                hash = keccak256(abi.encodePacked(hash, proofElement));
            } else {
                hash = keccak256(abi.encodePacked(proofElement, hash));
            }

            index = index / 2;
        }

        return hash == root;
    }
}

contract TestMerkleProof is MerkleProof {
    bytes32[] public hashes;

    constructor() public {
        string[4] memory transactions = [
            "alice -&gt; bob",
            "bob -&gt; dave",
            "carol -&gt; alice",
            "dave -&gt; bob"
        ];

        for (uint i = 0; i &lt; transactions.length; i++) {
            hashes.push(keccak256(abi.encodePacked(transactions[i])));
        }

        uint n = transactions.length;
        uint offset = 0;

        while (n &gt; 0) {
            for (uint i = 0; i &lt; n - 1; i+=2) {
                hashes.push(
                    keccak256(abi.encodePacked(
                        hashes[offset + i],
                        hashes[offset + i + 1]
                    ))
                );
            }
            offset += n;
            n = n / 2;
        }
    }

    function getRoot() public view returns (bytes32) {
        return hashes[hashes.length - 1];
    }

    /* verify
    3rd leaf
    0x1bbd78ae6188015c4a6772eb1526292b5985fc3272ead4c65002240fb9ae5d13

    root
    0x074b43252ffb4a469154df5fb7fe4ecce30953ba8b7095fe1e006185f017ad10

    index
    2

    proof
    0x948f90037b4ea787c14540d9feb1034d4a5bc251b9b5f8e57d81e4b470027af8
    0x63ac1b92046d474f84be3aa0ee04ffe5600862228c81803cce07ac40484aee43
    */
}
</code></pre>
`

export default html
