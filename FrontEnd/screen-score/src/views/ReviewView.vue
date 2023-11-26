<script setup>
import HeaderUser from '../components/HeaderUser.vue'
import Review from '../components/Review.vue'
</script>
<template>
    <HeaderUser />
    <Review />
    <div class="container">
        <div class="d-flex flex-column mb-3">
            <div class="p-2 editar-review">
                <router-link to="/addreview"><button class="btn btn-warning">Editar review</button></router-link>
            </div>
            <div class="p-2 excluir-review">
                <button class="btn btn-danger">Excluir review</button>
            </div>
        </div>
    </div>
</template>