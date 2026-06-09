<script setup lang="ts">
    import { ref,computed,watch } from 'vue';
    let userName = ref('nope');
    let number:any = [];
    number[0] = ref(0);
    number[1] = ref(0);
    let isSet = false;
    let message = ref('essayez encore !');

    const affichage = computed(() => {
        console.log('affichage !')
        userName.value = (number.value%2 == 0 ? 'Dana' : 'Jonathan');
    });

    const chgCounter = (index:number , $type:boolean, amount:number=1)=>{
        ($type ? number[index].value = number[index].value+amount : number[index].value = number[index].value-amount);
        
    }

    watch(number[0], (val)=>{
        val%7 != 0 ?(val%2 == 0 ? userName.value='Dana' : userName.value='Jonathan'):userName.value="roberto!!!";
        affichage;
    })

    watch(number[1], (val)=>{
        val==7?message.value ='bravo !!!':message.value ='essayez encore !';
        if(!isSet){
            isSet = true;
            setTimeout(()=>{number[1].value = 0 ; isSet = false; message.value = "Reset"}, 3000)
        }
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
                <button class="btn btn-accent" @click="chgCounter(0,false,10)">--</button>
                <button class="btn btn-primary" @click="chgCounter(0,false)">-</button>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50"> {{ number[0] }} </strong>
                <button class="btn btn-accent" @click="chgCounter(0,true)">+</button>
                <button class="btn btn-accent" @click="chgCounter(0,true,10)">++</button>
            </div>
        </section>

        <section class="h-72 w-full">
            <div class="dropdown dropdown-start m-5 flex-none w-50 m-auto">
                <summary class="p-2 btn btn-primary" tabindex="0">Nombre mystère</summary>
                <article tabindex="-1" class="menu dropdown-content m-2 gap-5 p-5 w-full m-auto bg-base-100">
                    <section class=" flex-1 m-2 gap-4  m-auto bg-base-100 shadow-md bg-base-50 p-5 rounded-box">
                        <p class="m-auto rounded-box bg-base-50 p-2">Le nombre :</p>
                        <strong class="m-auto rounded-box px-4 shadow-md bg-orange-50 p-2"> {{ number[1] }} </strong>
                        
                    </section>
                    <strong class=" text-2xl c-secondary m-auto">{{ message }}</strong> 
                    <section class="flex m-2 gap-5 p-5 m-auto">
                        <button class="btn btn-accent" @click="chgCounter(1,true)">+1</button>
                        <button class="btn btn-secondary" @click="chgCounter(1,true,5)">+5</button>
                    </section>

                </article>
            </div>
        </section>
    </main>

</template>