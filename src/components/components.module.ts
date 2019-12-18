import { NgModule } from '@angular/core';
import { ChartDoughnutPercentComponent } from './chart-doughnut-percent/chart-doughnut-percent';
import { ChartBarsSaldosComponent } from './chart-bars-saldos/chart-bars-saldos';
@NgModule({
	declarations: [
    ChartDoughnutPercentComponent,
    ChartBarsSaldosComponent],
	imports: [],
	exports: [
    ChartDoughnutPercentComponent,
    ChartBarsSaldosComponent]
})
export class ComponentsModule {}
