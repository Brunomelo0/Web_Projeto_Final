<script setup>
import {RouterLink} from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
<template>
  <Header/>
  <div class="main">
      <router-view></router-view>
  </div>
  <Footer/>
</template>