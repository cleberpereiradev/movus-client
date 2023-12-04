import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public busQuantity: number = 0;
  public sensorQuantity: number = 0;
  public locationQuantityToday: number = 0;
  public totalQuantityLocation: number = 0;

  constructor(
    private service: DashboardService
  ) { }
  
  ngOnInit() :void{

    this.service.countBus().subscribe((result:any) => {
      console.log(result);
      this.busQuantity = result;
    });

    this.service.countSensor().subscribe((result:any) => {
      console.log(result);
      this.sensorQuantity = result;
    });

    this.service.countLocation().subscribe((result:any) => {
      console.log(result);
      this.locationQuantityToday = result;
    });

    this.service.countAllLocation().subscribe((result:any) => {
      console.log(result);
      this.totalQuantityLocation = result;
    });

    this.service.obterDadosUltimos7Dias().subscribe((result:any) => {
      console.log(result);
      this.createChart(result);
    });
  }

  private createChart(dados: number[]): void {
    const chartCanvas = document.getElementById('chart-orders') as HTMLCanvasElement;
  
    if (!chartCanvas) {
      console.error('Elemento do gráfico não encontrado.');
      return;
    }
  
    const ctx = chartCanvas.getContext('2d');
  
    if (!ctx) {
      console.error('Contexto do gráfico não encontrado.');
      return;
    }
  
    const seuGrafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Registros',
          data: dados,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
          borderColor: 'rgba(75, 192, 192, 1)',     // Cor da borda das barras
          borderWidth: 1                           // Largura da borda das barras
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
}

