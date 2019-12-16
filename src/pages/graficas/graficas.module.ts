import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficasPage } from './graficas';

@NgModule({
  declarations: [
    GraficasPage,
  ],
  imports: [
    IonicPageModule.forChild(GraficasPage),
  ],
})
export class GraficasPageModule {}
