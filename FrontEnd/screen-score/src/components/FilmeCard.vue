<template>
    <div v-for="(filme, index) in filmes.slice(0, 5)" :key="index" class=" col filme">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                    dy=".3em">Foto</text>
            </svg>
            <div class="card-body">
                <p class="card-text">{{ filme.nome }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <router-link to="/filme"><button type="button" class="btn btn-warning">Ver</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        filmes: [],
      };
    },
    mounted() {
      this.fetchFilmesFromStrapi();
    },
    methods: {
      fetchFilmesFromStrapi() {
        fetch('http://localhost:1337/api/filmes/')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao buscar o filme');
            }
            return response.json();
          })
          .then(data => {
            console.log('dados:', data);
            this.filmes = data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
}
</script>