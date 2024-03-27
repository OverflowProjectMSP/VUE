<script>
import PageStart from '../CompForMain/PageStart.vue'
import PageCenter from '../CompForMain/PageCenter.vue'
import PageEnd from '../CompForMain/PageEnd.vue'
import ScrollBarComp from './ScrollBarComp.vue'
export default {
  components: {
    PageStart,
    PageCenter,
    PageEnd,
    ScrollBarComp
  }
}
</script>

<template>
  <page-start>

  </page-start>

  <page-center>
  </page-center>


  <page-end>
  </page-end>

<ScrollBarComp />

</template>

<style scoped>
  
</style>
