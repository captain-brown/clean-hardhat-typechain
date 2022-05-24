pragma solidity 0.5.6;

contract Basic {
    string public name;
    uint256 public balance;

    event UpdateInfo(address sender, string name, uint256 balance);
    event UpdateInfoPayable(address sender, string name, uint256 balance);

    constructor(string memory _name, uint256 _balance) public {
        name = _name;
        balance = _balance;
    }

    function getInfo()
        public
        view
        returns (string memory rName, uint256 rBalance)
    {
        rName = name;
        rBalance = balance;
    }

    function getInfo2() public view returns (string memory, uint256) {
        return (name, balance);
    }

    function updateInfo(string memory _name, uint256 _balance) public {
        name = _name;
        balance = _balance;

        emit UpdateInfo(msg.sender, _name, _balance);
    }

    function updateInfoPayable(string memory _name, uint256 _balance)
        public
        payable
    {
        require(msg.value == 1, "need vaule");
        name = _name;
        balance = _balance;

        emit UpdateInfoPayable(msg.sender, _name, _balance);
    }
}
