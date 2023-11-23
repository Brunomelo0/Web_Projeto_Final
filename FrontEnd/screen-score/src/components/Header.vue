<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white"><img src="../assets/home.png" alt=""></router-link>
          </li>
          <li><router-link to="/filmes" class="nav-link px-2 text-white">Filmes</router-link></li>
          <li><router-link to="/series" class="nav-link px-2 text-white">Séries</router-link></li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
            aria-label="Search">
        </form>
        <div class="text-end">
          <router-link to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></router-link>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </div>
</template>