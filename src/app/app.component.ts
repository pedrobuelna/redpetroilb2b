import {PEDIDO_NUEVO,MISDATOS_PAGE,PEDIDOS_PAGE,  } from './../pages/pages.constants';
 

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
 import { LoginPage } from '../pages/login/login';
// import { PedidosPage } from '../pages/pedidos/pedidos';
// import { MisdatosPage } from '../pages/misdatos/misdatos';

// import { DireccionesPage } from '../pages/direcciones/direcciones';
// import { GlobalVarsProvider } from '../providers/global-vars/global-vars';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      // { title: 'List', component: ListPage }
      { title: 'Pedir Producto', component: PEDIDO_NUEVO },
      { title: 'Mis Datos', component: MISDATOS_PAGE },
      { title: 'Mis Pedidos', component: PEDIDOS_PAGE },
      { title: 'Preferencias', component: HomePage },
      { title: 'Estado de Cuenta', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
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
    this.nav.setRoot(LoginPage,null,{direction:"back",animate:true})
    //this.nav.push(LoginPage);
  }
}