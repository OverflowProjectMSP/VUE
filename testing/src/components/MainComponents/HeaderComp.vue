<script>
import BlindWindow from '../СomponetsForPages/BlindWindow.vue'

export default {

  components: {
    BlindWindow,
  },

  data() {
    return {
      Show: false,
      Errors: [{
        title: `Функция в разработке.`,

      }]
    }
  },
  methods: {
    Close(Show) {
      this.Show = !this.Show;

    },
    Open() {
      this.Show = !this.Show;
    }
  }
}

</script>
<template>


  <header>
    <nav class="navbar navbar-expand-xl  d-flex align-items-center rounded-0">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#/Main">
          <div class="logo-container mt-1"><img src="../../assets/apple-touch-icon@2.png" alt="" class="logo"></div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="container-contant"></div>
          <h4 class="nav-item mr-0 ml-0">
            <a class="nav-link mt-2" aria-current="page" href="#/Main">StackOverflow</a>
          </h4>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mb-2">
            <li class="nav-item mt-1" style="cursor: pointer;">
              <a class="nav-link text-white" href="#/Quetions">Вопросы</a>
            </li>
            <li class="nav-item dropdown mt-1">
              <a class="nav-link  text-white" href="#/States">
                Статьи
              </a>

            </li>
            <li class="nav-item mt-1" style="cursor: pointer;">
              <a class="nav-link text-white" aria-disabled="true" href="#/Forum">Форум</a>
            </li>
          </ul>
          <div class="container-form">

          </div>
          <form class="d-flex form" role="search">
            <input class="form-control  inp " type="search" placeholder="Найти статью" aria-label="Search">

          </form>
          <div class="them-container" @click="Open">
            <img src="../../assets/sun_112421.png" alt="" class="them">
          </div>
          <div class="ava-container">
            <a href="#/Profile"> <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/1578906/pub_5cdbdfbd635d0800b447ae37_5cdbdfc2e1368c00b3e27ce3/scale_1200"
                alt="" class="ava"></a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <blind-window v-if="Show" :title="Errors[0].title" :Show="Show" @Close="Close" class="model modal" />

</template>
<style scoped>
.icon-btn {
  margin-top: -20px;
}

header {
  background-color: #3B82F6;
  width: auto;
  border-radius: 0px 0px 0px 0px;
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

.form input {
  width: 350px;
}

.them {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-left: 3px;
  cursor: pointer;

}

.button-search {
  background-color: white;
  color: black;
}

.button-search:hover {
  background-color: rgb(255, 255, 255);
  color: white;
  transition: all 1s;
}

header {
  width: auto !important;

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
  margin-left: max(5vw, 60px);
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
  width: 440px;
  border-radius: 9px;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: rgb(255, 255, 255);

}

.navbar-toggler-icon {
  border-radius: 10px;
  width: 50px;
  height: 50px;
}

@media (max-width: 1200px) {

  .navbar-nav {
    gap: 0px;
    margin-left: 14px;
  }

  .ava {
    margin-top: -60px;
  }

  .them {
    margin-left: 7%;
    margin-top: 5%;
  }
}

@media (max-width: 1000px) {

  .navbar-nav {
    gap: 0px;
    margin-left: 14px;
  }

  .ava {
    margin-top: -60px;
  }

  .them {
    margin-left: 9%;
    margin-top: 5%;
  }

  .form input {
    width: 210px;
  }
}

@media (max-width: 800px) {

  .them {
    margin-left: 10%;
    margin-top: 5%;
  }
}

@media (max-width: 600px) {

  .them {
    margin-left: 17%;
    margin-top: 5%;
  }
}

@media (max-width: 420px) {

  .them {
    margin-left: 20%;
    margin-top: 5%;
  }
}

@media (max-width: 340px) {

  .them {
    margin-left: 25%;
    margin-top: 5%;
  }
}
</style>