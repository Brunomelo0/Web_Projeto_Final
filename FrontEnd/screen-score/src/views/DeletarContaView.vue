<script setup>
import HeaderUser from '../components/HeaderUser.vue'
</script>
<template>
    <HeaderUser />
    <div class="container">
        <h2>Deletar conta</h2>
        <hr/>
        <form>
            <div class="mb-3">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control w-25" id="senha">
            </div>
            <button type="submit" class="btn btn-warning">Deletar</button>
        </form>
    </div>
</template>