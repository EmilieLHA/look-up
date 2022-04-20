<template>
    <div class="canvas_container">
        <canvas :id="id">
            <p>Votre navigateur ne permet pas d'afficher le graphique</p>
        </canvas>
    </div>
</template>


<script>
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

export default {
    name: 'PieChart',
    props: {
        chartData: Object,
        id: String
    },
    mounted() {
    const ctx = document.getElementById(this.id);
    new Chart(ctx, this.chartData);
    
    Chart.defaults.font.family = "'Quicksand', sans-serif";
    Chart.defaults.font.size = 16;
    
  }
}    

</script>
