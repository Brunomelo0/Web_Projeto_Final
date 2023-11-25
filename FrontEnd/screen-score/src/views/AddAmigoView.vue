<script setup>
import HeaderUser from '../components/HeaderUser.vue'
</script>
<template>
    <HeaderUser />
    <div class="container p-3">
        <form>
        <div class="mb-3">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="form-control w-50" id="inputName" aria-describedby="nameHelp">
            <div id="nameHelp" class="form-text">Digite o nome de usuário</div>
        </div>
        <button type="submit" class="btn btn-warning">Adicionar</button>
    </form>
    </div>
</template>