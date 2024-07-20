pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MMY is Ownable, ERC20 {
    uint256 constant MAX = 230000000 ether;
    address public ADMIN_WALLET;
    
    constructor (address _admin) ERC20("Mummy", "MMY") {
        ADMIN_WALLET = _admin;
        // mint total supply to admin walelt
        _mint(ADMIN_WALLET, MAX);

        transferOwnership(ADMIN_WALLET);
    }

    function burn(uint256 _amount) external onlyOwner {
        _burn(_msgSender(), _amount);
    }
}
