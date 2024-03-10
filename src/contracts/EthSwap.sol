// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.6.0;

import "./NovaCoin.sol";

contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    NovaCoin public novacoin;
    uint public rate = 100;

    // Constructor
    constructor(NovaCoin _novacoin) public {
        novacoin = _novacoin;
    }

    event TokensPurchased(
    address account,
    address novacoin,
    uint amount,
    uint rate
  );

  event TokensSold(
    address account,
    address novacoin,
    uint amount,
    uint rate
  );

  function buyTokens() public payable {
    // Calculate the number of tokens to buy
    uint tokenAmount = msg.value * rate;

    // Require that EthSwap has enough tokens
    require(novacoin.balanceOf(address(this)) >= tokenAmount);

    // Transfer tokens to the user
    novacoin.transfer(msg.sender, tokenAmount);

    // Emit an event
    emit TokensPurchased(msg.sender, address(novacoin), tokenAmount, rate);
  }

   function sellTokens(uint _amount) public {
    // User can't sell more tokens than they have
    require(novacoin.balanceOf(msg.sender) >= _amount);

    // Calculate the amount of Ether to redeem
    uint etherAmount = _amount / rate;

    // Require that EthSwap has enough Ether
    require(address(this).balance >= etherAmount);

    // Perform sale
    novacoin.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(etherAmount);

    // Emit an event
    emit TokensSold(msg.sender, address(novacoin), _amount, rate);
}


}


