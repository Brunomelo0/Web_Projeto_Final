<template>
    <div class="bg-body-tertiary py-5">
    <div class="container">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="true">
        <div class="carousel-inner">
          <!--Trocar as imagens locais por imagens do banco-->
          <div class="carousel-item">
            <img src="../assets/pulpfiction.jpeg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/donniedarko.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/drive.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item active">
            <img src="../assets/babydriver.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
img {
  border-radius: 8px;
  border: none;
}
</style>