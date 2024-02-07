<script>
// импортируем компонент
import HeaderComp from "./components/HeaderComp.vue";
import VidComp from "./components/VidComp.vue";
// Описываем компонент
export default {
  components: {
    HeaderComp,
    VidComp
   }
}
</script>
<!-- Вызываем компонент -->
<template>
<HeaderComp/>
<VidComp quest="Как в Python сделать класс?" sub="4" hours="19" views="473" ans="2"/>
<VidComp quest="Как в CSS сделать класс?" sub="2" hours="67" views="483" ans="4"/>
<VidComp quest="Как в HTML сделать тег?" sub="8" hours="14" views="783" ans="2"/>
<VidComp quest="Какие типы данных есть в JS?" sub="6" hours="12" views="890" ans="1"/>
</template>
<!-- npm run dev прописывай в папке testing -->
<style scoped>
.t-alig-c{
    text-align: center;
}
</style>
