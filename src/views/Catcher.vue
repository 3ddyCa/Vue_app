<script setup lang="ts">
    import { ref } from 'vue';

    let eventValue = ref({name : "",type : "", target : "", x: "", y : ""});
    let typed = ref("");
     let typedTemp = ref("");
    const catcher = (input)=>{
        console.log('event');
       
        const obj = input;
        eventValue.value = {name: obj.target.tagName,type: obj.inputType,target : obj.target, x : obj.clientX, y : obj.clientY};
        console.log(input);
        console.log('updated typedTemp : '+typedTemp)
        typedTemp.value = `${typedTemp.value}${obj.key!='Escape'?obj.key:""}`;
        
   
    }

    const displayResult = ()=>{
        typed.value = "";
        typed.value = typedTemp.value ;
        alert('Affichage mis à jour !')
    }

    let test = ref('test');


    //setInterval(($event)=>catcher($event),200);
</script>
<template>
    <main class="w-full h-full rounded-box bg-cyan-100 p-10 m-5" @keyup.esc="displayResult">
        <section class="bg-base-100 flex rounded-box p-5 m-auto gap-2"><strong>Result : </strong>
            <h3 class="m-1 flex-1 btn btn-secondary w-fit h-30 m-auto" > v-on (press escape): {{ typed }}</h3>
            <h3 class="m-1 flex-1 btn btn-secondary w-fit h-30 m-auto"> v-model: {{ test }}</h3>
        </section>
        <section class="glass flex flex-center bg-grey-100 rounded-box p-5 m-3 gap-2">
            <strong class="m-auto">Type your text here</strong><img class="m-auto" src="" alt="=>">
            <input class="bg-base-100 rounded-box p-2 " @keyup="event=>catcher(event)">
            <input class="bg-base-100 rounded-box p-2 " v-model="test" @keyup="console.log(test)">
        </section>
        <section class="bg-orange-100 rounded-box p-5 m-3"><strong>Target Event : {{ eventValue }}</strong></section>

    </main>
    
</template>