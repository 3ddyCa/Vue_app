<script setup lang="ts">
import { ref } from 'vue';
let display = ref("c'est rien");
const textGenerator = () => { display.value = (Math.random() > 0.5 ? 'C\'est plus' : 'C\'est moins') };

</script>

<template setup>
    <section class="bg-base-500 shadow-sm flex-1 w-fit  rounded-box">
        <h2>Resultat : {{ display }}</h2>
    </section>
    <button class="btn btn-primary" @click="textGenerator()" >Click me !</button>
    
</template>

<style scoped>
</style>