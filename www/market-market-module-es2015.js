(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-market-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/favorits/favorits.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/favorits/favorits.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main1 myClass\" [style.height.px]=\"height\">\n  <app-shop-row *ngFor=\"let product of favorite\" [product]=\"product\" class=\"mainR\"></app-shop-row>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/ideas/card/card.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/ideas/card/card.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card1\">\n  <!-- <img class=\"imgCard\" src=\"../../../../../assets/img/main/Food_Items_pics/{{item.Image.Name}}\" style=\"width:100%\"> -->\n  <img class=\"imgCard\" src=\"../../../assets/img/main/Food_Items_pics/{{item.Image.Name}}.jpg\" style=\"width:100%\">\n  <div class=\"infoCard\"> {{item.Name}} </div>\n  <!-- <div class=\"descCard\"> {{item.Description}} </div> -->\n  <!-- <div class=\"line\"></div> -->\n  <!-- <div class=\"calCard\"> Caluries : {{item.Caluries}} </div> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/ideas/ideas.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/ideas/ideas.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <img src=\"assets/img/pages/ideas.jpg\" style=\"width: 100%;\">\n  <div class=\"cards\">\n    <div class=\"cardRight\">\n      <div *ngFor=\"let item of arrLeft let i=index\">\n        <app-card [item]=\"item\"></app-card>\n      </div>\n    </div>\n    <div class=\"cardLeft\">\n      <div *ngFor=\"let item of arrRight let i=index\">\n        <app-card [item]=\"item\"></app-card>\n      </div>\n    </div>\n\n    <!-- <div class=\"cardRight\" *ngFor=\"let item of arrRight let i=index\">\n      <app-card [item]=\"item\"></app-card>\n    </div> -->\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/market.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/market.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-market-header [page]=\"page\" type=\"1\"></app-market-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"setting\" (click)=\"changePage()\">\n    <img src=\"../../../assets/img/graphics/headerb.png\" style=\"width:100%;\" />\n  </div>\n  <div [ngSwitch]=\"page.currentPage\">\n    <div *ngSwitchCase=\"1\">\n      <app-ideas></app-ideas>\n    </div>\n    <div *ngSwitchCase=\"2\">\n      <app-shop></app-shop>\n    </div>\n    <div *ngSwitchCase=\"3\">\n      <app-restaurant></app-restaurant>\n    </div>\n    <div *ngSwitchCase=\"4\">\n      <app-favorits></app-favorits>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerDV \">\n  <div class=\"mainRow\">\n    <div class=\"mainImg\">\n      <img src=\"assets/img/restaurant/{{product.Image.Name}}\" style=\"width:100%\">\n    </div>\n    <div class=\"info\">\n      {{product.Name}}\n    </div>\n    <div class=\"desc\">\n      {{product.Description}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/restaurant/restaurant.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/restaurant/restaurant.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main1\">\n  <app-restaurant-row *ngFor=\"let product of products\" [product]=\"product\" class=\"mainR\">\n  </app-restaurant-row>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/shop/shop-row/shop-row.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/shop/shop-row/shop-row.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerDV \">\n  <div class=\"mainRow\">\n    <div class=\"basket\">\n      <img src=\"assets/img/graphics/Add_to_Cart_icon.png\" style=\"width:100%\">\n    </div>\n    <div class=\"mainImg\">\n      <img src=\"assets/img/medicines/{{product.Image.Name}}\" style=\"width:100%\">\n    </div>\n    <div class=\"info\">\n      {{product.Name}}\n    </div>\n    <div class=\"like\" align=\"center\" (click)=\"changeFavorite()\">\n      <img src=\"assets/img/graphics/fav_e.png\" style=\"width:30px;\" *ngIf=\"!product.selected\">\n      <img src=\"assets/img/graphics/fav_f.png\" style=\"width:30px;\" *ngIf=\"product.selected\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/market/shop/shop.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/market/shop/shop.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main1\">\n  <app-shop-row *ngFor=\"let product of products\" [product]=\"product\" class=\"mainR\"></app-shop-row>\n</div>"

/***/ }),

/***/ "./src/app/pages/market/api.marketService.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/market/api.marketService.ts ***!
  \***************************************************/
/*! exports provided: ApiMarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMarketService", function() { return ApiMarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");




let ApiMarketService = class ApiMarketService {
    constructor(settings, http) {
        this.settings = settings;
        this.http = http;
        this.loading = false;
        this.sendObj = { "User": { "Email": "leedorb@gmail.com" } };
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }
    ngOnInit() {
        this.getShopProduct();
    }
    getShopProduct() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.http.get('assets/json/shop.json').subscribe(data => { console.log(data); resolve(data); });
            }
            catch (err) {
                console.log(err);
            }
            finally {
            }
        }));
    }
    getRestaurantProduct() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.http.get('assets/json/restaurant.json').subscribe(data => { console.log(data); resolve(data); });
            }
            catch (err) {
                console.log(err);
            }
            finally {
            }
        }));
    }
    getIdeasProduct() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (yield this.settings.checkIsNetwork())
                    yield this.http.post(this.globalURL + 'UserMenu/GetUserMarketOptions', this.sendObj).subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    yield this.http.get('assets/json/ideas.json').subscribe(data => { console.log(data); resolve(data); });
            }
            catch (err) {
                console.log(err);
            }
            finally {
            }
        }));
    }
};
ApiMarketService.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiMarketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiMarketService);



/***/ }),

/***/ "./src/app/pages/market/favorits/favorits.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/market/favorits/favorits.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main1 {\n  background-color: #f1efef;\n  padding-top: 10px;\n}\n\n.mainR {\n  padding-top: 10px;\n  position: relative;\n  margin-top: 10px;\n  border: 1px solid #f1efef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L2Zhdm9yaXRzL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXG1hcmtldFxcZmF2b3JpdHNcXGZhdm9yaXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXJrZXQvZmF2b3JpdHMvZmF2b3JpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFya2V0L2Zhdm9yaXRzL2Zhdm9yaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZlZjsvL2E2ZWFlZDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4OztcclxufVxyXG5cclxuLm1haW5Se1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjFlZmVmO1xyXG59XHJcblxyXG4iLCIubWFpbjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1haW5SIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZWZlZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/market/favorits/favorits.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/market/favorits/favorits.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritsComponent", function() { return FavoritsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritsComponent = class FavoritsComponent {
    constructor() {
        this.height = window.innerHeight - 100;
        this.favorite = [];
        try {
            this.favorite = JSON.parse(localStorage.favorite);
        }
        catch (err) {
            this.favorite = [];
        }
    }
    ngOnInit() { }
};
FavoritsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorits',
        template: __webpack_require__(/*! raw-loader!./favorits.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/favorits/favorits.component.html"),
        styles: [__webpack_require__(/*! ./favorits.component.scss */ "./src/app/pages/market/favorits/favorits.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavoritsComponent);



/***/ }),

/***/ "./src/app/pages/market/ideas/card/card.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/market/ideas/card/card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card1 {\n  padding: 10px;\n  margin: 5px;\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\n.imgCard {\n  border-radius: 5px;\n}\n\n.infoCard {\n  margin-top: 4px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.descCard {\n  margin-top: 0px;\n  font-weight: 300;\n  font-size: 16px;\n}\n\n.calCard {\n  margin-top: 3px;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L2lkZWFzL2NhcmQvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbWFya2V0XFxpZGVhc1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFya2V0L2lkZWFzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFya2V0L2lkZWFzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkMXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7O1xyXG59XHJcblxyXG4uaW1nQ2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDs7XHJcbn1cclxuXHJcbi5pbmZvQ2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZGVzY0NhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2FsQ2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGluZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufSIsIi5jYXJkMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pbWdDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5mb0NhcmQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5kZXNjQ2FyZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FsQ2FyZCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/market/ideas/card/card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/market/ideas/card/card.component.ts ***!
  \***********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CardComponent.prototype, "item", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/ideas/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/pages/market/ideas/card/card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CardComponent);



/***/ }),

/***/ "./src/app/pages/market/ideas/ideas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/market/ideas/ideas.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textContainer {\n  width: 95%;\n  margin: auto;\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #fdedaf;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.discription {\n  margin-top: 20px;\n}\n\n.cards {\n  width: 100%;\n  overflow: hidden;\n}\n\n.cardLeft {\n  float: left;\n  width: 50%;\n  margin-top: 10px;\n}\n\n.cardRight {\n  float: right;\n  width: 50%;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L2lkZWFzL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXG1hcmtldFxcaWRlYXNcXGlkZWFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXJrZXQvaWRlYXMvaWRlYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDQTs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldC9pZGVhcy9pZGVhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Q29udGFpbmVye1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGVkYWY7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kaXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7O1xyXG59XHJcblxyXG4uY2FyZHN7XHJcbndpZHRoOjEwMCU7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDs7XHJcbn1cclxuXHJcbi5jYXJkUmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OztcclxufSIsIi50ZXh0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlZGFmO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGlzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZHMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmRMZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkUmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/market/ideas/ideas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/market/ideas/ideas.component.ts ***!
  \*******************************************************/
/*! exports provided: IdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasComponent", function() { return IdeasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



let IdeasComponent = class IdeasComponent {
    constructor(api) {
        this.api = api;
        this.products = [];
        this.arrLeft = [];
        this.arrRight = [];
        this.getProductsFromServer();
    }
    ngOnInit() { }
    getProductsFromServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.api.getIdeasProduct();
            for (let i = 0; i < this.products.length; i++) {
                if (i < this.products.length / 2)
                    this.arrLeft.push(this.products[i]);
                else
                    this.arrRight.push(this.products[i]);
            }
            console.log("Ideas : ", this.products);
        });
    }
};
IdeasComponent.ctorParameters = () => [
    { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
];
IdeasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ideas',
        template: __webpack_require__(/*! raw-loader!./ideas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/ideas/ideas.component.html"),
        styles: [__webpack_require__(/*! ./ideas.component.scss */ "./src/app/pages/market/ideas/ideas.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
], IdeasComponent);



/***/ }),

/***/ "./src/app/pages/market/market-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/market/market-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MarketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageRoutingModule", function() { return MarketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market.page */ "./src/app/pages/market/market.page.ts");




const routes = [
    {
        path: '',
        component: _market_page__WEBPACK_IMPORTED_MODULE_3__["MarketPage"]
    }
];
let MarketPageRoutingModule = class MarketPageRoutingModule {
};
MarketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/market/market.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/market/market.module.ts ***!
  \***********************************************/
/*! exports provided: MarketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageModule", function() { return MarketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-routing.module */ "./src/app/pages/market/market-routing.module.ts");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market.page */ "./src/app/pages/market/market.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ideas_ideas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ideas/ideas.component */ "./src/app/pages/market/ideas/ideas.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/pages/market/shop/shop.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/pages/market/restaurant/restaurant.component.ts");
/* harmony import */ var _favorits_favorits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favorits/favorits.component */ "./src/app/pages/market/favorits/favorits.component.ts");
/* harmony import */ var _shop_shop_row_shop_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop-row/shop-row.component */ "./src/app/pages/market/shop/shop-row/shop-row.component.ts");
/* harmony import */ var _restaurant_restaurant_row_restaurant_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurant/restaurant-row/restaurant-row.component */ "./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.ts");
/* harmony import */ var _ideas_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ideas/card/card.component */ "./src/app/pages/market/ideas/card/card.component.ts");















let MarketPageModule = class MarketPageModule {
};
MarketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _market_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_market_page__WEBPACK_IMPORTED_MODULE_6__["MarketPage"], _ideas_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _ideas_ideas_component__WEBPACK_IMPORTED_MODULE_8__["IdeasComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"], _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantComponent"], _favorits_favorits_component__WEBPACK_IMPORTED_MODULE_11__["FavoritsComponent"], _shop_shop_row_shop_row_component__WEBPACK_IMPORTED_MODULE_12__["ShopRowComponent"], _restaurant_restaurant_row_restaurant_row_component__WEBPACK_IMPORTED_MODULE_13__["RestaurantRowComponent"]]
    })
], MarketPageModule);



/***/ }),

/***/ "./src/app/pages/market/market.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/market/market.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setting {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXG1hcmtldFxcbWFya2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFya2V0L21hcmtldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXJrZXQvbWFya2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ne1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDoxMHB4O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn0iLCIuc2V0dGluZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/market/market.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/market/market.page.ts ***!
  \*********************************************/
/*! exports provided: MarketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPage", function() { return MarketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MarketPage = class MarketPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {
            currentPage: 1,
        };
        console.log("Init2");
    }
    ionViewDidEnter() {
        console.log("ID : ", this.activatedRoute.snapshot.paramMap.get('id'));
        if (!this.activatedRoute.snapshot.paramMap.get('id'))
            this.page['currentPage'] = 1;
        this.page['currentPage'] = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }
    changePage() {
        this.router.navigateByUrl('/prefrences/1');
    }
    ionViewWillEnter() {
        console.log("INIT2Market");
    }
    ngOnInit() {
        console.log("Init");
    }
    changeCurrentPage(num) {
        console.log("P : ", num);
        this.page['currentPage'] = num;
    }
};
MarketPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MarketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-market',
        template: __webpack_require__(/*! raw-loader!./market.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/market.page.html"),
        styles: [__webpack_require__(/*! ./market.page.scss */ "./src/app/pages/market/market.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MarketPage);



/***/ }),

/***/ "./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainRow {\n  width: 90%;\n  overflow: hidden;\n  background-color: white;\n  position: relative;\n  left: 5%;\n}\n\n.mainImg {\n  float: left;\n  width: 40%;\n}\n\n.info {\n  float: left;\n  width: 60%;\n  text-align: right;\n  margin-top: 20px;\n  padding-right: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #526a17;\n}\n\n.desc {\n  text-align: right;\n  margin-top: 20px;\n  padding-right: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L3Jlc3RhdXJhbnQvcmVzdGF1cmFudC1yb3cvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbWFya2V0XFxyZXN0YXVyYW50XFxyZXN0YXVyYW50LXJvd1xccmVzdGF1cmFudC1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcmtldC9yZXN0YXVyYW50L3Jlc3RhdXJhbnQtcm93L3Jlc3RhdXJhbnQtcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldC9yZXN0YXVyYW50L3Jlc3RhdXJhbnQtcm93L3Jlc3RhdXJhbnQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Sb3d7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjUlO1xyXG59XHJcblxyXG4ubWFpbkltZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6NDAlO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojNTI2YTE3O1xyXG59XHJcblxyXG4uZGVzY3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDs7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLm1haW5Sb3cge1xuICB3aWR0aDogOTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1JTtcbn1cblxuLm1haW5JbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmluZm8ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTI2YTE3O1xufVxuXG4uZGVzYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.ts ***!
  \************************************************************************************/
/*! exports provided: RestaurantRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantRowComponent", function() { return RestaurantRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RestaurantRowComponent = class RestaurantRowComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RestaurantRowComponent.prototype, "product", void 0);
RestaurantRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant-row',
        template: __webpack_require__(/*! raw-loader!./restaurant-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.html"),
        styles: [__webpack_require__(/*! ./restaurant-row.component.scss */ "./src/app/pages/market/restaurant/restaurant-row/restaurant-row.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RestaurantRowComponent);



/***/ }),

/***/ "./src/app/pages/market/restaurant/restaurant.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/market/restaurant/restaurant.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main1 {\n  background-color: #f1efef;\n  padding-top: 10px;\n}\n\n.mainR {\n  padding-top: 10px;\n  position: relative;\n  margin-top: 10px;\n  border: 1px solid #f1efef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L3Jlc3RhdXJhbnQvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbWFya2V0XFxyZXN0YXVyYW50XFxyZXN0YXVyYW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXJrZXQvcmVzdGF1cmFudC9yZXN0YXVyYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldC9yZXN0YXVyYW50L3Jlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7O1xyXG59XHJcblxyXG4ubWFpblJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDs7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmMWVmZWY7XHJcbn0iLCIubWFpbjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1haW5SIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZWZlZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/market/restaurant/restaurant.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/market/restaurant/restaurant.component.ts ***!
  \*****************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



let RestaurantComponent = class RestaurantComponent {
    constructor(api) {
        this.api = api;
        this.products = [];
        this.getProductsFromServer();
    }
    ngOnInit() { }
    getProductsFromServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.api.getRestaurantProduct();
        });
    }
};
RestaurantComponent.ctorParameters = () => [
    { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
];
RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurant',
        template: __webpack_require__(/*! raw-loader!./restaurant.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/restaurant/restaurant.component.html"),
        styles: [__webpack_require__(/*! ./restaurant.component.scss */ "./src/app/pages/market/restaurant/restaurant.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
], RestaurantComponent);



/***/ }),

/***/ "./src/app/pages/market/shop/shop-row/shop-row.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/market/shop/shop-row/shop-row.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainRow {\n  width: 90%;\n  overflow: hidden;\n  background-color: white;\n  position: relative;\n  left: 5%;\n}\n\n.basket {\n  float: left;\n  width: 20%;\n  padding: 10px 20px;\n  height: 70px;\n  padding-top: 20px;\n  background-color: #e1f9f9;\n}\n\n.mainImg {\n  float: left;\n  width: 20%;\n  margin-top: 0px;\n}\n\n.info {\n  float: left;\n  width: 40%;\n  text-align: right;\n  margin-top: 20px;\n}\n\n.like {\n  float: right;\n  width: 10%;\n  margin-top: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L3Nob3Avc2hvcC1yb3cvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbWFya2V0XFxzaG9wXFxzaG9wLXJvd1xcc2hvcC1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcmtldC9zaG9wL3Nob3Atcm93L3Nob3Atcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFya2V0L3Nob3Avc2hvcC1yb3cvc2hvcC1yb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblJvd3tcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6NSU7XHJcbn1cclxuXHJcbi5jb250YWluZXJEVntcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iYXNrZXR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmOTtcclxufVxyXG5cclxuLm1haW5JbWd7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmluZm97XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6NDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OztcclxufVxyXG5cclxuLmxpa2V7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjEwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OztcclxufVxyXG5cclxuIiwiLm1haW5Sb3cge1xuICB3aWR0aDogOTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1JTtcbn1cblxuLmJhc2tldCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5Zjk7XG59XG5cbi5tYWluSW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmluZm8ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5saWtlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/market/shop/shop-row/shop-row.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/market/shop/shop-row/shop-row.component.ts ***!
  \******************************************************************/
/*! exports provided: ShopRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRowComponent", function() { return ShopRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShopRowComponent = class ShopRowComponent {
    constructor() {
        this.favorite = [];
    }
    ngOnInit() { }
    changeFavorite() {
        this.product.selected = !this.product.selected;
        this.addToLocalStorage();
    }
    addToLocalStorage() {
        try {
            this.favorite = JSON.parse(localStorage.favorite);
        }
        catch (err) {
            this.favorite = [];
        }
        const found = this.favorite.findIndex(element => element['UUID'] == this.product['UUID']);
        if (found >= 0)
            this.favorite.splice(found, 1);
        else
            this.favorite.push(this.product);
        localStorage.favorite = JSON.stringify(this.favorite);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShopRowComponent.prototype, "product", void 0);
ShopRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-row',
        template: __webpack_require__(/*! raw-loader!./shop-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/shop/shop-row/shop-row.component.html"),
        styles: [__webpack_require__(/*! ./shop-row.component.scss */ "./src/app/pages/market/shop/shop-row/shop-row.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopRowComponent);



/***/ }),

/***/ "./src/app/pages/market/shop/shop.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/market/shop/shop.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main1 {\n  background-color: #f1efef;\n  padding-top: 10px;\n}\n\n.mainR {\n  padding-top: 10px;\n  position: relative;\n  margin-top: 10px;\n  border: 1px solid #f1efef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L3Nob3AvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbWFya2V0XFxzaG9wXFxzaG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXJrZXQvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldC9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmOy8vI2E2ZWFlZDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4OztcclxufVxyXG5cclxuLm1haW5Se1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjFlZmVmLy8jYTZlYWVkO1xyXG59IiwiLm1haW4xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZlZjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5tYWluUiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWVmZWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/market/shop/shop.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/market/shop/shop.component.ts ***!
  \*****************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



let ShopComponent = class ShopComponent {
    constructor(api) {
        this.api = api;
        this.products = [];
        this.favorite = [];
        this.getProductsFromServer();
        try {
            this.favorite = JSON.parse(localStorage.favorite);
        }
        catch (err) {
            this.favorite = [];
        }
    }
    ngOnInit() { }
    getProductsFromServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.api.getShopProduct();
            this.products.map(item => {
                const found = this.favorite.findIndex(element => element['UUID'] == item['UUID']);
                if (found >= 0)
                    return item.selected = true;
                else
                    return item.selected = false;
            });
            console.log("products : ", this.products);
        });
    }
};
ShopComponent.ctorParameters = () => [
    { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/pages/market/shop/shop.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
], ShopComponent);



/***/ })

}]);
//# sourceMappingURL=market-market-module-es2015.js.map