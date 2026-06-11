<script setup lang="ts">
    import { ref,computed,watch,onMounted } from 'vue';
    import WidgetMeteo from '../components/WidgetMeteo.vue';
    
    interface Pokemon{
        id: number
        name : string
        img : string
        type:string
        attackA:string
        attackB:string
        baseHP:number
    }

    

    const display = {
        pokemon : ref<Array<Pokemon[]>>([]),
        meteo : ref([]),
        other : ref([])
    };

    const tempArray = {
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
                //POKEMON
                if(url == "pokemon"){
                    if(result.results != undefined ){
                        result.results.forEach((item:any)=>{
                            const index = result.results.indexOf(item)+1;
                            getData('https://pokeapi.co/api/v2/pokemon/'+index);
                            if(tempArray.other.value[index]!= undefined){
                                display.pokemon.push({id:index, name : item.name , img : tempArray.other.sprites.front_default, type : tempArray.other.types[0], attackA : tempArray.other.moves[0],attackB : tempArray.other.moves[1],baseHP : result.other.stats[0].base_stat});
                            }

                        })
                        tempArray[url].value = result.results;
                        return;
                    }
                    //METEO
                }else{
                    tempArray[url].value = result;
                    return;
                }
                
            }else{
                tempArray.other.value = result;
                return;
            }
        } catch (e:any) {
            console.error(e.message);
        }
    }

    async function getPokemon(){
         try {
            const url = 'https://pokeapi.co/api/v2/pokemon/';
            const response = await fetch(url+'?offset=40&limit=20');
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            if(result.results[1] != undefined){
                console.log('Full fetch result',result);
                const loop = setInterval(()=>{
                if(result.state != "pending"){
                    let count = 1;
                    result.results.forEach((item:any)=>{
                        
                        const onePokemon = getData(url+count.toString()).then();
                        if(onePokemon != undefined){
                            console.log('onePokemon : ',onePokemon);
                            display.pokemon.push({id:index, name : item.name , img : onePokemon.sprites.front_default, type : onePokemon.types[0], attackA : onePokemon.moves[0],attackB : onePokemon.moves[1],baseHP : onePokemon.stats[0].base_stat});
                        }
                        count++;
                    })
                    tempArray.pokemon.value = result.results;
                    clearInterval(loop);
                    return;
                }
            },200)
            }else{
                return result;
            }
            
            

        } catch (e:any) {
            console.error(e.message);
        }

    }

    async function getMeteo(ville:string){
        const url = 'https://prevision-meteo.ch/services/json/';
            const response = await fetch(url+ville);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Meteo fetch : ',result);
            if(result.status != "pending"){
                tempArray.meteo.value = result;
                return result;
            }
            
    }

    
    
   //onMounted(()=>{
        getPokemon();
        getMeteo('Toulouse');
        
        setTimeout(()=>{console.log('display : ',display)},2000);
    //})
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
                <div  class="m-auto p-3  text-center shadow-md rounded-box glass bg-orange-100" v-for="(result,index) in display.meteo" :key="index">
                    <WidgetMeteo :title="result.city_info.name" :content="result.city_info.country" :info1="result.current_condition.date" :info2="result.current_condition.humidity" :info3="result.current_condition.tmp" :info4="result.current_condition.humidity" :img="result.current_condition.icon" />
                    
                </div>
            </section>
            <section v-else>
                <WidgetMeteo  />
            </section>
        </article>
    </main>
</template>

<style scoped>

</style>