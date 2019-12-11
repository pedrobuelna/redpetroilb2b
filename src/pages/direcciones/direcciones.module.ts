import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DireccionesPage } from './direcciones';

@NgModule({
  declarations: [
    DireccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(DireccionesPage),
  ],
})
export class DireccionesPageModule {}
