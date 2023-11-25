<script>
import {RouterLink} from 'vue-router'
</script>
<template>
    <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link"  to="/perfil">Perfil</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" to="/reviews">Reviews</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/amigos">Amigos</router-link>
            </li>
    </ul>
</template>