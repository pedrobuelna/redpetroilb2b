import { Component } from '@angular/core';
//import { NavController, NavParams, Platform } from 'ionic-angular';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: any;

//  constructor(private platform: Platform,
constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }
}
