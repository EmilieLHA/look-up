<template>
    <div class="canvas_container">
        <canvas id="pie-chart">
            <p>Votre navigateur ne permet pas d'afficher le graphique</p>
        </canvas>
    </div>
</template>


<script>
import Chart from 'chart.js/auto';
import {pieChartDataWorld} from '@/assets/datas/chartData.js'

export default {
    name: 'PieChart',
    data() {
        return {
            pieChart: pieChartDataWorld
        }
    },
    mounted() {
    const ctx = document.getElementById('pie-chart');
    new Chart(ctx, this.pieChart);
    
    Chart.defaults.font.family = "'Quicksand', sans-serif";
    Chart.defaults.font.size = 16;
  }
}    

</script>
