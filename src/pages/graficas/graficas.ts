import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GraficasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graficas',
  templateUrl: 'graficas.html',
})
export class GraficasPage {

    public dataInput2: number[] = [56,44];

    public dataInputBar: number[] = [
        60,
        80,
        70,
        85,
        64,
        55,
        20,
        90,
        85,
        88,
        76,
        95,
    ];
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficasPage');
  }
  onclickDireccion(){
    this.navCtrl.setRoot("MisdatosPage",null,{direction:"back",animate:true})
    //this.navCtrl.push("MisdatosPage");
  }
}