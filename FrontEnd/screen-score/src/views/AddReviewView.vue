<script setup>
import HeaderUser from '../components/HeaderUser.vue'
</script>
<template>
    <HeaderUser />
    <div class="container p-3">
        <form>
            <div class="mb-3">
                <label for="nomeFilmeSerie" class="form-label">Nome do filme/serie</label>
                <input type="text" class="form-control" id="nomeFilmeSerie">
            </div>
            <div class="mb-3">
                <label for="reviewText" class="form-label">Review</label>
                <textarea class="form-control" id="reviewText" rows="3"></textarea>
            </div>
            <h6>Nota</h6>
            <div class="form-check form-check-inline nota">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                <label class="form-check-label" for="inlineRadio3">3</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3">
                <label class="form-check-label" for="inlineRadio4">4</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option3">
                <label class="form-check-label" for="inlineRadio5">5</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option3">
                <label class="form-check-label" for="inlineRadio6">6</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option3">
                <label class="form-check-label" for="inlineRadio7">7</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option3">
                <label class="form-check-label" for="inlineRadio8">8</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option3">
                <label class="form-check-label" for="inlineRadio9">9</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option3">
                <label class="form-check-label" for="inlineRadio10">10</label>
            </div>
            <button type="submit" class="btn btn-warning">Enviar</button>
        </form>
    </div>
</template>