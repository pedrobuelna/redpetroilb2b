webpackJsonp([2],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisdatosPageModule", function() { return MisdatosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misdatos__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisdatosPageModule = /** @class */ (function () {
    function MisdatosPageModule() {
    }
    MisdatosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__misdatos__["a" /* MisdatosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__misdatos__["a" /* MisdatosPage */]),
            ],
        })
    ], MisdatosPageModule);
    return MisdatosPageModule;
}());

//# sourceMappingURL=misdatos.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisdatosPage; });
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
 * Generated class for the MisdatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisdatosPage = /** @class */ (function () {
    function MisdatosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MisdatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisdatosPage');
    };
    MisdatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-misdatos',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/misdatos/misdatos.html"*/'<!--\n  Generated template for the MisdatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="content_logo header">\n          <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n      </div>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding id="misdatos">\n    <div class="center">\n        <label class="titulo1">JMS Data Services</label>\n        <label class="text1">+52 1 473 123 4567</label>\n        <label class="text1">consulta@jmsdataservices.com</label>\n    </div>\n    <br>\n    <label class="titulo1">Mis Datos</label>\n    <br><br>\n    <form action="" id="misdatosForm" name="misdatosForm">\n        <!-- <form action="" [formGroup]="formgroup" id="login" name="login"> -->\n        <div class="input_content">\n          <label for="razonsocial">Razón Social</label>\n          <input type="text" id="razonsocial" name="razonsocial" required>\n          <!-- <input type="text" id="descrpcion" formControlName="descrpcion" required> -->\n          <!-- <span class="error1" *ngIf="descrpcion.hasError(\'required\') && descrpcion.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="descrpcion.hasError(\'minlength\') && descrpcion.touched ">* 10 Caractéres minimo</span> -->\n        </div>\n        <div class="input_content">\n          <label for="direccionFacturacion">Dirección de Facturación</label>\n          <input type="text" id="direccionFacturacion" name="direccionFacturacion" required>\n        </div>\n        <div class="input_content">\n          <label for="numeroExterior"># Exterior</label>\n          <input type="number" id="numeroExterior" name="numeroExterior" required>\n        </div>\n        <div class="input_content">\n          <label for="numeroInterior"># Interior</label>\n          <input type="number" id="numeroInterior" name="numeroInterior" required>\n        </div>\n        <div class="input_content">\n          <label for="colonia">Colonia</label>\n          <input type="text" id="colonia" name="colonia" required>\n        </div>\n        <div class="input_content">\n          <label for="cp">Codigo Postal</label>\n          <input type="number" id="cp" name="cp" required>\n        </div>\n        <div class="input_content">\n          <label for="localidad">Localidad</label>\n          <input type="text" id="localidad" name="localidad" required>\n        </div>\n        <div class="input_content">\n          <label for="ciudad">Ciudad</label>\n          <input type="text" id="ciudad" name="ciudad" required>\n        </div>\n        <div class="input_content">\n          <label for="estado">Estado</label>\n          <input type="text" id="estado" name="estado" required>\n        </div>\n        <div class="input_content">\n          <label for="rfc">RFC</label>\n          <input type="text" id="rfc" name="rfc" required>\n        </div>\n        <div class="input_content">\n          <label for="mailFacturacion">Mail de Facturación</label>\n          <input type="email" id="mailFacturacion" name="mailFacturacion" required>\n        </div>\n        <div class="input_content">\n          <label for="nombreUsuario">Nombre del Usuario</label>\n          <input type="text" id="nombreUsuario" name="nombreUsuario" required>\n        </div>\n        <div class="input_content">\n          <label for="mailUsuario">Mail del Usuario</label>\n          <input type="email" id="mailUsuario" name="mailUsuario" required>\n        </div>\n        <div class="input_content">\n          <label for="celularUsuario">Celular del Usuario</label>\n          <input type="number" id="celularUsuario" name="celularUsuario" required>\n        </div>\n        <div class="input_content">\n          <label for="contrasena">Contraseña</label>\n          <input type="password" id="contrasena" name="contrasena" required>\n        </div>\n        <div class="center">\n            <button ion-button color="orange" type="submit" (click)="onclickDatos()">Agregar Datos</button>\n        </div>\n      </form>\n    \n  </ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/misdatos/misdatos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MisdatosPage);
    return MisdatosPage;
}());

//# sourceMappingURL=misdatos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map