<script setup>
import HeaderUser from '../components/HeaderUser.vue'
import PerfilStatus from '../components/PerfilStatus.vue'
import NavbarPerfil from '../components/NavbarPerfil.vue'
</script>
<template>
    <HeaderUser />
    <div class="container p-3">
        <PerfilStatus />
        <NavbarPerfil />
    </div>
</template>
<style>
.username {
    font-weight: bolder;
}
</style>