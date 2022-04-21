import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
    
Chart.defaults.font.family = "'Quicksand', sans-serif";
Chart.defaults.plugins.datalabels.color='#FFFFFF';
Chart.defaults.font.size = 16;

export const pieChartDataFrance = {
    id: "gesFrance",
    type: "doughnut",
    data: {
      labels: [ "Transport","Production éléctrique", "Industrie", "Residentiel", "Secteur de l'énergie hors élec","Tertiaire", "Autre"],
      datasets: [
        {
          data: [43, 6, 13, 43, 14, 7, 4],
          weight: 80,
          backgroundColor: [
            "#003259",
            "#5dd1b6",
            "#004b74",
            "#717f9b",
            "#fdb137",
            "#424cbf",
            "#71c3ce",
            "#e0ebf4"
          ],
          borderColor: [
            "#003259",
            "#5dd1b6",
            "#004b74",
            "#717f9b",
            "#fdb137",
            "#424cbf",
            "#71c3ce",
            "#e0ebf4"
          ],
          borderWidth: 3,
          hoverOffset: 10
        }
      ]
    },
    options: {
      responsive: true,
      layout: {
        padding: 20
      },
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%';
          }
        },
        legend: {
          position: 'bottom',
          padding: {
            top: 10,
            bottom: 30
          }
        },
        title: {
          display: true,
          text: 'Répartition des GES par secteur',
          padding: {
            top: 10,
            bottom: 10
        }
      },
        subtitle: {
          display: true,
          text: 'France',
          padding: {
            bottom: 10
        }
      }
      }
    }
  };

export const pieChartDataMonde = {
    id: "gesMonde",
    type: "doughnut",
    data: {
      labels: [ "Transport","Production éléctrique", "Industrie", "Residentiel", "Secteur de l'énergie hors élec","Tertiaire","Autre"],
      datasets: [
        {
          data: [24, 6, 19, 42, 2, 5, 2],
          weight: 80,
          backgroundColor: [
            "#003259",
            "#5dd1b6",
            "#004b74",
            "#717f9b",
            "#fdb137",
            "#424cbf",
            "#71c3ce",
            "#e0ebf4"
          ],
          borderColor: [
            "#003259",
            "#5dd1b6",
            "#004b74",
            "#717f9b",
            "#fdb137",
            "#424cbf",
            "#71c3ce",
            "#e0ebf4"
          ],
          borderWidth: 3,
          hoverOffset: 10
        }
      ]
    },
    options: {
      responsive: true,
      layout: {
        padding: 20
      },
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%';
          }
        },
        legend: {
          position: 'bottom',
          padding: {
            top: 10,
            bottom: 30
          }
        },
        title: {
          display: true,
          text: 'Répartition des GES par secteur',
          padding: {
            top: 10,
            bottom: 10
        }
      },
        subtitle: {
          display: true,
          text: 'MONDE',
          padding: {
            bottom: 10
        }
      }
      }
    }
  };
