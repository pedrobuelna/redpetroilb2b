import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DireccionesPage} from "../direcciones/direcciones";
/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }
  onclickDirecciones() {
    this.navCtrl.setRoot("DireccionesPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("DireccionesPage");
  }
}
