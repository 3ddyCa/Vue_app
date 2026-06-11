<script setup lang="ts">
    import { ref,computed,watch,onMounted } from 'vue';
    const props = defineProps({
        title : {
            type : String,
            required : true,
            default: 'Pas de données disponibles',
            validator: (value)=> value.length < 50
        },
        style : {
            type : String,
            required : true,
            default: 'bg-orage-100',
            validator: (value)=> value.length < 20
        },
        content : {
            type : String,
            required : true,
            default: 'Voici une super carte !',
            validator: (value)=> value.length < 255
        },
        info1 : {
            type : String,
            required : true,
            default: 'Pas d\'info à afficher',
            validator: (value)=> value.length < 255
        },
        info2 : {
            type : String,
            required : false,
            default: 'Pas d\'info à afficher',
            validator: (value)=> value.length < 255
        },
        info3 : {
            type : String,
            required : false,
            default: 'Pas d\'info à afficher',
            validator: (value)=> value.length < 255
        },
        info4 : {
            type : String,
            required : false,
            default: 'Pas d\'info à afficher',
            validator: (value)=> value.length < 255
        },
        img : {
            type : String,
            required : true,
            default: 'https://lorem-picsum.com/200/200/',
            validator: (value)=> value.length < 255
        },

    })
</script>

<template>
    
    <section class="p-10 bg-orange-100 grid rounded-box m-10 w-64 h-fit gap-2 shadow-md" >
        <div class="menu gap-5 m-auto" >
            <strong>{{ title }}</strong>
            <img :src="img" alt="Illustration de la météo">
            <p>{{ content }}</p>
            <div class="grid m-auto">
                <p>{{ info1 }}</p>
                <p>{{ info2 }}</p>
                <p>{{ info3 }}</p>
                <p>{{ info4 }}</p>
            </div>            
        </div>
    </section>

</template>

