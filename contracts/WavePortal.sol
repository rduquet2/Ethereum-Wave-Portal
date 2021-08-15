// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint totalWaves;

    struct Waver {
        address waverAddress;
        uint waves;
    }

    Waver[] wavers;

    constructor() {
        console.log("Here is my wave smart contract!");
    }

    function wave() public {
        totalWaves += 1;
        bool waverFound = false; 
        for (uint i = 0; i < wavers.length; i++) {
            if (wavers[i].waverAddress == msg.sender) {
                wavers[i].waves++;
                waverFound = true;
                console.log("%s has waved %d times.", msg.sender, wavers[i].waves);
            }
        }
        wavers.push(Waver(msg.sender, 1));
        console.log("%s is waved!", msg.sender);
        if (!waverFound) {
            console.log("%s has waved 1 time.", msg.sender);
        }
    }

    function getTotalWaves() view public returns (uint) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function getAddressOfMaxWaver() view public returns (address) {
        address maxWaverAddress;
        uint maxWaves = 0;
        for (uint i = 0; i < wavers.length; i++) {
            if (wavers[i].waves >= maxWaves) {
                maxWaverAddress = wavers[i].waverAddress;
                maxWaves = wavers[i].waves;
            }
        }
        console.log("%s has the most waves at %d waves!", maxWaverAddress, maxWaves);
        return maxWaverAddress;
    }
}