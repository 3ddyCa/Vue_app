<script setup lang="ts">
    import { ref,computed,watch } from 'vue';
    let userName = ref('nope');
    let number:any = [];
    number[0] = ref(0);
    number[1] = ref(0);
    let message = ref('essayez encore !');

    const affichage = computed(() => {
        console.log('affichage !')
        userName.value = (number.value%2 == 0 ? 'Dana' : 'Jonathan');
    });

    const chgCounter = (index:number , $type:boolean, amount:number=1)=>{
        ($type?number[index].value = number[index].value+amount:number[index].value = number[index].value-amount);
        
    }

    watch(number[0], (val)=>{
        val%7 != 0 ?(val%2 == 0 ? userName.value='Dana' : userName.value='Jonathan'):userName.value="roberto!!!";
        affichage;
    })

    watch(number[1], (val)=>{
        val==7?message.value ='bravo !!!':message.value ='essayez encore !';
    })

</script>
<template>
    <main class="w-full h-full flex-1 px-20" >
        <section class="menu bg-base-100 rounded-box z-1 w-200 p-2 h-fit shadow-sm m-auto ">
            <div class="flex-1 gap-5 p-5 m-auto w-fit">
                <strong class="m-auto p-2 x-4">Computed bug : Exercice 5</strong>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50" > Utilisateur connecté (fonction affichage()) :  {{ userName }} </strong>
            </div>
            <div class="flex m-2 gap-5 p-5 m-auto">
                <button class="btn btn-primary" @click="chgCounter(0,false,10)">--</button>
                <button class="btn btn-primary" @click="chgCounter(0,false)">-</button>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50"> {{ number[0] }} </strong>
                <button class="btn btn-accent" @click="chgCounter(0,true)">+</button>
                <button class="btn btn-accent" @click="chgCounter(0,true,10)">++</button>
            </div>
        </section>

        <section>
            <div class="dropdown dropdown-start m-5 flex-none">
                <summary class="p-5 btn btn-primary" tabindex="0">Nombre mystère</summary>
                <div tabindex="-1" class="dropdown-content m-2 gap-5 p-5 m-auto bg-base-100">
                    <strong class="m-4">{{ message }}</strong>
                    <div class=" flex m-2 gap-5  m-auto bg-base-100">
                        <button class="btn btn-primary" @click="chgCounter(1,false,10)">--</button>
                        <button class="btn btn-primary" @click="chgCounter(1,false)">-</button>
                        <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50"> {{ number[1] }} </strong>
                        <button class="btn btn-accent" @click="chgCounter(1,true)">+</button>
                        <button class="btn btn-accent" @click="chgCounter(1,true,10)">++</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>