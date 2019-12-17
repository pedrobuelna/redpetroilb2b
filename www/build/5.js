webpackJsonp([5],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionesPageModule", function() { return DireccionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direcciones__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DireccionesPageModule = /** @class */ (function () {
    function DireccionesPageModule() {
    }
    DireccionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__direcciones__["a" /* DireccionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__direcciones__["a" /* DireccionesPage */]),
            ],
        })
    ], DireccionesPageModule);
    return DireccionesPageModule;
}());

//# sourceMappingURL=direcciones.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DireccionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DireccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DireccionesPage = /** @class */ (function () {
    function DireccionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DireccionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DireccionesPage');
    };
    DireccionesPage.prototype.onclickDireccion = function () {
        this.navCtrl.setRoot("DireccionPage", null, { direction: "back", animate: true });
        //this.navCtrl.push("DireccionesPage");
    };
    DireccionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-direcciones',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/direcciones/direcciones.html"*/'<!--\n  Generated template for the DireccionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the PedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="content_logo header">\n          <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n      </div>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding id="direcciones">\n    <div class="center">\n      <label class="titulo1">JMS Data Services</label>\n      <label class="text1">+52 1 473 123 4567</label>\n      <label class="text1">consulta@jmsdataservices.com</label>\n    </div>\n    <div class="center">\n        <button ion-button color="orange" type="submit" (click)="onclickDireccion()"><ion-icon name="add"></ion-icon>Agregar Dirección de Entrega</button>\n    </div>\n    <div class="pedido_content clearfix">\n      <img src="../../assets/imgs/personas.png" alt="personas" class="img_direcciones">\n      <div class="content_direcciones">\n        <div class="txt2">Direccion #1</div>\n        <div class="txt3">Oficina</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <img src="../../assets/imgs/casa.png" alt="casa" class="img_direcciones">\n      <div class="content_direcciones">\n        <div class="txt2">Direccion #1</div>\n        <div class="txt3">Casa</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <img src="../../assets/imgs/casa.png" alt="casa" class="img_direcciones">\n      <div class="content_direcciones">\n        <div class="txt2">Direccion #1</div>\n        <div class="txt3">Casa 2</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <img src="../../assets/imgs/persona.png" alt="persona" class="img_direcciones">\n      <div class="content_direcciones">\n        <div class="txt2">Direccion #1</div>\n        <div class="txt3">Mamá</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <img src="../../assets/imgs/persona.png" alt="persona" class="img_direcciones">\n      <div class="content_direcciones">\n        <div class="txt2">Direccion #1</div>\n        <div class="txt3">Abuela</div>\n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/direcciones/direcciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DireccionesPage);
    return DireccionesPage;
}());

//# sourceMappingURL=direcciones.js.map

/***/ })

});
//# sourceMappingURL=5.js.map