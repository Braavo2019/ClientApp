(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/index.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div align=\"center\">\n    <div class=\"btn-group btn-group-toggle group\" data-toggle=\"buttons\">\n      <label [ngClass]=\"active == 0 ?'btn btn-secondary btnToogle active':'btn btn-secondary btnToogle'\"\n        (click)=\"changeToogle(0)\">\n        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\"> Health Conditions\n      </label>\n      <label [ngClass]=\"active == 1 ?'btn btn-secondary btnToogle active':'btn btn-secondary btnToogle'\"\n        (click)=\"changeToogle(1)\">\n        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Therapies\n      </label>\n    </div>\n  </div>\n  <div class=\"line\"></div>\n  <div *ngIf=\"mainIndex.length > 0 \">\n    <div *ngFor=\"let item of mainIndex[active].items\">\n      <div class=\"itemName\">{{item.Name}} </div>\n      <div class=\"line\"></div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/index/api.IndexService.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/index/api.IndexService.ts ***!
  \*************************************************/
/*! exports provided: ApiIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiIndexService", function() { return ApiIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiIndexService = /** @class */ (function () {
    function ApiIndexService(http) {
        this.http = http;
        this.loading = false;
        this.baseURL = "assets/json/";
    }
    ApiIndexService.prototype.ngOnInit = function () {
    };
    ApiIndexService.prototype.getIndex = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.http.get(this.baseURL + 'index.json').subscribe(function (data) { console.log(data); resolve(data); })];
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
    ApiIndexService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiIndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiIndexService);
    return ApiIndexService;
}());



/***/ }),

/***/ "./src/app/pages/index/index-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/index/index.page.ts");




var routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
var IndexPageRoutingModule = /** @class */ (function () {
    function IndexPageRoutingModule() {
    }
    IndexPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IndexPageRoutingModule);
    return IndexPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/index/index.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/index/index.page.ts");







var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
            ],
            declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());



/***/ }),

/***/ "./src/app/pages/index/index.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group {\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n}\n\n.btnToogle {\n  width: 50% !important;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  background-color: #f7f7f7;\n  margin-top: 10px;\n  margin-bottom: 17px;\n}\n\n.itemName {\n  color: #999999;\n  margin-left: 18px;\n  font-size: 20px;\n  margin-top: -8px;\n}\n\n.btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #e8a12d;\n  border-color: #e8a12d;\n}\n\n.btn-secondary {\n  background-color: #e4d3d3;\n  border-color: #e4d3d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXB7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OztcclxufVxyXG5cclxuLmJ0blRvb2dsZXtcclxuICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGluZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzs7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxufVxyXG5cclxuLml0ZW1OYW1le1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4OztcclxuICAgIG1hcmdpbi10b3A6IC04cHg7O1xyXG59XHJcblxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5zaG93Pi5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGExMmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOGExMmQ7XHJcbn1cclxuXHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRkM2QzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTRkM2QzO1xyXG59XHJcbiIsIi5ncm91cCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0blRvb2dsZSB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbi5pdGVtTmFtZSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTEyZDtcbiAgYm9yZGVyLWNvbG9yOiAjZThhMTJkO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGQzZDM7XG4gIGJvcmRlci1jb2xvcjogI2U0ZDNkMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/index/index.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/index/index.page.ts ***!
  \*******************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_IndexService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.IndexService */ "./src/app/pages/index/api.IndexService.ts");



var IndexPage = /** @class */ (function () {
    function IndexPage(api) {
        this.api = api;
        this.active = 0;
        this.mainIndex = [];
        this.getMainIndex();
    }
    IndexPage.prototype.getMainIndex = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getIndex()];
                    case 1:
                        _a.mainIndex = _b.sent();
                        console.log("MainIndex : ", this.mainIndex);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexPage.prototype.ngOnInit = function () {
    };
    IndexPage.prototype.changeToogle = function (nm) {
        this.active = nm;
    };
    IndexPage.ctorParameters = function () { return [
        { type: _api_IndexService__WEBPACK_IMPORTED_MODULE_2__["ApiIndexService"] }
    ]; };
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.page.html"),
            styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/index/index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_IndexService__WEBPACK_IMPORTED_MODULE_2__["ApiIndexService"]])
    ], IndexPage);
    return IndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module-es5.js.map