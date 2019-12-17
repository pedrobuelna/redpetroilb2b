import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DireccionPage} from "../direccion/direccion";
/**
 * Generated class for the DireccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direcciones',
  templateUrl: 'direcciones.html',
})
export class DireccionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionesPage');
  }
  onclickDireccion() {
    this.navCtrl.setRoot("DireccionPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("DireccionesPage");
  }
}
