(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" class=\"mainTabs\">\r\n        <ion-tab-button class=\"tab\" tab=\"home\" (click)=\"selectedTab(0)\">\r\n            <img [ngClass]=\"currentTab == 0 ? 'iconImg' : 'iconImgOf'\" src=\"assets/img/graphics/bi.png\">\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"index\" class=\"tab\" (click)=\"selectedTab(1)\">\r\n            <img [ngClass]=\"currentTab == 1 ? 'iconImg' : 'iconImgOf'\" src=\"assets/img/graphics/index_icon_on.png\">\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"market/1\" class=\"tab\" (click)=\"selectedTab(2)\">\r\n            <img [ngClass]=\"currentTab == 2 ? 'iconImg' : 'iconImgOf'\" src=\"assets/img/graphics/Market_icon_on.png\">\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"myday\" class=\"tab\" (click)=\"selectedTab(3)\">\r\n            <img [ngClass]=\"currentTab == 3 ? 'iconImg' : 'iconImgOf'\" src=\"assets/img/graphics/MyDay_icon_on.png\">\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"network\" class=\"tab\" (click)=\"selectedTab(4)\">\r\n            <img [ngClass]=\"currentTab == 4 ? 'iconImg' : 'iconImgOf'\" src=\"./assets/img/graphics/Network_icon_on.png\">\r\n            <!-- <ion-label>Network</ion-label> -->\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/home/home.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/home/home.service.ts ***!
  \********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.showMainPage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    HomeService.prototype.ngOnInit = function () {
    };
    HomeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/pages/myday/myday-api.ts":
/*!******************************************!*\
  !*** ./src/app/pages/myday/myday-api.ts ***!
  \******************************************/
/*! exports provided: MyDayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDayService", function() { return MyDayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");





var MyDayService = /** @class */ (function () {
    function MyDayService(http, settings) {
        this.http = http;
        this.settings = settings;
        this.selectedMeal = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.selectedMealRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loading = false;
        this.baseURL = "assets/json/";
        this.sendObj = { "User": { "Email": "leedorb@gmail.com" } };
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }
    MyDayService.prototype.ngOnInit = function () {
    };
    MyDayService.prototype.getMyDayProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this.http.get(this.baseURL + 'myDay.json').subscribe(function (data) { console.log(data); resolve(data); })];
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
    MyDayService.prototype.getMeals = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, 7, 8]);
                        return [4 /*yield*/, this.settings.checkIsNetwork()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.post(this.globalURL + 'UserMenu/GetDailyMenu', this.sendObj).subscribe(function (data) { console.log("GetDailyMenu : ", data); resolve(data); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.http.get(this.baseURL + 'GetDailyMenu.json').subscribe(function (data) { console.log(data); resolve(data); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 8];
                    case 7: return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        }); });
    };
    MyDayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    MyDayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], MyDayService);
    return MyDayService;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(function (m) { return m.HomePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'market/:id',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | market-market-module */ "market-market-module").then(__webpack_require__.bind(null, /*! ../market/market.module */ "./src/app/pages/market/market.module.ts")).then(function (m) { return m.MarketPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'myday',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | myday-myday-module */ "myday-myday-module").then(__webpack_require__.bind(null, /*! ../myday/myday.module */ "./src/app/pages/myday/myday.module.ts")).then(function (m) { return m.MydayPageModule; });
                        }
                    }
                ]
            }, {
                path: 'network',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | network-network-module */[__webpack_require__.e("default~network-network-module~pages-network-details-network-details-module"), __webpack_require__.e("network-network-module")]).then(__webpack_require__.bind(null, /*! ../network/network.module */ "./src/app/pages/network/network.module.ts")).then(function (m) { return m.NetworkPageModule; });
                        }
                    }
                ]
            }, {
                path: 'index',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | index-index-module */ "index-index-module").then(__webpack_require__.bind(null, /*! ../index/index.module */ "./src/app/pages/index/index.module.ts")).then(function (m) { return m.IndexPageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n  background-color: #f1f8e0 !important;\n}\n\n.iconImg {\n  width: 50px;\n}\n\n.iconImgOf {\n  width: 50px;\n  opacity: 0.5;\n}\n\n.iconMainImg {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGdpdGxhYlxcYnJhdm8vc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOGUwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uSW1ne1xyXG4gICAgd2lkdGg6NTBweDtcclxufVxyXG5cclxuLmljb25JbWdPZntcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pY29uTWFpbkltZ3tcclxuICAgIHdpZHRoOjUwcHg7XHJcbn0iLCIudGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlMCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbkltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaWNvbkltZ09mIHtcbiAgd2lkdGg6IDUwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmljb25NYWluSW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myday_myday_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myday/myday-api */ "./src/app/pages/myday/myday-api.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.service */ "./src/app/pages/home/home.service.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(api, homeService) {
        this.api = api;
        this.homeService = homeService;
        this.currentTab = 0;
    }
    TabsPage.prototype.selectedTab = function (tab) {
        this.currentTab = tab;
        if (this.currentTab == 0)
            this.homeService.showMainPage.next(true);
        if (this.currentTab == 3)
            this.api.selectedMeal.next(false);
        console.log(this.currentTab);
    };
    TabsPage.ctorParameters = function () { return [
        { type: _myday_myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"] },
        { type: _home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myday_myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"], _home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map