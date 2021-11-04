// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract CompactArray {
    uint[] public arr;

    // Deleting an element creates a gap in the array.
    // One trick to keep the array compact is to
    // move the last element into the place to delete.
    function remove(uint index) public {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];
        // Remove the last element
        arr.pop();
    }

    function test() public {
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        // [1, 2, 3, 4]

        remove(1);
        // [1, 4, 3]

        remove(2);
        // [1, 4]
    }
}
