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
    public startDate:String = "";
    public inputDateTime: string = "";
    private date: string = "";
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
    public pedidosGas = [
        {
            "status" : "",
            "statusPrecios" : "PETROIL retira producto",
        },
        {
            "status" : "",
            "statusPrecios" : "",
        },
        {
            "status" : "",
            "statusPrecios" : "",
        }
    ];
    public combos = [
        {
            "status" : "",
        }
    ];
    public selects = [
        {
            "status" : "",
            "descripcion" : "PETROIL retira producto",
        },
        {
            "status" : "",
            "descripcion" : "PEMEX entrega producto",
        },
        {
            "status" : "",
            "descripcion" : "Cliente retira producto PEMEX",
        },
        {
            "status" : "",
            "descripcion" : "Cliente retira producto planta",
        }
    ];
    // public openCombo(index): void {
    //     // console.log("index",index);
    //     _.map(this.combos,(item,indexItem) => {
    //         if (indexItem == index) {
    //             if (item.status == "") {
    //                 item.status = "active";
    //             }
    //             else {
    //                 item.status = ""
    //             }
    //         }
    //     });
    // }
    // public checkCombo(item): void {
    //     //console.log("index",index);
    //     _.map(this.selects,(item,indexItem) => {
    //         console.log("index",item);
    //         console.log("indexItem",indexItem);
    //         if (indexItem == item) {
    //             if (item.status == "") {
    //                 item.status = "active";
    //             }
    //             else {
    //                 item.status = ""
    //             }
    //         }
    //     });
    // }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PedidoPage');
        

        // this.date = new Date().toISOString();
        

        let isoDate = new Date().toISOString();
        var d = new Date(isoDate);
        //d.toLocaleDateString('en-GB');
        this.inputDate = d.toLocaleDateString('es-MX');
        var today = new Date();
        var horas;
        var minutos;
        if(today.getHours().toString().length == 1) {
            horas = '0'+today.getHours();
        }else{
            horas = today.getHours();
        }
       if(today.getMinutes().toString().length == 1) {
            minutos = '0'+today.getMinutes();
       }else{
        minutos = today.getMinutes();
       }
        var time = horas + ":" + minutos;
        this.inputDateTime = time;
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
