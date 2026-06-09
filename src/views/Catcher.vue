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

    //setInterval(($event)=>catcher($event),200);
</script>
<template>
    <main class="w-full h-full rounded-box bg-cyan-100 p-10 m-5" @keyup.esc="displayResult">
        <section class="bg-base-100 rounded-box p-5 m-3"><strong>Result : </strong><h3 > {{ typed }}</h3></section>
        <section class="glass flex flex-center bg-grey-100 rounded-box p-5 m-3"><strong class="m-auto">Type your text here =></strong><input class="bg-base-100 rounded-box p-2 m-3" @keyup="event=>catcher(event)"></section>
        <section class="bg-orange-100 rounded-box p-5 m-3"><strong>Result : {{ eventValue }}</strong></section>

    </main>
    
</template>