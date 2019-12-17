import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MisdatosPage} from "../misdatos/misdatos";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionPage');
  }
  onclickMisDatos() {
    this.navCtrl.setRoot("MisdatosPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("MisdatosPage");
  }
}
