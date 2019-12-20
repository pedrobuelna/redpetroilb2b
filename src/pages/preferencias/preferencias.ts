import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

/**
 * Generated class for the PreferenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-preferencias',
    templateUrl: 'preferencias.html',
})
export class PreferenciasPage {
    segundaPage = "GraficasPage";
    datos = [
        {valor: 1},
        {valor: 2},
        {valor: 3},
    ];
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public globalVars: GlobalVarsProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PreferenciasPage');
    }
    abrirSegundaPag(datoSeleccionado) {
        this.navCtrl.setRoot("GraficasPage", datoSeleccionado);
    }
}
