<script>

// const inputs = document.querySelectorAll('.form-item');

//     inputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             this.style.borderColor = 'blue';
//         });

//         input.addEventListener('blur', function() {
//             this.style.borderColor = '#ccc';
//         });
//     });

export default {
    data() {
        return {
            email: '',
            password: '',
            exPassword: '',
            error: '',
            // isErrorBorder: false,
            // errorBorderOne: {
            //     outline: '2px solid #2a2a2a',
            //     border: 'none'
            // },
            // errorBorderTwo: {
            //     outline: '2px solid #2a2a2a',
            //     border: 'none'
            // },
            // errorBorderThree: {
            //     outline: '2px solid #2a2a2a',
            //     border: 'none'
            // },
        }
    },
    methods: {
        check() {
            if (this.email === '') {
                this.error = '*Вы не ввели Email*'
                //this.errorBorderOne.outline = '2px solid red'
            } else if (this.password === '') {
                this.error = '*Вы не ввели пароль*'
                //this.errorBorderTwo.outline = '2px solid red'
            } else if (this.exPassword === '') {
                this.error = '*Вы не повторили пароль*'
                //this.errorBorderThree.outline = '2px solid red'
            } else {
                this.error = ''
            }
        }
    }
}

</script>

<template>
    <div class="container">
        <h1>Регистрация</h1>
        <form action="#!">
            <input class="form-item form-item-1" v-model="email" placeholder="Email" type="email"  name="" id="">
            <input class="form-item form-item-2" v-model="password" placeholder="Пароль" type="password" name="" id="">
            <input class="form-item form-item-3" v-model="exPassword" placeholder="Повторите пароль" type="password" name="" id="">
        </form>
        <div class="error-end-btn">
            <p class="have_account">Уже есть аккаунт? <a href="#!">Войти</a></p>
            <p class="error">{{ error }}</p>
            <button class="btn-reg" @click="check">Зарегистрироваться</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: #ffffff;
    width: 400px;
    height: 580px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    border-radius: 30px;
    border: solid 3px #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1 {
    font-size: 45px;
    margin-bottom: 50px;
    user-select: none;
}

form {
    display: flex;
    flex-direction: column;
}

.form-item {
    border: 2px solid #2a2a2a;
    border-radius: 10px;
    width: 300px;
    height: 40px;

    margin-bottom: 25px;
    padding-left: 10px;
    padding-right: 10px;
}

.form-item:focus {
    outline: 2px solid #4200FF;
    border: none;
}

.btn-reg {
    margin-top: 10px;

    width: 280px;
    height: 60px;
    border-radius: 12px;
    border: none;
    background-color: #4200FF;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;

    transition: all 100ms;
}

.btn-reg:hover {
    background-color: #2d00aa;
    border-radius: 25px 5px;
}

.btn-reg:active {
    background-color: #240088;
}

.error {
    color: #ff2600;
    height: 20px;
    user-select: none;
}

.have_account {
    font-size: 20px;
    user-select: none;
}

div a {
    text-decoration: none;
    color: #4200FF;
}
</style>