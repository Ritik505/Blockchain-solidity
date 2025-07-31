// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract GasGolf {
    uint256 public total;

    event TotalUpdated(uint256 newTotal);

    function sumIfEvenAndLessThan99(uint256[] calldata nums) external {
        uint256 _total = total;
        uint256 len = nums.length;

        for (uint256 i; i < len;) {
            uint256 num = nums[i];

            if ((num & 1 == 1) || num >= 99) {
                unchecked { ++i; }
                continue;
            }

            _total += num;

            unchecked { ++i; }
        }

        total = _total;
        emit TotalUpdated(_total);
    }
}
