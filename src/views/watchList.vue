<script setup lang="ts">
    import { ref,computed,watch } from 'vue';

    //
    interface Film {
        id: number 
        title: string
        releaseYear: string
        disponible: boolean
    }
    const mesFilms = ref([]);

    let nomFilm = {
        id : ref(0),
        title : ref(''),
        releaseYear: ref(''),
        disponible: ref(true)
    }
    let nomToDel = ref<string>;

    const addFilm = ()=>{
        const ph = { "id": mesFilms.value.length, "title":nomFilm.title.value,"releaseYear": nomFilm.releaseYear.value, "disponible": nomFilm.disponible.value};
        //nomFilm.id.value = mesFilms.value.length;
        //nomFilm.disponible = true;
        mesFilms.value.push(ph);
    }

    const displayFilms = computed(()=>{
        
        if(mesFilms.value.length > 0){
            let result = '<ul>';
            mesFilms.value.forEach(element=>{
                result += `<li>
                    <ul>
                        <li>
                        <strong>Titre : </strong> ${element['title']}
                        </li>
                        <li>
                            <strong>Date de sortie : </strong> ${element.releaseYear.value}
                        </li>
                    </ul>
                </li>`;
            })
            result += "</ul>";
            return result;
        }
        
    })

    const deleteFilm = (value:number)=>{
        if(mesFilms.value.find((element)=> element.id == value) != undefined){
            mesFilms.value.splice(mesFilms.value.indexOf(mesFilms.value.find((element)=> element.id == value)),1);
        }
    }

const inputfbhv = (e:any)=>{
    console.log(e);
    e.target.value = "";
}
</script>

<template>
    <main  class="menu bg-base-100">
        <article class="menu flex-1 bg-orange-100 rounded-box p-10 w-100 h-fit shadow-sm m-auto h-fit">
            <div>{{ nomFilm.title }}</div>
            <div class="glass rounded-box p-5 m-2 gap-3" v-if="mesFilms.length > 0" >
                <ul class="bg-base-100 m-2 p-2 w-full h-full" v-for="film in mesFilms" :key="film.id" @click="deleteFilm(film.id)">
                    <li class="btn btn-accent" v-if="film.disponible">Disponible</li><li class="btn btn-secondary" v-else>Non-disponible</li>
                    <li>Titre : {{ film.title}}</li>
                    <li>Date de sortie : {{ film.releaseYear}}</li>
                </ul>
            </div>
            <!-- <div class="btn m-2" v-else-if="mesFilms.values.length > 0">{{ displayFilms }}</div> -->
            <div class="btn m-2" v-else>Rien à afficher</div>
        </article>
        <form class="form card flex-1 m-20 my-10 z-1 bg-orange-100 shadow-sm rounded-box p-10 gap-5">
            <section class="menu bg-base-100 rounded-box p-2 h-fit shadow-sm m-auto gap-10">
                <fieldset class="p-5 rounded-box menu">
                     <legend class="text-xl">Ajoutez un film</legend>
                    <div class="bg-base-100 rounded-box gap-2 h-fit shadow-sm btn btn-accent w-full flex-1 p-2">
                        <label  for="titre">Titre</label>
                        <input class="w-full" id="titre" placeholder="Leon" name="titre" type="text" v-model="nomFilm.title.value" @click="inputfbhv($event)">
                        <label  for="dateS">Date de sortie</label>
                        <input class="w-full" id="dateS" placeholder="YYYY/MM/DD" name="dateS" type="text" v-model="nomFilm.releaseYear.value" @click="inputfbhv($event)">
                        <button class="btn btn-secondary"  @click.prevent="addFilm"> ajouter</button>
                    </div>
                </fieldset>
            </section>
        </form>
    </main>
</template>