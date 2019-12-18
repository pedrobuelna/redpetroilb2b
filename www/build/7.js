webpackJsonp([7],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertasPageModule", function() { return AlertasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alertas__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertasPageModule = /** @class */ (function () {
    function AlertasPageModule() {
    }
    AlertasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alertas__["a" /* AlertasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alertas__["a" /* AlertasPage */]),
            ],
        })
    ], AlertasPageModule);
    return AlertasPageModule;
}());

//# sourceMappingURL=alertas.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertasPage; });
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
 * Generated class for the AlertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertasPage = /** @class */ (function () {
    function AlertasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertasPage');
    };
    AlertasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alertas',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/alertas/alertas.html"*/'<!--\n  Generated template for the AlertasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="content_logo header">\n        <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n    </div>\n    <img src="../../assets/imgs/icono_alerta.png" alt="alerta_icono" class="icono_alerta">\n    <div class="numberAviso">10</div>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="alertas">\n    <div class="center">\n        <label class="titulo1">JMS Data Services</label>\n        <label class="text1">+52 1 473 123 4567</label>\n        <label class="text1">consulta@jmsdataservices.com</label>\n    </div>\n    <div class="contenedor_alertas_indice">\n      <div class="caja1">\n        Alertas y Mensajes\n      </div>\n      <div class="contenedor_avisos">\n        <div class="aviso1">\n          <div class="color"></div>\n          <div class="txtaviso">Alerta!</div>\n        </div>\n        <div class="aviso1">\n          <div class="color"></div>\n          <div class="txtaviso">Aviso</div>\n        </div>\n        <div class="aviso1">\n          <div class="color"></div>\n          <div class="txtaviso">Exito!</div>\n        </div>\n        <div class="aviso1">\n          <div class="color"></div>\n          <div class="txtaviso">Info</div>\n        </div>\n      </div>\n    </div>\n    <div class="content_rows_alertas">\n      <div class="row_alertas">\n          <div class="row_content">\n            <div class="txt2">Pedido #125 - 01/30/19 - 200Lt</div>\n            <div class="txt4">Litros Entregados • 202Lt</div>\n          </div>\n        </div>\n        <div class="row_alertas">\n          <div class="row_content alerta">\n            <div class="txt2">Pedido #125 - 01/30/19 - 200Lt</div>\n            <div class="txt4">Litros Entregados • 202Lt</div>\n          </div>\n        </div>\n        <div class="row_alertas">\n          <div class="row_content aviso">\n            <div class="txt2">Pedido #125 - 01/30/19 - 200Lt</div>\n            <div class="txt4">Litros Entregados • 202Lt</div>\n          </div>\n        </div>\n        <div class="row_alertas">\n          <div class="row_content info">\n            <div class="txt2">Pedido #125 - 01/30/19 - 200Lt</div>\n            <div class="txt4">Litros Entregados • 202Lt</div>\n          </div>\n        </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/alertas/alertas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AlertasPage);
    return AlertasPage;
}());

//# sourceMappingURL=alertas.js.map

/***/ })

});
//# sourceMappingURL=7.js.map