import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

/**
 * Generated class for the MisdatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misdatos',
  templateUrl: 'misdatos.html',
})
export class MisdatosPage {
  formgroup:FormGroup;
  razonsocial:AbstractControl;
  direccionFacturacion:AbstractControl;
  numeroExterior:AbstractControl;
  colonia:AbstractControl;
  cp:AbstractControl;
  localidad:AbstractControl;
  ciudad:AbstractControl;
  estado:AbstractControl;
  rfc:AbstractControl;
  mailFacturacion:AbstractControl;
  nombreUsuario:AbstractControl;
  mailUsuario:AbstractControl;
  celularUsuario:AbstractControl;
  contrasena:AbstractControl;
  nav: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        razonsocial:['',[Validators.required,Validators.minLength(5)]],
        direccionFacturacion:['',[Validators.required,Validators.minLength(5)]],
        numeroExterior:['',[Validators.required,Validators.minLength(2)]],
        colonia:['',[Validators.required,Validators.minLength(5)]],
        cp:['',[Validators.required,Validators.minLength(5)]],
        localidad:['',[Validators.required,Validators.minLength(5)]],
        ciudad:['',[Validators.required,Validators.minLength(5)]],
        estado:['',[Validators.required,Validators.minLength(5)]],
        rfc:['',[Validators.required,Validators.minLength(12)]],
        mailFacturacion:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        nombreUsuario:['',[Validators.required,Validators.minLength(5)]],
        mailUsuario:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        celularUsuario:['',[Validators.required,Validators.minLength(5)]],
        contrasena:['',[Validators.required,Validators.minLength(5)]],
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisdatosPage');
  }
  onclickPedidos() {
    this.navCtrl.setRoot("PedidosPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("DireccionesPage");
  }
}
