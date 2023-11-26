<script setup>
import SerieCardUser from './SerieCardUser.vue'
</script>
<template>
    <main>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Séries</h1>
                </div>
            </div>
        </section>
        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="drama-series pb-5">
                    <h2>Drama</h2>
                    <hr />
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3">

                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />

                    </div>
                </div>
                <div class="terror-series pb-5">
                    <h2>Terror</h2>
                    <hr />
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3">

                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />

                    </div>
                </div>
                <div class="comedia-series pb-5">
                    <h2>Comédia</h2>
                    <hr />
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3">

                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />


                    </div>
                </div>
                <div class="suspense-series pb-5">
                    <h2>Suspense</h2>
                    <hr />
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3">

                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />
                        <SerieCardUser />

                    </div>
                </div>
            </div>
        </div>

    </main>
</template>