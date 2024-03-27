<script>
export default {
    data() {
        return {
            messages: [],
            username: ``,
            imgProfile: ``,
            message: ``,

            isOpen: false,

            chatImg: `src/assets/chatImg.png`
        }
    },
    methods: {
        addMessage() {
            if(this.message != ``) {
                this.messages.push({
                    imgProfile: `src/assets/chatImg.png`,
                    username: `Аноним`,
                    message: this.message,
                });
                this.message = ``;
                if(this.messages.length > 4) {
                    this.messages.splice(0, 1);
                }
            } else {
                this.message = `Сообщение не может быть пустым, зайка)`;
            }
        }
    }
}
</script>

<template>
    <div class="wrapper-chat">
        <div :class="{'d-none': isOpen}" class="icon-block" @click="this.isOpen = !this.isOpen">
            <img :src="chatImg" alt="Чат форума">
        </div>
        <div class="chat-container bg-body-secondary p-3 rounded-4" :class="{'d-none': !isOpen}">
            <h2 class="d-flex align-items-center gap-2">
                <span @click="this.isOpen = !this.isOpen"><</span> 
                Чат форума: </h2>
            <hr>
            <ul class="list-none d-flex flex-column align-items-start ps-0 gap-2">
                <li class="d-flex flex-column bg-info p-2 rounded-3 flex-wrap w-fit" v-for="message in messages">
                    <div class="profile-info d-flex flex-row align-items-center gap-2">
                        <img class="border rounded-circle" :src="message.imgProfile" alt="Фото профиля">
                        <b class="text-decoration-underline">{{ message.username }}</b>
                    </div>
                    <span class="fs-5 mt-2 d-flex flex-wrap">{{ message.message }}</span>
                </li>
            </ul>
            <div class="down-block d-flex gap-3 align-items-center">
                <textarea v-model="message" class="form-control" row-1 placeholder="Введите ваше сообщение"></textarea>
                <div class="arrow-send border border-black rounded-circle p-2 fw-bold fs-4 d-flex align-items-center 
                justify-content-center" @click="addMessage"> > </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper-chat {
    position: fixed;
    bottom: 40px;
    right: 60px;
}
.chat-container {
    max-width: 630px;
    max-height: 630px;
}
.icon-block img {
    max-width: 70px;
    cursor: pointer;
}
h2 span {
    opacity: 0.5;
    transition: all 200ms;
    cursor: pointer;
}
h2 span:hover {
    opacity: 1;
}
.arrow-send {
    width: 70px;
    height: 65px;
    transition: all 250ms;
    cursor: pointer;
}
.arrow-send:hover {
    background-color: rgb(189, 197, 197);
}
.profile-info img {
    width: 35px;
    height: 35px; 
}
ul li {
    max-width: 600px;
}
@media (max-width: 1236px) {
    .wrapper-chat {
        position: fixed;
        bottom: 20px;
        right: 2px;
    }
    .chat-container {
        max-width: 370px;
        max-height: 650px;
    }
    ul li {
        max-width: 350px;
    }
}
</style>