<script setup>
defineProps({
    quest: String,
    sub: Number,
    hours: Number,
    views: Number,
    ans: Number,
})
let elList = document.querySelectorAll(`.el`);

for (let i = 0; i < elList.length; i++) {
    let el = elList[i];
    el.classList.add(`t-alig-c`);
}
</script>

<template>
    <div class="vid">
        <div class="left">
            <div class="top-1">
                <div class="name"><p><img src="" alt="" class="t">Python</p></div>
                <div class="id middle"><p><img src="" alt="" class="t">Средне</p></div>
            </div>
            <div class="mid-1">
                <p>{{quest}}</p>
            </div>
            <div class="bottom-1">
                <div class="el">{{ sub }} подписчика</div>
                <div class="el">{{ hours }} часов назад</div>
                <div class="el -d">{{ views }} просмотра</div>
            </div>
        </div>
        <div class="right">
            <div class="right-in">
                <p class="t-alig-c">{{ ans }}</p>
                <p>Ответов</p>
            </div>
        </div>
    </div>
</template>

<style>
.t-alig-c{
    text-align: center;
}
/* виджет с вопросами */
.vid{
    background-color:#EEF1F4 ;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    margin-bottom: 15px;
}

/* общее расположение элементов */

.right{
    display: flex;
    align-items: center;
}
.right-in{
    display: flexbox;
}
.right p{
    margin: 0;
    margin: 0;
    color: #AEB8BC;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
/* расцветовка */
.light{
    color:#488D57
}
.middle{
    color: #D8A326;
}
.hard{
      color: #D9382E;
}
/* левая чать виджета */

/* Верх */
.top-1{
    display: flex;
    gap: 20px;
    margin-bottom:10px ;
}
.top-1 p{
    margin: 0;
}
.t{
    vertical-align: middle;
    width: 10px;
    height: 10px;
}
/* серидина */
.mid-1{
    font-size: 28px;
}
.mid-1 p{
    margin: 0;
}
/* низ */
.bottom-1{
    display: flex;
    font-size: 15px;
    color: #AEB8BC;
}
.el{
    border-right: 1px solid #AEB8BC;
    padding: 7px;
}
.el-d{
    border-right: none;
    padding: 7px;
}
.-d {
    border-right: none;
}
.el p{
    margin: 0;
}


/* анимация */
div.vid {
    transition: all 0.5s;
}
  
div.vid:hover {
    transform: translateY(-10px);
    box-shadow: 10px 5px 5px rgb(0, 0, 0, 0.5);
}
</style>