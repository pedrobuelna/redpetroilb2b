webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosPageModule = /** @class */ (function () {
    function PedidosPageModule() {
    }
    PedidosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */]),
            ],
        })
    ], PedidosPageModule);
    return PedidosPageModule;
}());

//# sourceMappingURL=pedidos.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
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
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosPage');
    };
    PedidosPage.prototype.onclickPedido = function () {
        this.navCtrl.setRoot("PedidoPage", null, { direction: "back", animate: true });
        //this.navCtrl.push("DireccionesPage");
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/pedidos/pedidos.html"*/'<!--\n  Generated template for the PedidosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="content_logo header">\n          <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n      </div>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="pedidos">\n    <div class="center">\n      <label class="titulo1">JMS Data Services</label>\n      <label class="text1">+52 1 473 123 4567</label>\n      <label class="text1">consulta@jmsdataservices.com</label>\n    </div>\n    <div class="center">\n      <button ion-button color="orange" type="submit" (click)="onclickPedido()">\n        <ion-icon name="add"></ion-icon> Generar Pedido Nuevo\n      </button>\n    </div>\n    <div class="pedido_content clearfix">\n      <div class="s1">\n        <div>Fecha de Pedido</div>\n        <div class="linea"></div>\n        <div>\n          Lunes\n          13/01/20\n        </div>\n      </div>\n      <div class="s2">\n        <div class="content_kg">\n          <div class="txt1">Pedido #127</div>\n          <div class="txt3">27K Lt</div>\n        </div>\n      </div>\n      <div class="s3">\n        <img src="../../assets/imgs/diesel.png" alt="diesel" class="gas_img">\n        <div class="estado_txt">Pendiente</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <div class="s1">\n        <div>Fecha de Pedido</div>\n        <div class="linea"></div>\n        <div>\n          Lunes\n          13/01/20\n        </div>\n      </div>\n      <div class="s2">\n        <div class="content_kg">\n          <div class="txt1">Pedido #126</div>\n          <div class="txt3">50K Lt</div>\n        </div>\n      </div>\n      <div class="s3">\n        <img src="../../assets/imgs/magna.png" alt="magna" class="gas_img">\n        <div class="estado_txt">Pendiente</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <div class="s1">\n        <div>Fecha de Pedido</div>\n        <div class="linea"></div>\n        <div>\n          01/30/19\n          <br>\n          202 Lt\n        </div>\n      </div>\n      <div class="s2">\n        <div class="content_kg">\n          <div class="txt1">Pedido #125</div>\n          <div class="txt3">27K Lt</div>\n        </div>\n      </div>\n      <div class="s3">\n        <img src="../../assets/imgs/diesel.png" alt="diesel" class="gas_img">\n        <div class="estado_txt entregado">Etregado</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n      <div class="s1">\n        <div>Fecha de Pedido</div>\n        <div class="linea"></div>\n        <div>\n          01/30/19\n          <br>\n          0 Lt\n        </div>\n      </div>\n      <div class="s2">\n        <div class="content_kg">\n          <div class="txt1">Pedido #124</div>\n          <div class="txt3">300 Lt</div>\n        </div>\n      </div>\n      <div class="s3">\n        <img src="../../assets/imgs/premium.png" alt="premium" class="gas_img">\n        <div class="estado_txt cancelado">Cancelado</div>\n      </div>\n    </div>\n    <div class="pedido_content clearfix">\n        <div class="s1">\n          <div>Fecha de Pedido</div>\n          <div class="linea"></div>\n          <div>\n            Lunes\n            13/01/20\n          </div>\n        </div>\n        <div class="s2">\n          <div class="content_kg">\n            <div class="txt1">Pedido #127</div>\n            <div class="txt3">27K Lt</div>\n          </div>\n        </div>\n        <div class="s3">\n          <img src="../../assets/imgs/diesel.png" alt="diesel" class="gas_img">\n          <div class="estado_txt entregado">Entregado</div>\n        </div>\n      </div>\n  </ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/pedidos/pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map