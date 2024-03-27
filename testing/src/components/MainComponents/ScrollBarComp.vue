<script>
export default {
    data() {
        return {
            devolepers: [
                {
                    name: `kosty_py`,
                    role: `Тимлид/Старший бекенд разработчик`,
                    imageProfileDS: `kosty-py.png`
                },
                {
                    name: `kinestrik`,
                    role: `Заместитель тимлида/Старший фронтенд разработчик`,
                    imageProfileDS: `Kinestrick.png`
                },
                {
                    name: `therisingdream`,
                    role: `Заместитетель ведущего Фронтенд разработчика`,
                    imageProfileDS: `therisingdream.png`
                },
                {
                    name: `febolo`,
                    role: `Заместитель ведущего Бекенд разработчика`,
                    imageProfileDS: `febolo.png`
                },
                {
                    name: `habbock`,
                    role: `Фронтенд разработчик`,
                    imageProfileDS: `hebber.png`
                },
                {
                    name: `kenmaxd`,
                    role: `Фронтенд разработчик`,
                    imageProfileDS: `kenma.gif`
                },
                {
                    name: `cudavlad`,
                    role: `Фронтенд разработчик`,
                    imageProfileDS: `curvavlad.png`
                },
                {
                    name: `garleenn`,
                    role: `Фронтенд разработчик`,
                    imageProfileDS: `garleen.png`
                },
                {
                    name: `russia_top_1`,
                    role: `Главный дизайнер`,
                    imageProfileDS: `russia_top_1.png`
                },
            ],
            index: 0
        }
    },
    methods: {
        nextDev() {
            if(this.index > 0) {
                this.index--;
            }
        },
        prevDev() {
            if(this.index < this.devolepers.length) {
                this.index++;
            }
        },
    }
}
</script>

<template>
    <hr>
<div class="develop d-flex gap-3 justify-content-center align-items-center gap-2 mx-5 flex-column my-4">
    <h1>Команда разработчиков</h1>
    <div class="dev-container d-flex flex-row">
        <div @click="nextDev" role="button" class="arrow arrow-left mx-5 d-flex justify-content-center align-items-center gap-2 fs-1 fw-bold user-select-none"> < </div>
        <div class="collaps-container d-flex justify-content-center flex-wrap gap-4">
            <div class="dev-card d-flex flex-column gap-0 align-items-center">
                <img class="rounded-2 user-select-none" :src="`src/assets/` + devolepers[index].imageProfileDS" :alt="devolepers[index].name">
                <h4 class="mt-2">{{ devolepers[index].name }}</h4>
                <span class="text-center">{{ devolepers[index].role }}</span>
            </div>
            <div class="dev-card dev-card-2 d-flex flex-column gap-0 align-items-center">
                <img class="rounded-2 user-select-none" :src="`src/assets/` + devolepers[index + 1].imageProfileDS" :alt="devolepers[index].name">
                <h4 class="mt-2">{{ devolepers[index + 1].name }}</h4>
                <span class="text-center">{{ devolepers[index + 1].role }}</span>
            </div>
            <div class="dev-card dev-card-3 d-flex flex-column gap-0 align-items-center">
                <img class="rounded-2 user-select-none" :src="`src/assets/` + devolepers[index + 2].imageProfileDS" :alt="devolepers[index].name">
                <h4 class="mt-2">{{ devolepers[index + 2].name }}</h4>
                <span class="text-center">{{ devolepers[index + 2].role }}</span>
            </div>
            <div class="dev-card dev-card-4 d-flex flex-column gap-0 align-items-center">
                <img class="rounded-2 user-select-none" :src="`src/assets/` + devolepers[index + 3].imageProfileDS" :alt="devolepers[index].name">
                <h4 class="mt-2">{{ devolepers[index + 3].name }}</h4>
                <span class="text-center">{{ devolepers[index + 3].role }}</span>
            </div>
        </div>
        <div @click="prevDev" role="button" class="arrow arrow-right mx-5 d-flex justify-content-center align-items-center gap-2 fs-1 fw-bold user-select-none"> > </div>
    </div>
</div>
<div class="footer-container pt-5 p-4 bg-primary w-100 h-100 d-flex flex-column align-items-center text-white">
    <h4>UpFollow</h4>
</div>

</template>

<style scoped>
.dev-card {
    max-width: 250px;
}
.dev-card img {
    max-width: 250px;
}
@media (max-width: 1624px) {
    .dev-card-2, .dev-card-3 {
        display: none !important;
    }
}
@media (max-width: 1024px) {
    .dev-card-2 {
        display: none !important;
    }
}
@media (max-width: 880px) {
    .dev-card-2, .dev-card-3, .dev-card-4 {
        display: none !important;
    }
}
@media (max-width: 850px) {
    hr {
        margin-top: 200px !important;
    }
    .develop {
        margin: 30px 10px !important;
    }
    .arrow {
        margin: 0 20px !important;
    }
}
</style>