(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-network-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/network/network.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/network/network.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header *ngIf=\"!selectedMeal\">\r\n  <app-market-header [page]=\"page\" type=\"3\"></app-market-header>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n    <div class=\"TitleHeader\">\r\n        <!-- <div class=\"therapistIMG\">\r\n            <img src=\"../../../assets/img/graphics/therapist.png\" style=\"width:100%;\" />\r\n        </div> -->\r\n        <div class=\"therapistTitle\">\r\n            <!-- <div class=\"titleDes\">Dr. T</div> -->\r\n            <div class=\"nameDes\">Immediate support</div>\r\n        </div>\r\n        <div class=\"call\" (click)=\"call()\">\r\n            <img src=\"../../../assets/img/graphics/Call.png\" style=\"width:100%;\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"infoRow\" [routerLink]=\"'/network-details'\">\r\n        <div class=\"leftInf\">\r\n            My Therapist\r\n        </div>\r\n        <div class=\"rightInfo\">\r\n            <ion-icon name=\"arrow-dropright\" class=\"arrRight\"></ion-icon>\r\n            <!-- <img src=\"../../../assets/img/graphics/Preferences_dropdoown.png\" style=\"width:100%;\" /> -->\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"infoRow\">\r\n        <div class=\"leftInf\">\r\n            Groups\r\n        </div>\r\n        <div class=\"rightInfo\">\r\n            <img src=\"../../../assets/img/graphics/Preferences_dropdoown.png\" style=\"width:100%;\" />\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/network/network-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/network/network-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NetworkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageRoutingModule", function() { return NetworkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network.page */ "./src/app/pages/network/network.page.ts");




var routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_3__["NetworkPage"]
    }
];
var NetworkPageRoutingModule = /** @class */ (function () {
    function NetworkPageRoutingModule() {
    }
    NetworkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NetworkPageRoutingModule);
    return NetworkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/network/network.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.module.ts ***!
  \*************************************************/
/*! exports provided: NetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network-routing.module */ "./src/app/pages/network/network-routing.module.ts");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.page */ "./src/app/pages/network/network.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var NetworkPageModule = /** @class */ (function () {
    function NetworkPageModule() {
    }
    NetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _network_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetworkPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ],
            declarations: [_network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]]
        })
    ], NetworkPageModule);
    return NetworkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/network/network.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 0px;\n  background-color: #f9ce89;\n}\n\n.therapistIMG {\n  width: 20%;\n  margin-left: 5px;\n  margin: 3px 10px 0px 8px;\n  float: left;\n}\n\n.therapistTitle {\n  float: left;\n  width: 65%;\n  margin-top: 10px;\n}\n\n.nameDes {\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 10px;\n  margin-top: -5px;\n}\n\n.arrRight {\n  font-size: 30px;\n  color: #526a17;\n  margin-left: 20px;\n}\n\n.titleDes {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.call {\n  width: 12%;\n  float: right;\n  margin-right: 25px;\n  margin-top: 3px;\n  padding: 5px;\n}\n\n.infoRow {\n  width: 100%;\n  overflow: hidden;\n  background-color: #e8f3cb;\n  padding: 20px;\n  margin-top: 2px;\n  font-size: 17px;\n  font-weight: bold;\n  color: #526a17;\n}\n\n.leftInf {\n  float: left;\n  width: 85%;\n}\n\n.rightInfo {\n  float: right;\n  width: 8%;\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV0d29yay9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGdpdGxhYlxcYnJhdm8vc3JjXFxhcHBcXHBhZ2VzXFxuZXR3b3JrXFxuZXR3b3JrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV0d29yay9uZXR3b3JrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXR3b3JrL25ldHdvcmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRpdGxlSGVhZGVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTg5O1xyXG59XHJcblxyXG4udGhlcmFwaXN0SU1He1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbjogM3B4IDEwcHggMHB4IDhweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGhlcmFwaXN0VGl0bGV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYW1lRGVze1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7OztcclxufVxyXG5cclxuLmFyclJpZ2h0e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICM1MjZhMTc7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDs7XHJcbn1cclxuXHJcbi50aXRsZURlc3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FsbHtcclxuICAgIHdpZHRoOjEyJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDs7XHJcbiAgICBwYWRkaW5nOiA1cHg7O1xyXG59XHJcblxyXG4uaW5mb1Jvd3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZThmM2NiIDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiM1MjZhMTc7XHJcbn1cclxuXHJcbi5sZWZ0SW5me1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDo4NSU7XHJcbn1cclxuXHJcbi5yaWdodEluZm97XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDo4JTtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn0iLCIuVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTg5O1xufVxuXG4udGhlcmFwaXN0SU1HIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luOiAzcHggMTBweCAwcHggOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRoZXJhcGlzdFRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYW1lRGVzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5hcnJSaWdodCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM1MjZhMTc7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGl0bGVEZXMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FsbCB7XG4gIHdpZHRoOiAxMiU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmluZm9Sb3cge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjNjYjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzUyNmExNztcbn1cblxuLmxlZnRJbmYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLnJpZ2h0SW5mbyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDglO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/network/network.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/network/network.page.ts ***!
  \***********************************************/
/*! exports provided: NetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPage", function() { return NetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.service */ "./src/app/pages/network/network.service.ts");



var NetworkPage = /** @class */ (function () {
    function NetworkPage(api) {
        this.api = api;
        this.patientDetails = {};
        this.info = ['BChat', 'Treatment Goals', 'Tasks and Recommendations', 'Food and Products', 'Inforsheets and Links', 'Supplements and Herbs '];
        this.getPatientDetails();
    }
    NetworkPage.prototype.getPatientDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.api.getPatientDetails()];
                    case 1:
                        _a.patientDetails = _b.sent();
                        console.log("pa : ", this.patientDetails, this.patientDetails['Pesonal_ID']);
                        return [2 /*return*/];
                }
            });
        });
    };
    NetworkPage.prototype.ngOnInit = function () {
    };
    NetworkPage.prototype.call = function () {
        window.location.href = "tel:+" + this.patientDetails['Pesonal_ID'];
    };
    NetworkPage.ctorParameters = function () { return [
        { type: _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"] }
    ]; };
    NetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! raw-loader!./network.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/network/network.page.html"),
            styles: [__webpack_require__(/*! ./network.page.scss */ "./src/app/pages/network/network.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]])
    ], NetworkPage);
    return NetworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=network-network-module-es5.js.map