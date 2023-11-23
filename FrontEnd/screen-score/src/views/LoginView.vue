<script setup>
import {RouterLink} from 'vue-router'
import HeaderLogin from '../components/HeaderLogin.vue' 
</script>
<template>
    <HeaderLogin />
    <section class="area-login">
        <div class="login">
            <div>
                <img src="../assets/filme.png" alt="">
            </div>
            <form action="">
                <input type="text" name="nome" placeholder="Nome de usuário">
                <input type="password" name="senha" placeholder="Senha">
                <router-link to="/homeuser"><button type="submit" class="btn btn-warning">Entrar</button></router-link>                        
            </form>
            <p>Ainda não tem uma conta?<router-link to="/signup">Cadastre-se</router-link></p>
        </div>
    </section>
</template>
<style>
.area-login {
    display: flex;
    height: 50vh;
    justify-content: center;
    align-items: center;
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #181920;
    width: 450px;
    height: 370px;
    padding: 35px;
    border-radius: 8px;
}

.login form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
}

.login input {
    color: white;
    margin-top: 10px;
    background-color: #252A34;
    border: none;
    height: 45px;
    outline: none;
    border-radius: 8px;
    padding-left: 10px;
}

.login button{
    margin-top: 10px;
    border: none;
    height: 45px;
    outline: none;
    border-radius: 8px;
    padding-left: 10px;
    width: 100%;
}

.login img {
    padding-bottom: 10px;
}

.input::placeholder {
    color: white;
    font-size: 14px;
}</style>