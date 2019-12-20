import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from "lodash";
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

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

    public pedidosGas = [
        {
            "status" : "",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/diesel.png",
            "mostrarGrafica" : this.globalVars.preferencias.graficaDiesel.status
        },
        {
            "status" : "",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/magna.png",
            "mostrarGrafica" : this.globalVars.preferencias.graficaMagna.status
        },
        {
            "status" : "",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/premium.png",
            "mostrarGrafica" : this.globalVars.preferencias.graficaPremium.status
        }
    ];
    
    objetoRecibido: any;
    
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public globalVars: GlobalVarsProvider) {
            let objCasa = this.navParams.get("obj");
            this.objetoRecibido = navParams.data;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GraficasPage');
    }
    // onclickDireccion(){
    //     this.navCtrl.setRoot("MisdatosPage",null,{direction:"back",animate:true})
    //     //this.navCtrl.push("MisdatosPage");
    // }
    onclickPedido() {
      this.navCtrl.setRoot("PedidoPage",null,{direction:"back",animate:true})
      //this.navCtrl.push("DireccionesPage");
    }
    onclickAlertas(){
        this.navCtrl.setRoot("AlertasPage",null,{direction:"back",animate:true})
    }
    public onClickPrecio(index,status): void {
        _.map(this.pedidosGas,(item,indexItem) => {
            if (indexItem == index) {
                item.statusPrecios = status;
            }
        });
    }

    public openBar(index): void {
        // console.log("index",index);
        _.map(this.pedidosGas,(item,indexItem) => {
            if (indexItem == index) {
                if (item.status == "") {
                    item.status = "active";
                }
                else {
                    item.status = ""
                }
            }
        });
    }

}
