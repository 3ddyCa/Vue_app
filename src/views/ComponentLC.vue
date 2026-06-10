<script setup lang="ts">
    import { ref,computed,watch,onMounted } from 'vue';
    const display = {
        pokemon : ref([]),
        meteo : ref([]),
        other : ref([])
    };

    const result = {
        pokemon : ref([]),
        meteo : ref([]),
        other : ref([])
    };
    
     const getApi = async (URL:string)=>{
        const CORS = {
            method:"GET",
            headers: {
                "Content-Type": "json",
            },
        }
        await fetch(URL).then(response => {response.json()}).then(result=>{
            console.log('fetched : ',result);
            return result;
        })
    }

    async function getData(url:string) {
        const urlList = {
        pokemon : "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20",
        meteo : 'https://prevision-meteo.ch/services/json/toulouse'
        }
       let inputUrl;
        try {

             if(urlList[url] != undefined){
                inputUrl = urlList[url];
            }else{
                inputUrl = url;
            }
            const response = await fetch(inputUrl);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            if(urlList[url] != undefined){
                //
                if(url == "pokemon"){
                    if(result.results != undefined ){
                        result.results.forEach(item=>{
                            getData(result.results[result.results.indexOf(item)].url);
                            if(result.other.value[result.results.indexOf(item)]!= undefined){
                                display.pokemon.value.push({name : item.name , img : result.other.sprites.front_default});
                            }

                        })
                        result[url].value = result.results;
                        return;
                    }
                    //
                }else{
                    result[url].value = result.results;
                    return;
                }
                
            }else{
                result.other.value = result;
                return;
            }
        } catch (e:any) {
            console.error(e.message);
        }
    }
    
   onMounted(()=>{
        getData('pokemon').then();
        getData('meteo').then();
        
        console.log(display)
    })
</script>

<template>
    <main>
        <article>
            <section class="p-10 bg-base-100 grid rounded-box m-10 gap-2" v-if="display.pokemon != undefined" >
                <h3 class="text-3xl">Resultat :</h3>
                <div  class="m-auto p-3  text-center shadow-md rounded-box glass bg-orange-100" v-for="(element,index) in display.pokemon.value" :key="index">
                    <img :src="element.img" alt="illustration de pokemon">
                    <h3>{{ element.name }}</h3>
                    
                </div>
            </section>
            <section v-else>
                <p>pas de resultat</p>
            </section>
        </article>
        <article>
            <section class="p-10 bg-base-100 grid rounded-box m-10 gap-2" v-if="display.meteo != undefined" >
                <h3 class="text-3xl">Resultat :</h3>
                <div  class="m-auto p-3  text-center shadow-md rounded-box glass bg-orange-100" v-for="(result,index) in display.meteo.value.results" :key="index">
                    <img :src="result.url" alt="illustration de pokemon">
                    <h3>{{ result.city_info.name }}</h3>
                    
                </div>
            </section>
            <section v-else>
                <p>pas de resultat</p>
            </section>
        </article>
    </main>
</template>

<style scoped>

</style>