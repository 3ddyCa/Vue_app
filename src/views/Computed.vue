<script setup lang="ts">
    import { ref,computed,watch } from 'vue';
    let userName = ref('nope');
    let number:any = [];
    number[0] = ref(0);
    number[1] = ref(0);
    let selectCarde:any = [];
    selectCarde[0] = ref(false);
    selectCarde[1] = ref(false);
    selectCarde[2] = ref(false);
    selectCarde[3] = ref(false);
    selectCarde[4] = ref(false);
    selectCarde[5] = ref(false);
    selectCarde[6] = ref(false);
    selectCarde[7] = ref(false);
    let selectCard:any = [];
    let uneCard = ref(0);
    let version = ref(0);
    selectCard[0] = ref(false);
    selectCard[1] = ref(false);
    selectCard[2] = ref(false);
    selectCard[3] = ref(false);
    let isSet = false;
    let isWin = ref(false);

    let message = ref('Ajoutez un montant au bingo !');

    const affichage = computed(() => {
        console.log('affichage !')
        userName.value = (number.value%2 == 0 ? 'Dana' : 'Jonathan');
    });

    const chgCounter = (index:number , $type:boolean, amount:number=1)=>{
        ($type ? number[index].value = number[index].value+amount : number[index].value = number[index].value-amount);
        
    }
    const chgBtt = (index:number)=>{
        selectCard[index].value = !selectCard[index].value;
        console.log('selectCard '+index+' is '+selectCard[index].value)
        console.log('uneCard '+index+(selectCard[index].value?' selectionnée ':' déselectionnée'))
        
    }

    const selectionCard = (index:number)=>{
        selectCarde.forEach(element=>{
            element.value=false;
        })
        if(selectCarde[index].value){
            selectCarde[index].value = false;
        }else{
            selectCarde[index].value = true;
        }
        uneCard.value = index;
        //console.log('selectCarde '+index+' is '+selectCarde[index].value)
        console.log('uneCard '+index+(selectCarde[index].value?' selectionnée ':' déselectionnée'))
    }

    const getState = (index:number)=>{
        return [selectCarde[index].value, (selectCarde[index].value?false:true) ]
    }

    watch(number[0], (val)=>{
        val%7 != 0 ?(val%2 == 0 ? userName.value='Dana' : userName.value='Jonathan'):userName.value="roberto!!!";
        affichage;
    })

    watch(number[1], (val)=>{

        switch(true){
            case val == 0 :
                message.value ='Ajoutez un montant au bingo !'
                break;
            case val < 7 :
                message.value ='essayez encore !'
                break;
            case val == 7 :
                message.value ='bravo !!!'
                isWin.value = true;
                break;
            case val > 30 :
                message.value ='oulalah, beaucoup trop !'
                break;
            default :
                message.value ='c\'est trop !'
        }

        if(!isSet){
            isSet = true;
            setTimeout(()=>{number[1].value = 0 ; isSet = false; message.value = "Reset";isWin.value = false;}, 10000)
        }
    })

</script>
<template>
    <main class="w-full h-full flex-1 px-20" >
        <section class="menu bg-base-100 rounded-box w-200 p-2 h-fit shadow-sm m-auto ">
            <div class="flex-1 gap-10 p-5 m-auto w-fit">
                <strong class="m-auto p-2 x-4">Computed bug : Exercice 5</strong>
                <strong class=" rounded-box p-2 px-4 shadow-md bg-orange-50 m-auto" > Utilisateur connecté (fonction affichage()) :  {{ userName }} </strong>
            </div>
            <div class="flex m-2 gap-5 p-5 m-auto">
                <button class="btn btn-accent" @click="chgCounter(0,false,10)">--</button>
                <button class="btn btn-primary" @click="chgCounter(0,false)">-</button>
                <strong class="m-auto rounded-box p-2 px-4 shadow-md bg-orange-50"> {{ number[0] }} </strong>
                <button class="btn btn-accent" @click="chgCounter(0,true)">+</button>
                <button class="btn btn-accent" @click="chgCounter(0,true,10)">++</button>
            </div>
        </section>

        <section class="h-30 w-full">
            <div class="dropdown dropdown-start m-5 flex-none w-50 m-auto">
                <summary class="p-2 btn btn-primary" tabindex="0">Nombre mystère</summary>
                <article tabindex="-1" class="menu dropdown-content m-2 gap-5 p-5 w-full m-auto bg-base-100">
                    <section class="glass flex-1  gap-4  m-auto my-2 bg-base-100 shadow-md p-5 h-fit w-full rounded-box">
                        <p class="m-auto rounded-box bg-base-50 p-2">Le nombre :</p>
                        <strong class="m-auto rounded-box px-4 text-3xl text-primary shadow-md bg-orange-50 p-2"> {{ number[1] }} </strong>
                        
                    </section>
                    <img class="m-auto text-warning" v-if="isWin" src="" alt="\(*____*)/">
                    <strong class=" text-2xl text-secondary  m-auto">{{ message }}</strong> 
                    <section class="flex m-2 gap-5 p-5 m-auto">
                        <button class="btn btn-accent" @click="chgCounter(1,true)">+1</button>
                        <button class="btn btn-secondary" @click="chgCounter(1,true,5)">+5</button>
                    </section>

                </article>
            </div>
        </section>
        <section class="h-30 w-full">
            <div class="dropdown dropdown-start m-5 gap-2 flex-none w-50 m-auto">
                <summary class="p-2 btn btn-primary" tabindex="0">SelectCard</summary>
                <button class="btn btn-secondary" @click="(version < 2?version++:version = 0)">version {{ version }}</button>
                <article v-if="version == 0" tabindex="-1" class=" glass rounded-box menu dropdown-content m-2 gap-5 p-5 w-full m-auto bg-base-100">
                    <p>Version avec un v-if :</p>
                    <button  class="w-fit h-fit" @click="chgBtt(0)"><h3 v-if="selectCard[0].value" class="btn btn-accent">Click me !</h3 ><h3 v-else class="btn btn-warning">Click me !</h3 ></button>
                    <button  class="w-fit h-fit" @click="chgBtt(1)"><h3 v-if="selectCard[1].value" class="btn btn-accent">Click me !</h3 ><h3 v-else class="btn btn-warning">Click me !</h3 ></button>
                    <button  class="w-fit h-fit" @click="chgBtt(2)"><h3 v-if="selectCard[2].value" class="btn btn-accent">Click me !</h3 ><h3 v-else class="btn btn-warning">Click me !</h3 ></button>
                    <button  class="w-fit h-fit" @click="chgBtt(3)"><h3 v-if="selectCard[3].value" class="btn btn-accent">Click me !</h3 ><h3 v-else class="btn btn-warning">Click me !</h3 ></button>
                </article>
                <article v-else-if="version == 1" tabindex="-1" class=" glass rounded-box menu dropdown-content m-2 gap-5 p-5 w-full m-auto bg-base-100">
                    <p>version avec fonction et condition ternaire sur bind de style : </p>
                    <div>
                        <button  class="w-fit h-fit btn p-2 rounded-box" @click="selectionCard(0)"  :style="{backgroundColor : (selectCarde[0].value ? 'blue' : 'red')}">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box" @click="selectionCard(1)"  :style="{backgroundColor : (selectCarde[1].value ? 'green' : 'violet')}">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box" @click="selectionCard(2)"  :style="{backgroundColor : (selectCarde[2].value ? 'chartreuse' : 'tomato')}">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box" @click="selectionCard(3)"  :style="{backgroundColor : (selectCarde[3].value ? 'lightblue' : 'cyan')}">Click me !</button>
                    </div> 
                                       
                    
                </article>
                <article v-else-if="version == 2" tabindex="-1" class=" glass rounded-box menu dropdown-content m-2 gap-5 p-5 w-full m-auto bg-base-100">
                    <p>Version avec fonction et bind sur classe</p>
                        <button  class="w-fit h-fit btn p-2 rounded-box btn " @click="selectionCard(4)"  :class="{'btn-accent' : getState(4)[0] , 'btn-secondary' : getState(4)[1] }">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box btn " @click="selectionCard(5)"  :class="{'btn-accent' : getState(5)[0] , 'btn-secondary' : getState(5)[1] }">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box btn " @click="selectionCard(6)"  :class="{'btn-accent' : getState(6)[0] , 'btn-secondary' : getState(6)[1] }">Click me !</button>
                        <button  class="w-fit h-fit btn p-2 rounded-box btn " @click="selectionCard(7)"  :class="{'btn-accent' : getState(7)[0] , 'btn-secondary' : getState(7)[1] }">Click me !</button>

                </article>
            </div>
        </section>
    </main>

</template>