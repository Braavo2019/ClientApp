(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content style=\"overflow: hidden;\">\r\n    <div *ngIf=\"showMainPage\" class=\"messages\" [routerLink]=\"['/tabs/myday']\"></div>\r\n    <div *ngIf=\"showMainPage\" class=\"star\" [routerLink]=\"['/tabs/market/2']\"></div>\r\n    <div *ngIf=\"showMainPage\" class=\"userDetails\" [routerLink]=\"['/user-details']\"></div>\r\n    <img *ngIf=\"showMainPage\" (click)=\"changePageStatus()\" src=\"../../../assets/img/pages/main_1.png\"\r\n        style=\"height:100%\" class=\"Img\">\r\n\r\n    <img *ngIf=\"!showMainPage\" (click)=\"changePageStatus()\" src=\"../../../assets/img/pages/main_2.png\"\r\n        style=\"height:100%\" class=\"Img\">\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Img {\n  overflow: hidden;\n}\n\n.star {\n  width: 40%;\n  height: 100px;\n  position: absolute;\n  top: 73%;\n  background-color: red;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.messages {\n  width: 20%;\n  height: 100px;\n  position: absolute;\n  top: 4%;\n  background-color: red;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.userDetails {\n  width: 30%;\n  height: 100px;\n  position: absolute;\n  top: 6%;\n  background-color: red;\n  opacity: 0;\n  right: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGdpdGxhYlxcYnJhdm8vc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JbWd7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RhcntcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo3MyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVzc2FnZXN7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlckRldGFpbHN7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcmlnaHQ6MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLkltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdGFyIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDczJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZXNzYWdlcyB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyRGV0YWlscyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwO1xuICByaWdodDogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/pages/home/home.service.ts");



let HomePage = class HomePage {
    constructor(api) {
        this.api = api;
        this.showMainPage = true;
        console.log("Contructor");
        api.showMainPage.subscribe(value => {
            this.showMainPage = value;
        });
    }
    ionViewWillEnter() {
        console.log("INIT2");
    }
    ionViewDidEnter() {
        console.log("INIT23");
        this.showMainPage = true;
    }
    ngOnInit() {
        console.log("INIT");
    }
    changePageStatus() {
        this.showMainPage = !this.showMainPage;
    }
};
HomePage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map