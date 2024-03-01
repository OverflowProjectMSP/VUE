<script>

</script>
<template>

  
    
  <div class="head">
    <h1>Регистрация</h1>
    <hr>
  </div>
  
    <div class="cont">
      
      <div class="mb-3 nickname form">
  <label for="exampleFormControlInput1" class="form-label">Введите никнейм</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Никнейм">
</div>

   <div class="mb-3 emal form">
  <label for="exampleFormControlInput1" class="form-label">Введите почту</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

  <div class="mb-3 pasword form">
  <label for="exampleFormControlInput1" class="form-label">Введите пароль</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Пароль">

  <div class="buttons">
    <button class="login-in">Зарегистрироваться</button>
    <button class="account">Уже есть аккаунт</button>
  </div>
</div>

    </div>  
  

</template>

<style scoped>
 @import url('https://fonts.cdnfonts.com/css/rubik');
    html, template, label, .cont   {
        font-family: 'rubik';
    }
    #app {
        font-family: 'rubik';
    }
   
.cont{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 500px;
    padding: 20px;
}
.form{
   width: 100%;
}
.head hr {
  width: 65%;
}
.head{
  margin-left: 20px;
  width: 50%;
  margin-top: 10px;
}
.form-control{
  border-radius: 10px;
  height: 30px;
}
.login-in{
  border: solid 1px green;
  margin: 5px;
  border-radius: 7px;
  background-color: white;
  color: green;
  margin-top: 10px;
}
.account{
  border: solid 1px green;
  margin: 5px;
  border-radius: 7px;
  background-color: white;
  color: green;
  margin-top: 10px;
}
</style>