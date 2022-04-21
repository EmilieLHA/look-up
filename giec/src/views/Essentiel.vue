<template>
<div class="essentiel">
    <div class="article_header">
        <div class="container">
                <img class="article_header_img" src="../assets/img/essentiel.png" alt="essentiel">         
                <div class="article_header_content">  
                    <h2 class="article_header_content titre--secondaire">L'essentiel pour comprendre le réchauffement climatique</h2>
                    <p>Qui? Quoi? Combien?</p>
                </div>
        </div>
    </div>
        
    <div class="container">
        <section class="section">
            <pie-chart :chartData="chartData.repartitionFrance" :id="chartData.repartitionFrance.id"></pie-chart>
            <div class="chart_side">
                <h3 class="titre--tertiaire">Comment se répartissent les gaz à effet de serre</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus vero nostrum delectus quae quo, facere nesciunt asperiores vel ab nihil necessitatibus quam! Tempore sequi cupiditate, impedit sapiente odit modi dolores facilis perspiciatis aperiam. Enim ex, dicta ullam tempore corrupti ipsum, quidem dolorum modi error amet quibusdam neque sequi perspiciatis debitis pariatur placeat iusto ea nemo sapiente molestiae culpa provident quisquam doloremque autem. Tempora minus animi blanditiis eveniet et ut obcaecati beatae fugit! Fugit magni eligendi maxime ipsa, modi impedit officia. Quos pariatur magnam sint repellendus quia molestias, totam facere ad provident rerum? Facilis dolorum nihil omnis a? Corrupti, quam rerum.</p>
            </div>
            
        </section>

        <section class="section">
            <pie-chart :chartData="chartData.repartitionMonde" :id="chartData.repartitionMonde.id"></pie-chart>
            <div class="chart_side">
                <h3 class="titre--tertiaire">Comment se répartissent les gaz à effet de serre</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae commodi debitis inventore odio perspiciatis incidunt delectus dolore quae explicabo unde ducimus veritatis rem est consectetur modi ut distinctio perferendis numquam reiciendis, praesentium hic! Earum, ipsam, architecto fugiat voluptates dolores eligendi exercitationem optio veniam consequatur velit laudantium quis, pariatur eveniet non cupiditate ut numquam asperiores! Commodi delectus soluta sint ipsam consequatur at, laborum, nostrum tenetur accusantium suscipit pariatur. Sapiente magnam ipsa deleniti, eius exercitationem veritatis consequuntur, vero nam praesentium a voluptatum quo quae assumenda quia quibusdam hic deserunt! Laboriosam aliquid, laborum beatae non repellendus itaque distinctio et corporis odio, assumenda mollitia.</p>
            </div>
            
        </section>
        
    </div>

</div>

</template>

<script>

import PieChart from '@/components/PieChart.vue';
import {pieChartDataFrance, pieChartDataMonde} from '@/assets/datas/chartData.js';

export default {
    name: 'Essentiel',
    components: {
        'pie-chart': PieChart
    },
    data() {
        return {
            chartData: {
                repartitionFrance: pieChartDataFrance,
                repartitionMonde: pieChartDataMonde
            }
        }
    }
}

</script>