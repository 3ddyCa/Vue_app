<script setup lang="ts">
import { ref } from 'vue';
let display = ref(0);
const textGenerator = () => { display.value = (Math.random() > 0.5 ? 'C\'est plus' : 'C\'est moins') };
const sub = ()=>{
    display.value--;
}
const add = ()=>{
    display.value++;
}

</script>

<template setup>
    <main class="h-14 bg-linear-to-r from-orange-500 to-red-500 h-full p-12">
        <section class="flex glass align bg-base-500 shadow-sm w-fit p-10 rounded-box m-auto" >
            <button class="btn btn-warning" @click="sub()" >Click me !</button>
            <h2 class="text-3xl m-10">Resultat : {{ display }}</h2>
            <button class="btn btn-accent" @click="add()" >Click me !</button>
        </section>

    </main>
    
    
    
</template>

<style scoped>
</style>