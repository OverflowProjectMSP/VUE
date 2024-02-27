<script>
import PageStart from './components/CompForMain/PageStart.vue'
import PageCenter from './components/CompForMain/PageCenter.vue'
import PageEnd from './components/CompForMain/PageEnd.vue'
import HeaderComp from './components/MainComponents/HeaderComp.vue'

export default {
  components: {
    PageStart,
    PageCenter,
    PageEnd,
    HeaderComp,
  }
}
</script>

<template>
<header-comp/>
<router-view/>
  
</template>

<style scoped>
  
</style>
