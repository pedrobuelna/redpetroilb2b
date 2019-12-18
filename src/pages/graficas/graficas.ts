import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from "lodash";

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
            "status" : "active",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/diesel.png"
        },
        {
            "status" : "",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/magna.png"
        },
        {
            "status" : "",
            "statusPrecios" : "",
            "imgGas" : "assets/imgs/premium.png"
        }
    ];
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        let objCasa = this.navParams.get("obj");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GraficasPage');
    }
    onclickDireccion(){
        this.navCtrl.setRoot("MisdatosPage",null,{direction:"back",animate:true})
        //this.navCtrl.push("MisdatosPage");
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
                if (item.status == "active") {
                    item.status = "";
                }
                else {
                    item.status = "active"
                }
            }
        });
    }

}
