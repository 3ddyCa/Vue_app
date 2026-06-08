<script setup lang="ts">
import { ref } from 'vue';

let textGenerator = () => { return Math.random() > 0.5 ? 'C\'est plus' : 'C\'est moins' };
</script>

<template setup>
    <section class="bg-base-500 shadow-sm flex-1 w-full  rounded-box">
        <h2>Resultat : {{ textGenerator() }}</h2>
    </section>
    
</template>

<style scoped>
</style>