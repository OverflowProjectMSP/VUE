<script>



export default {
    components: {


    },

    data() {
        return {
            Vid: false,
            Input: ``,
            sloz: ``,
            good: `Вопрос готов для предпросмотра.`,
            nogood: `Заполните все поля корректно`,
            greenlabel: true,
            color: `green`,
            language: ``,
            error: ''

        }
    },
    methods: {
        prevue() {
            if (this.Input.length > 0 && this.sloz.length <= 7 && this.language.length >= 3) {
                this.color = `green`;
                this.Vid = !this.Vid;
                this.error = this.good;


            } else {
                console.log(`Ошибка`)
                this.Vid = this.Vid;
                this.error = this.nogood;
                this.color = `red`;



            }

        }
    }
}

</script>
<template>
    <HeaderComp />
    <main>

        <div class="container">
            <div class="row pt-4">
                <div class="col-12">
                    <h3>Новый вопрос</h3>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12">
                    <h4>Суть вопроса</h4>
                </div>
            </div>
            <div class="row" style="display: flex; gap: 40px;">
                <div class="col-12">
                    <h5 style="color: gray; font-weight: 400;">Сформулируйте вопрос так, чтобы сразу было понятно, о чём
                        речь.</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <textarea class="text-area text-box multi-line" data-val="true"
                            data-val-length="Maximum = 2045 characters" data-val-length-max="10000" id="texting"
                            name="info" cols="200" rows="3" style="border-color: #D3D3D3; border-radius: 5px;"
                            v-model="Input" maxlength="35"></textarea>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h4>Детали вопроса</h4>
                </div>
            </div>
            <div class="row" style="display: flex; gap: 40px;">
                <div class="col-12">
                    <h5 style="color: gray; font-weight: 400;">Опишите в подробностях свой вопрос, чтобы получить более
                        точный ответ.</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <textarea class="text-area text-box multi-line yy" data-val="true"
                            data-val-length="Maximum = 2045 characters" data-val-length-max="10000" id="info"
                            name="info" cols="200" rows="3"
                            style="border-color: #D3D3D3; border-radius: 5px;"></textarea>

                    </div>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-6">
                    <h4>Сложность вопроса</h4>
                </div>
                <div class="col-6">
                    <h4>Ваш язык программирования</h4>
                </div>

                <div class="row pt-1">
                    <div class="col-6">
                        <select class="form-select" v-model="sloz">
                            <option value="Простой">Простой</option>
                            <option value="Средний">Средний</option>
                            <option value="Сложный">Сложный</option>
                        </select>

                    </div>
                    <div class="col-6">
                        <select class="form-select" v-model="language">
                            <option value="Python">Python</option>
                            <option value="HTML5">HTML5</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="C++">C++</option>
                        </select>

                    </div>
                </div>
                <div class="row pt-5 block">
                    <div class="col-6">
                        <button id="save"><b>Опубликовать</b></button>
                    </div>
                    <div class="col-6">
                        <button id="preview" @click="prevue"><b>Предпосмотр</b></button>
                    </div>
                </div>

                <p class="error" :class="color">{{ error }}</p>
                <!-- виджет -->
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
        </div>



    </main>
</template>
<style scoped>
#save {
    background-color: rgb(255, 255, 255);
    color: #7ac97a;
    border-color: #90EE90;
    border-radius: 5px;
    padding: 5px 15px;
    text-align: center;
    transition: all 300ms;
}

#preview {
    background-color: rgb(255, 255, 255);
    color: #7ac97a;
    border-color: #90EE90;
    border-radius: 5px;
    padding: 5px 15px;
    text-align: center;
    transition: all 300ms;
}

#preview:hover {
    background-color: #90EE90 !important;
    color: #2c2c2c;
}

#save:hover {
    background-color: #90EE90 !important;
    color: #000;
}

.block {
    margin-bottom: 50px;
}

.text-area {
    padding: 10px;

}

/* стили лейбла */

.green {
    color: green;
}

.red {
    color: red;
}


/* тут стили виджета */

:root {
    --size-20: 20px;
    --size-26: 26px;
    --size-22: 22px;
    --size-18: 18px;
}

.t-alig-c {
    text-align: center;
}

/* виджет с вопросами */
.vid {
    background-color: #EEF1F4;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    margin-bottom: 50px;

}

/* общее расположение элементов */

.right {
    display: flex;
    align-items: center;
}

.right-in {
    display: flexbox;
}

.right p {
    margin: 0;
    margin: 0;
    color: #AEB8BC;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/* расцветовка */
.light {
    color: #488D57
}

.middle {
    color: #D8A326;
}

.hard {
    color: #D9382E;
}

/* левая чать виджета */

/* Верх */
.top-1 {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
}

.top-1 p {
    margin: 0;
}

.t {
    vertical-align: middle;
    width: 10px;
    height: 10px;
}

/* серидина */
.mid-1 {
    font-size: 28px;
}

.mid-1 p {
    margin: 0;
}

/* низ */
.bottom-1 {
    display: flex;
    font-size: 15px;
    color: #AEB8BC;
}

.el {
    border-right: 1px solid #AEB8BC;
    padding: 7px;
}

.el-d {
    border-right: none;
    padding: 7px;
}

.-d {
    border-right: none;
}

.el p {
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

/* Адаптивка */
@media(max-width: 1200px) {
    .q {
        font-size: var(--size-20);
    }
}

@media(max-width: 992px) {
    .q {
        font-size: var(--size-18);
    }

    .quest {
        margin: 0 15%;
    }

    .mid-1 p {
        font-size: 24px;
    }

}

@media(max-width: 576px) {
    .q {
        font-size: var(--size-18);
    }

    .quest {
        margin: 0 15%;
    }

    .mid-1 p {
        font-size: var(--size-20);
    }

    .bottom-1 {
        font-size: 13px;
    }

    .right p {
        font-size: var(--size-18);
    }

    .imp-1 {
        padding-top: 13px;
    }
}

@media(max-width: 768px) {
    .q {
        font-size: var(--size-18);
    }

    .quest {
        margin: 0 15%;
    }

    .mid-1 p {
        font-size: var(--size-20);
    }

    .bottom-1 {
        font-size: 13px;
    }

    .right p {
        font-size: var(--size-18);
    }

    .imp-1 {
        padding-top: 13px;
    }
}
</style>