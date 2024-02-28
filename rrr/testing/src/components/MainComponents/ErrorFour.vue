<script>

</script>

<template>
    <div class="background">
        <h1 class="text-inset">404</h1>
        <a href="#/main" class="home-link"><button class="home-button">На главную</button></a>
    </div>
</template>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
    

    width: 100%;
    height: 100vh;
    background-color: #2d2d2d;

    
}

/* 404 */

h1 {
    font-size: 220px;
    font-weight: 600;
    margin: 0;

    

    color: #ffffff;
        /* -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #4f4f4f; */
        text-shadow: 7px 7px 30px #858585,
                    -7px -7px 30px #858585
    
}

/* HOME BUTTON */

.home-button {
    width: 310px;
    height: 100px;
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    padding: 0;


    text-shadow: 4px 4px 16px #bbbbbb;

    border: none;
    border-radius: 23px;
    background: linear-gradient(145deg, #292929, #303030);
    box-shadow:  16px 16px 50px #121212,
                -16px -16px 50px #484848;
    transition: all 200ms;

    cursor: pointer;
}
.home-button:hover {
    color: #fff;
    font-weight: 500;

    

    text-shadow: 4px 4px 16px #bbbbbb;

    border: none;

    font-size: 26px;
    border-radius: 23px;
    background: #2d2d2d;
    /* box-shadow: inset 10px 10px 20px #121212,
                inset -13px -13px 26px #484848; */

    box-shadow: 0 0 20px #484848, 
                0px 0px 20px #121212, 
            inset 8px 8px 41px #121212,
            inset -8px -8px 41px #484848;
    transition: all 200ms;
}
</style>