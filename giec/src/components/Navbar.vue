<template>
    <div class="header">
        <div class="navbar container">
            <router-link to="/"><img class="navbar_img" src="../assets/img/logo.png" alt="logo" title="logo"></router-link>
            <nav class="navbar_links">

                <div class="navbar_links_bloc">
                    <span class="navbar_link">
                        <router-link to="/">Comprendre</router-link> 
                    </span>
                </div>
                
                <span class="navbar_pipe"> | </span>

                <div class="navbar_links_bloc">
                    <span class="navbar_link">
                        <router-link to="/about">Agir</router-link>
                    </span>
                </div>

                <span class="navbar_pipe"> | </span>

                <div class="navbar_links_bloc">
                    <span class="navbar_link">
                        <router-link to="/about">A propos</router-link> 
                    </span>
                </div>
                
            </nav>
        </div>
    </div>

</template>

<script>
    export default {
    name: 'Navbar',
    }
</script>