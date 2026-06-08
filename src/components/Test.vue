<script setup lang="js">
import { ref } from 'vue'

let welcome = ref('Welcome !');
</script>

<template setup>
    <h2>{{ welcome }}</h2>
</template>

<style scoped>
    template{
        display:flex;
        justify-content:center;
    }
   h2{ 

    background-color:rgb(100, 161, 208);
    padding:2em;
    width:75vw;
    border-radius:2em;
   }
</style>