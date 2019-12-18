import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
//import {MisdatosPage} from "../misdatos/misdatos";
/**
 * Generated class for the DireccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direccion',
  templateUrl: 'direccion.html',
})
export class DireccionPage {
  formgroup:FormGroup;
  descripcion:AbstractControl;
  nombre:AbstractControl;
  telefono:AbstractControl;
  direccionFacturacion:AbstractControl;
  numeroExterior:AbstractControl;
  colonia:AbstractControl;
  cp:AbstractControl;
  localidad:AbstractControl;
  ciudad:AbstractControl;
  estado:AbstractControl;
  nav: any;
  public valueNombre = null;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      
      this.formgroup = formbuilder.group({
        descripcion:['',[Validators.required,Validators.minLength(10)]],
        nombre:['',[Validators.required,Validators.minLength(5)]],
        telefono:['',[Validators.required,Validators.minLength(10)]],
        direccionFacturacion:['',[Validators.required,Validators.minLength(10)]],
        numeroExterior:['',[Validators.required,Validators.minLength(2)]],
        colonia:['',[Validators.required,Validators.minLength(5)]],
        cp:['',[Validators.required,Validators.minLength(5)]],
        localidad:['',[Validators.required,Validators.minLength(5)]],
        ciudad:['',[Validators.required,Validators.minLength(5)]],
        estado:['',[Validators.required,Validators.minLength(5)]],
      });
      this.descripcion = this.formgroup.controls["descripcion"];
      this.nombre = this.formgroup.controls["nombre"];
      this.telefono = this.formgroup.controls["telefono"];
      this.direccionFacturacion = this.formgroup.controls["direccionFacturacion"];
      this.numeroExterior = this.formgroup.controls["numeroExterior"];
      this.colonia = this.formgroup.controls["colonia"];
      this.cp = this.formgroup.controls["cp"];
      this.localidad = this.formgroup.controls["localidad"];
      this.ciudad = this.formgroup.controls["ciudad"];
      this.estado = this.formgroup.controls["estado"];
      if(this.navParams.get("variable") == 1){
        this.descripcion.setValue("Casa");
        this.nombre.setValue("Juan Perez");
        this.telefono.setValue("+5214731234567");
      }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionPage');
  }
  onclickMisDatos() {
    this.navCtrl.setRoot("MisdatosPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("MisdatosPage");
  }
}
