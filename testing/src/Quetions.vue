<script>
import VidQuetions from './components/MainComponents/VidQuetions.vue';

export default {
    components: {
        VidQuetions,
    },

    data() {
        return {
            quetions: [
                {
                    title: `Как сделать адаптивку?`,
                    subscribers: 23,
                    hours: 2,
                    ans: 1,
                    views: 30,
                    language: 'СSS',
                },
                {
                    title: `Как сделать адаптивку?`,
                    subscribers: 23,
                    hours: 2,
                    ans: 1,
                    views: 30,
                    language: 'СSS',
                },
                {
                    title: `Как создать переменную?`,
                    subscribers: 23,
                    hours: 2,
                    ans: 1,
                    views: 30, 
                    language: 'СSS',
                },

            ],

    }}


              
}
    



</script>

<template>

<vid-quetions :quetion="quetion"  v-for="quetion in quetions"/>

</template>

<style scoped>

</style>

