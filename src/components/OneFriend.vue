<template>
    <div class="card w-full max-w-lg shadow-xl bg-blue-100 w-64 h-fit" >
   
        <div class="card-body">
            <div class="flex gap-2">
                <h5 class="card-title text-base-content">{{ nom }}</h5>
                <span v-if="status" class="btn btn-accent">Premium</span>
                <span v-else class="btn btn-base">Standard</span>
            </div>
            
            <ul class="flex-1 p-3 m-auto gap-2">
                <li class="opacity-80 rounded-box flex p-2 gap-3"><img class="bg-base-100 btn btn-primary" src="" alt="ID"><p class="text-base-content m-auto">{{ login }}</p></li>
                <li class="opacity-80 rounded-box flex p-2 gap-3"><img class="bg-base-100 btn btn-secondary" src="" alt="TEL"><p class="text-base-content m-auto">{{ tel }}</p></li>
                <li class="opacity-80 rounded-box flex p-2 gap-3"><img class="bg-base-100 btn btn-accent"  src="" alt="@"><p class="text-base-content m-auto">{{ mail }}</p></li>
            </ul>
        </div>

    </div>
</template>

<script setup lang='ts'>
//import { defineProps } from 'vue'


const props = defineProps({
     nom: {
        type: String,
        required: true,
        default:'login',
        validator: (value:string) => value.length < 255
    },   

    status: {
        type: Boolean,
        required: true,
        default:false,
        validator:(value:string) => value.length < 255
    },
    login: {
        type: String,
        required: true,
        default:'login',
        validator: (value:string) => value.length < 255
    },
    tel: {
        type: String,
        required: true,
        default:'06++',
        validator: (value:string) => value.length < 255
    },
    mail: {
        type: String,
        required: true,
        default: '',
        validator: (value:string) => value.length < 255
    }
});
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>