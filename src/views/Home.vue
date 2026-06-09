<script setup lang="ts">
import Affichage from '../components/Affichage.vue';
import AutreNom from '../components/AutreNom.vue';


</script>

<template>
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        <h1 class="text-lg">Bienvenue</h1>
        
        <section class="flex-1 w-full rounded-box bg-base-100 shadow-md">
            <h3>Exercice actuel : </h3>
            <Affichage />
        </section>
        
    </main>
</template>