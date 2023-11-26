<script setup>
import HeaderMod from '../components/HeaderMod.vue'
import ReviewMinimizadaMod from '../components/ReviewMinimizadaMod.vue';
</script>
<template>
    <HeaderMod />
    <div class="container p-3">
        <div class="d-flex flex-column mb-3">
            <div class="p-2">
                <div class="card mb-3">
                    <img src="../assets/drive.jpg" class="card-img-top filme-capa" alt="...">
                </div>
            </div>
            <div class="p-2">
                    <h3 class="filme-nome">Nome do filme</h3>
                    <p class="data">Data de lançamento</p>
                    <p class="diretor">Directed by: Diretor</p>
                    <p class="sinopse">Sinopse</p>
            </div>
            <div class="p-2">
                    <h4>Reviews</h4>
                    <hr>
                    <ReviewMinimizadaMod />
                    <ReviewMinimizadaMod />
                    <ReviewMinimizadaMod />
                    <ReviewMinimizadamod />
            </div>
        </div>
    </div>
</template>
<style>
.filme-nome{
    font-weight: bolder;
}
</style>