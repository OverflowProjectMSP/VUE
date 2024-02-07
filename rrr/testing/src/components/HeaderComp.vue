<script>


</script>
<template>
  
 
        <header>
            <nav class="navbar navbar-expand-lg  d-flex align-items-center rounded-0">
              <div class="container-fluid ">
                <a class="navbar-brand" href="#"><div class="logo-container mt-1"><img src="..//assets/apple-touch-icon@2.png" alt="" class="logo"></div></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"><img src="" alt="" srcset=""></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="container-contant"></div>
                    <h4 class="nav-item mr-0 ml-0">
                      <a class="nav-link mt-2" aria-current="page" href="#">StackOverflow</a>
                    </h4>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mb-2">
                      <li class="nav-item mt-1">
                        <a class="nav-link disabled text-white" href="#">Форум</a>
                      </li>
                      <li class="nav-item dropdown mt-1">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Статьи
                        </a>
                        <ul class="dropdown-menu text-white">
                          <li><a class="dropdown-item text-black" href="#">Java Script</a></li>
                          <li><a class="dropdown-item text-black" href="#">Python</a></li>
                          <li><hr class="dropdown-divider text-black"></li>
                          <li><a class="dropdown-item text-black" href="#">Топ статей</a></li>
                        </ul>
                      </li>
                      <li class="nav-item mt-1">
                        <a class="nav-link disabled text-white" aria-disabled="true">FAQ</a>
                      </li>
                    </ul>
                    <div class="container-form">
        
                    </div>
                    <form class="d-flex form" role="search">
                      <input class="form-control me-2 inp" type="search" placeholder="Найти статью" aria-label="Search">
                  
                    </form>
                    <div class="them-container">
                      <img src="../assets/sun_112421.png" alt="" class="them">
                  </div>
                    <div class="ava-container">
                        <img src="https://avatars.dzeninfra.ru/get-zen_doc/1578906/pub_5cdbdfbd635d0800b447ae37_5cdbdfc2e1368c00b3e27ce3/scale_1200" alt="" class="ava">
                    </div>
                  </div>
              </div>
                
              </nav>
            </header>

</template>
<style scoped>
header{
    background-color: #3B82F6;
    width: auto;
}


.ava {
    width: 50px;
    height: 50px;
    margin-right: 2px;
    margin-left: 5px;
    border-radius: 100%;
    cursor: pointer;
}
.form {
    margin-right: 20px;

}
.form input{
    width: 350px;
}

.them {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    margin-left: 3px;
    
}
.button-search {
    background-color: white;
    color: black;
}
.button-search:hover {
    background-color: black;
    color: white;
    transition: all 1s;
}
header {
    width:auto !important;

}



.logo {
    width: 50px;
    height: 50px;
    margin-right: -15px;
    margin-left: 0px;
    align-items: center;
}
.container-form {
    margin-top: 0px;
    margin-bottom: 10px;
}
.navbar-nav {
    display: flex;
    gap: 50px;
    margin-left: max(5vw,60px);
    margin-bottom: 1px;
}
.collapse {
    margin-top: 0px;

    
}
.collapse h4 {
    
    margin-top: 5.5px;
    margin-right: 10px;
    margin-left: 0px;
    font-weight: 400;
}
.nav-item {
    color: white;
}
li {
    font-size: 20px;
    font-weight: 500;
}
.navbar {
    height: 1%;
    border-radius: 10px;
    display: flex;
}
.inp {
   width: px;
   border-radius: 9px;
}

.nav-link {
    color: white;
}
.nav-link:hover {
    color: black;

}
.navbar-toggler-icon {
  border: 0.0001px solid rgba(4, 18, 21, 0.548);
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
@media  (max-width: 360px;) {
  header {
    background: black;
  }
}
</style>