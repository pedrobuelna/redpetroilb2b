import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaldosEstadisticasPage } from './saldos-estadisticas';

@NgModule({
    declarations: [
        SaldosEstadisticasPage,
    ],
    imports: [
        IonicPageModule.forChild(SaldosEstadisticasPage),
        ComponentsModule
    ],
})
export class SaldosEstadisticasPageModule {}
