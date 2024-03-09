<script>
import VidComp from './components/MainComponents/VidComp.vue';
import ModelWind from './components/СomponetsForPages/ModelWind.vue';
export default {
    components: {
        VidComp,
      ModelWind,  
    },
    data() {
        return {
            items: [
                {
                    title: `Как создать переменную?`,
                    subscribers: 50,
                    hours: 43,
                    views: 43,
                    ans: 423,
                    language: 'Python',

                },
                {
                    title: `Как создать переменную?`,
                    subscribers: 50,
                    hours: 43,
                    views: 43,
                    ans: 423,
                    language: 'Python',
                },
                {
                    title: `Как создать переменную?`,
                    subscribers: 45,
                    hours: 0,
                    views: 43,
                    ans: 423,
                    language: 'Python',

                },
            ],
            Show: false,
        }
    },
    methods: {
        OpenModal() {
            this.Show = !this.Show
        },
        CloseModal(Show) {
            this.Show = false
        }
    }
}
</script>

<template>
<!-- Компонент поиска -->
<h4 class="text">Поиск статьи</h4>

<div class="content d-flex align-items-center">
    <input type="text" class="form-control" placeholder="Название проблемы" aria-label="First name">
    <input type="text" class="form-control" placeholder="Автор" aria-label="Last name">
   
  <div class="dropdown-center">
  <button class="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="./assets/js.jpg" alt="" class="image"><span>JavaScript</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item d-flex align-items-center" href="#"><img src="./assets/js.jpg" alt="" class="image"><span>JavaScript</span></a></li>
    <li><a class="dropdown-item d-flex align-items-center" href="#"><img src="./assets/js.jpg" alt="" class="image"><span>JavaScript</span></a></li>
    <li><a class="dropdown-item d-flex align-items-center" href="#"><img src="./assets/js.jpg" alt="" class="image"><span>JavaScript</span></a></li>
  </ul>
</div>

<div class="contain" @click="OpenModal" >
    <button class="plus"><p class="p">+</p></button>
  </div>
 

</div>





<div class="con mt-3">
<vid-comp :item="item"  v-for="item in items"/>
</div>


<model-wind v-if="Show" @CloseModal="CloseModal"/>


</template>





<style scoped>
h4{
    margin-left: 20.5%;
    margin-top: 20px;
    font-size: 40px;
    
}
.image{
    margin-right: 10px;
    width: 25px;
}
.btn{
    font-size: 16px;
    font-weight: bold;
    color:blueviolet ;
}
.content {
    margin: 10px;
    flex-wrap: wrap;
    margin-left: 20%;
}
.form-control{
    margin: 5px;
}
.dropdown-center{
    margin-left: 15px;
}
.content input{
    width: 300px;
    border-radius: 10px;
}
.con{
    justify-content: start;
}
.contain{
    width: 5%;
    height: 5%;
    
}
.plus {
    width: 30px; 
    height: 30px;
    background-color: #e8e7ea;
    border-radius: 50%; 
    border: 0.2px solid ; 
    margin-left: 10px;
    
   
}
.p{
    margin-left: 0.2px;
    margin-right: 1px;
}

@media  (max-width: 1000px){
.content{
    flex-wrap: wrap;
}
.content input{
    width: 200px;
}
}
</style>