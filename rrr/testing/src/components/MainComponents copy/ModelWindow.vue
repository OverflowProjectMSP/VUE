<script>

</script>

<template>
    <div class="window">
        <div class="close">
            <button class="btn-close">X</button>
        </div>
        <h3>Что вы хотите сделать?</h3>
        <div class="buttons">
            <form action="#!">
                <button class="btn">Создать статью</button>
            </form>
            <form action="#!">
                <button class="btn">Создать вопрос</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

.window {
    background-color: #ffffff;
    border: 4px solid #2a2a2a;
    width: 500px;
    height: 300px;
    border-radius: 30px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    position: relative;

    font-family: "Rubik", sans-serif;
}

.btn {
    width: 170px;
    height: 50px;
    border-radius: 12px;
    border: none;
    background-color: #4200FF;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
}

.buttons {
    display: flex;
    gap: 20px;
}

.close {
    width: 50px;
    height: 50px;
    background-color: #2a2a2a;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px 16px 0px 16px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-close {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    font-weight: 500;

    cursor: pointer;
}
</style>