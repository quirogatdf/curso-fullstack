"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tragamoneda = void 0;
var Casino_1 = require("./Casino");
var Tragamoneda = /** @class */ (function (_super) {
    __extends(Tragamoneda, _super);
    function Tragamoneda(tematica) {
        var _this = _super.call(this) || this;
        _this.tematica = tematica;
        return _this;
    }
    /* Setter and Getter */
    Tragamoneda.prototype.setTematica = function (tematica) {
        this.tematica = tematica;
    };
    Tragamoneda.prototype.getTematica = function () {
        return this.tematica;
    };
    Tragamoneda.prototype.apostar = function () {
    };
    return Tragamoneda;
}(Casino_1.Casino));
exports.Tragamoneda = Tragamoneda;
