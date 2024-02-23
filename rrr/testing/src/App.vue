<script>
// импортируем компонент
import HeaderComp from "./components/MainComponents/HeaderComp.vue";
import VidComp from "./components/MainComponents/VidComp.vue";
import FooterComp from "./components/MainComponents/FooterComp.vue"
import HeadComp from "./components/MinorComponents/HeadComp.vue"
import UserInfo from "./components/СomponetsForPages/UserInfo.vue"
import hours from "./components/MinorComponents/hours.vue"
// Описываем компонент
export default {
    components: {
        HeaderComp,
        VidComp,
        FooterComp, 
        HeadComp,
        UserInfo, 
        hours,
    },
    data(){
        return{
            yes : true
        }
    },
    methods: {
        inverse(){
            this.yes = !this.yes
            console.log(yes)
        }
    }
}

</script>
<!-- Вызываем компонент -->
<template>
<HeaderComp/>
<div v-if="yes">


<HeadComp @click="inverse"></HeadComp>
<VidComp  style="margin-top: 30px;"/>
<!-- <VidComp  quest="Как в CSS сделать класс?" sub="2" hours="67" views="483" ans="4"/>
<VidComp  quest="Как в HTML сделать тег?" sub="8" hours="14" views="783" ans="2"/>
<VidComp  quest="Какие типы данных есть в JS?" sub="6" hours="12" views="890" ans="1"/> -->

</div>
<UserInfo v-if="!yes"></UserInfo>


<!-- <FooterComp></FooterComp> -->
</template>
<!-- npm run dev прописывай в папке testing -->
<style scoped>
@import url('https://fonts.cdnfonts.com/css/rubik');
html{
    margin: 0;
    background-color: #EEF1F4;
}
main{
    margin: 10px
}
body{
    font-family: Rubik !important;
}
.t-alig-c{
    text-align: center;
}
.head {
    margin-top: 20px;
}
</style>
