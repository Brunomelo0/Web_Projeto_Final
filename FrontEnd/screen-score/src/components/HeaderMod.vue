<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><router-link to="homemod" class="nav-link px-2 text-white"><img src="../assets/home.png"
                                alt=""></router-link>
                    </li>
                    <li><router-link to="/filmesmod" class="nav-link px-2 text-white">Filmes</router-link></li>
                    <li><router-link to="/seriesmod" class="nav-link px-2 text-white">Séries</router-link></li>
                    <li></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form>

                <div class="text-end d-flex flex-wrap">
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            UserName
                        </button>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/perfilmod">Perfil</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item" to="/">Sair</router-link></li>
                        </ul>
                    </div>

                    <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                        </div>
                        <div class="offcanvas-body">
                            <div class="dropend mt-3 text-start">
                                <button class="btn btn-warning dropdown-toggle w-50" type="button"
                                    data-bs-toggle="dropdown">
                                    Conta e Privacidade
                                </button>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="alterarinfomod">Alterar
                                            informações</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="deletarcontamod">Deletar conta</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-start mt-3">
                                <router-link to="/"><button type="button"
                                        class="btn btn-secondary w-50">Sair</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.addReviewButton {
    border-radius: 20px;
}

.addReviewSection {
    padding-right: 15px;
}</style>