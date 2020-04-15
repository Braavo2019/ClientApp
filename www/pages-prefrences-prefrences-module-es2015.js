(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prefrences-prefrences-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/prefrences/prefrences.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/prefrences/prefrences.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <!-- <ion-icon name=\"arrow-back-circle-outline\"></ion-icon> -->\r\n    <div class=\"mainHeader\">\r\n        <div *ngIf=\"insertPageId == 2\" class=\"refres\" [routerLink]=\"'/tabs/myday/'\">\r\n            <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n        </div>\r\n        <div *ngIf=\"insertPageId == 1\" class=\"refres\" [routerLink]=\"'/tabs/market/1'\">\r\n            <ion-icon name=\"arrow-dropleft\"></ion-icon>\r\n        </div>\r\n        <div class=\"info\">\r\n            Perfrences\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n    <div class=\"section\">\r\n        <div class=\"mainSection\">MEALS</div>\r\n        <div class=\"mRow\">\r\n            <div class=\"row \" *ngFor=\"let meal of meals\">\r\n                <div class=\"col-1\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"meal.selected\" class=\"cb\">\r\n                </div>\r\n                <div class=\"col-10 mealTXT\">\r\n                    {{meal.name}}\r\n                </div>\r\n                <div class=\"line\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row ml-1\">\r\n        <div class=\"col-11\">\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Calories</label>\r\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                    <option>600</option>\r\n                    <option>800</option>\r\n                    <option>1000</option>\r\n                    <option>1200</option>\r\n                    <option>1400</option>\r\n                    <option>1600</option>\r\n                    <option>1800</option>\r\n                    <option>2000</option>\r\n                    <option>2200</option>\r\n                    <option>2400</option>\r\n                    <option>2600</option>\r\n                    <option>2800</option>\r\n                    <option>3000</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n        <div class=\"mainSection\">Diet</div>\r\n        <div class=\"mRow\">\r\n            <div class=\"row mt-3\" *ngFor=\"let diet of diets let i=index\">\r\n                <div class=\"col-1\">\r\n                    <input type=\"radio\" name=\"diet\" [value]=\"i\" [(ngModel)]=\"dietSelected\" class=\"cb\"\r\n                        (ngModelChange)=\"cbChange()\">\r\n                </div>\r\n                <div class=\"col-10 mealTXT\">\r\n                    {{diet.Name}}\r\n                </div>\r\n                <div class=\"toogles\" *ngIf=\"dietSelected == i\">\r\n                    <div class=\"toogles\">\r\n                        <div class=\"toogleLeft\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Gluten</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div class=\"toogleRight\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Grain</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"toogles\">\r\n                        <div class=\"toogleLeft\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Dairy</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div class=\"toogleRight\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Eggs</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"toogles\">\r\n                        <div class=\"toogleLeft\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Soy</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div class=\"toogleRight\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Fish</ion-label>\r\n                                <ion-toggle></ion-toggle>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"line\"></div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/prefrences/api.perfrencesService.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/prefrences/api.perfrencesService.ts ***!
  \***********************************************************/
/*! exports provided: ApiPerfrencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPerfrencesService", function() { return ApiPerfrencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");




let ApiPerfrencesService = class ApiPerfrencesService {
    constructor(http, settings) {
        this.http = http;
        this.settings = settings;
        this.loading = false;
        this.baseURL = "assets/json/";
        this.sendObj = { "User": { "Email": "leedorb@gmail.com" } };
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }
    ngOnInit() {
    }
    getDiets() {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (yield this.settings.checkIsNetwork())
                    yield this.http.get(this.globalURL + '/Diets/get').subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    yield this.http.get(this.baseURL + 'diets.json').subscribe(data => { console.log(data); resolve(data); });
            }
            catch (err) {
                console.log(err);
            }
            finally {
            }
        }));
    }
    sendDietToServer(dietId) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let ob = { "User": { "Email": "leedorb@gmail.com" }, "DietsUUID": [dietId] };
                if (yield this.settings.checkIsNetwork())
                    yield this.http.post(this.globalURL + '/PatientSettings/SetPatientDiets', ob).subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    alert("No internet");
            }
            catch (err) {
                console.log(err);
            }
            finally {
            }
        }));
    }
};
ApiPerfrencesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
ApiPerfrencesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
], ApiPerfrencesService);



/***/ }),

/***/ "./src/app/pages/prefrences/prefrences-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/prefrences/prefrences-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PrefrencesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefrencesPageRoutingModule", function() { return PrefrencesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _prefrences_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefrences.page */ "./src/app/pages/prefrences/prefrences.page.ts");




const routes = [
    {
        path: '',
        component: _prefrences_page__WEBPACK_IMPORTED_MODULE_3__["PrefrencesPage"]
    }
];
let PrefrencesPageRoutingModule = class PrefrencesPageRoutingModule {
};
PrefrencesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrefrencesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prefrences/prefrences.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/prefrences/prefrences.module.ts ***!
  \*******************************************************/
/*! exports provided: PrefrencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefrencesPageModule", function() { return PrefrencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prefrences_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prefrences-routing.module */ "./src/app/pages/prefrences/prefrences-routing.module.ts");
/* harmony import */ var _prefrences_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prefrences.page */ "./src/app/pages/prefrences/prefrences.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let PrefrencesPageModule = class PrefrencesPageModule {
};
PrefrencesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prefrences_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrefrencesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_prefrences_page__WEBPACK_IMPORTED_MODULE_6__["PrefrencesPage"]]
    })
], PrefrencesPageModule);



/***/ }),

/***/ "./src/app/pages/prefrences/prefrences.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/prefrences/prefrences.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".strip {\n  margin-top: 5px;\n}\n\n.mainHeader {\n  overflow: hidden;\n  width: 100%;\n  background-color: #e8a12d;\n  padding: 10px;\n}\n\n.refres {\n  width: 10%;\n  float: left;\n  color: black;\n  z-index: 100;\n  font-size: 30px;\n  margin-top: 8px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.info {\n  width: 75%;\n  float: left;\n  margin-left: 0px;\n  margin-top: 5px;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.setting {\n  width: 10%;\n  float: left;\n}\n\n.mainSection {\n  font-size: 20px;\n  font-weight: bold;\n  margin-left: 16px;\n  margin-top: 10px;\n}\n\n.cb {\n  margin-left: 15px;\n  width: 20px;\n  height: 20px;\n}\n\n.mealTXT {\n  margin-left: 10px;\n  margin-top: -2px;\n}\n\n.line {\n  width: 100%;\n  height: 1px;\n  background-color: #f7f7f7;\n  margin-top: 10px;\n  margin-bottom: 17px;\n}\n\n.mRow {\n  margin-top: 15px;\n}\n\n.toogles {\n  overflow: hidden;\n  width: 100%;\n}\n\n.toogleLeft {\n  width: 40%;\n  float: left;\n  margin-left: 20px;\n}\n\n.toogleRight {\n  width: 40%;\n  float: right;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlZnJlbmNlcy9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGdpdGxhYlxcYnJhdm8vc3JjXFxhcHBcXHBhZ2VzXFxwcmVmcmVuY2VzXFxwcmVmcmVuY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlZnJlbmNlcy9wcmVmcmVuY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NSOztBRE1JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSFI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hSOztBRE1JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNIUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURNSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNIUjs7QURNSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURNSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFI7O0FETUk7RUFDSSxnQkFBQTtBQ0hSOztBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDSFI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSFI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVmcmVuY2VzL3ByZWZyZW5jZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmlwe1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbkhlYWRlcntcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTEyZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVmcmVze1xyXG4gICAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDs7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5mb3tcclxuICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZXR0aW5ne1xyXG4gICAgICAgIHdpZHRoOjEwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpblNlY3Rpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNie1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVhbFRYVHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5le1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1Sb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9vZ2xlc3tcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50b29nbGVMZWZ0e1xyXG4gICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9vZ2xlUmlnaHR7XHJcbiAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9IiwiLnN0cmlwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWFpbkhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThhMTJkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmVmcmVzIHtcbiAgd2lkdGg6IDEwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluZm8ge1xuICB3aWR0aDogNzUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2V0dGluZyB7XG4gIHdpZHRoOiAxMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWFpblNlY3Rpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNiIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5tZWFsVFhUIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuXG4ubVJvdyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b29nbGVzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29nbGVMZWZ0IHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udG9vZ2xlUmlnaHQge1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/prefrences/prefrences.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/prefrences/prefrences.page.ts ***!
  \*****************************************************/
/*! exports provided: PrefrencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefrencesPage", function() { return PrefrencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_perfrencesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.perfrencesService */ "./src/app/pages/prefrences/api.perfrencesService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PrefrencesPage = class PrefrencesPage {
    constructor(api, activatedRoute) {
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.insertPageId = 0;
        this.dietSelected = 0;
        this.meals = [{
                name: 'Breakfast',
                selected: false,
            }, {
                name: 'Branch',
                selected: false,
            }, {
                name: 'Lunch',
                selected: false,
            }, {
                name: 'Supper',
                selected: false,
            }, {
                name: 'Night',
                selected: false,
            }];
        if (localStorage.meals)
            this.meals = JSON.parse(localStorage.meals);
        this.insertPageId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getDietsFromServer();
    }
    getDietsFromServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.diets = yield this.api.getDiets();
            console.log("DIETS : ", this.diets);
        });
    }
    ngOnInit() {
    }
    cbChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.meals = JSON.stringify(this.meals);
            console.log("DDD : ", this.diets, this.dietSelected);
            let ans = yield this.api.sendDietToServer(this.diets[this.dietSelected]['UUID']);
        });
    }
};
PrefrencesPage.ctorParameters = () => [
    { type: _api_perfrencesService__WEBPACK_IMPORTED_MODULE_2__["ApiPerfrencesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PrefrencesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prefrences',
        template: __webpack_require__(/*! raw-loader!./prefrences.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/prefrences/prefrences.page.html"),
        styles: [__webpack_require__(/*! ./prefrences.page.scss */ "./src/app/pages/prefrences/prefrences.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_perfrencesService__WEBPACK_IMPORTED_MODULE_2__["ApiPerfrencesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PrefrencesPage);



/***/ })

}]);
//# sourceMappingURL=pages-prefrences-prefrences-module-es2015.js.map