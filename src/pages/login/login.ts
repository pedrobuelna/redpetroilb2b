import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
//import {PedidoPage} from "../pedido/pedido";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formgroup:FormGroup;
  numeroCelular:AbstractControl;
  password:AbstractControl;
  nav: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private globalVars: GlobalVarsProvider,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        numeroCelular:['',[Validators.required,Validators.minLength(10)]],
        password:['',[Validators.required,Validators.minLength(5)]]
      });
      this.numeroCelular = this.formgroup.controls["numeroCelular"];
      this.password = this.formgroup.controls["password"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onclickPagePedidoNuevo() {
      this.globalVars.logged = true;
    this.navCtrl.setRoot("GraficasPage",null,{direction:"back",animate:true})
    //this.navCtrl.push(PedidoPage);
  }
  onclickVerPassword(){
    var b = document.querySelector("#password"); 
    
    if(b.getAttribute("type")=="text"){
      b.setAttribute("type", "password");
    }else{
      b.setAttribute("type", "text");
    }
  }
}
