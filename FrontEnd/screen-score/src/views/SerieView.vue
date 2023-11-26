<script setup>
import Header from '../components/Header.vue'
import ReviewMinimizada from '../components/ReviewMinimizada.vue';
</script>
<template>
    <Header />
    <div class="container p-3">
        <div class="d-flex flex-column mb-3">
            <div class="p-2">
                <div class="card mb-3">
                    <img src="../assets/drive.jpg" class="card-img-top filme-capa" alt="...">
                </div>
            </div>
            <div class="p-2">
                    <h3 class="filme-nome">Nome da Série</h3>
                    <p class="data">Data de lançamento</p>
                    <p class="diretor">Directed by: Diretor</p>
                    <p class="sinopse">Sinopse</p>
                    <router-link to="/addreview"><button class="btn btn-warning">Fazer uma review</button></router-link>
            </div>
            <div class="p-2">
                    <h4>Reviews</h4>
                    <hr>
                    <ReviewMinimizada />
                    <ReviewMinimizada />
                    <ReviewMinimizada />
                    <ReviewMinimizada />
            </div>
        </div>
    </div>
</template>
<style>
.filme-nome{
    font-weight: bolder;
}
</style>