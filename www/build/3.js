webpackJsonp([3],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficasPageModule", function() { return GraficasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficas__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GraficasPageModule = /** @class */ (function () {
    function GraficasPageModule() {
    }
    GraficasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__graficas__["a" /* GraficasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__graficas__["a" /* GraficasPage */]),
            ],
        })
    ], GraficasPageModule);
    return GraficasPageModule;
}());

//# sourceMappingURL=graficas.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasPage; });
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
 * Generated class for the GraficasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraficasPage = /** @class */ (function () {
    function GraficasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GraficasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraficasPage');
    };
    GraficasPage.prototype.onclickDireccion = function () {
        this.navCtrl.setRoot("MisdatosPage", null, { direction: "back", animate: true });
        //this.navCtrl.push("MisdatosPage");
    };
    GraficasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graficas',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/graficas/graficas.html"*/'<!--\n  Generated template for the GraficasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="content_logo header">\n        <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n    </div>\n    <img src="../../assets/imgs/icono_alerta.png" alt="alerta_icono" class="icono_alerta">\n    <div class="numberAviso">10</div>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="graficas">\n  <div class="center">\n      <label class="titulo1">JMS Data Services</label>\n      <label class="text1">+52 1 473 123 4567</label>\n      <label class="text1">consulta@jmsdataservices.com</label>\n  </div>\n  <div class="center">\n      <button ion-button color="orange" type="submit" (click)="onclickDireccion()"><ion-icon name="add"></ion-icon>Generar Pedido Nuevo</button>\n  </div>\n  <div class="content_text1_grafica">\n    <div class="content_txt1">\n      <span class="texto1G">Saldo Total: $778/</span>\n      <div class="content_texto2G">\n        <span class="texto2G">Credito</span> <br>\n        <span class="texto2G">40,000</span> <br>\n      </div>\n      <span class="texto1G">Descuento: $0 /litro</span> <br>\n      <span class="texto1G">Corte en 30 días</span>\n    </div>\n  </div>\n  <img src="../../assets/imgs/graficas.png" alt="graficas" style="width: 100%;margin:auto;display: block;margin-top: 15px;">\n  <div class="division"></div>\n  <div class="content_fecha_hora clearfix">\n    <span>Diciembre 24, 2019</span>\n    <span>4:20pm</span>\n  </div>\n  <div class="box_pedido_content active">\n    <div class="content_menu_pedido">\n        <img src="../../assets/imgs/diesel.png" alt="diesel" class="tipo_gas_img">\n        <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido" (click)="onclickActive()">\n    </div>\n    <div class="content_txt1">\n        <span class="texto1G">Precios: Litro/litro</span> <br>\n        <span class="texto1G">MXN 21.150 / 80.061</span>\n    </div>\n    <div class="content_txt2">\n        <span class="texto3G">USD 1.081 / 4.092</span> <br>\n        <span class="texto3G">EUR 0.977 / 3.698</span>\n    </div>\n    <div class="content_grafica_barras">\n      <ion-icon name="add"></ion-icon>\n      <ion-icon name="remove"></ion-icon>\n    </div>\n    <img src="../../assets/imgs/graficas_barras.png" alt="graficas_barras">\n    <div class="contenido_precios_litro">\n      <img src="../../assets/imgs/diesel.png" alt="diesel" class="tipo_gasgrafica">\n      <div class="content_tabla_litros">\n        <table>\n          <thead>\n            <th>Precios Litro</th>\n            <th align="center">Galon</th>\n          </thead>\n          <tbody>\n            <tr>\n              <td>MXN 21.150</td>\n              <td align="center">80.061</td> \n            </tr>\n          </tbody>\n        </table>\n      </div>\n      \n    </div>\n  </div>\n  <div class="box_pedido_content">\n    <div class="content_menu_pedido">\n        <img src="../../assets/imgs/magna.png" alt="magna" class="tipo_gas_img">\n        <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido">\n    </div>\n    <div class="content_txt1">\n        <span class="texto1G">Precios: Litro/litro</span> <br>\n        <span class="texto1G">MXN 21.150 / 80.061</span>\n    </div>\n    <div class="content_txt2">\n        <span class="texto3G">USD 1.081 / 4.092</span> <br>\n        <span class="texto3G">EUR 0.977 / 3.698</span>\n    </div>\n    <div class="content_grafica_barras">\n      <ion-icon name="add"></ion-icon>\n      <ion-icon name="remove"></ion-icon>\n    </div>\n  </div>\n  <div class="box_pedido_content">\n    <div class="content_menu_pedido">\n        <img src="../../assets/imgs/premium.png" alt="premium" class="tipo_gas_img">\n        <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido">\n    </div>\n    <div class="content_txt1">\n        <span class="texto1G">Precios: Litro/litro</span> <br>\n        <span class="texto1G">MXN 21.150 / 80.061</span>\n    </div>\n    <div class="content_txt2">\n        <span class="texto3G">USD 1.081 / 4.092</span> <br>\n        <span class="texto3G">EUR 0.977 / 3.698</span>\n    </div>\n    <div class="content_grafica_barras">\n        <ion-icon name="add"></ion-icon>\n    </div>\n  </div>\n  <div class="box_pedido_content">\n    <div class="content_menu_pedido">\n        <img src="../../assets/imgs/diesel.png" alt="diesel" class="tipo_gas_img">\n        <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido">\n    </div>\n    <div class="content_txt1">\n        <span class="texto1G">Precios: Litro/litro</span> <br>\n        <span class="texto1G">MXN 21.150 / 80.061</span>\n    </div>\n    <div class="content_txt2">\n        <span class="texto3G">USD 1.081 / 4.092</span> <br>\n        <span class="texto3G">EUR 0.977 / 3.698</span>\n    </div>\n    <div class="content_grafica_barras">\n        <ion-icon name="add"></ion-icon>\n    </div>\n  </div>\n  <div class="box_pedido_content">\n      <div class="content_menu_pedido">\n          <img src="../../assets/imgs/diesel.png" alt="diesel" class="tipo_gas_img">\n          <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido">\n      </div>\n      <div class="content_txt1">\n          <span class="texto1G">Precios: Litro/litro</span> <br>\n          <span class="texto1G">MXN 21.150 / 80.061</span>\n      </div>\n      <div class="content_txt2">\n          <span class="texto3G">USD 1.081 / 4.092</span> <br>\n          <span class="texto3G">EUR 0.977 / 3.698</span>\n      </div>\n      <div class="content_grafica_barras">\n          <ion-icon name="add"></ion-icon>\n      </div>\n    </div>\n    <div class="box_pedido_content">\n        <div class="content_menu_pedido">\n            <img src="../../assets/imgs/diesel.png" alt="diesel" class="tipo_gas_img">\n            <img src="../../assets/imgs/menu_pedido.png" alt="menu_pedido" class="menu_pedido">\n        </div>\n        <div class="content_txt1">\n            <span class="texto1G">Precios: Litro/litro</span> <br>\n            <span class="texto1G">MXN 21.150 / 80.061</span>\n        </div>\n        <div class="content_txt2">\n            <span class="texto3G">USD 1.081 / 4.092</span> <br>\n            <span class="texto3G">EUR 0.977 / 3.698</span>\n        </div>\n        <div class="content_grafica_barras">\n            <ion-icon name="add"></ion-icon>\n        </div>\n      </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/graficas/graficas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GraficasPage);
    return GraficasPage;
}());

//# sourceMappingURL=graficas.js.map

/***/ })

});
//# sourceMappingURL=3.js.map