<script setup lang="ts">
    import { ref } from 'vue'

    //

    const getStatus = ()=>{
        return (isOnline ? "online": "away");
    }

    
    const test = ()=>{
        return 'hello world';
    }

    //

    let isOnline = ref(true);
    let dp_btt = ref('Plus de contenu');
    let unLivre  = ref('Les mémoires de Steven Seagal');
    let unNombre = ref(8888);
    let unTableau = ref(["du texte", 99]);
    let unObjet = ref({"name":"COOL","tel":"060503030"});
    let ternaire = ref(getStatus());

    const chgStatus = ()=>{
       isOnline = !isOnline;
       ternaire.value = getStatus();
    }

    

    
</script>

<template>
    <section class="bg-base-100 p-4 w-75">
        
        <div class=" dropdown dropdown-center m-5">
            <summary class="btn" role="button">{{ dp_btt }}</summary>
            <ul class="menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>{{ unLivre }}</li>
                <li>{{ unNombre }}</li>
                <li>{{ unTableau }}</li>
                <li>{{ unTableau[0] }}</li>
                <li>{{ unObjet }}</li>
                <li>{{ unObjet.name }}</li>
                <li>{{ unObjet.tel }}</li>
                <li><div v-if="isOnline" class="bg-accent rounded-box z-1 w-52 p-2 shadow-sm" >{{ ternaire}}</div><div v-else class="bg-orange-600 rounded-box z-1 w-52 p-2 shadow-sm" >{{ ternaire}}</div></li>
                <li>{{ test()}}</li>
                <li><h1>Du HTML</h1></li>
            </ul>
        </div>
        
        <button class="btn btn-primary" @click="chgStatus">Click me !</button>
    </section>
</template>

