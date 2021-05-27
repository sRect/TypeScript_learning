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
var FPerson = /** @class */ (function () {
    function FPerson() {
        this.fav = ["girl", 'game'];
        this.newName = 'Bob';
    }
    Object.defineProperty(FPerson.prototype, "favStr", {
        get: function () {
            return this.fav.join(',');
        },
        set: function (val) {
            this.fav.push(val);
        },
        enumerable: false,
        configurable: true
    });
    FPerson.prototype.sayHello = function () {
        console.log("name: " + this.newName);
    };
    FPerson.aboutName = 'bob';
    return FPerson;
}());
var fPerson = new FPerson();
// console.log(FPerson.aboutName);
// console.log(fPerson.sayHello());
var HPerson = /** @class */ (function (_super) {
    __extends(HPerson, _super);
    function HPerson() {
        var _this = _super.call(this) || this;
        _this.heart = 'star';
        return _this;
    }
    HPerson.prototype.sayLove = function () {
        console.log("heart: " + this.heart);
    };
    return HPerson;
}(FPerson));
var hPerson = new HPerson();
var TPerson = /** @class */ (function (_super) {
    __extends(TPerson, _super);
    function TPerson(xx, yy) {
        var _this = _super.call(this) || this;
        _this.xx = xx;
        _this.yy = yy;
        _this.xx = xx;
        _this.yy = yy;
        return _this;
    }
    TPerson.prototype.logXXYY = function () {
        console.log("xx: " + this.xx + ", yy: " + this.yy);
    };
    return TPerson;
}(FPerson));
var tPerson = new TPerson('hh', 'cc');
tPerson.logXXYY();
tPerson.sayHello();
console.log("static aboutName: " + HPerson.aboutName);
console.log(hPerson.sayLove());
console.log(hPerson.sayHello());
console.log("fav: " + hPerson.favStr);
hPerson.favStr = 'hello';
// hPerson.newName = 'hhh';
console.log(hPerson);
console.log(fPerson);
