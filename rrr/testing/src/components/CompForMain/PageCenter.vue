<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="pagecenter">
        <hr>
        <p class="center-desc">Здесь вы можете задать вопросы по таким языкам <br> программирования как</p>
        <div class="languages">
            <button class="btn-arrow leftarrow">&lt;</button>
            <div class="lang-items">
                <div class="lang-item ts">TS</div>
                <div class="lang-item php">PHP</div>
                <div class="lang-item py">Python</div>
                <div class="lang-item js">JS</div>
                <div class="lang-item cs">C#</div>
                <div class="lang-item ruby">Ruby</div>
            </div>
            <button class="btn-arrow rightarrow">&gt;</button>
        </div>
        <div class="wehave">
            <p class="wehave-title">В данный момент на нашем сайте:</p>
            <div class="wehave-items">
                <div class="wehave-item">
                    <img src="../../assets/icons/user1.png" style="width: 40px;" alt="">
                    <p class="wehave-item-desc">Зарегистрированно более <br> 10000 пользователей</p>
                </div>
                <div class="wehave-item">
                    <img src="../../assets/icons/expert.png" alt="">
                    <p class="wehave-item-desc">10 экспертов в сети <br> и помогают сейчас</p>
                </div>
                <div class="wehave-item">
                    <img src="../../assets/icons/users.png" alt="">
                    <p class="wehave-item-desc">100 участников <br> онлайн</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.cdnfonts.com/css/rubik');
    html, body {
        font-family: 'rubik';
    }
    #app {
        font-family: 'rubik';
    }
    body {
        margin: 5px;
    }
    hr {
        margin-top: 20px;
        width: 600px;
    }

    .pagecenter {
        height: 500px;
    }
    .center-desc {
        text-align: center;
        font-size: 24px;
    }
    .languages {
        margin-top: 40px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        height: 80px;
    }
    .lang-items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }
    .lang-item {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 135px;
        height: 60px;
        transition: 300ms;
        user-select: none;
    }
    .lang-item:hover {
        transition: all 300ms;
        transform: scale(1.4);
    }
    .ts {background-color: #017ACC; color: #fff; font-weight: 600;}
    .ts:hover {background-color: #005e9d;}
    .ts:active {background-color: #004877;}
    .php {background-color: #777BB3; color: #000; font-weight: 600;}
    .php:hover {background-color: #5c5f91;}
    .php:active {background-color: #42446b;}
    .py {background-color: #3773A5; color: #000; font-weight: 600;}
    .py:hover {background-color: #2a587e;}
    .py:active {background-color: #214562;}
    .js {background-color: #FFE500; color: #000; font-weight: 600;}
    .js:hover {background-color: #c4b000;}
    .js:active {background-color: #a19100;}
    .cs {background-color: #7455DC; color: #fff; font-weight: 600;}
    .cs:hover {background-color: #5a42aa;}
    .cs:active {background-color: #433081;}
    .ruby {background-color: #A51501; color: #F08E74; font-weight: 600; -webkit-text-stroke: 0.5px black;}
    .ruby:hover {background-color: #800f00;}
    .ruby:active {background-color: #670c00;}
    .btn-arrow {
        color: #646464;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 52px;
        width: 25px;
        height: 25px;
        background: none;
        border: none;
        transition: 100ms;
    }
    .btn-arrow:hover {
        color: #363636;
    }
    .btn-arrow:active {
        color: #171717;
    }

    .wehave {
        margin-top: 40px;
    }
    .wehave-title {
        text-align: center;
        font-size: 22px;
        margin-bottom: 50px;
    }
    .wehave-item img {
        width: 50px;
    }
    .wehave-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 150px;
        padding-top: 10px;
        transition: 150ms;
    }
    .wehave-item:hover {
        background-color: #ededed;
        border-radius: 30px;
        box-shadow: 0px 0px 20px #c2c2c2;
    }
    .wehave-item-desc {
        text-align: center;
    }
    .wehave-items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }



    @media (max-width: 1225px) {
        .lang-item {
            width: 90px;
            height: 50px;
        }
    }
    @media (max-width: 950px) {
        .languages {
            gap: 10px;
        }
        .lang-items {
            gap: 10px
        }
    }
    /* @media (max-width: 870px) {
        .pagecenter {
            margin-top: -80px;
        }
    }
    @media (max-width: 770px) {
        .pagecenter {
            margin-top: -140px;
        }
    } */
    @media (max-width: 680px) {
        .lang-items {
            flex-basis: 50%;
        }
        
    }
    @media (max-width: 590px) {
        .languages {
            margin-bottom: 110px;
        }
    }
    @media (max-width: 388px) {
        .languages {
            margin-bottom: 300px;
        }
    }
</style>