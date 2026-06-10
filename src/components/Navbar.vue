<script setup lang="ts">
import { ref } from 'vue'
</script>

<template setup>
    <div class="navbar bg-base-500 shadow-sm">
    <div class="flex-1">
        <RouterLink class="btn btn-ghost text-3xl p-10 rounded-box bg-orange-100" to='/home'>CDA - Eddy Carbet</RouterLink>
    </div>
    <div class="flex-none dropdown dropdown-end">
        <button tabindex="0" class="btn btn-square btn-ghost" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
        </button>
        <ul tabindex="-1" class="dropdown-content  menu bg-base-100 p-2 shadow-sm bg-base-100 rounded-box">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><RouterLink to="/about">A propos</RouterLink></li>
            <li><RouterLink to="/utilisateur">utilisateur</RouterLink></li>
            <li><RouterLink to="/plusMoins">PlusMoins</RouterLink></li>
            <li><RouterLink to="/catcher">Evenements</RouterLink></li>
            <li><RouterLink to="/computed">Computing</RouterLink></li>
            <li><RouterLink to="/dynamicForm">DynamicForm</RouterLink></li>
            <li><RouterLink to="/watchList">WatchList</RouterLink></li>
            <li><RouterLink to="/componentLC">Component life cycle</RouterLink></li>
            <li><RouterLink to="/recap">Recap</RouterLink></li>
        </ul>
    </div>
    </div>
    
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