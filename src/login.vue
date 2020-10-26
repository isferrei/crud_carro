<template>
  <vs-row vs-justify="center">
  <div class="card-bg"> 
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
       
       <div class="card-login">
          <div class="logo"><img src="@/assets/images/logo/logo-icon.png"></div>
          <vs-input border label-placeholder="Email" color="dark" class="inputx" v-model="fname"/><br>
          <vs-input border
            type="password"
            class="inputx"
            color="dark"
            label-placeholder="Senha"
            v-model="password"
          /><br>
          <vs-button large style="width: 200px" color="#ffd95b" :to="{  }">ENTRAR </vs-button>
        </div>
    </vs-col></div>
  </vs-row>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    title: "login",
    password: "",
    fname: ""
  }),
};
</script>
<style scoped>
*{
  align-items: center;
  
}
.card-bg{
  background-image: url(assets/images/veiculos/renault.png);
  background-attachment: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right;
  width: 100%;
}
.card-login{
  display: flex !important;
  flex-direction: column;
  vertical-align: center;
  margin-top: 200px;
}
.input{
  border-radius: 7px;
}
</style>

