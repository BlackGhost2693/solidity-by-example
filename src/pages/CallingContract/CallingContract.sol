pragma solidity ^0.5.11;

contract A {
    uint public x;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }
}

contract B {
    function setX(A a, uint x) public returns (uint) {
        return a.setX(x);
    }

    function getX(A a) public view returns (uint) {
        return a.x();
    }
}

contract C {
  function setX(A a, uint x) public returns (bytes memory) {
    // low-level way to call another contract
    // This method is useful when you want to call an arbitrary contract.
    (bool success, bytes memory returnData) = address(a).call(
      abi.encodeWithSignature("setX(uint256)", x)
    );
    require(success);

    return returnData;
  }
}

// TODO call a function and send ether
// https://ethereum.stackexchange.com/questions/9705/how-can-you-call-a-payable-function-in-another-contract-with-arguments-and-send
