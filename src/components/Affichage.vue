<script setup lang="js">
    import { ref } from 'vue'
    let isOnline = true;
    let titre = ref('Un titre');
    let unLivre  = ref('Les mémoires de Steven Seagal');
    let unNombre = ref(8888);
    let unTableau = ref(["du texte", 99]);
    let unObjet = ref({"name":"COOL","tel":"060503030"});
    let ternaire = ref((isOnline?"it is": "it isn't"));
    function test(){
        return 'hello world';
    }
</script>

<template>
    <section>
        <h1>{{ titre }}</h1>
        <ul>
            <li>{{ unLivre }}</li>
            <li>{{ unNombre }}</li>
            <li>{{ unTableau }}</li>
            <li>{{ unTableau[0] }}</li>
            <li>{{ unObjet }}</li>
            <li>{{ unObjet.name }}</li>
            <li>{{ unObjet.tel }}</li>
            <li>{{ ternaire}}</li>
            <li>{{ test()}}</li>
            <h1>Du HTML</h1>
        </ul>
        <button onclick={function(){ref(!isIt)}}>Click me !</button>
    </section>
</template>

<style>
</style>