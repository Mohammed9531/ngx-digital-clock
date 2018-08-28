(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-digital-clock></app-digital-clock>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author: Shoukath Mohammed
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digital-clock/digital-clock.component */ "./src/app/digital-clock/digital-clock.component.ts");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules


// Components


// Services

/**
 * @author: Shoukath Mohammed
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_3__["DigitalClockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.html":
/*!************************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"clock\" class=\"light\">\n    <div class=\"display clock-display\">\n        <div class=\"weekdays\">\n            <ul class=\"clock-weekdays-block\">\n                <li class=\"day-block\" *ngFor=\"let day of days\" [class.active]=\"today == day\">{{day}}</li>\n            </ul>\n        </div>\n        <div class=\"ampm\">\n            <ul class=\"clock-meridian-block\">\n                <li class=\"clock-meridian\" *ngFor=\"let m of ['AM', 'PM']\" [class.active]=\"meridian == m\">{{m}}</li>\n            </ul>\n        </div>\n        <div class=\"alarm\"></div>\n        <div class=\"digits\">\n            <ng-container *ngFor=\"let d of timeFormatList\">\n                <div class=\"dots\" *ngIf=\"d == 'dots'\" [style.visibility]=\"!displayDots ? 'visible': 'hidden'\"></div>\n                <div [attr.class]=\"d ? d: null\" *ngIf=\"d != 'dots'\">\n                    <span *ngFor=\"let border of borders\" [attr.class]=\"border\"></span>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.scss":
/*!************************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clock-display .clock-meridian,\n.clock-display .clock-weekdays-block .day-block {\n  opacity: 0.3;\n  list-style-type: none; }\n  .clock-display .clock-meridian.active,\n  .clock-display .clock-weekdays-block .day-block.active {\n    opacity: 1;\n    font-weight: bold; }\n  .clock-display .clock-weekdays-block > .day-block {\n  padding: 0 10px;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/digital-clock/digital-clock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/digital-clock/digital-clock.component.ts ***!
  \**********************************************************/
/*! exports provided: DigitalClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function() { return DigitalClockComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/util/util.service */ "./src/app/shared/services/util/util.service.ts");
/* harmony import */ var _shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/constants/calendar.constants */ "./src/app/shared/constants/calendar.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author: Shoukath Mohammed
 */
var DigitalClockComponent = /** @class */ (function () {
    /**
     * @constructor
     * @param: {util<UtilService>}
     */
    function DigitalClockComponent(util) {
        this.util = util;
        /**
         * @public
         * @type: boolean
         */
        this.displayDots = false;
        /**
         * @public
         * @type: string[]
         */
        this.days = _shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_3__["DAYS_SHORT"];
        /**
         * @public
         * @type: string[]
         */
        this.timeFormatList = [];
        /**
         * @public
         * @type: Subscription[]
         */
        this.subscriptions = [];
        this.borders = 'd1 d2 d3 d4 d5 d6 d7'.split(' ');
        this._init();
    }
    /**
     * @public
     * @type: method<life cycle hook>
     * @return: void
     * @description: N/A
     */
    DigitalClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000)
            .subscribe(function (t) {
            _this._init();
        }));
    };
    /**
     * @private
     * @return: void
     * @description: a helper method that initializes
     * the digital clock.
     */
    DigitalClockComponent.prototype._init = function () {
        var _this = this;
        var now = new Date();
        var t = now.toLocaleTimeString().split(' ');
        if (Array.isArray(t) && t[0]) {
            var digits = t[0]
                .split(':')
                .map(function (v) { return _this.util.to2Digit(v); })
                .join(':')
                .split('');
            this.timeFormatList = [];
            for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
                var i = digits_1[_i];
                this.timeFormatList.push(_shared_constants_calendar_constants__WEBPACK_IMPORTED_MODULE_3__["CLASS_LIST"][i]);
            }
            // run the other options.
            this._run(t[1]);
        }
    };
    /**
     * @private
     * @return: void
     * @description: a helper method that initializes
     * the calendar.
     */
    DigitalClockComponent.prototype._run = function (_meridian) {
        var d = (new Date())
            .toDateString()
            .split(' ');
        // toggles the dots
        this.displayDots = !this.displayDots;
        // sets the day today
        this.today = (d[0] || '').toUpperCase();
        // sets the month & year
        this.monthYear = d[1] + " " + d[2] + ", " + d[3];
        // sets am/pm
        this.meridian = (_meridian || '').toUpperCase();
    };
    /**
     * @public
     * @type: method<life cycle hook>
     * @return: void
     * @description: N/A
     */
    DigitalClockComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            if (!!subscription) {
                subscription.unsubscribe();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], DigitalClockComponent.prototype, "displayDots", void 0);
    DigitalClockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-digital-clock',
            template: __webpack_require__(/*! ./digital-clock.component.html */ "./src/app/digital-clock/digital-clock.component.html"),
            styles: [__webpack_require__(/*! ./digital-clock.component.scss */ "./src/app/digital-clock/digital-clock.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], DigitalClockComponent);
    return DigitalClockComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/calendar.constants.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/constants/calendar.constants.ts ***!
  \********************************************************/
/*! exports provided: CLASS_LIST, DAYS_LONG, DAYS_SHORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_LIST", function() { return CLASS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_LONG", function() { return DAYS_LONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_SHORT", function() { return DAYS_SHORT; });
/**
 * @author: Shoukath Mohammed
 * @constant
 */
var DAYS_SHORT = [
    'MON',
    'TUE',
    'WED',
    'THUR',
    'FRI',
    'SAT',
    'SUN'
];
/**
 * @constant
 */
var DAYS_LONG = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY'
];
/**
 * @constant
 */
var CLASS_LIST = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    ':': 'dots',
    'dots': ':'
};
/**
 * @exports
 */



/***/ }),

/***/ "./src/app/shared/services/util/util.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/util/util.service.ts ***!
  \******************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * @author: Shoukath Mohammed
 */
var UtilService = /** @class */ (function () {
    /**
     * @constructor
     */
    function UtilService() {
    }
    /**
     * @public
     * @return: string
     * @description: a helper method that prepends
     * `0` to the single digit.
     */
    UtilService.prototype.to2Digit = function (str) {
        if (!str) {
            return null;
        }
        var isString = (typeof str == 'string');
        if (isString && str.length == 1) {
            str = 0 + str;
        }
        return str;
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/c000801/eclipse-workspace/ngx-digital-clock/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map