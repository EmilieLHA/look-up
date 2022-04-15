<template>
    <div class="container">
        <div class="jumbo_header" :style="imageStyleObject">
            <!-- <img class="home_header_img" src="../assets/img/background.png" alt=""> -->
                <div class="jumbo_header_content">
                    <h1 class="titre--primaire">Comprendre pour mieux agir</h1>
                    <p>Il nous reste 3 ans pour inverser la tendance climatique.<br> 
                    Alors on fait quoi? On recycle? On mange bio?<br>
                    Entrez pour savoir ce qui compte vraiment dans nos gestes du quotidien, on fait le bilan ensemble.
                    </p>
                    <router-link to="/essentiel" class="btn">L'essentiel</router-link>
                </div>
        </div>
    </div>

</template>

<script>

export default {
name: 'HomeHeader',
data() {
    return {
        image: "background.png"
    }
},
computed: {
    imageStyleObject(){
        return {
            backgroundImage: `url(${this.getImgUrl(this.image)})`
        }
    }
},
methods: {
    getImgUrl(img){
        return require ('../assets/img/' + img)
    }
}

}


</script>
