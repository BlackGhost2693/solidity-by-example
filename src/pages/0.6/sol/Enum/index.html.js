// metadata
export const version = "0.6.0"
export const title = "Enum"
export const description = "Example of enums in Solidity"

const html = `<p>Solidity support enumerables and they are useful to model choice and keep track of state.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract Enum {
    // Enum representing shipping status
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // Default value is the first element listed in
    // definition of the type, in this case "Pending"
    Status public status;

    // Returns uint
    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4
    function get() public view returns (Status) {
        return status;
    }

    // Update status by passing uint into input
    function set(Status _status) public {
        status = _status;
    }

    // You can update to a specific enum like this
    function cancel() public {
        status = Status.Canceled;
    }

    // delete resets the enum to it&#39;s first value, 0
    function reset() public {
        delete status;
    }
}
</code></pre>
`

export default html
