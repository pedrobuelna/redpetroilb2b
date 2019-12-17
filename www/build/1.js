webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoPageModule", function() { return PedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoPageModule = /** @class */ (function () {
    function PedidoPageModule() {
    }
    PedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido__["a" /* PedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido__["a" /* PedidoPage */]),
            ],
        })
    ], PedidoPageModule);
    return PedidoPageModule;
}());

//# sourceMappingURL=pedido.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
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
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidoPage = /** @class */ (function () {
    function PedidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoPage');
    };
    PedidoPage.prototype.onclickDirecciones = function () {
        this.navCtrl.setRoot("DireccionesPage", null, { direction: "back", animate: true });
        //this.navCtrl.push("DireccionesPage");
    };
    PedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/pedido/pedido.html"*/'<!--\n  Generated template for the PedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="content_logo header">\n          <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n      </div>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding id="pedido">\n    <div class="center">\n        <label class="titulo1">JMS Data Services</label>\n        <label class="text1">+52 1 473 123 4567</label>\n        <label class="text1">consulta@jmsdataservices.com</label>\n        <label class="titulo2">Pedido Nuevo</label>\n    </div>\n    <form action="" id="pedidoForm" name="pedidoForm">\n          <ion-row class="ion-justify-content-start">\n            <label for="fechaSurtido">Fecha y hora de surtido de pedido</label>\n            <ion-col size="2">\n              <div>\n                  <input type="date" id="fechaSurtido">\n              </div>\n            </ion-col>\n            <ion-col size="2">\n              <div>\n                  <input type="time" id="horaSurtido">\n              </div>\n            </ion-col>\n          </ion-row>\n      \n      <div class="input_content">\n        <label for="estacion">Estación de servicio</label>\n          <select name="estacion" id="estacion">\n            <option value="1">Estacion 123</option>\n            <option value="2">Estacion 456</option>\n          </select>\n      </div>\n      <div class="input_content">\n        <label for="formaEntrega">Forma de entrega</label>\n          <select name="formaEntrega" id="formaEntrega">\n            <option value="1">PETROIL retira producto</option>\n            <option value="2">PEMEX retira producto</option>\n            <option value="3">Cliente retira producto de PEMEX</option>\n            <option value="4">Cliente retira producto Planta</option>\n          </select>\n      </div>\n      <div class="input_content">\n        <label for="formaCompra">Forma de compra</label>\n          <select name="formaCompra" id="formaCompra">\n            <option value="1">Crédito</option>\n            <option value="2">Efectivo</option>\n          </select>\n      </div>\n      <div class="input_content">\n        <label for="tipoProducto">Tipo de producto</label>\n          <select name="tipoProducto" id="tipoProducto">\n            <option value="1">Diesel Automotriz PETROIL</option>\n            <option value="2">Gasolina PETROIL</option>\n          </select>\n      </div>\n      <div class="input_content">\n        <label for="cantidad">Cantidad</label>\n          <select name="cantidad" id="cantidad">\n            <option value="1">2700</option>\n            <option value="2">3500</option>\n          </select>\n      </div>\n      <div class="input_content">\n        <label for="cantidad">Comentarios</label>\n        <textarea name="comentarios" id="comentarios"></textarea>\n      </div>\n      <div class="center">\n          <button ion-button color="orange" type="submit" (click)="onclickDirecciones()">Generar Pedido Nuevo</button>\n      </div>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/pedido/pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PedidoPage);
    return PedidoPage;
}());

//# sourceMappingURL=pedido.js.map

/***/ })

});
//# sourceMappingURL=1.js.map