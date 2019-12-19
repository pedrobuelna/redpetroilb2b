import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

/**
 * Generated class for the OlvidecontrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-olvidecontrasena',
  templateUrl: 'olvidecontrasena.html',
})
export class OlvidecontrasenaPage {
  formgroup:FormGroup;
  mailOlvidado:AbstractControl;
  nav: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        mailOlvidado:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      });
      this.mailOlvidado = this.formgroup.controls["mailOlvidado"];
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OlvidecontrasenaPage');
  }

}
