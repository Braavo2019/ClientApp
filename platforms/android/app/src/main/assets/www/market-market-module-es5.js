(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-market-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/market-header/market-header.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/market-header/market-header.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"Prefrences\">\r\n    <a (click)=\"changePage(5)\"> Prefrences </a>\r\n</div> -->\r\n\r\n<div class=\"mainHeader\" *ngIf=\"type == 1\">\r\n    <div [ngClass]=\"page.currentPage == 1 ?'TB selected':'TB'\">\r\n        <a (click)=\"changePage(1)\"> Ideas </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 2 ?'TB selected':'TB'\">\r\n        <a (click)=\"changePage(2)\"> Shop </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 3 ?'TB TB1 selected':'TB TB1'\">\r\n        <a (click)=\"changePage(3)\"> Restaurants </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 4 ?'TB  selected':'TB'\">\r\n        <a (click)=\"changePage(4)\"> Favorite </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mainHeader1\" *ngIf=\" type==2\">\r\n    <div [ngClass]=\"page == 1 ?'TBB selected':'TBB'\">\r\n        <a style=\"color: #15696c;\"> Day </a>\r\n    </div>\r\n    <div [ngClass]=\"page == 2 ?'TBB selected':'TBB '\">\r\n        <a style=\"color: #5fbcc1;\"> 3 Days </a>\r\n    </div>\r\n    <div [ngClass]=\"page == 3 ?'TBB selected':'TBB'\">\r\n        <a style=\"color: #5fbcc1;\"> Week </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mainHeader\" *ngIf=\" type==3\" (click)=\"goBack()\">\r\n    <div class=\"refres\">\r\n        <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n    </div>\r\n    <div class=\"tName\">My Therapist</div>\r\n</div>"

/***/ }),

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

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _market_header_market_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market-header/market-header.component */ "./src/app/components/market-header/market-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_market_header_market_header_component__WEBPACK_IMPORTED_MODULE_3__["MarketHeaderComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            exports: [_market_header_market_header_component__WEBPACK_IMPORTED_MODULE_3__["MarketHeaderComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/market-header/market-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/market-header/market-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  overflow: hidden;\n  width: 100%;\n  background-color: #e8a12d;\n}\n\n.mainHeader1 {\n  overflow: hidden;\n  width: 100%;\n  background-color: #7cdfe4;\n}\n\n.Prefrences {\n  background-color: #cccccc;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  padding: 4px;\n}\n\n.TB {\n  float: left;\n  width: 20%;\n  text-align: center;\n  padding: 10px 0px;\n  color: white;\n}\n\n.TBB {\n  float: left;\n  width: 33%;\n  text-align: center;\n  padding: 15px 7px;\n  color: #15696c;\n  font-weight: bold;\n}\n\na {\n  color: white;\n}\n\n.TB1 {\n  width: 30%;\n}\n\n.selected {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.tName {\n  padding: 15px;\n  color: #536b19;\n  font-size: 18px;\n  font-weight: bold;\n  padding-left: 20px;\n}\n\n.refres {\n  float: left;\n  font-size: 30px;\n  margin-top: 10px;\n  color: #536b19;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXQtaGVhZGVyL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFya2V0LWhlYWRlclxcbWFya2V0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXQtaGVhZGVyL21hcmtldC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2V0LWhlYWRlci9tYXJrZXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5IZWFkZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGExMmQ7XHJcbn1cclxuXHJcbi5tYWluSGVhZGVyMXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjZGZlNDtcclxufVxyXG5cclxuLlByZWZyZW5jZXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgICBwYWRkaW5nOiA0cHg7O1xyXG59XHJcblxyXG5cclxuXHJcbi5UQntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLlRCQntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6MzMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCA3cHg7XHJcbiAgICBjb2xvcjojMTU2OTZjO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uVEIxe1xyXG4gICAgd2lkdGg6MzAlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4udE5hbWV7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IzUzNmIxOTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG59XHJcblxyXG4ucmVmcmVze1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiM1MzZiMTk7XHJcbn0iLCIubWFpbkhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThhMTJkO1xufVxuXG4ubWFpbkhlYWRlcjEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjZGZlNDtcbn1cblxuLlByZWZyZW5jZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLlRCIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlRCQiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggN3B4O1xuICBjb2xvcjogIzE1Njk2YztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5UQjEge1xuICB3aWR0aDogMzAlO1xufVxuXG4uc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udE5hbWUge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzUzNmIxOTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucmVmcmVzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM1MzZiMTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/market-header/market-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/market-header/market-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: MarketHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketHeaderComponent", function() { return MarketHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MarketHeaderComponent = /** @class */ (function () {
    function MarketHeaderComponent(router) {
        this.router = router;
    }
    MarketHeaderComponent.prototype.ngOnInit = function () { };
    MarketHeaderComponent.prototype.changePage = function (num) {
        this.page['currentPage'] = num;
        if (num == 5) {
            this.page['currentPage'] = 1;
            this.router.navigateByUrl('/prefrences/1');
        }
    };
    MarketHeaderComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/tabs/network');
    };
    MarketHeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MarketHeaderComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MarketHeaderComponent.prototype, "type", void 0);
    MarketHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market-header',
            template: __webpack_require__(/*! raw-loader!./market-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/market-header/market-header.component.html"),
            styles: [__webpack_require__(/*! ./market-header.component.scss */ "./src/app/components/market-header/market-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MarketHeaderComponent);
    return MarketHeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");




var ApiMarketService = /** @class */ (function () {
    function ApiMarketService(settings, http) {
        this.settings = settings;
        this.http = http;
        this.loading = false;
        this.sendObj = { "User": { "Email": "leedorb@gmail.com" } };
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }
    ApiMarketService.prototype.ngOnInit = function () {
        this.getShopProduct();
    };
    ApiMarketService.prototype.getShopProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.http.get('assets/json/shop.json').subscribe(function (data) { console.log(data); resolve(data); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 3: return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    ApiMarketService.prototype.getRestaurantProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.http.get('assets/json/restaurant.json').subscribe(function (data) { console.log(data); resolve(data); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 3: return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    ApiMarketService.prototype.getIdeasProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, 7, 8]);
                        return [4 /*yield*/, this.settings.checkIsNetwork()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.post(this.globalURL + 'UserMenu/GetUserMarketOptions', this.sendObj).subscribe(function (data) { console.log("ID : ", data); resolve(data); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.http.get('assets/json/ideas.json').subscribe(function (data) { console.log(data); resolve(data); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 8];
                    case 7: return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }); });
    };
    ApiMarketService.ctorParameters = function () { return [
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiMarketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiMarketService);
    return ApiMarketService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoritsComponent = /** @class */ (function () {
    function FavoritsComponent() {
        this.height = window.innerHeight - 100;
        this.favorite = [];
        try {
            this.favorite = JSON.parse(localStorage.favorite);
        }
        catch (err) {
            this.favorite = [];
        }
    }
    FavoritsComponent.prototype.ngOnInit = function () { };
    FavoritsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorits',
            template: __webpack_require__(/*! raw-loader!./favorits.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/favorits/favorits.component.html"),
            styles: [__webpack_require__(/*! ./favorits.component.scss */ "./src/app/pages/market/favorits/favorits.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoritsComponent);
    return FavoritsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
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
    return CardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



var IdeasComponent = /** @class */ (function () {
    function IdeasComponent(api) {
        this.api = api;
        this.products = [];
        this.arrLeft = [];
        this.arrRight = [];
        this.getProductsFromServer();
    }
    IdeasComponent.prototype.ngOnInit = function () { };
    IdeasComponent.prototype.getProductsFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getIdeasProduct()];
                    case 1:
                        _a.products = _b.sent();
                        for (i = 0; i < this.products.length; i++) {
                            if (i < this.products.length / 2)
                                this.arrLeft.push(this.products[i]);
                            else
                                this.arrRight.push(this.products[i]);
                        }
                        console.log("Ideas : ", this.products);
                        return [2 /*return*/];
                }
            });
        });
    };
    IdeasComponent.ctorParameters = function () { return [
        { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
    ]; };
    IdeasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ideas',
            template: __webpack_require__(/*! raw-loader!./ideas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/ideas/ideas.component.html"),
            styles: [__webpack_require__(/*! ./ideas.component.scss */ "./src/app/pages/market/ideas/ideas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
    ], IdeasComponent);
    return IdeasComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market.page */ "./src/app/pages/market/market.page.ts");




var routes = [
    {
        path: '',
        component: _market_page__WEBPACK_IMPORTED_MODULE_3__["MarketPage"]
    }
];
var MarketPageRoutingModule = /** @class */ (function () {
    function MarketPageRoutingModule() {
    }
    MarketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MarketPageRoutingModule);
    return MarketPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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















var MarketPageModule = /** @class */ (function () {
    function MarketPageModule() {
    }
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
    return MarketPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MarketPage = /** @class */ (function () {
    function MarketPage(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {
            currentPage: 1,
        };
        console.log("Init2");
    }
    MarketPage.prototype.ionViewDidEnter = function () {
        console.log("ID : ", this.activatedRoute.snapshot.paramMap.get('id'));
        if (!this.activatedRoute.snapshot.paramMap.get('id'))
            this.page['currentPage'] = 1;
        this.page['currentPage'] = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    };
    MarketPage.prototype.changePage = function () {
        this.router.navigateByUrl('/prefrences/1');
    };
    MarketPage.prototype.ionViewWillEnter = function () {
        console.log("INIT2Market");
    };
    MarketPage.prototype.ngOnInit = function () {
        console.log("Init");
    };
    MarketPage.prototype.changeCurrentPage = function (num) {
        console.log("P : ", num);
        this.page['currentPage'] = num;
    };
    MarketPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MarketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! raw-loader!./market.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/market.page.html"),
            styles: [__webpack_require__(/*! ./market.page.scss */ "./src/app/pages/market/market.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MarketPage);
    return MarketPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestaurantRowComponent = /** @class */ (function () {
    function RestaurantRowComponent() {
    }
    RestaurantRowComponent.prototype.ngOnInit = function () { };
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
    return RestaurantRowComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(api) {
        this.api = api;
        this.products = [];
        this.getProductsFromServer();
    }
    RestaurantComponent.prototype.ngOnInit = function () { };
    RestaurantComponent.prototype.getProductsFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getRestaurantProduct()];
                    case 1:
                        _a.products = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestaurantComponent.ctorParameters = function () { return [
        { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
    ]; };
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! raw-loader!./restaurant.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.scss */ "./src/app/pages/market/restaurant/restaurant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopRowComponent = /** @class */ (function () {
    function ShopRowComponent() {
        this.favorite = [];
    }
    ShopRowComponent.prototype.ngOnInit = function () { };
    ShopRowComponent.prototype.changeFavorite = function () {
        this.product.selected = !this.product.selected;
        this.addToLocalStorage();
    };
    ShopRowComponent.prototype.addToLocalStorage = function () {
        var _this = this;
        try {
            this.favorite = JSON.parse(localStorage.favorite);
        }
        catch (err) {
            this.favorite = [];
        }
        var found = this.favorite.findIndex(function (element) { return element['UUID'] == _this.product['UUID']; });
        if (found >= 0)
            this.favorite.splice(found, 1);
        else
            this.favorite.push(this.product);
        localStorage.favorite = JSON.stringify(this.favorite);
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
    return ShopRowComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.marketService */ "./src/app/pages/market/api.marketService.ts");



var ShopComponent = /** @class */ (function () {
    function ShopComponent(api) {
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
    ShopComponent.prototype.ngOnInit = function () { };
    ShopComponent.prototype.getProductsFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getShopProduct()];
                    case 1:
                        _a.products = _b.sent();
                        this.products.map(function (item) {
                            var found = _this.favorite.findIndex(function (element) { return element['UUID'] == item['UUID']; });
                            if (found >= 0)
                                return item.selected = true;
                            else
                                return item.selected = false;
                        });
                        console.log("products : ", this.products);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopComponent.ctorParameters = function () { return [
        { type: _api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"] }
    ]; };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/market/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/pages/market/shop/shop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_marketService__WEBPACK_IMPORTED_MODULE_2__["ApiMarketService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ })

}]);
//# sourceMappingURL=market-market-module-es5.js.map