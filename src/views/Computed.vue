<script setup lang="ts">
    import { ref,computed } from 'vue';
    let userName = ref('nope');
    let number = ref(0);

    const affichage = computed(() => {
        console.log('affichage !')
        return userName.value = (number.value%2 == 0 ? 'Dana' : 'Jonathan');
    });

    const chgCounter = ($type:boolean, amount:number=1)=>{
        ($type?number.value = number.value+amount:number.value = number.value-amount);
    }


</script>
<template>
    <main class="w-full h-full flex-1 px-20">
        <section class="menu bg-base-100 rounded-box z-1 w-200 p-2 h-fit shadow-sm m-auto">
            <div class="flex-1 gap-5 p-5 m-auto w-fit">
                <strong class="m-auto p-2 x-4">Computed bug : Exercice 5</strong>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50" > Utilisateur connecté (fonction affichage()) :  {{ affichage }} </strong>
            </div>
            <div class="flex m-2 gap-5 p-5 m-auto">
                <button class="btn btn-primary" @click="chgCounter(false,10)">--</button>
                <button class="btn btn-primary" @click="chgCounter(false)">-</button>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50"> {{ number }} </strong>
                <button class="btn btn-accent" @click="chgCounter(true)">+</button>
                <button class="btn btn-accent" @click="chgCounter(true,10)">++</button>
            </div>
        </section>
    </main>

</template>