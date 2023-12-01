<script setup>
import HeaderUser from '../components/HeaderUser.vue'
import Amigo from '../components/Amigo.vue'
import PerfilStatus from '../components/PerfilStatus.vue'
import NavbarAmigos from '../components/NavbarAmigos.vue';
</script>
<template>
    <!--Substituir Amigo colocados manualmente por uma estrutura de repeticao (v-for) q imprima os amigos do back-->
    <HeaderUser />
    <div class="container p-3">
        <PerfilStatus />
        <NavbarAmigos />
    </div>
    <div class="container">
        <h2>Seus amigos</h2>
        <hr />
        <div class="row">
            <Amigo />
            <Amigo />
            <Amigo />
            <Amigo />
            <Amigo />
            <Amigo />
        </div>
    </div>
</template>