<template>
  <div> 
    <vs-row class="main-div">
      <tr class="box-1">
        <td>
        <div class="card-img">
          <img src="@/assets/images/pic1.png" width="auto" height="300px">
        </div>
        </td>
       <td>
       <div class="card-login">
          <div class="logo"><img src="@/assets/images/logo/logo-icon.png"></div>
        <form @submit.prevent="login()">
          <vs-input border label-placeholder="Email" color="dark" class="inputx" v-model="fname"/>
          <vs-input border
            type="password"
            class="inputx"
            color="dark"
            label-placeholder="Senha"
            v-model="password"
          /><br><br>
          </form>
          <vs-button large class="login" color="#fff0b3" @click="login">ENTRAR</vs-button>
          <vs-button class="cadastrar" to="/cadastrarUsuario">Ainda não sou cadastrado</vs-button>
        </div>
        </td>
      </tr>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    title: "login",
    password: "",
    fname: ""
  }),
  methods: {
    login(){
      this.$router.replace("dashboard");
    }
  }
};


</script>
<style scoped>
*{
  align-items: center;
}
.cadastrar{
  margin-top: 10px;
  background-color: transparent !important;
  border: none;
  text-decoration: none;
  color: #fff0b3;
  cursor: pointer;
}
.cadastrar:hover{
  text-decoration: underline !important;
}
.box-1{
  display: flex;
  width: 50%;
  flex-direction: row;
}
.main-div{
  justify-content: center;
}
.card-img{
  display: flex;
  margin: 230px 0px 0px 0px;
  box-shadow: 1px 1px 23px #8888;
}
#card-bg{
  /* background-image: url(assets/images/veiculos/renault.png); */
  background-attachment: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right;
  width: 50%;
  display: flex;
  flex-direction: row;
}
.card-login{
  display: flex !important;
  flex-direction: column;
  vertical-align: center;
  margin-top: 228px;
  background-color: #8080ff;
  width: 130%;
  color: #fff;
  box-shadow: 1px 1px 23px #8888;
  height: 300px;
  padding: 25px 20px 25px 20px;
}
.input{
  border-radius: 7px;
  color: #fff;
}
.login{
  width: 200px; 
  color: #000; 
  font-weight: 700;
}
</style>

