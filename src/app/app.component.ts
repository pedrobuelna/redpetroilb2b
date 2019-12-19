import {PEDIDO_NUEVO,MISDATOS_PAGE,GRAFICAS_PAGE,PEDIDOS_PAGE,DIRECCIONES_PAGE } from './../pages/pages.constants';
 

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//  import { GraficasPage } from '../pages/graficas/graficas';
 import { LoginPage } from '../pages/login/login';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
// import { PedidosPage } from '../pages/pedidos/pedidos';
// import { MisdatosPage } from '../pages/misdatos/misdatos';

// import { DireccionesPage } from '../pages/direcciones/direcciones';
// import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import _ from "lodash";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public globalVars: GlobalVarsProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.globalVars.pages = [
      { title: 'Inicio', component: GRAFICAS_PAGE,"requiredLogged" : false, },
      // { title: 'List', component: ListPage }
      { title: 'Elaboración de pedido', component: PEDIDO_NUEVO,"requiredLogged" : false, },
      { title: 'Mis Datos', "subtitle" : "Mis Datos +", component: MISDATOS_PAGE, "requiredLogged" : true,
                "statusClass" : "hide-menu", "subPage" : [
                    {
                        "title" : "Empresa",component: MISDATOS_PAGE, "requiredLogged" : false,
                    },
                    {
                        "title" : "Dirección de entrega",component: DIRECCIONES_PAGE, "requiredLogged" : false,
                    }
                ]
        },
      { title: 'Estatus de Pedidos', component: PEDIDOS_PAGE, "requiredLogged" : false, },
      { title: 'Preferencias', component: GRAFICAS_PAGE, "requiredLogged" : false, },
      { title: 'Estado de Cuenta', component: GRAFICAS_PAGE, "requiredLogged" : false, }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.globalVars.isAndroid = this.platform.is("android");
        this.globalVars.isIOS = this.platform.is("ios");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  onclickPageLogin() {
    this.globalVars.logged = false;
    this.nav.setRoot(LoginPage,null,{direction:"back",animate:true})
    //this.nav.push(LoginPage);
  }

  public openSubMenu(page): void {
    let statusClass = page.statusClass == "hide-menu" ? "" : "hide-menu";
        _.map(this.globalVars.pages, (item: any) => {
            if (item.title == page.title) {
                item.statusClass = statusClass;
                if (statusClass == "hide-menu") {
                    item.subtitle = item.title + " +"
                }
                else {
                    item.subtitle = item.title + " -"
                }
            }
        });
    }

    public calculateHeight(items): number {
        console.log("items",items);
        let buttonSize = 0;
        if (this.globalVars.isAndroid) {
            buttonSize = 70;
        }
        else if (this.globalVars.isIOS) {
            buttonSize = 70;
        }
        return _.size(items) * buttonSize;
    }

    public calculateHeightOffer(page): number {
        let pageElement = document.querySelector(".submenu_content-"+page.title+"-s");
        let contentOffers = pageElement.querySelectorAll(".content_offers");
        let heightElements = 0;
        _.forEach(contentOffers, (item) => {
            heightElements += (item.clientHeight + 20); 
        });
        return heightElements + 10;
    }

}
