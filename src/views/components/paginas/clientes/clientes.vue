<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Relação de Clientes
          <vs-button border class="ml-auto btn-cadastrar"  @click="cadastrar()"  color="#5444ce" name="cadastrar">
           + Cadastrar
          </vs-button>
        </h3>

        <vs-list>
          <vs-list-header title="Clientes" color="#5444ce"></vs-list-header>
          <vs-list-item>
            <table>
            <tr v-for="cliente of pessoas" :key="cliente.id"><td>
              <vs-avatar size="40px" color="danger" />
              </td>
              <td><p>{{cliente.nome}}</p></td>
              <td><p>{{cliente.email}}</p></td>
              <td><p>{{cliente.idade}}</p></td>
              <td><p>{{cliente.rg}}</p></td>
              <td><button><vs-icon icon="edit" @click="editar(cliente)" size="small" color="#bdbdbd"></vs-icon></button></td>
              <td><button><vs-icon icon="cancel" @click="remover(cliente)" size="small" color="#c30000"></vs-icon></button></td>
            </tr>
            </table>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
    <vs-col v-show="cadastrarClientes" class="cadastro" vs-justify="center" vs-align="center" vs-lg="11" vs-xs="12">
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
          <tr style="width: 67%;"><input type="submit" @click="$vs.notify({title:'Salvo com sucesso!',color:'success',position:'top-center'})" class="btn-cadastrar-item" value="Salvar"></tr>
        </table>
        </form>
      </vs-col>
    </vs-col>
  </vs-row>
</template>

<script>
import Cliente from '../../../../services/clientes';

export default {
  name: "clientes",
  data: () => ({
    title: "clientes",
    defaultlist: false,
    headerlist: false,
    iconlist: false,
    contentlist: false,
    avatarlist: false,
    pessoas: [],
    cadastrarClientes: false,
    errors: [],
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
  }),
  

  mounted(){
    Cliente.listar().then(resposta => {
      this.pessoas = resposta.data
      console.log(this.pessoas)
    })
  },

  methods: {
    cadastrar(){
      return this.cadastrarClientes = true;
    },

    editar(cliente){
      this.cliente = cliente
      return this.cadastrarClientes = true;
    },
    successUpload(){
      this.$vs.notify({color:'success'})
    },

    atualizar(){
       this.cliente = {}
    },

    salvar(){
      var self = this;
      Cliente.salvar(this.cliente).then(resposta => {
      })
    },

    remover(cliente){
      if(confirm('Deseja excluir o veículo?')){
        Cliente.apagar(cliente).then(resposta => {
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    }
  }
};
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
.miniature-list{
  width: 150px;
  max-height: 150px;
  margin: 10px;
}
table tr td{
  padding: 0px 30px 0px 30px;
  vertical-align: middle;
}
button{
  background-color:transparent;
  border: none;
}
.cadastro{
    background-color: #fff;
    padding: 20px !important;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    transition: all .3s ease;
    border-radius: 8px;
  }
</style>
