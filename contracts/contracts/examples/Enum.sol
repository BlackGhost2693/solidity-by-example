pragma solidity ^0.5.11;

contract Shipping {
    // Order matters
    enum Status {
        Pending,
        Shipping,
        Delivered,
        Cancelled
    }

    Status public status;

    // Try:
    // - execute ship() and then confirmDelivery()
    // - re-deploy the contract and execute cancel()
    // Any other order of execution fails.

    function ship() public {
        require(status == Status.Pending);
        status = Status.Shipping;
    }

    function confirmDelivery() public {
        require(status == Status.Shipping);
        status = Status.Delivered;
    }

    function cancel() public {
        require(status == Status.Pending);
        status = Status.Cancelled;
    }
}
