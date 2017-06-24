webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-buttons></nav-buttons>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landingpage_landing_page_component__ = __webpack_require__("../../../../../src/app/landingpage/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_nav_buttons_component__ = __webpack_require__("../../../../../src/app/navigation/nav-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landingpage_header_header_component__ = __webpack_require__("../../../../../src/app/landingpage/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landingpage_sections_sections_component__ = __webpack_require__("../../../../../src/app/landingpage/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landingpage_sections_introduction_section_intro_component__ = __webpack_require__("../../../../../src/app/landingpage/sections/introduction/section-intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landingpage_sections_manifesto_section_manifesto_component__ = __webpack_require__("../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landingpage_sections_madskillz_section_madskillz_component__ = __webpack_require__("../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__landingpage_sections_contact_section_contact_component__ = __webpack_require__("../../../../../src/app/landingpage/sections/contact/section-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projects_projectlist_project_list_component__ = __webpack_require__("../../../../../src/app/projects/projectlist/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fourofour_pagenotfound_component__ = __webpack_require__("../../../../../src/app/fourofour/pagenotfound.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', redirectTo: '/josephharveyangeles', pathMatch: 'full' },
    { path: 'josephharveyangeles', component: __WEBPACK_IMPORTED_MODULE_7__landingpage_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__fourofour_pagenotfound_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landingpage_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navigation_nav_buttons_component__["a" /* NavButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landingpage_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__landingpage_sections_sections_component__["a" /* SectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__landingpage_sections_introduction_section_intro_component__["a" /* SectionIntroComponent */],
            __WEBPACK_IMPORTED_MODULE_12__landingpage_sections_manifesto_section_manifesto_component__["a" /* SectionManifestoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landingpage_sections_madskillz_section_madskillz_component__["a" /* SectionMadSkillzComponent */],
            __WEBPACK_IMPORTED_MODULE_14__landingpage_sections_contact_section_contact_component__["a" /* SectionContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__projects_projectlist_project_list_component__["a" /* ProjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__fourofour_pagenotfound_component__["a" /* PageNotFoundComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/fourofour/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    text-indent: 50px;\r\n}\r\n\r\nh4 {\r\n    color: red;\r\n    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\np {\r\n    font-size: 1.2em;\r\n    font-family: 'Roboto Condensed';\r\n}\r\n\r\n.coloritblue {\r\n    color: dodgerblue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#dancingkitty {\r\n    float:bottom;\r\n    position:fixed;\r\n    z-index: -1;\r\n    margin-left: 60%;\r\n    margin-top: 20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fourofour/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<img id=\"dancingkitty\" src=\"../../../public/images/dancingkitty.gif\" />\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1 class=\"superheader\">/** 404: PageNotFound ;( **/</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h4>{{timeStamp | date:'short'}} creo.site.PageNotFoundException: Unable to locate {{theroute}}, no such page exists.</h4>\r\n        <p>at creo.webpage.performLaunchWebPage(<span class=\"coloritblue\">RequestPage.java:1234</span>)</p>\r\n        <p>at creo.webpage.requestWebPage(<span class=\"coloritblue\">RequestPage.java:231</span>)</p>\r\n        <p>at creo.webpage.handleRequestWebPage(<span class=\"coloritblue\">RequestPage.java:321</span>)</p>\r\n        <p>at creo.webpage.dispatchWebPage(<span class=\"coloritblue\">DispatchPage.java:777</span>)</p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h4>Caused by, creo.site.FMLException: Reasons such as the following,</h4>\r\n        <p>at either.i.broke.something(<span class=\"coloritblue\">TotalFail.java:1</span>)</p>\r\n        <p>or im.still.working.on.this.page(<span class=\"coloritblue\">Rekt.java:2</span>)</p>\r\n        <p>at i.suck.at.frontend.development(<span class=\"coloritblue\">SuperNoobz.java:3</span>)</p>\r\n        <p>at please.send.help(<span class=\"coloritblue\">HelpMeLordGaben.java:4</span>)</p>\r\n        <p>at please.send.help(<span class=\"coloritblue\">HelpMeAlmightyDennisRichie.java:5</span>)</p>\r\n        <p>at why.u.no.work.codezs(<span class=\"coloritblue\">SlashWrist.java:6</span>)&lt;2 more...&gt;</p>\r\n    </div>\r\n<div>"

/***/ }),

/***/ "../../../../../src/app/fourofour/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.theroute = this.router.url;
        this.timeStamp = new Date();
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'for-o-four',
        template: __webpack_require__("../../../../../src/app/fourofour/pagenotfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fourofour/pagenotfound.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.header.title-header{\r\n    text-align: center;\r\n}\r\n\r\ndiv .title-header-heading{\r\n    font-family: 'VT323', 'Courier New', 'Courier', serif;\r\n    font-size: 5em;\r\n}\r\n\r\ndiv .title-header-subheading{\r\n    font-family: 'Consolas', 'Times New Roman', Times, 'serif';\r\n}\r\n\r\n.bg-drawing{\r\n   /*empty for now */ \r\n   z-index: -100;\r\n}\r\n\r\n.lang-keyword{\r\n    color:#F62459;\r\n}\r\n\r\n.lang-symbol{\r\n    color:#FFA400;\r\n}\r\n\r\n.lang-enum{\r\n    color:#4B77BE;\r\n}\r\n\r\n.lang-const{\r\n    color:#22A7F0;\r\n}\r\n\r\n.lang-string{\r\n    color: #26A65B;\r\n}\r\n\r\np{\r\n    font-size: .75em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"header title-header jumbotron\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h1 class=\"title-header-heading\">{{greet}}</h1>\r\n                <h3 class=\"title-header-subheading\">\r\n                    <span class=\"lang-keyword\">switch</span>\r\n                    <span class=\"lang-symbol\">&#40;</span> time\r\n                    <span class=\"lang-symbol\">&#41;</span> &#123;\r\n                    <span class=\"lang-keyword\">case</span>\r\n                    <span class=\"lang-enum\">CLOCK</span>.<span class=\"lang-const\">DAY</span>:\r\n                    <span class=\"lang-keyword\">case</span>\r\n                    <span class=\"lang-enum\">CLOCK</span>.<span class=\"lang-const\">DUSK</span>:\r\n                    <span class=\"lang-keyword\">return </span>\r\n                    <span class=\"lang-string\">\"{{dusk}}\"</span>;\r\n                    <span class=\"lang-keyword\">case</span>\r\n                    <span class=\"lang-enum\">CLOCK</span>.<span class=\"lang-const\">NIGHT</span>:\r\n                    <span class=\"lang-keyword\">return</span>\r\n                    <span class=\"lang-string\">\"{{night}}\"</span>;\r\n                    <span class=\"lang-keyword\">case</span>\r\n                    <span class=\"lang-enum\">CLOCK</span>.<span class=\"lang-const\">DAWN</span>:\r\n                    <span class=\"lang-keyword\">return</span>\r\n                    <span class=\"lang-string\">\"{{dawn}}\"</span>;\r\n                    <span class=\"lang-keyword\">default</span>:\r\n                    <span class=\"lang-keyword\">return</span>\r\n                    <span class=\"lang-string\">\"{{default}}\"</span>; }\r\n                </h3>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p>&copy; {{ date | date: 'yyyy'}} Joseph Harvey Angeles. All rights reserved.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"btn-group btn-group-md\" role=\"group\">\r\n                <a href=\"https://wakatime.com/@yev\" target=\"_blank\" class=\"btn btn-default btn-md\" role=\"button\"><i class=\"fa fa-clock-o\"></i></a>\r\n                <a href=\"https://www.linkedin.com/in/josephharveyangeles\" target=\"_blank\" class=\"btn btn-default btn-md\" role=\"button\"><i class=\"fa fa-linkedin\"></i></a>\r\n                <a href=\"https://github.com/josephharveyangeles\" target=\"_blank\" class=\"btn btn-default btn-md\" role=\"button\"><i class=\"fa fa-github\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div class=\"bg-drawing\"></div>"

/***/ }),

/***/ "../../../../../src/app/landingpage/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.greet = "var name='Harvey';";
        this.dusk = "R&D Engineer";
        this.night = "Asleep";
        this.dawn = "Software Developer";
        this.default = "Dead x-X";
        this.date = new Date();
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-header',
        template: __webpack_require__("../../../../../src/app/landingpage/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/header/header.component.css")],
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<my-header>header</my-header>\r\n<sections>sections</sections>"

/***/ }),

/***/ "../../../../../src/app/landingpage/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_landing_page_service__ = __webpack_require__("../../../../../src/app/landingpage/service/landing-page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(landingPageService) {
        this.landingPageService = landingPageService;
        this.titleSection = this.landingPageService.getTitleSection();
    }
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/landingpage/landing-page.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_landing_page_service__["a" /* LandingPageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_landing_page_service__["a" /* LandingPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_landing_page_service__["a" /* LandingPageService */]) === "function" && _a || Object])
], LandingPageComponent);

var _a;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/contact/section-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    max-width: 470px;\r\n}\r\n\r\n.btn-group {\r\n    margin: 2.5% 0;\r\n}\r\n\r\narticle{\r\n    padding-bottom: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/contact/section-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <article>\r\n                    <header>\r\n                        <h1 class=\"superheader\">/** Need help? **/</h1>\r\n                        <h2>public void <span class=\"color-swatch-orange\">{{title}}</span><span class=\"color-swatch-bluegreen\">&#40;&#41;</span>                            &#123;</h2>\r\n                    </header>\r\n                    <div class=\"content\">\r\n                        <p>{{content}}</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"btn-group btn-group-lg\" role=\"group\">\r\n                                <a href=\"mailto:{{email}}\" class=\"btn btn-md btn-default\" role=\"button\"><i class=\"fa fa-envelope\"></i></a>\r\n                                <a href=\"https://twitter.com/yev\" target=\"_blank\" class=\"btn btn-default btn-md\" role=\"button\"><i class=\"fa fa-twitter\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h2>&#125;</h2>\r\n                </article>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/contact/section-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionContactComponent = (function () {
    function SectionContactComponent() {
    }
    SectionContactComponent.prototype.ngOnInit = function () {
        this.title = this.sectionData.title;
        this.content = this.sectionData.content;
        this.email = this.sectionData.email;
    };
    return SectionContactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], SectionContactComponent.prototype, "sectionData", void 0);
SectionContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'section-contact',
        template: __webpack_require__("../../../../../src/app/landingpage/sections/contact/section-contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/sections/sections.component.css"), __webpack_require__("../../../../../src/app/landingpage/sections/contact/section-contact.component.css")]
    })
], SectionContactComponent);

//# sourceMappingURL=section-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/introduction/section-intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "article {\r\n    margin: 0 auto;\r\n    max-width: 470px;\r\n}\r\n\r\nsection {\r\n    padding: 0.4em 0 0;\r\n    margin: 0 0;\r\n}\r\n\r\nimg {\r\n    margin: 0 auto;\r\n    max-width: 150px;  \r\n    width: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/introduction/section-intro.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"introduction\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <article>\r\n                    <figure>\r\n                        <img class=\"img img-circle img-responsive\" src=\"assets/images/profile.png\">\r\n                    </figure>\r\n                    <h2>public void <span class=\"color-swatch-orange\">{{sectionName}}</span><span class=\"color-swatch-bluegreen\">&#40;&#41;</span> &#123;</h2>\r\n                    <p class=\"color-swatch-darkgrey\">\r\n                        {{textContent}}\r\n                    </p>\r\n                    <h2>&#125;</h2>\r\n                </article>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/introduction/section-intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/sectioninterface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionIntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionIntroComponent = (function () {
    function SectionIntroComponent() {
    }
    SectionIntroComponent.prototype.ngOnInit = function () {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
    };
    return SectionIntroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"]) === "function" && _a || Object)
], SectionIntroComponent.prototype, "sectionData", void 0);
SectionIntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'section-intro',
        template: __webpack_require__("../../../../../src/app/landingpage/sections/introduction/section-intro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/sections/sections.component.css"), __webpack_require__("../../../../../src/app/landingpage/sections/introduction/section-intro.component.css")]
    })
], SectionIntroComponent);

var _a;
//# sourceMappingURL=section-intro.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 3em 0 6em;\r\n}\r\n\r\n.label {\r\n    font-family: 'Roboto Condensed';\r\n    font-size: .78em;\r\n}\r\n\r\n.img {\r\n    margin: 0 auto;\r\n    max-width: 300px;\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-push-7\">\r\n        <div class=\"figure-holder\">\r\n            <figure>\r\n                <img src=\"assets/images/madskills.png\" class=\"img img-circle img-responsive\">\r\n            </figure>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-md-pull-3\">\r\n        <div class=\"method\">\r\n            <h2><span class=\"color-swatch-orange\">{{sectionName}}</span><span class=\"color-swatch-bluegreen\">&#40;&#41;</span> &#123;</h2>\r\n        </div>\r\n        <p>\r\n            return [\r\n            <ng-template ngFor let-item [ngForOf]=\"skillz\">\r\n                <span class=\"{{item.classStyle}}\">{{item.name}}</span>\r\n            </ng-template>\r\n            ];\r\n        </p>\r\n        <h2>&#125;</h2>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/sectioninterface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionMadSkillzComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionMadSkillzComponent = (function () {
    function SectionMadSkillzComponent() {
        this.skillz = [];
    }
    SectionMadSkillzComponent.prototype.ngOnInit = function () {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
        this.initialize();
    };
    SectionMadSkillzComponent.prototype.initialize = function () {
        var _this = this;
        var skills = this.sectionData.content.split(',');
        skills.forEach(function (item) {
            _this.skillz.push({ name: item, classStyle: _this.getRandomClass() });
        });
    };
    SectionMadSkillzComponent.prototype.getRandomClass = function () {
        var result = "label ";
        var index = Math.floor((Math.random() * 6) + 1);
        switch (index) {
            case 1:
                result += "label-default";
                break;
            case 2:
                result += "label-primary";
                break;
            case 3:
                result += "label-success";
                break;
            case 4:
                result += "label-info";
                break;
            case 5:
                result += "label-warning";
                break;
            case 6:
                result += "label-danger";
                break;
        }
        return result;
    };
    return SectionMadSkillzComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"]) === "function" && _a || Object)
], SectionMadSkillzComponent.prototype, "sectionData", void 0);
SectionMadSkillzComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'section-madskillz',
        template: __webpack_require__("../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/sections/sections.component.css"), __webpack_require__("../../../../../src/app/landingpage/sections/madskillz/section-madskillz.component.css")]
    })
], SectionMadSkillzComponent);

var _a;
//# sourceMappingURL=section-madskillz.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 3em 0 6em;\r\n    text-align: left;\r\n}\r\n\r\n.img {\r\n    margin: 0 auto;\r\n    max-width: 300px;\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-1\">\r\n        <div class=\"figure-holder\">\r\n            <figure>\r\n                <img src=\"assets/images/manifesto.png\" class=\"img img-circle img-responsive\">\r\n            </figure>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"method\">\r\n            <h2><span class=\"color-swatch-orange\">{{sectionName}}</span><span class=\"color-swatch-bluegreen\">&#40;&#41;</span> &#123;</h2>\r\n            <p>{{textContent}}</p>\r\n            <h2>&#125;</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/sectioninterface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionManifestoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionManifestoComponent = (function () {
    function SectionManifestoComponent() {
    }
    SectionManifestoComponent.prototype.ngOnInit = function () {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
    };
    return SectionManifestoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sectioninterface__["SectionInterface"]) === "function" && _a || Object)
], SectionManifestoComponent.prototype, "sectionData", void 0);
SectionManifestoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'section-manifesto',
        template: __webpack_require__("../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/sections/sections.component.css"), __webpack_require__("../../../../../src/app/landingpage/sections/manifesto/section-manifesto.component.css")]
    })
], SectionManifestoComponent);

var _a;
//# sourceMappingURL=section-manifesto.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/sections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#whatICanDo{\r\n    padding: 3em 0;\r\n}\r\n\r\n.method{\r\n    padding: 0 0 0 1em;\r\n}\r\n\r\np {\r\n    margin: 0 0 10px;\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n    font-family: 'Roboto Condensed';\r\n}\r\n\r\nh2 {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin: 1em;\r\n    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\nh1.superheader{\r\n    font-weight: 400;\r\n    font-size: 3.8em;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%; \r\n}\r\n\r\nheader{\r\n    padding: 2em 0;\r\n}\r\n\r\n.label{\r\n    font-family: 'Roboto Condensed';\r\n    font-size: .78em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "<section-intro [sectionData]=\"introductionSection\"></section-intro>\r\n<section id=\"whatICanDo\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <article>\r\n                    <header>\r\n                        <h1 class=\"superheader\">/** What I can do for you **/</h1>\r\n                    </header>\r\n                    <section-manifesto [sectionData]=\"manifestoSection\"></section-manifesto>\r\n                    <section-madskillz [sectionData]=\"madskillzSection\"></section-madskillz>\r\n                </article>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section-contact [sectionData]=\"contactSection\"></section-contact>"

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sections_service__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/sections.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionsComponent = (function () {
    function SectionsComponent(sectionsService) {
        this.sectionsService = sectionsService;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        this.introductionSection = this.sectionsService.getIntroduction();
        this.manifestoSection = this.sectionsService.getManifesto();
        this.madskillzSection = this.sectionsService.getMadSkillz();
        this.contactSection = this.sectionsService.getContactContent();
    };
    return SectionsComponent;
}());
SectionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'sections',
        template: __webpack_require__("../../../../../src/app/landingpage/sections/sections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/sections/sections.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_sections_service__["a" /* SectionsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_sections_service__["a" /* SectionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sections_service__["a" /* SectionsService */]) === "function" && _a || Object])
], SectionsComponent);

var _a;
//# sourceMappingURL=sections.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/contents/contact.static.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACT; });
var CONTACT = {
    title: "contactMe",
    content: "If you need help with a project, think there's something I can help you with or just want to say 'hi', then we can get in touch.",
    email: "josephharveyangeles@gmail.com"
};
//# sourceMappingURL=contact.static.content.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/contents/introduction.static.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INTRODUCTION; });
var INTRODUCTION = {
    figureSource: "public/images/profile.png",
    title: "helloWorld",
    content: "I am a software developer based in Quezon City, Philippines. I have an appetite for learning and a passion for creating software applications that help make human lives a little bit easier."
};
//# sourceMappingURL=introduction.static.content.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/contents/madskillz.static.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MADSKILLZ; });
var MADSKILLZ = {
    figureSource: "../../../../../public/images/profile.png",
    title: "madSkillz",
    content: "Java, C, C#, Python, HTML/CSS, Javascript, Typescript, Angular2, bash, OOP, TDD, SOLID, agile, Windows/Linux, android, arduino, raspberry-pi, embedded-c, git/svn, Adobe Flash"
};
//# sourceMappingURL=madskillz.static.content.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/contents/manifesto.static.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MANIFESTO; });
var MANIFESTO = {
    figureSource: "public/images/profile.png",
    title: "manifesto",
    content: "I think that creating computer programs is a discipline of both Science and Art mungled together in perfect harmony. Building user-oriented software application is more than that though, It's a mixture of techninal excellence and two-way communication between the client and the engineer, and I always strive to deliver both."
};
//# sourceMappingURL=manifesto.static.content.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/sectioninterface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=sectioninterface.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/sections/services/sections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents_introduction_static_content__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/contents/introduction.static.content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_manifesto_static_content__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/contents/manifesto.static.content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contents_madskillz_static_content__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/contents/madskillz.static.content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contents_contact_static_content__ = __webpack_require__("../../../../../src/app/landingpage/sections/services/contents/contact.static.content.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SectionsService = (function () {
    function SectionsService() {
    }
    SectionsService.prototype.getIntroduction = function () {
        return __WEBPACK_IMPORTED_MODULE_1__contents_introduction_static_content__["a" /* INTRODUCTION */];
    };
    SectionsService.prototype.getManifesto = function () {
        return __WEBPACK_IMPORTED_MODULE_2__contents_manifesto_static_content__["a" /* MANIFESTO */];
    };
    SectionsService.prototype.getMadSkillz = function () {
        return __WEBPACK_IMPORTED_MODULE_3__contents_madskillz_static_content__["a" /* MADSKILLZ */];
    };
    SectionsService.prototype.getContactContent = function () {
        return __WEBPACK_IMPORTED_MODULE_4__contents_contact_static_content__["a" /* CONTACT */];
    };
    return SectionsService;
}());
SectionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], SectionsService);

//# sourceMappingURL=sections.service.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/service/contents/section-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
var SECTIONS = [
    {
        title: "Hi, I'm Joseph Harvey",
        content: 'I am a Software Developer, Computer Engineer, Science enthusiast, self-proclaimed cat emissary and secretly wants to be a ninja. I have a passion for creating things, learning and exploring ideas in my mind, like a crazy person.'
    },
    {
        title: "",
        content: ""
    }
];
//# sourceMappingURL=section-page.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/service/contents/static-sections.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TITLE_SECTION; });
var TITLE_SECTION = {
    title: "I'm Harvey",
    content: "\n    switch (time) {\n        case CLOCK.DAY:\n        case CLOCK.DUSK:\n            return 'R&D Engineer';\n        case CLOCK.NIGHT:\n            return 'asleep';\n        case CLOCK.DAWN:\n            return 'Software Developer';\n        default:\n            return 'Dead x-x';\n    }\n    "
};
//# sourceMappingURL=static-sections.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/service/landing-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents_static_sections__ = __webpack_require__("../../../../../src/app/landingpage/service/contents/static-sections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_section_page__ = __webpack_require__("../../../../../src/app/landingpage/service/contents/section-page.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageService = (function () {
    function LandingPageService() {
    }
    LandingPageService.prototype.getTitleSection = function () {
        return __WEBPACK_IMPORTED_MODULE_1__contents_static_sections__["a" /* TITLE_SECTION */];
    };
    LandingPageService.prototype.getSections = function () {
        return __WEBPACK_IMPORTED_MODULE_2__contents_section_page__["a" /* SECTIONS */];
    };
    return LandingPageService;
}());
LandingPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], LandingPageService);

//# sourceMappingURL=landing-page.service.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/nav-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sidebar{\r\n    position: fixed;\r\n    top: 40%;\r\n    z-index: 980;\r\n    float: top;\r\n    -webkit-animation: sidebarAnimation 1s;\r\n            animation: sidebarAnimation 1s;\r\n}\r\n\r\n.button {\r\n  font-family: 'Roboto Condensed';\r\n  color: #72BAAC;\r\n  font-size: 18px;\r\n  background: #f8f8f8;\r\n  padding: 10px 10px 10px 10px;\r\n  border: #72BAAC 2px solid;\r\n  text-decoration: none;\r\n  border-radius: 0;\r\n  text-align: center;\r\n  -webkit-animation: buttonAnimation 1s;\r\n          animation: buttonAnimation 1s;\r\n}\r\n\r\n.button:hover {\r\n  background: #f8f8f8;\r\n  color: #EE7456;\r\n  border: #EE7456 2px solid;\r\n  text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes sidebarAnimation {\r\n  0% {\r\n    top: 0%;\r\n  }\r\n  100% {\r\n    top: 40%;\r\n  } \r\n}\r\n\r\n@keyframes sidebarAnimation {\r\n  0% {\r\n    top: 0%;\r\n  }\r\n  100% {\r\n    top: 40%;\r\n  } \r\n}\r\n\r\n@-webkit-keyframes buttonAnimation {\r\n  0% {\r\n    margin: 100px 0px;\r\n  }\r\n  100% {\r\n    margin: 0px;\r\n  } \r\n}\r\n\r\n@keyframes buttonAnimation {\r\n  0% {\r\n    margin: 100px 0px;\r\n  }\r\n  100% {\r\n    margin: 0px;\r\n  } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/nav-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-1\" id=\"sidebar\">\r\n  <ul class=\"nav nav-pills nav-stacked affix\" data-spy=\"affix\">\r\n    <li><a routerLink=\"/josephharveyangeles\" class=\"button homebutton\" role=\"button\">Hm</a></li>\r\n    <li><a routerLink=\"/projects\" class=\"button\" role=\"button\">Pr</a></li>\r\n    <li><a href=\"https://medium.com/@yhev\" target=\"_blank\" class=\"button\" role=\"button\">Nt</a></li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navigation/nav-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavButtonsComponent = (function () {
    function NavButtonsComponent() {
    }
    return NavButtonsComponent;
}());
NavButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'nav-buttons',
        template: __webpack_require__("../../../../../src/app/navigation/nav-buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/nav-buttons.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('buttonState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    backgroundColor: '#eee',
                    transform: 'scale(2)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(2.1)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ]
    })
], NavButtonsComponent);

//# sourceMappingURL=nav-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/miscprojects-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MISCPROJECTS; });
var MISCPROJECTS = [
    {
        name: 'Chronocross',
        status: 'In Progress',
        description: "Context-switching  is one of those annoying pet peeve I have from work, one of the notorius culprit is the daily logging of work. That is why I made Chronocross. It's a time-management desktop application that I wrote integrated with a pomodoro, and reports generation. Basically, it's a to-do app but specialized for my personal workflow.",
        image: 'assets/images/chronocross.png',
        lang: ['Angular2', 'Electron', 'Javascript', 'Typescript', 'HTML', 'CSS'],
        repo: 'https://github.com/josephharveyangeles/chronocross'
    },
    {
        name: 'swRtcheIoo',
        status: 'Completed',
        description: "Ever experienced that one cold night and you want to turn off the fan but you're too lazy to get up because the bed is so comfy? Yea, That's why I built swRctherIoo. The name is a pun, the letters 'I' and 'R' are switched from the word switcheroo, because it's an IR controlled switch box. So I could control any appliance I plug into this box using an IR remote. Too hot? switch the fan. Charge the phone? Going out? Need to turn off all the appliance in the room? No problem. This thing is a life-saver.",
        image: 'assets/images/swrtcheioo.png',
        lang: ['Electronics', 'Arduino'],
        repo: 'https://github.com/josephharveyangeles/swRtcherIoo'
    },
    {
        name: 'TheBeaconing',
        status: 'Completed',
        description: 'I was able to get my hands on some BLE (Bluetooth Low-Energy) iBeacons. This simple android application is an iBeacon detector that logs and determine nearby iBeacons.',
        image: 'assets/images/thebeaconing.png',
        lang: ['Android'],
    },
    {
        name: 'PrjRiceMill',
        status: 'Completed',
        description: "I had a friend who requested me to automate and add some features on a rice-milling machine. I took up the challenge and made this one. It's an electronic device that you'll connect on a Rice-Milling machine to monitor it's operation. You can turn off and monitor the machine using the android application I designed that goes along with it. It was a fun little weekend project.",
        image: 'assets/images/ricemill.png',
        lang: ['Electronics', 'Android', 'Micro-controller', 'Arduino'],
    },
    {
        name: 'PingPonger',
        status: 'Completed',
        description: "I had nothing to do one afternoon and I tried writing my own PingPong application using Java. I was just starting out my work as a Front-end UI Java Developer and this was a fun little exercise for my coding muscles.",
        image: 'assets/images/pingponger.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/PingPonger'
    },
    {
        name: 'SudokuSolver',
        status: 'Completed',
        description: "Another fun little project for a nice afternoon. This time, I tried writing a program that can solve a standard 9x9 sudoko puzzle. It's a stack-state based algorithm that I developed that will solve all possible solutions on any given 9x9 sudoko problem.",
        image: 'assets/images/sudoku.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/SudokuSolver'
    },
    {
        name: 'BtQuerier',
        status: 'Completed',
        description: "I'm always working on bluetooth when I was a student. This is just a simple bluetooth pinger application that I use to check connection status of bluetooth devices.",
        image: 'assets/images/btquerier.png',
        lang: ['Android'],
    },
    {
        name: 'GhostDrive',
        status: 'Completed',
        description: "Probably one of first useful projects that I made when I was just learning my ropes as a programmer. I was inspired by the 2007 Chuck Series 8-bit interfaces. It's a directory locking executable that will hides a directory that you can only unhide again by answering some riddles and by answering the correct random pattern-based passcode. It's one of those projects that made me confident in writing C programs.",
        image: 'assets/images/ghostdrive.png',
        lang: ['C'],
    },
    {
        name: 'Kill The Beast',
        status: 'Completed',
        description: "A simple text-based card quessing game I wrote when I was trying to learn bash scripting as part of a Machine Problem. I figured it's a good way to glue all those simple bash scripting things I learned altogether.",
        image: 'assets/images/killthebeast.png',
        lang: ['bash'],
        repo: 'https://github.com/josephharveyangeles/killthebeast'
    },
    {
        name: 'vNote',
        status: 'Completed',
        description: "I wrote my own version of Notepad but with a twist -- an autoback-up and an autorecover functionality. This also serves as practice for working on Java's Swing UI API. Complete with Menubars File and Edit functionalities.",
        image: 'assets/images/vnote.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/vnote'
    },
    {
        name: 'Silica',
        status: 'Completed',
        description: "This a simple brain-trainer I made in C for those little breaks and down times. It's a quizzer for basic arithmetic operations. It also has base-two exponents because I was studying computer networks that time as well, I wanted to train myself to subnet faster.",
        image: 'assets/images/silica.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/Silica'
    },
    {
        name: 'Sigma Prompt: Asskit',
        status: 'Completed',
        description: "Assembly language toolkit. I wrote this litte tool to help me in my assembly class during college. Hextables, Hexcalculators, ASCII conversion, etc, all packed into one little application.",
        image: 'assets/images/asskit.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/sigmaprompt'
    },
    {
        name: 'Smartac',
        status: 'Completed',
        description: "This is the first project I made after I realized that computer science is what I like to do in life. It's a simple tictactoe game that I wrote after reading my first book in C. You'll play against my code, that ensures that almost any match would end in player's defeat or draw.",
        image: 'assets/images/tictactoe.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/smartac'
    },
    {
        name: 'LEDLamp',
        status: 'Completed',
        description: "If tictactoe was the my first simple software project. This one is my the first hardware hacking project. It's an LED lamp that I hooked up on the computer speakers that reacts and lights up along with the signals coming off the speakers.",
        image: 'assets/images/ledlamp.png',
        lang: ['Electronics'],
    },
];
//# sourceMappingURL=miscprojects-items.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    font-size: 2em;\r\n    margin-left: 0;\r\n    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n.project-item {\r\n    border-radius: 3px;\r\n    border: 1px #e5e5e5 solid;\r\n    padding: 5px;\r\n    margin-bottom: 1em;\r\n    clear: both;\r\n    background-color: snow;\r\n}\r\n\r\n.project-item-header {\r\n    width: 100%;\r\n    height: 130px;\r\n    background-size: cover;\r\n    border-top-right-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n    background-position: center;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.repo {\r\n    float: right;\r\n    vertical-align: text-top;\r\n    padding: 5px;\r\n}\r\n\r\n.repo:hover {\r\n    background-color: #CCCCCC;\r\n    border-radius: 40%;\r\n}\r\n\r\np {\r\n    font-family: 'Roboto Condensed';\r\n    font-size: 1.12em;\r\n    text-indent: 1em;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Consolas' Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nspan.label {\r\n    font-size: 0.4em;\r\n    vertical-align: middle;\r\n}\r\n\r\n.award {\r\n    font-size: .8em;\r\n    color: black;\r\n    background-color: orange;\r\n    padding: 3px 10px;\r\n    float: right;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n    cursor: context-menu;\r\n}\r\n\r\n.lang {\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 0.8em;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    padding: 3px 10px;\r\n    text-indent: 0;\r\n    cursor: context-menu;\r\n    float: left;\r\n}\r\n\r\n.lang-group {\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.lang-group>.lang:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n    border-radius: 0;\r\n}\r\n\r\n.lang-group>.lang:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.lang-group>.lang:last-child:not(:first-child), .lang-group>.dropdown-toggle:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.label-blue {\r\n    background-color: #337ab7;\r\n}\r\n\r\n.label-lightblue {\r\n    background-color: #5bc0de;\r\n}\r\n\r\n.label-skyblue {\r\n    background-color: deepskyblue;\r\n}\r\n\r\n.label-yellow {\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.label-green {\r\n    background-color: green;\r\n}\r\n\r\n.label-red {\r\n    background-color: #d9534f;\r\n}\r\n\r\n.label-darkred {\r\n    background-color: darkred;\r\n}\r\n\r\n.label-orange {\r\n    background-color: orange;\r\n}\r\n\r\n.label-gray {\r\n    background-color: gray;\r\n}\r\n\r\n.label-darkgreen {\r\n    background-color: darkgreen;\r\n}\r\n\r\n.label-pink {\r\n    background-color: hotpink;\r\n}\r\n\r\n.label-yellowgreen {\r\n    background-color: mediumseagreen;\r\n}\r\n\r\n.label-wisteria {\r\n    background-color: #8e44ad;\r\n}\r\n\r\n.label-midnightblue {\r\n    background-color: #2c3e50;\r\n}\r\n\r\n.label-adobeorange {\r\n    background-color: #e44b23; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <h2>\r\n        public void\r\n        <span class=\"color-swatch-orange\">\r\n                {{selected}}\r\n            </span>\r\n        <span class=\"color-swatch-bluegreen\">\r\n                &#40;&#41;\r\n            </span> &#123;\r\n    </h2>\r\n</div>\r\n<div class=\"col-md-6 col-sm-12 col-xs-12\" *ngFor=\"let item of projectItems\">\r\n    <div class=\"project-item\">\r\n        <div class=\"project-item-header\" [ngStyle]=\"{'background-image': 'url(' + item.image + ')'}\">\r\n            <span class=\"award\" *ngFor=\"let award of item.awards\"><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>{{award}}</span>\r\n        </div>\r\n        <h3 class=\"color-swatch-orange\">\r\n            {{item.name}}\r\n            <span class=\"label\" [ngClass]=\"getStatusClass(item.status)\">{{item.status}}</span>\r\n            <a *ngIf=\"item.repo\" href=\"{{item.repo}}\" target=\"_blank\" class=\"repo color-swatch-bluegreen\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\r\n        </h3>\r\n        <p>\r\n            {{item.description}}\r\n        </p>\r\n        <div class=\"lang-group\">\r\n            <p class=\"lang\" *ngFor=\"let lang of item.lang\" [ngClass]=\"getClass(lang)\">{{lang}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectListComponent = (function () {
    function ProjectListComponent(service) {
        this.service = service;
        this.imgsrc = 'assets/images/osyshub.png';
        this.langClass = {
            'java': 'label-blue',
            'c': 'label-lightblue',
            'embedded-c': 'label-skyblue',
            'c#': 'label-yellow',
            'python': 'label-green',
            'angular2': 'label-red',
            'javascript': 'label-orange',
            'typescript': 'label-gray',
            'html': 'label-darkred',
            'arduino': 'label-darkgreen',
            'raspberry-pi': 'label-pink',
            'micro-controller': 'label-yellowgreen',
            'electron': 'label-yellow',
            'electronics': 'label-green',
            'android': 'label-orange',
            'css': 'label-wisteria',
            'jquery': 'label-midnightblue',
            'bash': 'label-adobeorange'
        };
    }
    ProjectListComponent.prototype.getClass = function (name) {
        return this.langClass[name.toLowerCase()];
    };
    ProjectListComponent.prototype.getStatusClass = function (name) {
        if (name.toLowerCase() === 'completed') {
            return 'label-primary';
        }
        return 'label-default';
    };
    return ProjectListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], ProjectListComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Array)
], ProjectListComponent.prototype, "projectItems", void 0);
ProjectListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'project-list',
        template: __webpack_require__("../../../../../src/app/projects/projectlist/project-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projectlist/project-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
], ProjectListComponent);

var _a;
//# sourceMappingURL=project-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/uniprojects-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UNIPROJECTS; });
var UNIPROJECTS = [
    {
        name: 'Romeocito',
        status: 'Completed',
        description: "There were only two Braille printers in the Philippines being shared by the entire blind community and their costs ranges from 250,000.00 Pesos up to 1 Million pesos. In partnership with the Non-profit Organization, Resources of the Blind Inc., I, together with my undergrad thesis team (@mdgman, @sethjuriste, @rbtabor), built a low-cost braille printer with the goal of enabling households with blind individuals to have a very cheap alternative. Romeocito prints far slower than the expensive ones, but the idea of printing you're own braille book, reading materials or homework at the comforts of your home never really existed on the blind community before, we thought that it's very good tradeoff and considering the cost of building the entire working protoype only cost us around 15,000 pesos. In order to build Romeocito we had to redesign almost every aspect of its industrial counterparts, most notably on how the way it actually marks Braille symbols on a piece of paper. We developed an algorithm that will enable us to re-purpose an old printer housing to print Braille in the most efficient manner. Romeocito is plug-and-play and works like a regular printer, using its accompanying Word Editor desktop application, users can encode and print their own documents directly. Romeocito also has a bluetooth interface that enables users to print documents or perform test prints, using their own android phones as well, via the Romeocito android application. Romeocito was named after it's cheapest industrial conterpart: Romeo.",
        image: 'assets/images/romeocito.png',
        lang: ['Java', 'Electronics', 'Android', 'Micro-controller'],
        awards: ['2nd Best Design Project 2014', 'Ideaspace 2014 Qualifier', '1st Runner-Up ICpEP Engbensyon Project Design Exhibit 2014', '2nd Runner-Up TIP Science Fair Project 2014']
    },
    {
        name: 'Anjuli',
        status: 'Completed',
        description: "Anjuli is a catering website, with an accompanying CMS for an actual client as a requirement for the partial fulfillment of System Analysis and Design course under web development and deployment. Under the said course, we are tasked to find and develop a web application for a client business by analysing and improving their current processes.",
        image: 'assets/images/anjuli.png',
        lang: ['HTML', 'Javascript', 'JQuery', 'CSS'],
    },
    {
        name: 'LineBot',
        status: 'Completed',
        description: "This is a line-sensing robot built for the partial fulfilment of the course Microprocessors and Microntrollers under the Computer Engineering Curriculla of my school. We used a line sensor, some motor controllers, microcontrollers, some DC motors, wires, zip ties, etc..",
        image: 'assets/images/linebot.png',
        lang: ['Electronics', 'Micro-controller'],
    },
    {
        name: 'Kirkos',
        status: 'Completed',
        description: "Another line-sensing Sumobot created for the Annual Sumobot Robotics Competition 2014 where I competed as a school representative. Given some weight constraints and time as well (I was notified that I was about to compete fairly late.) I designed a circular sumobot with improvised sensors that is programmed to out maneuver enemy robots. I figured, if you can't win by force (due to lack of high-performance motors), you should try outsmarting it. This is probably one of my finest work, being able to come up and design something that is novel yet utilizes its form as function on limited resources, is something I consider nothing short but an achievement. Even though it didn't win, it faired better than expected and defeated its oponnents and was able to reach the semi-finals considering the circumstances.",
        image: 'assets/images/kirkos.png',
        lang: ['Electronics', 'Arduino'],
        awards: ['Sumobot Robotics Competition 2014 School Representative']
    },
    {
        name: 'Droiduino',
        status: 'Completed',
        description: "Droiduino is an android-controlled via bluetooth racebot built for the Annual Computer Engineering Robotics Competition. What sets Droiduino from other competing racebots of its time was how I designed the accompanying android controller application. It uses an intuitive trackball-like interface instead of a button-centric one to control the racebot movements. My application uses a custom encoding that relays all four direction parameters on a single byte, in this way the response type is not only fast, but also, droiduino can receive two direction parameters at once giving it a faster turning velocity and enables it to travel in a diagonal way very seamlessly. Unlike its button-type competitors which you have to mash two buttons to achieve the same results.",
        image: 'assets/images/droiduino.png',
        lang: ['Electronics', 'Arduino', 'Android'],
        awards: ['CpE Robotics Competition 2013 Champion']
    },
    {
        name: 'Sinivo',
        status: 'Completed',
        description: "An anagram of the Latin word 'Inviso' which means, to look at or to watch. Sinivo is client and a server desktop application that logs class attendance of students and faculty instructors using RFID technology. The server application is intended to be used by the department chair to assign and add course loads to faculty instructors while the client application is used by the faculty instructors to enable the students to tap their RFIDs on a specific time window for each class. This project was done in partial fulfillment of the course Software Engineering as part of the Bachelor of Science in Computer Engineering Curricula.",
        image: 'assets/images/sinivo.png',
        lang: ['Java', 'Electronics'],
    },
    {
        name: 'Somlif!q',
        status: 'Discontinued',
        description: "Somlif!q stands for, 'Something like Facebook, but not quite'. It's a gamified social networking site that influences students on different courses and programs to collaborate on any project that they would like. Students earn points on skills (Programming, Electronics, Soldering, etc) they used on completing a collaborative project. These points will unlock certain titles such as IT ninja, Solder Bender, R0b0warrior, etc., that will serve as badges visible on a users profile.",
        image: 'assets/images/somlifiq.png',
        lang: ['HTML', 'Javascript', 'JQuery', 'CSS'],
    },
];
//# sourceMappingURL=uniprojects-items.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projectlist/workprojects-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORKPROJECTS; });
var WORKPROJECTS = [
    {
        name: 'OSysHub',
        status: 'Completed',
        description: "It started with a visit to our local church, Our Lady of the Most Holy Rosary Parish. I grew up in this church. That is why I was more than willing to accept their offer of creating a software system that they can use. Our Lady of the Most Holy Rosary Parish System Hub, or OSyshub for short, is a record-keeping native desktop application that is designed to handle payments, registration and renewal of various church-related processes from registration up to contract printing, for transactions like: wedding, columbary, and christening. It also has built in reminder notifications for overdue accounts.",
        image: 'assets/images/osyshub.png',
        lang: ['Java'],
    },
    {
        name: 'Tessa',
        status: 'Completed',
        description: "There is this one recurring task at work that made me think: 'I am to lazy to do this, maybe I can do something about this.' And that's what I did, I automated it. It's a test case generation tool that I made for a specific task at work, that can also be used for any tautology statements. Tessa generates all possible test cases from the base case you will provide, all that is left is running them. It's a time saver. It was also chosen as a finalist for Nokia Manila TC Innovation 2016. I named it Tessa, short for Test Case but I replaced 'c' with an 's' because I want to annoy people with slight OCD, including myself.",
        image: 'assets/images/tessa.png',
        lang: ['Java'],
        awards: ['Nokia Manila TC 2016 Innovation Finalist']
    },
];
//# sourceMappingURL=workprojects-items.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    margin-bottom: 0.2em;\r\n}\r\n\r\np {\r\n    margin: 0 0 10px;\r\n    font-size: 1.2em;\r\n    text-indent: 20px;\r\n    font-family: 'Roboto Condensed';\r\n}\r\n\r\nh3 {\r\n    font-size: 1.5em;\r\n    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\nh2 {\r\n    font-size: 2em;\r\n    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif\r\n}\r\n\r\na.pLink {\r\n    text-decoration: none !important;\r\n    cursor: pointer;\r\n}\r\n\r\nh2 a {\r\n    cursor: pointer;\r\n}\r\n\r\n.thumbnail:hover {\r\n    border-color: #EE7456;\r\n    border-width: 3px;\r\n    box-shadow: 0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12);\r\n    transition: box-shadow .5s;\r\n}\r\n\r\n.thumbnail {\r\n    margin-top: 2em;\r\n}\r\n\r\n#returnButton {\r\n    transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n    -webkit-transform: rotate(90deg);\r\n    position: fixed;\r\n    bottom: 22%;\r\n    left: -0.5%;\r\n    z-index: 999;\r\n}\r\n\r\n#returnButton a {\r\n    color: #72BAAC;\r\n}\r\n\r\n#returnButton a:hover {\r\n    color: #EE7456;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div id=\"returnButton\" *ngIf=\"!displayProjectLinks\" [@returnButton]=!displayProjectLinks>\r\n        <h2><a (click)=\"toggleProjectButtons('hide')\">return;</a></h2>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <header>\r\n                    <h1 class=\"superheader\">/** getProjects(); **/</h1>\r\n                </header>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngIf=\"displayProjectLinks\" [@mainProjectsAnimation]=\"displayProjectLinks\">\r\n                <div class=\"col-sm-6 col-md-4\" *ngFor=\"let project of projects\">\r\n                    <a (click)=\"toggleProjectButtons(project.name)\" class=\"pLink\">\r\n                        <div class=\"thumbnail\">\r\n                            <img src=\"{{project.imgsrc}}\" alt=\"{{project.alt}}\">\r\n                            <div class=\"caption\">\r\n                                <h3><span class=\"color-swatch-orange\">{{project.name}}</span><span class=\"color-swatch-bluegreen\">&#40;&#41;</span>;</h3>\r\n                                <p>{{project.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!displayProjectLinks\">\r\n            <project-list [selected]=\"selectedProject\" [projectItems]=\"projectItems\"></project-list>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!displayProjectLinks\">\r\n            <h2 style=\"margin: 0\">&#125;</h2>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_service__ = __webpack_require__("../../../../../src/app/projects/projects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.show = true;
        this.displayProjectLinks = true;
        this.projects = projectService.getProjectLinks();
    }
    ProjectsComponent.prototype.toggleProjectButtons = function (name) {
        if (name !== 'hide') {
            this.selectedProject = name;
            this.projectItems = this.projectService.getProjectItems(name);
        }
        this.displayProjectLinks = !this.displayProjectLinks;
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'projects',
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('mainProjectsAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1, height: '*' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        opacity: 0,
                        height: 0
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        opacity: 0,
                        height: 0
                    }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('returnButton', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ bottom: '22%', left: '-0.5%' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        bottom: 0,
                        left: '-0.5%'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        bottom: 0,
                        left: '-0.5%'
                    }))
                ])
            ])
        ],
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__projects_service__["a" /* ProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projectlist_workprojects_items__ = __webpack_require__("../../../../../src/app/projects/projectlist/workprojects-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projectlist_miscprojects_items__ = __webpack_require__("../../../../../src/app/projects/projectlist/miscprojects-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projectlist_uniprojects_items__ = __webpack_require__("../../../../../src/app/projects/projectlist/uniprojects-items.ts");
/* unused harmony export PROJECTLINKS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PROJECTLINKS = [
    {
        name: 'getWorkProjects',
        imgsrc: 'assets/images/workprojects.png',
        alt: 'Work Projects',
        description: 'My current industry and freelance projects.',
        projects: __WEBPACK_IMPORTED_MODULE_1__projectlist_workprojects_items__["a" /* WORKPROJECTS */]
    },
    {
        name: 'getMiscellaneousProjects',
        imgsrc: 'assets/images/miscprojects.png',
        alt: 'Miscellaneous Projects',
        description: 'Miscellaneous works, experiments and tools.',
        projects: __WEBPACK_IMPORTED_MODULE_2__projectlist_miscprojects_items__["a" /* MISCPROJECTS */]
    },
    {
        name: 'getUniStuff',
        imgsrc: 'assets/images/uniprojects.png',
        alt: 'University Projects',
        description: 'Projects that were mostly done during my undergrad.',
        projects: __WEBPACK_IMPORTED_MODULE_3__projectlist_uniprojects_items__["a" /* UNIPROJECTS */]
    },
];
var ProjectsService = (function () {
    function ProjectsService() {
    }
    ProjectsService.prototype.getProjectLinks = function () {
        return PROJECTLINKS;
    };
    ProjectsService.prototype.getProjectItems = function (projectName) {
        return this.getProjectLinks().find(function (item) {
            return item.name === projectName;
        }).projects;
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], ProjectsService);

//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
    particlesJS('particles-js', './assets/resources/particles.json');
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map