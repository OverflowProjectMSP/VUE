<script>
import HeaderComp from './components/MainComponents/HeaderComp.vue';
export default {
    componets: {
        HeaderComp
    }
}
</script>

<template>
    <head-comp />
    <div class="title">
        <h2>
            Новая статья
        </h2>
    </div>
    <hr>
    <div class="name">
        <h4>
            Название статьи
        </h4>
        <p class="transparent">
            Сформулируйте название так, чтобы сразу было понятно, о чём речь.
        </p>
        <form>
            <input type="email" class="form-control" id="inputlg">
        </form>
    </div>
    <div class="text">
        <h4>
            Текст статьи
        </h4>
        <p class="transparent">
            Делайте что хотите, в ваших руках все инструменты!
        </p>
        <div class="string">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary"><b>B</b></button>
                <button type="button" class="btn btn-secondary"><i>i</i></button>
                <button type="button" class="btn btn-secondary">&#9939;</button>
                <button type="button" class="btn btn-secondary"><i>
                        <>
                    </i></button>
                <button type="button" class="btn btn-secondary"><i>...</i></button>
                <button type="button" class="btn btn-secondary">&#11015; <b>Добавить файл</b></button>
                <button type="button" class="btn btn-secondary">&#11014; <b>Добавить фото</b></button>
            </div>
            <div class="forms">
                <div class="form1">
                    <select class="form-select" style="border-color: #B3B3B3;" aria-label="Default select example">
                        <option selected class="main">Простой</option>
                        <option value="1" class="first">Средний</option>
                        <option value="2" class="second">Сложный</option>
                    </select>
                </div>
                <div class="form2">
                    <select class="form-select" style="border-color: #B3B3  3;" aria-label="Default select example">
                        <option selected class="python"><b>Python</b></option>
                        <option value="1" class="js"><b>JS</b></option>
                        <option value="2" class="php"><b>PHP</b></option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-floating">
            <textarea class="form-control" id="formchik" style="border-color: #B3B3B3;"></textarea>
        </div>

    </div>



    <div class="row pt-5 block">
        <div class="col-6">
            <button id="save"><b>Опубликовать</b></button>
        </div>
        <div class="col-6">
            <button id="preview"><b>Предпосмотр</b></button>
        </div>
    </div>

    <div class="preview-container" v-if="true">




        <div class="container">
            <div class="vid" v-if="Vid">
                <div class="left">
                    <div class="top-1">
                        <div class="name">
                            <p><img src="" alt="" class="t">{{ language }}</p>
                        </div>
                        <div class="id middle">
                            <p><img src="" alt="" class="t">{{ sloz }}</p>
                        </div>
                    </div>
                    <div class="mid-1">
                        <p>{{ Input }}</p>
                    </div>
                    <div class="bottom-1">
                        <div class="el">0 подписчика</div>
                        <div class="el">0 часов назад</div>
                        <div class="el -d">0 просмотра</div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-in">
                        <p class="t-alig-c">0</p>
                        <p>Ответов</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<style scoped>
/* стили кнопок */
#save {
    background-color: rgb(255, 255, 255);
    color: #7ac97a;
    border-color: #90EE90;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
    margin-left: 30px;
}

#preview {
    background-color: rgb(255, 255, 255);
    color: #7ac97a;
    border-color: #90EE90;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
}

.block {
    margin-bottom: 10px;
}



/* 1. Стили для шрифта и общего оформления страницы */
@import url('https://fonts.cdnfonts.com/css/rubik');

html {
    margin: 0;
    background-color: #EEF1F4;
    padding: 0;
    width: 100%;
    height: 100%;
}

main {
    margin: 10px;
}

body {
    font-family: Rubik !important;
}


/* 2. Стили для заголовка, разделителя и текста */
.title {
    font-size: 25px;
    margin-top: 20px;
    margin-left: 37px;
}

hr {
    width: 95%;
    margin: 20px 35px 0 25px;
}

.name h4 {
    margin: 20px 35px 0px;
}

.transparent {
    color: #B3B3B3;
    margin: 7px 36px 0px;
    margin-bottom: 40px;
}


/* 3. Стили для ввода имени, текста и кнопок */
.name input {
    margin: 12px 35px 0px;
    width: 1850px;
    border-radius: 7px;
    border-color: #B3B3B3;
    width: calc(100% - 70px);
}

.text h4 {
    margin: 20px 35px 0px;
}

.btn-secondary {
    background-color: white;
    color: black;
    margin-left: 35px;
    padding: 10px;
}


/* 4. Стили для форм и кнопок */
.forms {
    display: flex;
    gap: 60px;
    align-items: center;
    margin-left: 35px;
}

.main {
    color: green;
}

.first {
    color: orange;
}

.second {
    color: red;
}

/* 5. Дополнительные стили для кнопочек и блока формы */
#inputlg {
    width: 80%;
}

#formchik {
    margin: 20px 35px 0px;
    border-radius: 7px;
    height: 400px;
}

.btn-wrapper button {
    font-size: 25px;
    margin: 20px 35px 0px;
    border-radius: 10px;
    display: flex;
}

.btn-wrapper {
    display: flex;
    flex-direction: row;
}

.btn-dark {
    border-color: #B3B3B3;
    color: #B3B3B3;
    background-color: white;
}

.btn-dark:hover {
    border-color: #B3B3B3;
    color: white;
    background-color: gray;
    transition: 0.2s;
}

.btn-dark:active {
    border-color: #B3B3B3;
    color: white;
    background-color: #565656;
}

.btn-success:active {
    color: white;
    background-color: #074B2A;
    border-color: #188755;
}


/* 6. Дополнительные стили для кнопочки и для форм*/
.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}

.form-control {
    width: 95%;
}

.form1,
.form2 {
    width: 75%;
    margin-right: 40px;
}



/* 8. Адаптивка */
@media only screen and (max-width:659px) {
    #inputlg {
        width: 85%;
    }

    .forms {
        gap: 1px;
        margin-left: 12%;
        margin-top: 15px;
        width: 80%;
    }

    .form-control {
        width: 85%;
    }

    .btn-group .btn {
        margin-left: 30px;
        padding: 1% 6%;
        font-size: 10px;
    }

    hr {
        width: 85%;
    }

    .btn-wrapper {
        flex-direction: column;
    }

    .btn-success {
        width: 200px;
        padding-left: 14px;
    }

    .btn-dark {
        width: 200px;
        padding-left: 10px;
    }
}

@media only screen and (min-width: 250px) {
    .btn-group .btn {
        margin-left: 35px;
        padding: 1% 2%;
        font-size: 11px;
    }

    .forms {
        width: 95%;
        margin-left: 14%
    }
}


@media only screen and (min-width: 310px) {
    .btn-group .btn {
        margin-left: 35px;
        padding: 1% 3.75%;
        font-size: 10px;
    }

    .form-control {
        width: 80%;
    }

    .forms {
        width: 87%;
        margin-left: 12%;
    }
}

@media only screen and (min-width: 350px) {
    .btn-group .btn {
        margin-left: 35px;
        padding: 1% 4.5%;
        font-size: 10px;
    }

    .form-control {
        width: 80%;
    }

    .forms {
        width: 87%;
        margin-left: 12%;
    }
}

@media only screen and (min-width: 380px) {
    .forms {
        width: 75%;
        margin-left: 15%;
    }

    .btn-group .btn {
        margin-left: 30px;
        padding: 1% 5.5%;
        font-size: 10px;
    }
}

@media only screen and (min-width: 540px) {
    .btn-group .btn {
        margin-left: 30px;
        padding: 1% 9%;
        font-size: 10px;
    }
}


@media only screen and (min-width: 660px) {
    hr {
        width: 95%;
    }

    #inputlg {
        width: 90%;
    }

    .form-control {
        width: 90%;
    }


    .btn-group .btn {
        margin-left: 40px;
        font-size: 15px;
        padding: 10px 4%;
    }

    .forms {
        flex-direction: column;
        gap: 10px;
        margin-left: 70%;
        margin-top: -85px;
        width: 30%;
    }


}


@media only screen and (min-width: 800px) {
    hr {
        width: 95%;
    }

    #inputlg {
        width: 90%;
    }

    .btn-group .btn {
        margin-left: 40px;
        font-size: 15px;
        padding: 7px 6%;
    }

    .forms {
        margin-top: -81.5px;
        gap: 5px;
        margin-left: 70%;
        width: 28%;
    }
}


@media only screen and (min-width: 1050px) {
    hr {
        width: 95%;
    }

    #inputlg {
        width: 90%;
    }

    .btn-group .btn {
        margin-left: 40px;
        font-size: 16px;
        padding: 10px 30px;
    }

    .forms {
        margin-top: -70px;
        gap: 10px;
        margin-left: 77%;
        width: 20%;
    }
}


@media only screen and (min-width: 1200px) {
    hr {
        width: 95%;
    }

    #inputlg {
        width: 90%;
    }

    .btn-group .btn {
        margin-bottom: 4%;
        margin-left: 35px;
        font-size: 16px;
        padding: 10px 20px;
    }

    .forms {
        gap: 1px;
        flex-direction: row;
        margin-left: 65%;
        width: 30%;
    }

    .forms .form-select {
        height: 45px;
    }
}


@media only screen and (min-width: 1400px) {
    hr {
        width: 95%;
    }

    #inputlg {
        width: 90%;
    }

    .forms {
        gap: 1px;
        flex-direction: row;
        margin-left: 73%;
        width: 20%;
    }

    .btn-group .btn {
        margin-bottom: 2.5%;
        margin-left: 35px;
        font-size: 16px;
        padding: 10px 40px;
    }
}


/* @media only screen and (max-width: 768px) {
        .btn {
            padding: 8px 16px;
            font-size: 14px;
        }
    } */
/* @media only screen and (max-width: 1850px) {
        .forms {
            flex-direction: column;
            gap: 20px;
            margin-left: 0;
            margin-top: 40px;
            margin-left: -68%;
        }

    } */
</style>
