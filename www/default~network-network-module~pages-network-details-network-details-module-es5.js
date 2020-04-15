(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~network-network-module~pages-network-details-network-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/market-header/market-header.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/market-header/market-header.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"Prefrences\">\r\n    <a (click)=\"changePage(5)\"> Prefrences </a>\r\n</div> -->\r\n\r\n<div class=\"mainHeader\" *ngIf=\"type == 1\">\r\n    <div [ngClass]=\"page.currentPage == 1 ?'TB selected':'TB'\">\r\n        <a (click)=\"changePage(1)\"> Ideas </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 2 ?'TB selected':'TB'\">\r\n        <a (click)=\"changePage(2)\"> Shop </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 3 ?'TB TB1 selected':'TB TB1'\">\r\n        <a (click)=\"changePage(3)\"> Restaurants </a>\r\n    </div>\r\n    <div [ngClass]=\"page.currentPage == 4 ?'TB  selected':'TB'\">\r\n        <a (click)=\"changePage(4)\"> Favorite </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mainHeader1\" *ngIf=\" type==2\">\r\n    <div [ngClass]=\"page == 1 ?'TBB selected':'TBB'\">\r\n        <a style=\"color: #15696c;\"> Day </a>\r\n    </div>\r\n    <div [ngClass]=\"page == 2 ?'TBB selected':'TBB '\">\r\n        <a style=\"color: #5fbcc1;\"> 3 Days </a>\r\n    </div>\r\n    <div [ngClass]=\"page == 3 ?'TBB selected':'TBB'\">\r\n        <a style=\"color: #5fbcc1;\"> Week </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mainHeader\" *ngIf=\" type==3\" (click)=\"goBack()\">\r\n    <div class=\"refres\">\r\n        <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n    </div>\r\n    <div class=\"tName\">My Therapist</div>\r\n</div>"

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

/***/ "./src/app/pages/network/network.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/network/network.service.ts ***!
  \**************************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");




var NetworkService = /** @class */ (function () {
    function NetworkService(http, settings) {
        this.http = http;
        this.settings = settings;
        this.loading = false;
        this.baseURL = "assets/json/";
        this.sendObj = { "User": { "Email": "leedorb@gmail.com" } };
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }
    NetworkService.prototype.getPatientDetails = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var ob, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, 7, 8]);
                        ob = { "User": { "Email": "leedorb@gmail.com", "Name": "", "LastName": "", "BirthDate": "" } };
                        return [4 /*yield*/, this.settings.checkIsNetwork()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.post(this.globalURL + '/PatientSettings/get', ob).subscribe(function (data) { console.log("ID : ", data); resolve(data); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.http.get(this.baseURL + 'patient.json').subscribe(function (data) { console.log(data); resolve(data); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 8];
                    case 7: return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }); });
    };
    NetworkService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
    ]; };
    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ })

}]);
//# sourceMappingURL=default~network-network-module~pages-network-details-network-details-module-es5.js.map