(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-network-details-network-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/network-details/network-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/network-details/network-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!selectedMeal\">\r\n    <app-market-header [page]=\"page\" type=\"3\"></app-market-header>\r\n</ion-header>\r\n\r\n<!-- Pesonal_ID: \"043028463\"\r\nName: \"leedor\"\r\nLastName: \"B\" -->\r\n<ion-content>\r\n    <div class=\"TitleHeader\">\r\n        <div class=\"therapistIMG\">\r\n            <img src=\"../../../assets/img/graphics/therapist.png\" style=\"width:100%;\" />\r\n        </div>\r\n        <div class=\"therapistTitle\">\r\n            <div class=\"nameDes\">{{patientDetails.Name}}</div>\r\n            <div class=\"titleDes\">{{patientDetails.LastName}}</div>\r\n        </div>\r\n        <div class=\"call\" (click)=\"call()\">\r\n            <img src=\"../../../assets/img/graphics/Call.png\" style=\"width:100%;\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div *ngFor=\"let inf of info\">\r\n        <div class=\"infoRow\">\r\n            <div class=\"leftInf\">\r\n                {{inf}}\r\n            </div>\r\n            <div class=\"rightInfo\">\r\n                <img src=\"../../../assets/img/graphics/Preferences_dropdoown.png\" style=\"width:100%;\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/network-details/network-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/network-details/network-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: NetworkDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDetailsPageRoutingModule", function() { return NetworkDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-details.page */ "./src/app/pages/network-details/network-details.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");





var routes = [
    {
        path: '',
        component: _network_details_page__WEBPACK_IMPORTED_MODULE_3__["NetworkDetailsPage"]
    }
];
var NetworkDetailsPageRoutingModule = /** @class */ (function () {
    function NetworkDetailsPageRoutingModule() {
    }
    NetworkDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NetworkDetailsPageRoutingModule);
    return NetworkDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/network-details/network-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/network-details/network-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: NetworkDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDetailsPageModule", function() { return NetworkDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network-details-routing.module */ "./src/app/pages/network-details/network-details-routing.module.ts");
/* harmony import */ var _network_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network-details.page */ "./src/app/pages/network-details/network-details.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var NetworkDetailsPageModule = /** @class */ (function () {
    function NetworkDetailsPageModule() {
    }
    NetworkDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _network_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetworkDetailsPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_network_details_page__WEBPACK_IMPORTED_MODULE_6__["NetworkDetailsPage"]]
        })
    ], NetworkDetailsPageModule);
    return NetworkDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/network-details/network-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/network-details/network-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".TitleHeader {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 0px;\n  background-color: #f9ce89;\n}\n\n.therapistIMG {\n  width: 20%;\n  margin-left: 5px;\n  margin: 3px 10px 0px 8px;\n  float: left;\n}\n\n.therapistTitle {\n  float: left;\n  width: 55%;\n  margin-top: 15px;\n}\n\n.nameDes {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.titleDes {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.call {\n  width: 12%;\n  float: right;\n  margin-right: 15px;\n  margin-top: 17px;\n}\n\n.infoRow {\n  width: 100%;\n  overflow: hidden;\n  background-color: #e8f3cb;\n  padding: 20px;\n  margin-top: 2px;\n  font-size: 17px;\n  font-weight: bold;\n  color: #526a17;\n}\n\n.leftInf {\n  float: left;\n  width: 85%;\n}\n\n.rightInfo {\n  float: right;\n  width: 8%;\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV0d29yay1kZXRhaWxzL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXG5ldHdvcmstZGV0YWlsc1xcbmV0d29yay1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV0d29yay1kZXRhaWxzL25ldHdvcmstZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXR3b3JrLWRldGFpbHMvbmV0d29yay1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZUhlYWRlcntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U4OTtcclxufVxyXG5cclxuLnRoZXJhcGlzdElNR3tcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW46IDNweCAxMHB4IDBweCA4cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRoZXJhcGlzdFRpdGxle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDo1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubmFtZURlc3tcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGl0bGVEZXN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhbGx7XHJcbiAgICB3aWR0aDoxMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4OztcclxufVxyXG5cclxuLmluZm9Sb3d7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U4ZjNjYiA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojNTI2YTE3O1xyXG59XHJcblxyXG4ubGVmdEluZntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6ODUlO1xyXG59XHJcblxyXG4ucmlnaHRJbmZve1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6OCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U4OTtcbn1cblxuLnRoZXJhcGlzdElNRyB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbjogM3B4IDEwcHggMHB4IDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aGVyYXBpc3RUaXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTUlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubmFtZURlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZURlcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYWxsIHtcbiAgd2lkdGg6IDEyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbi5pbmZvUm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYzY2I7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MjZhMTc7XG59XG5cbi5sZWZ0SW5mIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5yaWdodEluZm8ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA4JTtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/network-details/network-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/network-details/network-details.page.ts ***!
  \***************************************************************/
/*! exports provided: NetworkDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDetailsPage", function() { return NetworkDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network/network.service */ "./src/app/pages/network/network.service.ts");




var NetworkDetailsPage = /** @class */ (function () {
    function NetworkDetailsPage(router, api) {
        this.router = router;
        this.api = api;
        this.info = ['BChat', 'Treatment Goals', 'Tasks and Recommendations', 'Food and Products', 'Inforsheets and Links', 'Supplements and Herbs '];
        this.patientDetails = {};
        this.getPatientDetails();
    }
    NetworkDetailsPage.prototype.getPatientDetails = function () {
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
    NetworkDetailsPage.prototype.ngOnInit = function () {
    };
    NetworkDetailsPage.prototype.goback = function () {
        this.router.navigateByUrl('/tabs/network');
    };
    NetworkDetailsPage.prototype.call = function () {
        window.location.href = "tel:+" + this.patientDetails['Pesonal_ID'];
    };
    NetworkDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _network_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] }
    ]; };
    NetworkDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network-details',
            template: __webpack_require__(/*! raw-loader!./network-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/network-details/network-details.page.html"),
            styles: [__webpack_require__(/*! ./network-details.page.scss */ "./src/app/pages/network-details/network-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _network_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]])
    ], NetworkDetailsPage);
    return NetworkDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-network-details-network-details-module-es5.js.map