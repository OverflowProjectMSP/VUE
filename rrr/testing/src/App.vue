<script>
// импортируем компонент
import HeaderComp from "./components/HeaderComp.vue";
import VidComp from "./components/VidComp.vue";
import FooterComp from "./components/FooterComp.vue"
import HeadComp from "./components/HeadComp.vue"
// Описываем компонент
export default {
  components: {
    HeaderComp,
    VidComp,
    FooterComp, 
    HeadComp
   }
}
</script>
<!-- Вызываем компонент -->
<template>
<HeaderComp/>
<HeadComp></HeadComp>
<VidComp quest="Как в Python сделать класс?" sub="4" hours="19" views="473" ans="2" style="margin-top: 30px;"/>
<VidComp quest="Как в CSS сделать класс?" sub="2" hours="67" views="483" ans="4"/>
<VidComp quest="Как в HTML сделать тег?" sub="8" hours="14" views="783" ans="2"/>
<VidComp quest="Какие типы данных есть в JS?" sub="6" hours="12" views="890" ans="1"/>
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

</style>
