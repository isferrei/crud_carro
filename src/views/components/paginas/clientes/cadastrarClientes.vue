<template>
  <vs-row vs-justify="center" style="overflow-x: hidden;">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
        <h3 class="card-title d-flex">
         Cadastrar cliente
        </h3>
        <br>
        <h5>Preencha as informações abaixo para cadastrar um cliente:</h5>
        <br>
        <hr/>
        <form @submit.prevent="salvar" style="overflow-y: scroll; height: 300px;">
        <table style="display: flex; flex-direction: column; align-items: center;">
          <tr>
            <td><vs-input label-placeholder="Nome" color="dark" class="inputx" name="nome" v-model="cliente.nome"/></td>
            <td><vs-input label-placeholder="Email" color="dark" class="inputx" name="email" v-model="cliente.email"/></td>
          </tr> 
          <tr>
            <td><vs-input label-placeholder="Idade" color="dark" class="inputx" name="idade" v-model="cliente.idade"/></td>
            <td><vs-input label-placeholder="RG" color="dark" class="inputx" name="rg" v-model="cliente.rg"/></td>
          </tr>
          <br>
          <tr style="width: 67%;"><input type="submit" @click="$vs.notify({title:'Salvo com sucesso!',color:'success',position:'top-center'})" class="btn-cadastrar" value="Salvar"></tr>
        </table>
        </form>
    </vs-col>
  </vs-row>
</template>

<script>
import Cliente from '../../../../services/clientes';

export default {
  name: "cadastrarClientes",
  data: () => ({
    nome:'',
    email:'',
    idade:'',
    rg:'',
    cliente:{
      nome: '',
      email: '',
      idade: '',
      rg: '',
      errors: []
    },
    title: "Cadastrar cliente",
  }),
  props: ["pessoas"],
  methods: {
     successUpload(){
      this.$vs.notify({color:'success'})
    },
    salvar(){
      var self = this;
      Cliente.salvar(this.cliente).then(resposta => {
      })
    },
  }
  
}
</script>
<style scoped>
.con-input-upload {
  height: 87px !important;
}
td{
  width: auto;
}
.miniature-list{
  width: 150px;
  max-height: 150px;
  margin: 10px;
}
table tr td{
  padding: 0px 10px 0px 10px;
  vertical-align: middle;
}
button{
  border: none;
}
.btn-cadastrar-item{
  border: none;
  border-radius: 7px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  width: 100%;
  background-color: #ffa726;
}
</style>
<style>
.vs-notifications{
  z-index: 9999999999;}
</style>
