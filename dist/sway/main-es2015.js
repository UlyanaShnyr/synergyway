(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h3 class=\"cart-header\">Items in Your Cart</h3>\n<table class=\"table\">\n    <tr>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Price</th>\n        <th>Quantity</th>\n        <th>Total Item</th>\n        <th>Remove</th>\n\n    </tr>\n    <tr *ngFor=\"let item of items\">\n        <td>{{item.product.name}}</td>\n        <td>{{item.product.label}}</td>\n        <td>{{item.product.price}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.product.price * item.quantity}}</td>\n        <td >\n            <button class=\"btn btn-primary\" type=\"submit\" (click)=\"remove(item.product.id)\">Delete</button>\n        </td>  \n    </tr>\n</table>\n<h3>Total</h3>\n<h3>{{total}}</h3>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Synergy-Way</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\" style=\"float: right;\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['product']\" href=\"/product\">Products <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['cart']\" class=\"nav-link\" href=\"/cart\"> Cart\n          <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"16\" height=\"16\" viewBox=\"0 0 226 226\"\n            style=\" fill:#000000;\">\n            <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\"\n              stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\"\n              font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n              <path d=\"M0,226v-226h226v226z\" fill=\"none\"></path>\n              <g fill=\"#ffffff\">\n                <g id=\"surface1\">\n                  <path\n                    d=\"M14.125,14.01466v14.125h28.25c3.03467,0 5.62794,1.98633 6.62109,4.85547l13.18702,117.68994c1.21386,10.64892 10.37305,18.81494 21.07714,18.81494h86.23975v-14.125h-86.23975c-3.64159,0 -6.62109,-2.64844 -7.00731,-6.23486l-0.88281,-7.89014h89.60547c10.04199,0 18.81494,-7.17284 20.80127,-16.99414l13.51806,-67.75586h-133.47022l-3.03466,-26.92578l-0.2207,-0.66211c-2.70362,-8.82812 -10.92481,-14.84228 -20.19434,-14.89745zM155.375,169.5c-7.77978,0 -14.125,6.34522 -14.125,14.125c0,7.77978 6.34522,14.125 14.125,14.125c7.77978,0 14.125,-6.34522 14.125,-14.125c0,-7.77978 -6.34522,-14.125 -14.125,-14.125zM84.75,169.5c-7.77978,0 -14.125,6.34522 -14.125,14.125c0,7.77978 6.34522,14.125 14.125,14.125c7.77978,0 14.125,-6.34522 14.125,-14.125c0,-7.77978 -6.34522,-14.125 -14.125,-14.125zM67.42481,70.625h114.65527l-10.15234,50.81689c-0.71728,3.36573 -3.53125,5.68311 -6.95214,5.68311h-91.20558z\">\n                  </path>\n                </g>\n              </g>\n            </g>\n          </svg>\n          {{inc}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product/product.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h3 >Product List</h3>\n<div *ngFor=\"let product of products\" class=\"product-cart\">\n    <div class=\"card\" style=\"width: 18rem;\" >\n      <div class=\"card-body\" >          \n          <h5 class=\"card-title\" >  {{ product.name }} </h5>\n          <p>Price: {{ product.price }}$</p>\n          <p class=\"card-text\">{{product.label}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/cart', { id:product.id }]\" >Add To Cart</a> \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sway';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"]
        ],
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");



const routes = [
    { path: '', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    { path: 'product', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    { path: '**', redirectTo: '' }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CartComponent = class CartComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.items = [];
        this.total = 0;
        this.inc = 0;
        this.counter = 0;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            if (id) {
                var item = {
                    product: this.productService.select(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
                    let cart = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let cart = JSON.parse(localStorage.getItem('cart'));
                    let index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        let item = JSON.parse(cart[i]);
                        if (item.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        let item = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        localStorage.setItem("cart", JSON.stringify(cart));
                    }
                }
                this.loadCart();
            }
            else {
                this.loadCart();
            }
            this.counter++;
        });
    }
    loadCart() {
        this.inc = 0;
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
        }
    }
    remove(id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            if (item.product.id == id) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }
    onIncrement() {
        this.votes += 1;
    }
    onDecrement() {
        this.votes -= 1;
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(productService) {
        this.productService = productService;
        this.items = [];
        this.total = 0;
        this.inc = 0;
    }
    ngOnInit() {
        this.inc = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.inc += item.quantity;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let ProductComponent = class ProductComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.AllProducts();
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductService = class ProductService {
    constructor() {
        this.products = [
            { id: '1', name: 'article 1', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 25 },
            { id: '2', name: 'article 2', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 35 },
            { id: '3', name: 'article 3', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 45 }
        ];
    }
    AllProducts() {
        return this.products;
    }
    select(id) {
        return this.products[this.getSelectedIndex(id)];
    }
    getSelectedIndex(id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\SynergyW\sway\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map