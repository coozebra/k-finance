// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {Ownable2StepUpgradeable} from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";

import {IAdaptersRegistry} from "../interfaces/IAdaptersRegistry.sol";

contract AdaptersRegistryMock is Ownable2StepUpgradeable, IAdaptersRegistry {
    bool public returnValue;
    address public adapterAddress;

    uint256[] public validProtocols;

    function initialize() external initializer {
        __Ownable2Step_init();
        validProtocols = [1, 2];
        returnValue = false;
    }

    function setReturnValue(bool _value) external onlyOwner {
        returnValue = _value;
    }

    function setReturnAddress(address _address) external onlyOwner {
        adapterAddress = _address;
    }

    function getAdapterAddress(
        uint256 _protocolId
    ) external view returns (bool, address) {
        _protocolId; // just to avoid warnings
        return (returnValue, adapterAddress);
    }

    function allValidProtocols() external view returns (uint256[] memory) {
        return validProtocols;
    }
}
