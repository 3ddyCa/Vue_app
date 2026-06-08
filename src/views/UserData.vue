<script setup lang="ts">
    import { ref } from 'vue'
    let avatar = 'https://images-ext-1.discordapp.net/external/KtvtHjBVWCc-5IJxYF4a-8YkN0nDJ868SE57zyzX9qM/https/s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg?format=webp';
    let userName = 'Dr.Mario';
    let age = 32;
    const displayAge = (age:integer=1,plus:integer=0) => {
        return age+plus+' ans';
    }
    const nbFtich = ()=>{
        return Math.random();
    }
</script>

<template>
    <article class="card flex-1 m-auto w-100  z-1 bg-base-100 p-2 shadow-smrounded-box z-1 w-52 p-10">
        <div class="flex-1">
            <figure><img class=" flex-center w-100 m-auto rounded-full m-10
            " :src="avatar" alt="avatar"></figure>
            <label class="font-mono text-4xl" for="name">{{ userName }}</label>
            <input class="shadow-md m-5 p-2 w-64 rounded-box" id="name" type="text" :value="userName">
        </div>
        <div>
            <ul class="list shadow-md">
                <li class="btn btn-secondary w-75 m-auto p-5"><strong>Âge</strong> : <input type="fixed" :value="displayAge(age)"></li>
                <li class="btn btn-accent w-75 m-auto p-5"><strong>Âge + 10ans</strong> : <input type="fixed" :value="displayAge(age,10)"></li>
                <li class="btn btn-primary w-75 m-auto p-5"><strong>Nb fétiche</strong> : <input type="fixed" :value="nbFtich()"></li>
            </ul>
        </div>
        <div>

        </div>
    </article>
    
</template>