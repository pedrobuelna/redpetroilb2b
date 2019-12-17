import { Component, Input, ElementRef } from '@angular/core';

/**
 * Generated class for the ChartDoughnutPercentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'chart-doughnut-percent',
    templateUrl: 'chart-doughnut-percent.html'
})
export class ChartDoughnutPercentComponent {

    @Input("width") width: string = "400";
    
    @Input("height") height: string = "400";
    
    @Input("dataInputs") dataInputs: number[] = [75,25];

    @Input("title") title: string = "";
    
    @Input("subtitle") subtitle: string = "";
    
    constructor(private elementRef: ElementRef) {
        console.log('Hello ChartDoughnutPercentComponent Component');
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        let canvas: any = this.elementRef.nativeElement.querySelector('.ctx');
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, 'rgba(249,142,43,1)');   
        gradient.addColorStop(1, 'rgba(249,142,43,0)');
        this.roundCorners();
        new Chart(canvas, {
            type: 'doughnut',
            data: {
                datasets : [{
                    data : this.dataInputs,
                    backgroundColor : [
                        "#0b3a61", gradient
                    ]
                }]
            },
            options: {
                cutoutPercentage : 48,
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                elements: {
                    arc: {
                        roundedCornersFor: 0
                    }
                },
                plugins: {
                    labels: {
                        render: 'percentage',
                        precision: 0,
                        fontSize: 12,
                        fontColor: '#fff'
                    }
                }
            }
        });
    }

    protected roundCorners(): void {
        Chart.pluginService.register({
            afterUpdate: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (chart.outerRadius + chart.innerRadius) / 2,
                        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
                        backgroundColor: arc._model.backgroundColor
                    }
                }
            },
        
            afterDraw: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var ctx = chart.chart.ctx;
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    var startAngle = Math.PI / 2 - arc._view.startAngle;
                    var endAngle = Math.PI / 2 - arc._view.endAngle;
        
                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    ctx.fillStyle = arc.round.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            },
        });
    }

}
