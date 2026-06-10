<script setup lang="ts">
    import { ref,computed,watch,onMounted } from 'vue';
    const props = defineProps({
        title : {
            type : String,
            required : true,
            default: 'base title',
            validator: (value)=> value.length < 50
        },
        content : {
            type : String,
            required : true,
            default: 'Voici une super carte !',
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
    
    <section class="p-10 bg-base-100 grid rounded-box m-10 gap-2" >
        <div class="gap-5 m-auto">
            <h3>{{ title }}</h3>
            <p>{{ content }}</p>
            <img :src="img" alt="Illustration">
        </div>
    </section>

</template>