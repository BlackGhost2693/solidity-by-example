pragma solidity ^0.5.11;

contract Mapping {
    // Mapping from address to uint
    mapping(address => uint) public myMap;
    // Nested mapping (mapping from address to another mapping)
    mapping(address => mapping(address => uint)) public nested;

    function get(address _addr) public view returns (uint) {
         // Mapping always returns a value.
         // If the value was never set, it will return the default value.
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Delete resets the value to the default value.
        delete myMap[_addr];
    }
}

contract NestedMapping {
    mapping(address => mapping(address => uint)) public nested;

    function get(address _addr1, address _addr2) public view returns (uint) {
         // You can get values from a nested mapping even when it is not
         // initialized
        return  nested[_addr1][_addr2];
    }

    function set(address _addr1, address _addr2, uint _i) public {
        nested[_addr1][_addr2] = _i;
    }

    function remove(address _addr1, address _addr2) public {
        delete nested[_addr1][_addr2];
    }
}
