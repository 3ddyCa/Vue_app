<script setup lang="ts">
import {ref,computed,watch,onMounted  } from "vue";
import OneFriend from '../components/OneFriend.vue';
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
</script>
<template>
    <main>
        <section class="bg-base-100 p-4 w-fit">
            <p class="text-xl">Contenu du tableau</p>
            <div class="bg-blue-100 p-5 flex w-fit gap-1" >
                <div class="bg-blue-100 p-1 w-45" v-for="(element,index) in lesAmis" :key="index">{{ element }}</div>
            </div>
            <div class=" bg-base-100 m-5">
                <p class="text-xl">Affichage de widgets dynamiques via props</p>
                <ul class="flex bg-base-100 rounded-box h-fit p-2 shadow-sm gap-5" >
                    <li v-for="(element,index) in lesAmis" :key="index">
                        <OneFriend  :login="element.id" :nom="element.name" :tel="element.phone" :mail="element.email" :status="element.premium"/>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>