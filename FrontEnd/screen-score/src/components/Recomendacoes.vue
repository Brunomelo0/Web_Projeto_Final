<script setup>
import FilmeCard from '../components/FilmeCard.vue'
import SerieCard from '../components/SerieCard.vue'
</script>
<template>
    <!--Substituir os SerieCard/FilmeCard colocados manualmente por uma estrutura de repeticao (v-for) q imprima as series e filmes do back-->
    <div class="bg-body-tertiary py-5">
        <div class="container recomendacoes-populares mb-5">
            <h2>Mais populares</h2>
            <hr>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">

                <FilmeCard />
                <FilmeCard />
                <SerieCard />
                <SerieCard />

            </div>
        </div>
        <div class="container recomendacoes-recentes mb-5">
            <h2>Mais Recentes</h2>
            <hr>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">

                <FilmeCard />
                <FilmeCard />
                <SerieCard />
                <SerieCard />

            </div>
        </div>
    </div>
</template>