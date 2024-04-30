<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5234';
export default {
    data() {
        return {
            question: {
                    accountIcon: 'person.svg',
                    accountName: 'Nick Endgy',
                    title: 'Как сделать регистрацию с использованием только JavaScript?',
                    description: `Подскажите, пожалуйста, как сделать регистрацию пользователя на сайте? Сайт у меня на node.js. Я первый раз такую форму делаю и не знаю какой путь выбрать. Какой вариант лучше? Просто к кнопке "зарегистрироваться" подвязать эвент и в нем делать функцию? Или как-то использовать method="post" у формы? 
                                <br>UPD:А как fetch() использовать? Я написал такой код, а что дальше с ним сделать - не знаю. Как я понял, на сервер запрос отправлен, а именно на сервер были отправлены данные формы. А что дальше с ними сделать? Обрабатывать форму в этом же коде? Моя цель - отправить запрос в базу данных sql, в которую внесется новый пользователь`,
                    answers: 28,
                    Decided: true,
                    id: 123,
                    imageInQuetion: 'test',

                    text: '',
                    symbols: 0,
                    symbCount: false,
            }
        }
    },
    // mounted() {
    //     this.loadQuestion();
    //     setInterval(() => {
    //         this.loadQuestion();
    //     }, 20000);
    // },
    // methods: {
    //     async loadQuestion() {
    //         let responce = await axios.get(`/questions`, {
    //             params: {
    //                 id: id
    //             }
    //         });
    //         this.question = responce.data.get('all');
    //     }
    // }

    methods: {
        breakLines(text) {
            return text.replace(/\n/g, "<br>");
        },

        symbolsCount() {
            this.question.symbols = this.question.text.length;
            if (this.question.symbols >= 2000) {
                this.question.symbCount = true;
            } else {
                this.question.symbCount = false;    
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="content-1">
            <div class="account">
                <img class="accountIcon" :src="'src/assets/' + question.accountIcon" width="70px" alt="">
                <div class="name-ring">
                    <div>
                        <a href="#!"><span class="name">{{ question.accountName }}</span></a><a href="#!" class="more">+2 ЕЩЁ</a>
                    </div>
                    <p>Уровень: <span class="difficult">Легкий</span></p>
                </div>
            </div>
            <div class="title">
                <h3>{{ question.title }}</h3>
            </div>
            <div class="description">
                <p v-html="breakLines(question.description)"></p>
                <img :src="'src/assets/' + question.imageInQuetion + '.png'" alt="">
            </div>
            <div class="about">
                <p>15 подписчиков</p>
                <p>5.01.2024 12:31</p>
                <p>473 просмотра</p>
            </div>
        </div>
        <a class="answer-a" href="#!"><button class="answer-btn">Ответов: {{ question.answers }}</button></a>
        
        <div class="content-2">
            <div class="account">
                <img class="accountIcon" src="../../assets/ava.png" width="70px" alt="">
                <div class="name-ring">
                    <p><span class="name">JavaScriptPRO</span></p>
                    <p>Уровень: <span class="difficult-ans">Решала</span></p>
                </div>
            </div>
            <div class="title">
                <h3>{{ question.title }}</h3>
            </div>
            <div class="description">
                <p v-html="breakLines(`Ну смотри: 
                делаешь вот так, потом так, ну и вот так, и вообще отстань, че пристал? Я хочу чаю, щас вот прям пойду и выпью, и поле в майне увеличу. Жесть, оно уже скоро до Хаба дойдет. Я в афиге от его размеров, да! Это посадил я!!!`)"></p>
            </div>
            <div class="btn-group">
                <div class="left">
                    <button class="comm-add btgr">Добавить комментарий</button>
                    <div class="like-bc bc">
                        <button class="like btgr"><img src="../../assets/Like.svg" alt=""></button>
                        <p class="like-count">135</p>
                    </div>
                    <div class="dislike-bc bc">
                        <button class="dislike btgr"><img src="../../assets/Dislike.svg" alt=""></button>
                        <p class="dislike-count">1</p>
                    </div>
                </div>
                <div class="right">
                    <a href="#!"><button class="toMain btgr">На главную</button></a>
                </div>
            </div>
        </div>
        <div class="content-3">
            <div class="account">
                <img class="accountIcon" :src="'src/assets/' + question.accountIcon" width="70px" alt="">
                <div class="name-ring">
                    <div>
                        <a href="#!"><span class="name">{{ question.accountName }}</span></a><a href="#!" class="more">+2 ЕЩЁ</a>
                    </div>
                    <p>Уровень: <span class="difficult">Легкий</span></p>
                </div>
            </div>
            <div class="content-3-without">
                <textarea v-model="question.text" @input="symbolsCount" maxlength="2000" class="comm-input" name="" id="" placeholder="Оставь свой ответ:"></textarea>
                <p :class="{ 'red-text': this.question.symbCount }">{{ question.symbols }} / 2000</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

/* CONTENT-1 */

.content-1 {
    /* background-color: rgb(225, 225, 225); */
    margin-top: 50px;
    width: 100%;
    height: auto;

    padding: 19px;

    border: 1px solid #000;
    border-radius: 25px;
}

.account {
    display: flex;
    gap: 12px;
    align-items: center;
}

.accountIcon {
    border-radius: 50px;
    border: 2px solid #1d1d1d;
}

.name {
    font-weight: 700;
    color: #8355E3;
    margin-right: 10px;
}

.name:hover {
    color: #6140a7;
}

.name-ring {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.name-ring p {
    margin: 0;
}

.name-ring div {
    display: flex;
}

.more {
    color: #3B82F6;
}

.more:hover {
    color: #20498b;
}

.difficult {
    margin-left: 5px;
    color: #1E7200;
}

.title {
    margin: 0 !important; 
    margin-top: 20px !important;

    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: start;
}

.description img {
    width: 100%;
}


.answer-btn {
    width: 180px;
    height: 40px;
    background-color: #3B82F6;
    border: none;
    border-radius: 16px;
    color: #fff;

    margin-top: 18px;

    font-size: 20px;

    transition: all 200ms;
}

.answer-btn:hover {
    background-color: #20498b
}

.about {
    margin-top: 20px;

    display: flex;
    align-items: center;
    gap: 10px;
}

.about p {
    border-right: 2px solid #3B82F6;
    padding-right: 16px;
    color: #3B82F6;
}

.about p:last-child {
    border: none;
}

/* CONTENT-2 */

.content-2 {
    margin-top: 50px;
    width: 100%;
    height: auto;

    padding: 19px;

    border: 1px solid #000;
    border-radius: 25px;
}

.difficult-ans {
    margin-left: 5px;
    color: #E65C00;
}

.btn-group {
    display: flex;
    align-items: center;
    gap: 21px;

    justify-content: space-between
    
}

.btn-group:last-child {
    gap: 0px;
}

.btn-group p {
    margin-bottom: 0;
    font-size: 18px;
    
}

.like-count {
    color: #299F00;
}

.dislike-count {
    color: #D20000;
}

.like {
    line-height: 21px;
}

.btgr {
    padding: 9px 26px;
    background-color: #3B82F6;
    color: #fff;

    border: none;
    border-radius: 16px;
    font-size: 22px;

    transition: all 200ms;
}

.btgr:hover {
    background-color: #20498b
}

.left {
    display: flex;
    gap: 21px;
    align-items: center
}

.bc {
    display: flex;
    align-items: center;
    gap: 10px;
}

.bc button {
    width: 51px;
    height: 51px;

    padding: 0;

}


/* CONTENT-3 */

.content-3 {
    margin-top: 50px;
    margin-bottom: 50px;
    
}

.content-3-without {
    margin-top: 13px;
    
    width: 100%;
    height: 250px;

    padding: 19px;

    border: 1px solid #000;
    border-radius: 25px;  
    
    position: relative;
}

.content-3-without p {
    position: absolute;

    bottom: 0;
    right: 10px;

    color: #767676;
}

.red-text {
    color: #D20000 !important;
}

.comm-input {
    width: 100%;
    height: 190px;

    border: none;
    resize: none;
    outline: none;
}

/* АДАПТИВКА */


@media (min-width: 1000px) {
    .description img {
        width: 700px;
    }
}

@media (max-width: 1000px) {
    .btn-group p {
        font-size: 16px;
    }
    
    .bc button {
        width: 42px;
        height: 42px;
    }
    
    .btgr {
        font-size: 16px;
    }

    .comm-input {
        height: 250px;
    }

    .content-3-without {
        height: 310px;
    }
}

@media (max-width: 770px) {
    .left {
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }

    .btn-group {
        align-items: end;
    }

    .comm-input {
        height: 350px;
    }

    .content-3-without {
        height: 410px;
    }

    
}


@media (max-width: 460px) {
    .answer-btn {
        width: 100%;
    }

    .comm-add {
        width: 170%;
    }
}

@media (max-width: 400px) {
    .about {
        flex-direction: column;
    }

    .about p {
        border-right: none;
        border-bottom: 2px solid #3B82F6;
        padding: 0 0 16px 0;
        margin: 0;
    
    }
}

</style>