import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import MaterialDateTimePicker from 'material-datetime-picker';
import moment from "moment";
// import {DireccionesPage} from "../direcciones/direcciones";
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
    formgroup:FormGroup;
    fecha:AbstractControl;
    hora:AbstractControl;
    nav: any;
    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        public formbuilder:FormBuilder) {
        this.formgroup = formbuilder.group({
            fecha:['',[Validators.required,Validators.minLength(10)]],
            hora:['',[Validators.required,Validators.minLength(5)]]
        });
        this.fecha = this.formgroup.controls["fecha"];
        this.hora = this.formgroup.controls["hora"];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PedidoPage');
    }
    onclickPedidos() {
        this.navCtrl.setRoot("PedidosPage",null,{direction:"back",animate:true})
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
