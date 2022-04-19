export const pieChartDataWorld = {
    type: "doughnut",
    data: {
      labels: ["Production éléctrique", "Secteur de l'énergie hors élec", "Industrie", "Transport", "Residentiel","Tertiaire", "Agriculture", "Autre"],
      datasets: [
        {
          data: [37, 19, 39, 126, 40, 22, 9, 3],
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
          hoverOffset: 20
        }
      ]
    },
    options: {
      responsive: true,
      layout: {
        padding: 20
      },
      plugins: {
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
