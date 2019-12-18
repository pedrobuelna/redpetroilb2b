import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DireccionesPage} from "../direcciones/direcciones";
import MaterialDateTimePicker from 'material-datetime-picker';
import moment from "moment";
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

    public inputDate: string = "";

    public inputDateTime: string = "";

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PedidoPage');
    }
    onclickDirecciones() {
        this.navCtrl.setRoot("DireccionesPage",null,{direction:"back",animate:true})
        //this.navCtrl.push("DireccionesPage");
    }

    public onFocusDate(): void {
        const picker = new MaterialDateTimePicker({
            "datePickerOnly" : true
        })
        .on('submit', (val) => {
            this.inputDate =  val.format("DD/MM/YYYY");
        })
        .on('open', () => console.log('opened'))
        .on('close', () => console.log('closed'));
        picker.open();
    }
    
    public onFocusDateTime(): void {
        const picker = new MaterialDateTimePicker({
            "timePickerOnly" : true
        })
        .on('submit', (val) => {
            this.inputDateTime =  val.format("HH:mm");
        })
        .on('open', () => console.log('opened'))
        .on('close', () => console.log('closed'));
        picker.open();
    }

}
