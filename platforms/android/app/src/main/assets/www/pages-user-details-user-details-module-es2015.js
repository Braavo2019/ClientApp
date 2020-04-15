(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>userDetails</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"head\">\r\n        account\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>user profile</div>\r\n        <div class=\"infoSmall\">Yonatan Kliger</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>account settings</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>connect to other services</div>\r\n    </div>\r\n    <div class=\"head\">\r\n        General\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>Location</div>\r\n        <div class=\"infoSmall\">israel</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>Unit system</div>\r\n        <div class=\"infoSmall\">metric</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>Goals</div>\r\n        <div class=\"infoSmall\">set goals for trainings , steps , calories and sleep</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>Screen backlight</div>\r\n        <div class=\"infoSmall\">Automatic</div>\r\n    </div>\r\n    <div class=\"info\">\r\n        <div>Altitude offset</div>\r\n        <div class=\"infoSmall\">Altitude offset</div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/user-details/user-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-details/user-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageRoutingModule", function() { return UserDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailsPage"]
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-details/user-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details-routing.module */ "./src/app/pages/user-details/user-details-routing.module.ts");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");







let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailsPageRoutingModule"]
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
    })
], UserDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  background-color: #f7f7f7;\n  padding: 10px 15px;\n  font-weight: bold;\n}\n\n.info {\n  padding: 10px 15px;\n  border-bottom: 1px solid #f7f7f7;\n  font-size: 17px;\n}\n\n.infoSmall {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXHVzZXItZGV0YWlsc1xcdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uaW5mb1NtYWxse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59IiwiLmhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmluZm9TbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDetailsPage = class UserDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html"),
        styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-details-user-details-module-es2015.js.map