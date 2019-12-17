import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SaldosEstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-saldos-estadisticas',
    templateUrl: 'saldos-estadisticas.html',
})
export class SaldosEstadisticasPage {

    public dataInput2: number[] = [56,44];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SaldosEstadisticasPage');
        this.chartBar();
    }

    public chartBar() {
        
		var MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
		var color = Chart.helpers.color;
		var barChartData = {
            labels: MONTHS,
			datasets: [{
				backgroundColor: ["#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#ff6c10","#0b3a61"],
				data: [
					60,
					80,
                    70,
                    85,
                    64,
                    55,
                    20,
                    90,
                    85,
                    88,
                    76,
                    95,
				]
			}]

        };
        
        let canvas: any = document.getElementById('canvas');
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
