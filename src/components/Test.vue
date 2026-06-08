<script setup lang="js">
import { ref } from 'vue'

let text = ref((Math.random()>0.5?'C\'est plus':'C\'est moint'));
</script>

<template setup>
    <section class="bg-base-500 shadow-sm flex-1 w-full  rounded-box">
        <h2>Resultat : {{ text }}</h2>
    </section>
    
</template>

<style scoped>
</style>