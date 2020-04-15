(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myday-myday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myday/md-row/md-row.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myday/md-row/md-row.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div [ngClass]=\"item.type == 'Meal'?'mainMyDayRowClicked':'mainMyDayRow'\">\n    <div class=\"alertImg\">\n      <img src=\"../../../../assets/img/graphics/alert.png\" style=\"width:100%;\" />\n    </div>\n    <div class=\"timeMyDay\">\n      {{item.time}}\n    </div>\n    <div class=\"InfoMyDay\">\n      {{item.title}}\n    </div>\n    <div class=\"arr\" *ngIf=\"item.type == 'Meal'\">\n      <!-- <ion-icon name=\"arrow-forward\"></ion-icon> -->\n      <ion-icon name=\"arrow-dropright\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"line\">\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myday/myday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myday/myday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   -->\r\n\r\n\r\n<ion-header *ngIf=\"selectedMeal\">\r\n    <div class=\"mainHeader\">\r\n        <div class=\"refres\" (click)=\"changeSelectedMeal()\">\r\n            <img src=\"../../../assets/img/graphics/back.png\" style=\"width:100%;\" />\r\n        </div>\r\n        <div class=\"refres\" (click)=\"refreshMeal()\">\r\n            <img src=\"../../../assets/img/graphics/refresh.png\" style=\"width:100%;\" />\r\n        </div>\r\n        <div class=\"info\">\r\n            Menu\r\n        </div>\r\n        <div class=\"setting\" [routerLink]=\"'/prefrences/2'\">\r\n            <img src=\"../../../assets/img/graphics/headerb.png\" style=\"width:100%;\" />\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <div *ngIf=\"!selectedMeal\">\r\n        <div *ngFor=\"let item of products\">\r\n            <div (click)=\"openCloseMealPage(item)\">\r\n                <app-md-row [item]=\"item\"></app-md-row>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngFor=\"let strip of strips\" class=\"strip\">\r\n            <img src=\"../../../assets/img/strip/{{strip}}\" style=\"width:100%;\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"selectedMeal\">\r\n        <app-selected-meal [refreshSelectedMeal]=\"refreshSelectedMeal\"></app-selected-meal>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/myday/selected-meal/selected-meal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/myday/selected-meal/selected-meal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"mealsObj.Breakfest\">\n  <div class=\"slide\">\n    <div class=\"titleSlide\">\n      Breakfest\n    </div>\n    <div class=\"grid mt-3\">\n      <ion-grid style=\"padding-left: 0px; padding-right: 0px;\">\n        <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\" class=\"mt-2 mb-2 ml-2\">\n          <ion-slide *ngFor=\"let s of mealsObj.Breakfest.Dishes\" class=\"ml-2\">\n            <img src=\"../../../assets/img/main/Food_Items_pics/{{s.Name}}.jpg\">\n          </ion-slide>\n        </ion-slides>\n      </ion-grid>\n    </div>\n  </div>\n\n\n\n  <div class=\"slide\" *ngIf=\"mealsObj.Lunch\">\n    <div class=\"titleSlide\">\n      Lunch\n    </div>\n    <div class=\"grid mt-3\">\n      <ion-grid style=\"padding-left: 0px; padding-right: 0px;\">\n        <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\" class=\"mt-2 mb-2 ml-2\">\n          <ion-slide *ngFor=\"let s of mealsObj.Lunch.Dishes\" class=\"ml-2\">\n            <img src=\"../../../assets/img/main/Food_Items_pics/{{s.Name}}.jpg\">\n          </ion-slide>\n        </ion-slides>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div class=\"slide\" *ngIf=\"mealsObj.Dinner\">\n    <div class=\"titleSlide\">\n      Dinner\n    </div>\n    <div class=\"grid mt-3\">\n      <ion-grid style=\"padding-left: 0px; padding-right: 0px;\">\n        <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\" class=\"mt-2 mb-2 ml-2\">\n          <ion-slide *ngFor=\"let s of mealsObj.Dinner.Dishes\" class=\"ml-2\">\n            <img src=\"../../../assets/img/main/Food_Items_pics/{{s.Name}}.jpg\">\n          </ion-slide>\n        </ion-slides>\n      </ion-grid>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/myday/md-row/md-row.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/myday/md-row/md-row.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainMyDayRow {\n  width: 100%;\n  overflow: hidden;\n  background-color: #d5f4f7;\n  padding: 5px 15px;\n}\n\n.mainMyDayRowClicked {\n  width: 100%;\n  overflow: hidden;\n  background-color: #bdd9db;\n  padding: 5px 15px;\n}\n\n.alertImg {\n  float: left;\n  margin-top: 5px;\n  width: 9%;\n  margin-left: 2%;\n}\n\n.timeMyDay {\n  float: left;\n  width: 20%;\n  margin-left: 5%;\n  color: #1d6d70;\n  margin-top: 4px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.InfoMyDay {\n  float: left;\n  width: 57%;\n  margin-left: 1%;\n  color: #15696c;\n  margin-top: 6px;\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.InfoMyDayClicked {\n  float: left;\n  width: 57%;\n  margin-left: 1%;\n  color: #161658;\n  margin-top: 11px;\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.line {\n  margin: 0px;\n  padding: 0px;\n  height: 2px;\n  width: 100%;\n  background-color: #e9e6dc;\n}\n\n.arr {\n  position: absolute;\n  right: 10px;\n  margin-top: 8px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXlkYXkvbWQtcm93L0M6XFxVc2Vyc1xcVVNFUlxcRGVza3RvcFxcZ2l0bGFiXFxicmF2by9zcmNcXGFwcFxccGFnZXNcXG15ZGF5XFxtZC1yb3dcXG1kLXJvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXlkYXkvbWQtcm93L21kLXJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0MsaUJBQUE7QUNDTDs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0MsaUJBQUE7QUNDTDs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teWRheS9tZC1yb3cvbWQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5NeURheVJvd3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZjRmNztcclxuICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLm1haW5NeURheVJvd0NsaWNrZWR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGQ5ZGI7XHJcbiAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbGVydEltZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4OztcclxuICAgIHdpZHRoOjklO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4udGltZU15RGF5e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBjb2xvcjogIzFkNmQ3MDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OztcclxufVxyXG5cclxuLkluZm9NeURheXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6NTclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgY29sb3I6ICMxNTY5NmM7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4OztcclxufVxyXG5cclxuLkluZm9NeURheUNsaWNrZWR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjU3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGNvbG9yOnJnYigyMiwgMjIsIDg4KTtcclxuICAgIG1hcmdpbi10b3A6MTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4OztcclxufVxyXG5cclxuLmxpbmV7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDoycHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTZkYztcclxufVxyXG5cclxuLmFycntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iLCIubWFpbk15RGF5Um93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWY0Zjc7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4ubWFpbk15RGF5Um93Q2xpY2tlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkOWRiO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLmFsZXJ0SW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDklO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi50aW1lTXlEYXkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBjb2xvcjogIzFkNmQ3MDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uSW5mb015RGF5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1NyU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgY29sb3I6ICMxNTY5NmM7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLkluZm9NeURheUNsaWNrZWQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDU3JTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBjb2xvcjogIzE2MTY1ODtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmxpbmUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU2ZGM7XG59XG5cbi5hcnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/myday/md-row/md-row.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/myday/md-row/md-row.component.ts ***!
  \********************************************************/
/*! exports provided: MdRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdRowComponent", function() { return MdRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdRowComponent = class MdRowComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdRowComponent.prototype, "item", void 0);
MdRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-md-row',
        template: __webpack_require__(/*! raw-loader!./md-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myday/md-row/md-row.component.html"),
        styles: [__webpack_require__(/*! ./md-row.component.scss */ "./src/app/pages/myday/md-row/md-row.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MdRowComponent);



/***/ }),

/***/ "./src/app/pages/myday/myday-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/myday/myday-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MydayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydayPageRoutingModule", function() { return MydayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myday_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myday.page */ "./src/app/pages/myday/myday.page.ts");




const routes = [
    {
        path: '',
        component: _myday_page__WEBPACK_IMPORTED_MODULE_3__["MydayPage"]
    }
];
let MydayPageRoutingModule = class MydayPageRoutingModule {
};
MydayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MydayPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/myday/myday.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/myday/myday.module.ts ***!
  \*********************************************/
/*! exports provided: MydayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydayPageModule", function() { return MydayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myday_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myday-routing.module */ "./src/app/pages/myday/myday-routing.module.ts");
/* harmony import */ var _myday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myday.page */ "./src/app/pages/myday/myday.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _md_row_md_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md-row/md-row.component */ "./src/app/pages/myday/md-row/md-row.component.ts");
/* harmony import */ var _selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selected-meal/selected-meal.component */ "./src/app/pages/myday/selected-meal/selected-meal.component.ts");










let MydayPageModule = class MydayPageModule {
};
MydayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myday_routing_module__WEBPACK_IMPORTED_MODULE_5__["MydayPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_myday_page__WEBPACK_IMPORTED_MODULE_6__["MydayPage"], _md_row_md_row_component__WEBPACK_IMPORTED_MODULE_8__["MdRowComponent"], _selected_meal_selected_meal_component__WEBPACK_IMPORTED_MODULE_9__["SelectedMealComponent"]]
    })
], MydayPageModule);



/***/ }),

/***/ "./src/app/pages/myday/myday.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/myday/myday.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".strip {\n  margin-top: 5px;\n}\n\n.mainHeader {\n  overflow: hidden;\n  width: 100%;\n  background-color: #e8a12d;\n  padding: 10px;\n}\n\n.refres {\n  width: 10%;\n  float: left;\n  margin-left: 10px;\n}\n\n.info {\n  width: 60%;\n  float: left;\n  margin-left: 10px;\n  margin-top: 3px;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.setting {\n  width: 10%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXlkYXkvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxnaXRsYWJcXGJyYXZvL3NyY1xcYXBwXFxwYWdlc1xcbXlkYXlcXG15ZGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXlkYXkvbXlkYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsZUFBQTtBQ0NBOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215ZGF5L215ZGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJpcHtcclxubWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubWFpbkhlYWRlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTEyZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWZyZXN7XHJcbiAgICB3aWR0aDoxMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OztcclxufVxyXG5cclxuLmluZm97XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNldHRpbmd7XHJcbiAgICB3aWR0aDoxMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufSIsIi5zdHJpcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1haW5IZWFkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4YTEyZDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnJlZnJlcyB7XG4gIHdpZHRoOiAxMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmluZm8ge1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNldHRpbmcge1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/myday/myday.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/myday/myday.page.ts ***!
  \*******************************************/
/*! exports provided: MydayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydayPage", function() { return MydayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myday_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myday-api */ "./src/app/pages/myday/myday-api.ts");



let MydayPage = class MydayPage {
    constructor(api) {
        this.api = api;
        this.products = [];
        this.strips = ["strip1.png", "strip2.png", "strip3.png"];
        this.selectedMeal = false;
        this.refreshSelectedMeal = {
            refresh: false
        };
        console.log("Init1");
        api.selectedMeal.subscribe(value => {
            this.selectedMeal = value;
        });
        this.getProductsFromServer();
    }
    ionViewWillEnter() {
        console.log("INIT2");
        this.selectedMeal = false;
    }
    ionViewDidEnter() {
        console.log("INIT23");
        this.selectedMeal = false;
    }
    ngOnInit() {
        console.log("Init");
        this.selectedMeal = false;
    }
    getProductsFromServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.products = yield this.api.getMyDayProduct();
            console.log("products : ", this.products);
        });
    }
    openCloseMealPage(item) {
        console.log("openMealPage : ", item);
        if ((item && item['type'] == "Meal") || !item)
            this.selectedMeal = !this.selectedMeal;
    }
    refreshMeal() {
        this.api.selectedMealRefresh.next(true);
        console.log("R2");
    }
    ionSelected() {
        console.log("Home Page has been selected");
        // do your stuff here
    }
    goToPrefrences() {
    }
    changeSelectedMeal() {
        this.selectedMeal = !this.selectedMeal;
    }
};
MydayPage.ctorParameters = () => [
    { type: _myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"] }
];
MydayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myday',
        template: __webpack_require__(/*! raw-loader!./myday.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myday/myday.page.html"),
        styles: [__webpack_require__(/*! ./myday.page.scss */ "./src/app/pages/myday/myday.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"]])
], MydayPage);



/***/ }),

/***/ "./src/app/pages/myday/selected-meal/selected-meal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/myday/selected-meal/selected-meal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n  background-color: transparent;\n}\n\n.main {\n  background-color: #a6eaed;\n}\n\n.titleSlide {\n  font-size: 20px;\n  font-weight: bold;\n  padding: 5px 15px;\n  padding-top: 25px;\n  margin-bottom: -30px;\n}\n\n.search {\n  text-align: right;\n  background-color: #efefef;\n  margin-bottom: 10px;\n  padding-bottom: 0px;\n}\n\n.radioButtons {\n  margin-top: -27px;\n  margin-bottom: 20px;\n}\n\n.s {\n  top: -12px !important;\n  right: 10px;\n  position: relative;\n}\n\n.radio-inline {\n  display: inline;\n  padding-left: 0;\n  padding-right: 20px;\n  font-size: 18px;\n}\n\n.radio-inline input {\n  margin-left: 0;\n  margin-right: -20px;\n  width: 25px !important;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.swiper-slide {\n  margin-left: 10px !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXlkYXkvc2VsZWN0ZWQtbWVhbC9DOlxcVXNlcnNcXFVTRVJcXERlc2t0b3BcXGdpdGxhYlxcYnJhdm8vc3JjXFxhcHBcXHBhZ2VzXFxteWRheVxcc2VsZWN0ZWQtbWVhbFxcc2VsZWN0ZWQtbWVhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXlkYXkvc2VsZWN0ZWQtbWVhbC9zZWxlY3RlZC1tZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ047O0FER0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXlkYXkvc2VsZWN0ZWQtbWVhbC9zZWxlY3RlZC1tZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51SWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICB0b3A6MTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlYWVkO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlU2xpZGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5zZWFyY2h7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7O1xyXG4gIH1cclxuICBcclxuICAucmFkaW9CdXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogLTI3cHg7O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5ze1xyXG4gICAgdG9wOiAtMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHg7O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucmFkaW8taW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1pbmxpbmUgaW5wdXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWR7XHJcbiAgIFxyXG4gIH1cclxuICAiLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZW51SWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZWFlZDtcbn1cblxuLnRpdGxlU2xpZGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5yYWRpb0J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAtMjdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnMge1xuICB0b3A6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYWRpby1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucmFkaW8taW5saW5lIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/myday/selected-meal/selected-meal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/myday/selected-meal/selected-meal.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectedMealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedMealComponent", function() { return SelectedMealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myday_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myday-api */ "./src/app/pages/myday/myday-api.ts");



let SelectedMealComponent = class SelectedMealComponent {
    constructor(api) {
        this.api = api;
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 2,
            loop: true,
            centeredSlides: false
        };
        this.slide1 = [];
        this.slide2 = [];
        this.slide3 = [];
        this.mealsObj = {
            Breakfest: {},
            Lunch: {},
            Dinner: {}
        };
        this.sliderTwo = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: []
        };
        console.log("Constructor");
        api.selectedMealRefresh.subscribe(value => {
            this.getMeals();
        });
        this.getMeals();
    }
    getMeals() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.meals = yield this.api.getMeals();
            this.meals.map(ob => {
                if (ob['MealType'] == 10)
                    this.mealsObj.Breakfest = ob;
                if (ob['MealType'] == 20)
                    this.mealsObj.Lunch = ob;
                if (ob['MealType'] == 30)
                    this.mealsObj.Dinner = ob;
            });
            console.log("MMeals ", this.meals, this.mealsObj);
        });
    }
    ngOnInit() {
        console.log("Init");
        if (this.refreshSelectedMeal['refresh'] == true)
            this.refreshSelectedMeal['refresh'] = false;
    }
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
        ;
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
};
SelectedMealComponent.ctorParameters = () => [
    { type: _myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectedMealComponent.prototype, "refreshSelectedMeal", void 0);
SelectedMealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selected-meal',
        template: __webpack_require__(/*! raw-loader!./selected-meal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/myday/selected-meal/selected-meal.component.html"),
        styles: [__webpack_require__(/*! ./selected-meal.component.scss */ "./src/app/pages/myday/selected-meal/selected-meal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myday_api__WEBPACK_IMPORTED_MODULE_2__["MyDayService"]])
], SelectedMealComponent);



/***/ })

}]);
//# sourceMappingURL=myday-myday-module-es2015.js.map