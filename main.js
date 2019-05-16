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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<locate-on-map [mapConfig]=\"mapConfig\" (onComponentLoad)=\"onComponentLoad($event)\"></locate-on-map>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ers-hachathon-test';
        this.mapConfig = {
            defaultPosition: {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 13
            },
            markerHeight: 60,
            markerWidth: 60,
            displayInfoWindow: true,
            displayMoreOption: true,
            infoWindowHeaderAlign: "center",
            displayOpenHoursOnInfoWindow: true,
            displayRatingsOnInfoWindow: true,
            displayReviewOnInfoWindow: true,
            displayAddressOnInfoWindow: true,
            displayContactOnInfoWIndow: true,
            moreOptions: ["Change input color", "Custom option1", "Custom option2"]
        };
    }
    AppComponent.prototype.onComponentLoad = function (event) {
        //event.componentRef.nativeElement.getElementsByTagName('input')[0].place = "1px solid blue";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _locate_on_map_locate_on_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locate-on-map/locate-on-map.component */ "./src/app/locate-on-map/locate-on-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _locate_on_map_locate_on_map_component__WEBPACK_IMPORTED_MODULE_3__["LocateOnMapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/locate-on-map/assets/apps.png":
/*!***********************************************!*\
  !*** ./src/app/locate-on-map/assets/apps.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA5MSURBVHhe7dbRaWRBDEVBJ2wGnJQ/HKT3TQ5i8eVUwYlAjdQfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/D19OPTns9rTD/+8y/3dL8iXs/2F+d9v20wvzvM/92S/MnzgK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGa8nt4PVnd9Pq0w//vMv93S/AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD/l6+lHp72eVpj/febfbmn+xL0f7K9O+35aYf73mX+7pfkTZwHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADNeT+8Hq7s+n1aY/33m325p/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJ/y9fSj015PK8z/PvNvtzR/4t4P9lenfT+tMP/7zL/d0vyJswDucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBkWwH0OQDvzb+cDwAwL4D4HoJ35t/MBYIYFcJ8D0M782/kAMMMCuM8BaGf+7XwAmGEB3OcAtDP/dj4AzLAA7nMA2pl/Ox8AZlgA9zkA7cy/nQ8AMyyA+xyAdubfzgeAGRbAfQ5AO/Nv5wPADAvgPgegnfm38wFghgVwnwPQzvzb+QAwwwK4zwFoZ/7tfACYYQHc5wC0M/92PgDMsADucwDamX87HwBmWAD3OQDtzL+dDwAzLID7HIB25t/OB4AZFsB9DkA782/nA8AMC+A+B6Cd+bfzAWCGBXCfA9DO/Nv5ADDDArjPAWhn/u18AJhhAdznALQz/3Y+AMywAO5zANqZfzsfAGZYAPc5AO3Mv50PADMsgPscgHbm384HgBmvp/eD1V2fTyvM/z7zb7c0fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDTx8c/kC8C15HtdJYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/app/locate-on-map/locate-on-map.component.html":
/*!************************************************************!*\
  !*** ./src/app/locate-on-map/locate-on-map.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!mapLoadingError\" class='map-wrapper'>\n    <div id='map-canvas2'>\n        <div id=\"map\" #map></div>\n    </div>\n    <div id='over'>\n        <div>\n            <input class=\"auto-complete\" type=\"text\" #mapAutoCompleteSerch>\n        </div>\n    </div>\n    <div id=\"over_2\" *ngIf=\"photos && photos.length > 0\">\n        <div class=\"photo-gallery\">\n            <div *ngFor=\"let photo of photos\" class=\"photo-cover\" (click)=\"navigateToImageDetail(photo.map)\">\n                <img height=\"200px\" width=\"300px\" [attr.src]=\"photo.image\">\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- <div *ngIf=\"mapLoadingError\">\n    <div>Error Occurred: Please check below</div>\n    <ul>\n        <li *ngFor=\"let error of mapLoadingError\"> {{ error }} </li>\n    </ul>\n</div> -->\n<div class='map-wrapper' #parentComponent>\n    <form style=\"background: #fff;box-shadow: 0 2px 3px rgba(0,0,0,.16);height: 48px;display: flex;justify-content: space-between;\">\n        <div style=\"top: 15px;position: relative;padding-left: 10px;width: 100%;\">\n            <input type=\"text\" #mapAutoCompleteSerch style=\"font-size: 16px;\n            border: 1px solid #fff;\n            float: left;\n            width: 97%;\n            background: #fff;\n            color: #191919;\">\n        </div>\n        <div *ngIf=\"mapConfig.displayMoreOption\">\n            <img [src]=\"appLogo\" width=\"30px\" height=\"30px\" style=\"margin-top: 10px;\n            margin-right: 10px;cursor: pointer;\" (click)=\"onToggleOptions()\">\n        </div>\n    </form>\n    <div style=\"width: 100%;height: 100%;display: flex\">\n        <div *ngIf=\"toggleOptions.explore_photos\" class=\"photo-gallery\">\n            <div *ngFor=\"let photo of photos\" class=\"photo-cover\" (click)=\"navigateToImageDetail(photo.map)\">\n                <img height=\"200px\" width=\"300px\" [attr.src]=\"photo.image\">\n            </div>\n            <div *ngIf=\"photos.length === 0\" class=\"photo-cover\" style=\"margin: auto; font-family: Arial\">\n                {{ 'No photo available'}}              \n            </div>\n        </div>\n        <div id=\"map\" #map></div>\n    </div>\n    <div class=\"form-popup\" id=\"myForm\" [ngStyle]=\"{display: !toggleOption ? 'none' : 'block'}\">\n        <div *ngFor=\"let option of moreOptions\" [ngStyle]=\"{fontWeight: toggleOptions[option.toLowerCase().replace(' ', '_')] ? 'bold' : 'normal'}\" class=\"popup-menu\" (click)=\"toggleOptionContent(option)\"> {{ option }} </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/locate-on-map/locate-on-map.component.scss":
/*!************************************************************!*\
  !*** ./src/app/locate-on-map/locate-on-map.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-complete {\n  border: none;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-color: #000000;\n  width: 100%;\n  height: 40px;\n  margin: 4px 8px;\n  padding: 0 5px; }\n\n.auto-complete:focus {\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  border-color: #000000; }\n\n.map-wrapper {\n  max-width: 100%;\n  position: relative;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n#map-canvas2 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translateZ(0px);\n          transform: translateZ(0px);\n  background-color: #e5e3df; }\n\n#map {\n  height: 588px;\n  width: 100%; }\n\n#over {\n  position: absolute;\n  z-index: 99;\n  width: 98% !important;\n  top: 0;\n  height: 7%;\n  width: 100%; }\n\n#over_2 {\n  position: absolute;\n  z-index: 99;\n  width: 99.8% !important;\n  bottom: 0;\n  height: 26%;\n  width: 100%;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n  color: #FFFFFF; }\n\n#over_2 div::-webkit-scrollbar {\n  width: 10px;\n  height: 8px; }\n\n#over_2 div::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n#over_2 div::-webkit-scrollbar-thumb {\n  background: #888; }\n\n#over_2 div::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n.photo-gallery {\n  border: 1px solid silver;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  height: 588px;\n  width: 400px; }\n\n.photo-cover {\n  padding: 2px;\n  cursor: pointer;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.form-popup {\n  display: none;\n  position: fixed;\n  /* bottom: 0; */\n  /* right: 15px; */\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 9;\n  background: white;\n  padding: 10px;\n  /* right: 20.5%; */\n  right: 1%;\n  top: 48px;\n  font-family: Arial; }\n\n.map-wrapper input:focus {\n  outline: 0; }\n\n.popup-menu {\n  padding: 10px;\n  cursor: pointer; }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 3px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n.info-window-header {\n  font-family: Arial; }\n\n.info-divider {\n  border: 0.5px solid black; }\n"

/***/ }),

/***/ "./src/app/locate-on-map/locate-on-map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/locate-on-map/locate-on-map.component.ts ***!
  \**********************************************************/
/*! exports provided: LocateOnMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocateOnMapComponent", function() { return LocateOnMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/locate-on-map/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { google } from "google-maps";

var LocateOnMapComponent = /** @class */ (function () {
    function LocateOnMapComponent() {
        this.mapConfig = {
            defaultPosition: {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 13
            },
            markerHeight: 20,
            markerWidth: 20,
            displayInfoWindow: true,
            displayMoreOption: true,
            infoWindowHeaderAlign: "left",
            displayAddressOnInfoWindow: true,
            displayOpenHoursOnInfoWindow: true,
            displayRatingsOnInfoWindow: true,
            displayReviewOnInfoWindow: true,
            displayContactOnInfoWIndow: true,
            isInfoWindowCustomizable: false,
            isMoreOptionCustomizable: false
        };
        this.onOpenInfoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMoreOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComponentLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Component class variables
        this.appLogo = __webpack_require__(/*! ./assets/apps.png */ "./src/app/locate-on-map/assets/apps.png");
        this.photos = [];
        this.moreOptions = ["Explore photos"];
        this.toggleOptions = {};
        this.toggleOption = false;
        this.togglePhotoGallery = false;
    }
    /**
     * Angular life cycle hook method.
     */
    LocateOnMapComponent.prototype.ngOnInit = function () {
        this.onMapInit();
        var customOptions = this.mapConfig.moreOptions;
        if (customOptions) {
            this.moreOptions = this.moreOptions.concat(customOptions);
        }
    };
    /**
     * To initialize the map while page.
     */
    LocateOnMapComponent.prototype.onMapInit = function () {
        var _this = this;
        var latLng = {};
        // On getting browser location
        window.navigator.geolocation.getCurrentPosition(function (location) {
            latLng.lat = location.coords.latitude;
            latLng.lng = location.coords.longitude;
            _this.mapConfig.defaultPosition.center = latLng;
            console.log(_this.mapConfig.defaultPosition);
            _this.onMapLoad();
            _this.onAutoCompleteBoxLoad();
            _this.loadMarker(latLng);
        }, function (error) {
            _this.onMapLoad();
            _this.onAutoCompleteBoxLoad();
        });
        this.onComponentLoad.emit({ component: this, componentRef: this.parentComponentRef });
    };
    /**
     * To refresh the map if is there any search for the location.
     * @param newLatLng
     * @param place
     */
    LocateOnMapComponent.prototype.onMapReInit = function (newLatLng, place) {
        this.mapConfig.defaultPosition.center = newLatLng;
        this.onMapLoad();
        this.loadMarker(newLatLng, place);
    };
    /**
     * To get the address details from the google place object.
     * @param place
     */
    LocateOnMapComponent.prototype.getCompleteAddress = function (place) {
        var mapConfig = this.mapConfig;
        var displayDivider = (mapConfig.displayAddressOnInfoWindow || mapConfig.displayContactOnInfoWIndow || mapConfig.displayOpenHoursOnInfoWindow || mapConfig.displayRatingsOnInfoWindow || mapConfig.displayReviewOnInfoWindow) ? '</h2><hr style="border: 0.5px solid black;" />' : '';
        var content = "<h2 style='font-family: Arial;text-align:" + this.mapConfig.infoWindowHeaderAlign + "'>" + place.name + " " + displayDivider;
        var formattedAddredd = place.address_components;
        var completeAddress = this.mapConfig.displayAddressOnInfoWindow ? "<h2>Detail address</h2>" : '';
        var addressComp = '';
        var contactDetail = this.mapConfig.displayContactOnInfoWIndow ? "<div>\n      " + (place.international_phone_number ? place.international_phone_number : '') + "\n    </div>\n    <div>\n      " + (place.website ? place.website : '') + "\n    </div>" : '';
        var review = this.mapConfig.displayReviewOnInfoWindow ? this.getCompleteRating(place, true) : '';
        var ratings = this.mapConfig.displayRatingsOnInfoWindow ? this.getCompleteReview(place) : '';
        var openHours = this.mapConfig.displayOpenHoursOnInfoWindow ? this.getOpeningHours(place) : '';
        if (formattedAddredd) {
            addressComp = this.mapConfig.displayAddressOnInfoWindow ? place.adr_address : '';
            completeAddress = "<div style=\"max-height: 250px;\">" +
                content + completeAddress + addressComp + contactDetail + openHours + review + ratings;
            "</div>";
        }
        return completeAddress;
    };
    /**
     * To get hours for the google place object.
     * @param place
     */
    LocateOnMapComponent.prototype.getOpeningHours = function (place) {
        var openingDetail = '<h2>Open Hours</h2>';
        if (place && place.opening_hours && place.opening_hours && place.opening_hours.weekday_text) {
            var openHours = place.opening_hours.weekday_text;
            var openNow = place.opening_hours.open_now;
            openingDetail = openingDetail + ("" + (openNow ? '<div style="color: green; font-weight: bold;padding: 0 0 10px 0; ">Open</div>' : '<div style="color: red; font-weight: bold;padding: 0 0 10px 0;">Closed</div>'));
            for (var i = 0; i < openHours.length; i++) {
                openingDetail = openingDetail + ("<div>" + openHours[i] + "</div>");
            }
        }
        else {
            openingDetail = '';
        }
        return openingDetail;
    };
    /**
     * To get the ratings of the google place object.
     * @param place
     * @param header
     */
    LocateOnMapComponent.prototype.getCompleteRating = function (place, header) {
        var ratingStar = header ? '<h2>Star Rating</h2>' : '';
        if (place && place.rating) {
            var ratingInt = Math.round(place.rating);
            for (var i = 0; i < 5; i++) {
                if (i < ratingInt) {
                    ratingStar = ratingStar + "<span class=\"fa fa-star checked\"></span>";
                }
                else {
                    ratingStar = ratingStar + "<span class=\"fa fa-star\"></span>";
                }
            }
        }
        else {
            ratingStar = '';
        }
        return ratingStar;
    };
    /**
     * To get the review of the google place.
     * @param place
     */
    LocateOnMapComponent.prototype.getCompleteReview = function (place) {
        var reviewComments = '<h2>Reviews</h2>';
        var reviews = place.reviews;
        if (place && place.reviews) {
            for (var i = 0; i < reviews.length; i++) {
                var rating = this.getCompleteRating(reviews[i], false);
                var reviewComment = "<div>\n        <div style=\"display: flex;align-items: center;\">\n          <a href=" + reviews[i].author_url + " style=\"text-decoration: none;color: #000000;display: flex\" target=\"_blank\">\n            <img width=\"40\" height=\"40\" src=" + reviews[i].profile_photo_url + ">\n            <span style=\"font-size: 15px;font-weight: bold;margin: 10px;\">" + reviews[i].author_name + "</span>\n          </a>\n          <span>\n            " + rating + "\n          </span>\n          <span style=\"margin: 5px;\">\n          (\n            " + reviews[i].relative_time_description + "\n          )\n          </span>\n        </div><div style=\"padding: 10px 0px 10px 50px;\">" + reviews[i].text + "</div>";
                reviewComment = reviewComment + '</div>';
                reviewComments = reviewComments + reviewComment;
            }
        }
        else {
            reviewComments = '';
        }
        return reviewComments;
    };
    /**
     * To load the content of the marker object.
     * @param place
     */
    LocateOnMapComponent.prototype.loadMarkerContent = function (place) {
        var _this = this;
        if (!this.mapConfig.isInfoWindowCustomizable) {
            var content = this.getCompleteAddress(place);
            var infowindow_1 = new google.maps.InfoWindow({
                content: content,
            });
            this.marker.addListener('click', function () {
                infowindow_1.open(_this.map, _this.marker);
            });
            this.onOpenInfoWindow.emit(undefined);
        }
        else {
            this.onOpenInfoWindow.emit({ map: this.map, marker: this.marker, place: place });
        }
    };
    /**
     * To create the google map object and load to the browser.
     */
    LocateOnMapComponent.prototype.onMapLoad = function () {
        var mapContainerRef = this.mapRef;
        try {
            this.map = new google.maps.Map(mapContainerRef.nativeElement, this.mapConfig.defaultPosition);
        }
        catch (error) {
            this.mapLoadingError = _model__WEBPACK_IMPORTED_MODULE_1__["ERRORS"];
        }
    };
    /**
     * To load the photos of the google place if available.
     * @param photos
     */
    LocateOnMapComponent.prototype.loadPhotos = function (photos) {
        var _this = this;
        this.photos = [];
        if (photos) {
            photos.forEach(function (ele) {
                var photo = {};
                photo.image = ele.getUrl();
                photo.map = ele.html_attributions[0];
                _this.photos.push(photo);
            });
        }
    };
    /**
     * To navigate to the photo reference.
     * @param mapLink
     */
    LocateOnMapComponent.prototype.navigateToImageDetail = function (mapLink) {
        var link = mapLink.match(/href="(.*?)"/)[1];
        window.open(link, '_blank');
    };
    /**
     * To initialize and load the marker object.
     * @param latLng
     * @param place
     */
    LocateOnMapComponent.prototype.loadMarker = function (latLng, place) {
        var icon = {
            url: this.mapConfig.markerIcon ? this.mapConfig.markerIcon : place ? place.icon : '',
            scaledSize: new google.maps.Size(this.mapConfig.markerWidth, this.mapConfig.markerHeight)
        };
        this.marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            title: place ? place.name : 'Your search',
            icon: icon
        });
        this.marker.setMap(this.map);
    };
    /**
     * To search on the auto-complete box and trigger the change event.
     */
    LocateOnMapComponent.prototype.onAutoCompleteBoxLoad = function () {
        var _this = this;
        var input = this.autoCompleteInput.nativeElement;
        this.autocomplete = new google.maps.places.Autocomplete(input);
        this.autocomplete.addListener('place_changed', function () {
            var place = _this.autocomplete.getPlace();
            var latLng = {};
            latLng.lat = place.geometry.location.lat();
            latLng.lng = place.geometry.location.lng();
            _this.onMapReInit(latLng, place);
            // Check whether user wants to see the info window when click on the marker
            if (_this.mapConfig.displayInfoWindow) {
                _this.loadMarkerContent(place);
            }
            _this.loadPhotos(place.photos);
            console.log("place = autocomplete.getPlace();", place);
        });
    };
    LocateOnMapComponent.prototype.onToggleOptions = function () {
        this.toggleOption = !this.toggleOption;
    };
    LocateOnMapComponent.prototype.toggleOptionContent = function (toggleOption) {
        var key = toggleOption.toLowerCase().replace(' ', '_');
        this.selectedOption = toggleOption;
        this.toggleOptions[key] = !this.toggleOptions[key];
        this.onMoreOptionClick.emit({ option: toggleOption, component: this, componentRef: this.parentComponentRef });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LocateOnMapComponent.prototype, "mapConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LocateOnMapComponent.prototype, "mapRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapAutoCompleteSerch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LocateOnMapComponent.prototype, "autoCompleteInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('parentComponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LocateOnMapComponent.prototype, "parentComponentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LocateOnMapComponent.prototype, "onOpenInfoWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LocateOnMapComponent.prototype, "onMoreOptionClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LocateOnMapComponent.prototype, "onComponentLoad", void 0);
    LocateOnMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'locate-on-map',
            template: __webpack_require__(/*! ./locate-on-map.component.html */ "./src/app/locate-on-map/locate-on-map.component.html"),
            styles: [__webpack_require__(/*! ./locate-on-map.component.scss */ "./src/app/locate-on-map/locate-on-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocateOnMapComponent);
    return LocateOnMapComponent;
}());



/***/ }),

/***/ "./src/app/locate-on-map/model.ts":
/*!****************************************!*\
  !*** ./src/app/locate-on-map/model.ts ***!
  \****************************************/
/*! exports provided: ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
var ERRORS = [
    "Include the script having the map key in index.html",
    "Provide the valid map key",
    "Check your network connection"
];


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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\bikashranjan_b\Workspace\ERS-Comp-Challange\ers-hachathon-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map