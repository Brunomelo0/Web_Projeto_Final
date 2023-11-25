<script setup>
import HeaderUser from '../components/HeaderUser.vue'
import PerfilStatus from '../components/PerfilStatus.vue'
import NavbarReviews from '../components/NavbarReviews.vue'
import ReviewCard from '../components/ReviewCard.vue'
</script>
<template>
    <HeaderUser />
    <div class="container p-3">
        <PerfilStatus />
        <NavbarReviews />
    </div>
    <div class="container">
        <div class="row row-cols-lg-4 row-cols-md-3 row-cols-2">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    </div>
</template>