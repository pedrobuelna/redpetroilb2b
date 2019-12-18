webpackJsonp([2],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisdatosPageModule", function() { return MisdatosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misdatos__ = __webpack_require__(286);
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisdatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
    function MisdatosPage(navCtrl, navParams, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.formgroup = formbuilder.group({
            razonsocial: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            direccionFacturacion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            numeroExterior: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            colonia: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            cp: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            localidad: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            rfc: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(12)]],
            mailFacturacion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
            nombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            mailUsuario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
            celularUsuario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
        });
        this.razonsocial = this.formgroup.controls["razonsocial"];
        this.direccionFacturacion = this.formgroup.controls["direccionFacturacion"];
        this.direccionFacturacion = this.formgroup.controls["direccionFacturacion"];
        this.numeroExterior = this.formgroup.controls["numeroExterior"];
        this.colonia = this.formgroup.controls["colonia"];
        this.cp = this.formgroup.controls["cp"];
        this.localidad = this.formgroup.controls["localidad"];
        this.ciudad = this.formgroup.controls["ciudad"];
        this.estado = this.formgroup.controls["estado"];
        this.rfc = this.formgroup.controls["rfc"];
        this.mailFacturacion = this.formgroup.controls["mailFacturacion"];
        this.nombreUsuario = this.formgroup.controls["nombreUsuario"];
        this.mailUsuario = this.formgroup.controls["mailUsuario"];
        this.celularUsuario = this.formgroup.controls["mailUsuario"];
        this.contrasena = this.formgroup.controls["contrasena"];
    }
    MisdatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisdatosPage');
    };
    MisdatosPage.prototype.onclickPedidos = function () {
        this.navCtrl.setRoot("PedidosPage", null, { direction: "back", animate: true });
        //this.navCtrl.push("DireccionesPage");
    };
    MisdatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-misdatos',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/misdatos/misdatos.html"*/'<!--\n  Generated template for the MisdatosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="content_logo header">\n          <img src="../../assets/imgs/logo_petroil.png" alt="logo" class="logo">\n      </div>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding id="misdatos">\n    <div class="center">\n        <label class="titulo1">JMS Data Services</label>\n        <label class="text1">+52 1 473 123 4567</label>\n        <label class="text1">consulta@jmsdataservices.com</label>\n    </div>\n    <br>\n    <label class="titulo1" style="width:auto">Mis Datos</label>\n    <img src="../../assets/imgs/editar.png" alt="editar" style="float: right;">\n    <br><br>\n    <form action="" [formGroup]="formgroup" id="misdatosForm" name="misdatosForm">\n        <div class="input_content">\n          <label for="razonsocial">Razón Social</label>\n          <input type="text" id="razonsocial" formControlName="razonsocial" required>\n          <span class="error1" *ngIf="razonsocial.hasError(\'required\') && razonsocial.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="razonsocial.hasError(\'minlength\') && razonsocial.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="direccionFacturacion">Dirección de Facturación</label>\n          <input type="text" id="direccionFacturacion" formControlName="direccionFacturacion" required>\n          <span class="error1" *ngIf="direccionFacturacion.hasError(\'required\') && direccionFacturacion.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="direccionFacturacion.hasError(\'minlength\') && direccionFacturacion.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="numeroExterior"># Exterior</label>\n          <input type="number" id="numeroExterior" formControlName="numeroExterior" required>\n          <span class="error1" *ngIf="numeroExterior.hasError(\'required\') && numeroExterior.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="numeroExterior.hasError(\'minlength\') && numeroExterior.touched ">* 2 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="numeroInterior"># Interior</label>\n          <input type="number" id="numeroInterior" name="numeroInterior" required>\n        </div>\n        <div class="input_content">\n          <label for="colonia">Colonia</label>\n          <input type="text" id="colonia" formControlName="colonia" required>\n          <span class="error1" *ngIf="colonia.hasError(\'required\') && colonia.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="colonia.hasError(\'minlength\') && colonia.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="cp">Codigo Postal</label>\n          <input type="number" id="cp" formControlName="cp" required>\n          <span class="error1" *ngIf="cp.hasError(\'required\') && cp.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="cp.hasError(\'minlength\') && cp.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="localidad">Localidad</label>\n          <input type="text" id="localidad" formControlName="localidad" required>\n          <span class="error1" *ngIf="localidad.hasError(\'required\') && localidad.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="localidad.hasError(\'minlength\') && localidad.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="ciudad">Ciudad</label>\n          <input type="text" id="ciudad" formControlName="ciudad" required>\n          <span class="error1" *ngIf="ciudad.hasError(\'required\') && ciudad.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="ciudad.hasError(\'minlength\') && ciudad.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="estado">Estado</label>\n          <input type="text" id="estado" formControlName="estado" required>\n          <span class="error1" *ngIf="estado.hasError(\'required\') && estado.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="estado.hasError(\'minlength\') && estado.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="rfc">RFC</label>\n          <input type="text" id="rfc" formControlName="rfc" required>\n          <span class="error1" *ngIf="rfc.hasError(\'required\') && rfc.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="rfc.hasError(\'minlength\') && rfc.touched ">* 12 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="mailFacturacion">Mail de Facturación</label>\n          <input type="email" id="mailFacturacion" formControlName="mailFacturacion" required>\n          <span class="error1" *ngIf="mailFacturacion.hasError(\'required\') && mailFacturacion.touched">Rellene el Campo</span>\n          <span class="error1" *ngIf="mailFacturacion.hasError(\'pattern\') && mailFacturacion.touched">Ejemplo correo@dominio.com</span>\n        </div>\n        <div class="input_content">\n          <label for="nombreUsuario">Nombre del Usuario</label>\n          <input type="text" id="nombreUsuario" formControlName="nombreUsuario" required>\n          <span class="error1" *ngIf="nombreUsuario.hasError(\'required\') && nombreUsuario.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="nombreUsuario.hasError(\'minlength\') && nombreUsuario.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="input_content">\n          <label for="mailUsuario">Mail del Usuario</label>\n          <input type="email" id="mailUsuario" formControlName="mailUsuario" required>\n          <span class="error1" *ngIf="mailUsuario.hasError(\'required\') && mailUsuario.touched">Rellene el Campo</span>\n          <span class="error1" *ngIf="mailUsuario.hasError(\'pattern\') && mailUsuario.touched">Ejemplo correo@dominio.com</span>\n        </div>\n        <div class="input_content">\n          <label for="celularUsuario">Celular del Usuario</label>\n          <input type="number" id="celularUsuario" formControlName="celularUsuario" required>\n          <span class="error1" *ngIf="celularUsuario.hasError(\'required\') && celularUsuario.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="celularUsuario.hasError(\'minlength\') && celularUsuario.touched ">* 5 Caractéres minimo</span>\n\n        </div>\n        <div class="input_content">\n          <label for="contrasena">Contraseña</label>\n          <input type="password" id="contrasena" formControlName="contrasena" required>\n          <span class="error1" *ngIf="contrasena.hasError(\'required\') && contrasena.touched">* Rellene el Campo</span>\n          <span class="error1" *ngIf="contrasena.hasError(\'minlength\') && contrasena.touched ">* 5 Caractéres minimo</span>\n        </div>\n        <div class="center">\n            <button ion-button color="orange" type="submit" (click)="onclickPedidos()" [disabled]="formgroup.invalid">Agregar Datos</button>\n        </div>\n      </form>\n    \n  </ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/redpetroilb2b/src/pages/misdatos/misdatos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], MisdatosPage);
    return MisdatosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=misdatos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map