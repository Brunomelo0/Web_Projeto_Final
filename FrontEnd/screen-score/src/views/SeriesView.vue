<script setup>
import SerieCard from '../components/SerieCard.vue'
</script>
<template>
    <main>

        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Séries</h1>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <!--Inserir foto e nome de filmes do banco de dados nos cards-->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />
                    <SerieCard />

                </div>
            </div>
        </div>

    </main>
</template>
