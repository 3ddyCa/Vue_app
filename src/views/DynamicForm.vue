<script setup lang="ts">
    import { ref,computed,watch } from 'vue';
import { M } from 'vue-router/dist/index-BQLwgiyK.js';
//field.s
const field = {
    login : ref('...'),
    mail : ref('...'),
    fname : ref('...'),
    lname : ref('...'),
    adress : ref('...'),
    mdp : ref('...'),
    rmdp : ref('...'),
    
}
let show = ref(false)
let styleColor = ref('red');
let styleClasse = ref('Hello');
let affichage = ref('Hello World');

const displayfield = computed(()=>{
    affichage.value = `
        Login : ${field.login.value}
        Email : ${field.mail.value}
        Prénom : ${field.fname.value}
        Nom : ${field.lname.value}
        Adresse : ${field.adress.value}
        Mot de passe : ${field.mdp.value}
        Validation du Mdp : ${field.rmdp.value}
    `;
})

const inputfbhv = (e:any)=>{
    console.log(e);
    e.target.value = "";
}


</script>
<template>
    <main>
        <form class="form card flex-1 m-20 my-10 z-1 bg-orange-100 shadow-sm rounded-box p-10 gap-5">
            <section class="menu bg-base-100 rounded-box w-100 h-60  p-2 h-fit shadow-sm m-auto ">
                <fieldset class="p-5 rounded-box">
                    <legend class="text-xl">affichage</legend>
                    <p v-if="show" class="p-2 rounded-box" :style="{backgroundColor : styleColor }" :class="{Hello : (styleClasse == 'Hello'? true: false),World : (styleClasse == 'World'? true: false)}">
                    {{ affichage }}
                    </p>
                    <p v-else>
                        Rien à afficher
                    </p>
                </fieldset>
            </section>
            <section class="menu bg-base-100 rounded-box p-5 h-fit shadow-sm m-auto gap-5 w-100">
                <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                    <label for="login">Login</label>
                    <input class="" id="login" name="login" type="text" v-model="field.login.value" @click="inputfbhv($event)">
                </div>
                <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="text" v-model="field.mail.value" @click="inputfbhv($event)">
                </div> 
                <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                    <label for="Fname">Prénom</label>
                    <input id="Fname" name="Fname" type="text" v-model="field.fname.value" @click="inputfbhv($event)">
                </div>
                <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                    <label for="Lname">Nom</label>
                    <input id="Lname" name="Lname" type="text" v-model="field.lname.value" @click="inputfbhv($event)">
                </div>
                <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                    <label for="adress">Adresse</label>
                    <input id="adress" name="adress" type="text" v-model="field.adress.value" @click="inputfbhv($event)">
                </div>
                <fieldset class="p-5 rounded-box w-full">
                    <legend>Confirmez votre mot de passe</legend>
                    <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                        <label for="mdp">Mot de passe</label>
                        <input id="mdp" name="mdp" type="text" v-model="field.mdp.value" @click="inputfbhv($event)">
                    </div>
                    
                    <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                        <label for="rmdp">Confirmer</label>
                        <input id="rmdp" name="rmdp" type="text" v-model="field.rmdp.value" @click="inputfbhv($event)">
                    </div>
                </fieldset>
                <fieldset class="p-5 rounded-box w-full">
                    <legend class="text-xl">Entrez le style du texte</legend>
                    <div class="bg-base-100 rounded-box gap-2 h-fit shadow-sm btn btn-accent w-full flex-1">
                        <label  for="styleColor">couleur</label>
                        <input class="w-full" id="styleColor" name="styleColor" type="text" v-model="styleColor">
                        <label for="styleClasse">classe</label>
                        <input class="w-full " id="styleClasse" name="styleClasse" type="text" v-model="styleClasse">
                    </div>
                </fieldset>
                <fieldset class="p-5 rounded-box flex-1 gap-5 w-full">
                    <legend class="text-xl">Validez l'affichage</legend>
                    <div class="bg-base-100 rounded-box p-2 h-fit w-full gap-10 flex">
                        <section class="m-auto p-2 h-fit w-full gap-3 flex">
                            <label for="remember">Afficher</label>
                            <input id="remember" name="remember" type="checkbox"  v-model="show" >
                        </section>
                        
                        <button class="btn btn-secondary" @click.prevent="displayfield">Envoyer</button>
                    </div>
                </fieldset>
            </section>
        
        </form>
    </main>
</template>

<style>
    .Hello{
        font-family :'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight:800;
        font-size:0.8rem;
    }
    .World{
        font-family :'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight:300;
        font-size:1.2rem;
    }
</style>