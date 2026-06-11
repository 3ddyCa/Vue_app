<script setup lang="ts">
import {ref,computed,watch,onMounted  } from "vue";
import OneFriend from '../components/OneFriend.vue';
const message = ref('Pas de changement effectué')

interface Ami{
     id: string,
    name: string,
    phone: string,
    email: string,
    premium: boolean
}
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: false
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'ok',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'GUS',
        name: "GussDX",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);

const tempAmi = ref({
    id:"",
    name: "",
    phone: '',
    email: '',
    premium: false
});
const isForm = ref(false);

const parentUpdatePremium = (status:any, id:any)=>{
    const pick = lesAmis.value.find((element)=>element.id == id);
    console.log("found : ",pick);
    lesAmis.value[lesAmis.value.indexOf(pick)].premium = status;
    chgMessage(status, id);
}

const chgMessage = (status:any, id:any )=>{
    console.log('Infos d\'emit : ',status.value+' | '+id)
    message.value = 'Changement effectué !';
}

const popAddFriendForm = computed(()=>{
    isForm.value = !isForm.value;
})

const AddFriend = (friend:any)=>{
    console.log('Update : ',tempAmi.value)
    lesAmis.value.push(tempAmi.value);
}

const parentDeleteUser = (id:string)=>{
    const pick = lesAmis.value.find((element)=>element.id == id);
    lesAmis.value.splice(lesAmis.value.indexOf(pick),1)
}

const inputfbhv = (e:any)=>{
    console.log(e);
    e.target.value = "";
}

</script>
<template>
    <main class="w-full">
        <section class="bg-base-100 p-4 w-fit">
            <p class="text-xl">Contenu du tableau</p>
            <div class="grid grid-cols-4 p-5 w-fit gap-2" >
                <div class=" bg-blue-100 p-1 w-45" v-for="(element,index) in lesAmis" :key="index">{{ element }}</div>
            </div>
            <div class="p-10 bg-base-100 grid rounded-box m-10 gap-2" >
                <section v-if="isForm">

                     <form class="form card flex-1 m-20 my-10 z-1 bg-orange-100 shadow-sm rounded-box p-10 gap-5">
                        <section class="menu bg-base-100 rounded-box w-100 h-60  p-2 h-fit shadow-sm m-auto ">
                            <fieldset class="p-5 rounded-box">
                                <legend class="text-2xl m-auto">Ajouter un ami</legend>
                            </fieldset>
                        </section>
                        <section class="menu bg-base-100 rounded-box p-5 h-fit shadow-sm m-auto gap-5 w-100">
                            <fieldset>
                            <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                                <label for="login">Login</label>
                                <input class="" id="login" name="login" type="text" v-model="tempAmi.id">
                            </div>
                            <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                                <label for="email">Email</label>
                                <input id="email" name="email" type="text" v-model="tempAmi.email">
                            </div> 
                            <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                                <label for="Fname">Telephone</label>
                                <input id="Fname" name="Fname" type="text" v-model="tempAmi.phone" >
                            </div>
                            <div class="bg-base-100 rounded-box p-2 h-fit shadow-sm gap-5 flex w-full">
                                <label for="Fname">Nom</label>
                                <input id="Fname" name="Fname" type="text" v-model="tempAmi.name" >
                            </div>
                            </fieldset>
                            <fieldset class="p-5 rounded-box flex-1 gap-5 w-full">
                                <legend class="text-xl">Validez l'envoi</legend>
                                <div class="bg-base-100 rounded-box p-2 h-fit w-full gap-10 flex">
                                    <button class="btn btn-secondary" @click.prevent="AddFriend">Envoyer</button>
                                </div>
                            </fieldset>
                        </section>
                    </form>

                </section>
                <button class="btn btn-accent" @click="popAddFriendForm">Ajouter un ami</button>
            </div>
            <div class=" bg-base-100 m-5">
                <p class="text-xl">Affichage de widgets dynamiques via props</p>
                <section class="grid grid-cols-2 bg-base-100 rounded-box h-fit p-2 shadow-sm gap-5" >
                    <article v-for="(element,index) in lesAmis" :key="index">
                        <OneFriend  :login="element.id" :nom="element.name" :tel="element.phone" :mail="element.email" :status="element.premium" v-on:mon-event-premium-update="parentUpdatePremium" @mon-event-premium-delete="parentDeleteUser"/>
                        <div>{{ message }}</div>
                    </article>
                </section>
            </div>
        </section>
    </main>
</template>