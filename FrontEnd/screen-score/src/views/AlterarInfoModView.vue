<script setup>
import HeaderMod from '../components/HeaderMod.vue'
</script>
<template>
    <HeaderMod />
    <div class="container p-3">
        <h2>Informações da conta</h2>
        <hr />
        <h4>Nome de usuário:</h4>
        <h5 class="username">Username</h5>
        <div class="btn-group dropend">
            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Alterar
            </button>
            <ul class="dropdown-menu">
                <li>
                    <form class="alterar-nome">
                        <div class="mb-3">
                            <label for="novoNome" class="form-label">Novo nome</label>
                            <input type="text" class="form-control" id="novoNome" aria-describedby="nomeHelp">
                            <button type="submit" class="btn btn-primary">Alterar</button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
        <hr />
        <h4>Senha:</h4>
        <h5 class="senha">senhaexample</h5>
        <div class="btn-group dropend">
            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Alterar
            </button>
            <ul class="dropdown-menu">
                <li>
                    <form class="alterar-senha">
                        <div class="mb-3">
                            <label for="novaSenha" class="form-label">Nova senha</label>
                            <input type="password" class="form-control" id="novaSenha" aria-describedby="senhaHelp">
                            <button type="submit" class="btn btn-primary">Alterar</button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
h5{
    font-weight: bolder;
}
</style>