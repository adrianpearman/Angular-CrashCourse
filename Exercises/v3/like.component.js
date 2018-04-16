"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        // Version 1
        // if (this.isSelected) {
        //     this.likesCount--
        //      this.isSelected = false
        // }else{
        //     this.likesCount++
        //     this.isSelected = true
        // }
        // Version 2 - refactored
        this.likesCount += (this.isSelected) ? 1 : -1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
