<script>
export default {
    data() {
        return {
            langueges: ['TS', 'PHP', 'Python', 'JS', 'C#', 'Ruby', 'C++', 'Go', 'Java', 'Kotlin'],
            stylesLang: ['ts', 'php', 'py', 'js', 'cs', 'ruby', 'cpp', 'go', 'ja', 'ko'],

            index: 0,
            index1: 1,
            index2: 2,
            index3: 3,
            index4: 4,
            index5: 5,
        }
    },
    methods: {
        nextLang() {
            this.index++;
            this.index1++;
            this.index2++;
            this.index3++;
            this.index4++;
            this.index5++;
            if (this.index == this.langueges.length) {
                this.index = 0;
            } else if (this.index1 == this.langueges.length) {
                this.index1 = 0;
            } else if (this.index2 == this.langueges.length) {
                this.index2 = 0;
            } else if (this.index3 == this.langueges.length) {
                this.index3 = 0;
            } else if (this.index4 == this.langueges.length) {
                this.index4 = 0;
            } else if (this.index5 == this.langueges.length) {
                this.index5 = 0;
            }
        },
        prevLang() {
            this.index--;
            this.index1--;
            this.index2--;
            this.index3--;
            this.index4--;
            this.index5--;
            if (this.index < 0) {
                this.index = this.langueges.length - 1;
            } else if (this.index1 < 0) {
                this.index1 = this.langueges.length - 1;
            } else if (this.index2 < 0) {
                this.index2 = this.langueges.length - 1;
            } else if (this.index3 < 0) {
                this.index3 = this.langueges.length - 1;
            } else if (this.index4 < 0) {
                this.index4 = this.langueges.length - 1;
            } else if (this.index5 < 0) {
                this.index5 = this.langueges.length - 1;
            }
        },
    }
}
</script>

<template>
    <div class="pagecenter">
        <hr>
        <p class="center-desc">Здесь вы можете задать вопросы по таким языкам <br> программирования как</p>
        <div class="languages">
            <button @click="prevLang" class="btn-arrow leftarrow">&lt;</button>
            <div class="lang-items">
                <div class="lang-item lang-item-col-1" :class="stylesLang[index]">{{ langueges[index] }}</div>
                <div class="lang-item lang-item-col-2" :class="stylesLang[index1]">{{ langueges[index1] }}</div>
                <div class="lang-item lang-item-col-3" :class="stylesLang[index2]">{{ langueges[index2] }}</div>
                <div class="lang-item lang-item-col-4" :class="stylesLang[index3]">{{ langueges[index3] }}</div>
                <div class="lang-item lang-item-col-5" :class="stylesLang[index4]">{{ langueges[index4] }}</div>
                <div class="lang-item lang-item-col-6" :class="stylesLang[index5]">{{ langueges[index5] }}</div>
            </div>
            <button @click="nextLang" class="btn-arrow rightarrow">&gt;</button>
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

html,
body {
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
    cursor: pointer;
}

.lang-item:hover {
    transition: all 300ms;
    transform: scale(1.4);
}

.ts {
    background-color: #017ACC;
    color: hsl(0, 0%, 100%);
    font-weight: 600;
}

.ts:hover {
    background-color: #005e9d;
}

.ts:active {
    background-color: #004877;
}

.php {
    background-color: #777BB3;
    color: #000;
    font-weight: 600;
}

.php:hover {
    background-color: #5c5f91;
}

.php:active {
    background-color: #42446b;
}

.py {
    background-color: #3773A5;
    color: #000;
    font-weight: 600;
}

.py:hover {
    background-color: #2a587e;
}

.py:active {
    background-color: #214562;
}

.js {
    background-color: #FFE500;
    color: #000;
    font-weight: 600;
}

.js:hover {
    background-color: #c4b000;
}

.js:active {
    background-color: #a19100;
}

.cs {
    background-color: #7455DC;
    color: #fff;
    font-weight: 600;
}

.cs:hover {
    background-color: #5a42aa;
}

.cs:active {
    background-color: #433081;
}

.ruby {
    background-color: #A51501;
    color: #F08E74;
    font-weight: 600;
    -webkit-text-stroke: 0.5px black;
}

.ruby:hover {
    background-color: #800f00;
}

.ruby:active {
    background-color: #670c00;
}

.go {
    background-color: #3be6e6;
    color: #000;
    font-weight: 600;
}

.go:hover {
    background-color: #1fbebe;
}

.go:active {
    background-color: #1bafaf;
}

.cpp {
    background-color: #3b71e6;
    color: #fff;
    font-weight: 600;
}

.cpp:hover {
    background-color: #2954b3;
}

.cpp:active {
    background-color: #1e49a7;
}

.ja {
    background-color: #c00909;
    color: #fff;
    font-weight: 600;
}

.ja:hover {
    background-color: #990b0b;
}

.ja:active {
    background-color: #7e0b0b;
}

.ko {
    background-color: #9429eb;
    color: #fff;
    font-weight: 600;
}

.ko:hover {
    background-color: #741dbb;
}

.ko:active {
    background-color: #5e1997;
}

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
    user-select: none
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
    user-select: none;
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
    cursor: pointer;
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

    hr {
        width: 100%;
    }
}

@media (max-width: 950px) {
    .languages {
        gap: 10px;
    }

    .lang-items {
        gap: 10px
    }

    .lang-item-col-5,
    .lang-item-col-6 {
        display: none;
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

    .lang-item-col-3,
    .lang-item-col-4,
    .lang-item-col-5,
    .lang-item-col-6 {
        display: none;
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

    .lang-item-col-2,
    .lang-item-col-3,
    .lang-item-col-4,
    .lang-item-col-5,
    .lang-item-col-6 {
        display: none;
    }
}
</style>