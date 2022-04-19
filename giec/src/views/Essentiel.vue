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
        <section class="premiere-section">
            <pie-chart></pie-chart>
            <div class="chart_side">
                <h3 class="titre--tertiaire">Comment se répartissent les gaz à effet de serre</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum magni, explicabo ipsam alias cupiditate suscipit. Voluptatibus, quae accusamus. Quaerat magni qui saepe delectus architecto, laboriosam nemo nam officia expedita nobis.</p>
            </div>
            
        </section>
    </div>

</div>

</template>

<script>

import PieChart from '@/components/PieChart.vue'

export default {
    name: 'Essentiel',
    components: {
        'pie-chart': PieChart
    }
}

</script>