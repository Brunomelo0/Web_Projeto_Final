<template>
    <div class="row">
            <div class="col d-flex justify-content-between align-items-center">
                <div class="col d-flex justify-content-start align-items-center p-2">
                    <img class="rounded-circle bg-body-tertiary fotoperfil" src="../assets/perfil.png" alt="">
                    <div class="d-flex flex-column mb-3 p-3">
                        <h3 class="username p-2">UserName</h3>
                        <router-link to="/alterarinfomod"><button type="button" class="btn btn-warning btn-sm w-75 p-2 editar-perfil">Editar Perfil</button></router-link>
                    </div>
                </div>
                <div class="col p-2">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">0 Reviews</li>
                        <li class="list-group-item">0 Seguindo</li>
                        <li class="list-group-item">0 Seguidores</li>
                    </ul>
                </div>
            </div>
        </div>
</template>