<script setup>
import HeaderMod from '../components/HeaderMod.vue'
import PerfilModStatus from '../components/PerfilModStatus.vue'
</script>
<template>
    <HeaderModUser />
    <div class="container p-3">
        <HeaderMod />
        <PerfilModStatus />
    </div>
</template>
<style>
.username {
    font-weight: bolder;
}
</style>