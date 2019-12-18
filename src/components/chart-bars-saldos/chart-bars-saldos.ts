import { Component, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the ChartBarsSaldosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'chart-bars-saldos',
    templateUrl: 'chart-bars-saldos.html'
})
export class ChartBarsSaldosComponent {

    @Input("height") height: string = "220";

    @Input("data") data: number[] = [];

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        this.chartBar();
    }

    public chartBar() {
        
		var MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
		var barChartData = {
            labels: MONTHS,
			datasets: [{
				backgroundColor: ["#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#0b3a61"],
				data: this.data
			}]

        };
        
        let canvas: any = this.elementRef.nativeElement.querySelector(".ctx-canvas"); // document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                plugins: {
                    labels: {
                        render: 'percentage',
                        precision: 0,
                        fontSize: 12,
                        fontColor: '#fff'
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0,
                            fontColor: "#0b3a61",
                            fontStyle: "bold"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        display:false,
                        ticks: {
                            suggestedMin: 0,    
                            suggestedMax: 100   // minimum value will be 0.
                        }
                    }]
                }
            }
        });
	
    }

}
