<template>
  <vs-row vs-justify="center" style="overflow-x: hidden;">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
        <h3 class="card-title d-flex">
         Cadastrar veículo
        </h3>
        <br>
        <h5>Preencha as informações abaixo para cadastrar um veículo:</h5>
        <br>
        <hr/>
        <form @submit.prevent="salvar()" style="overflow-y: scroll; height: 300px;">
        <table style="display: flex; flex-direction: column; align-items: center;">
          <tr>
            <td><vs-input label-placeholder="Marca" color="dark" class="inputx" name="marca" v-model="carro.marca"/>{{carro.marca}}</td>
            <td><vs-input label-placeholder="Modelo" color="dark" class="inputx" name="modelo" v-model="carro.modelo"/>{{carro.modelo}}</td>
            <td><vs-input label-placeholder="Ano" color="dark" class="inputx" name="ano" v-model="carro.anoFab"/>{{carro.anoFab}}</td>
          </tr> 
          <tr>
            <td><vs-input label-placeholder="Placa" color="dark" class="inputx" name="placa" v-model="carro.placa" :value="veiculo.placa"/></td>
            <td><vs-input label-placeholder="Kilometragem" color="dark" class="inputx" name="km" v-model="carro.km" :value="veiculo.km"/></td>
            <td><vs-input label-placeholder="Status" color="dark" class="inputx" name="status" v-model="carro.status" :value="veiculo.status"/></td>
          </tr>
          <tr>
            <td float="left"><vs-input label-placeholder="Categoria" color="dark" class="inputx" name="categoria" v-model="carro.categoria"/></td>
            <td><vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload"  text="Carregar imagem" v-model="carro.img" /></td>
          </tr>
          <br>
          <tr style="width: 67%;"><input type="submit" @click="$vs.notify({title:'Salvo com sucesso!',color:'success',position:'top-center'})" class="btn-cadastrar" value="Salvar"></tr>
        </table></form>
    </vs-col>
  </vs-row>
</template>

<script>
import Carro from '../../../../services/carros';

export default {
  name: "cadastrarVeiculo",
  data: () => ({
    marca:'',
    modelo:'',
    placa:'',
    categoria:'',
    status:'',
    carro:{
      marca: '',
      modelo: '',
      anoFab: '',
      placa: '',
      km: '',
      status: '',
      categoria: '',
      img: ''
    },
    veiculos: [],
    title: "Cadastrar veiculo",
  }),
  props: ["veiculo"],

  methods: {
     successUpload(){
      this.$vs.notify({color:'success'})
    },
    salvar(){

    if(!this.carro.id){
      Carro.salvar(this.carro).then(resposta =>{
        this.carro = {}
          alert('Cadastrado com sucesso!')
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
      })
    }else{
      Carro.atualizar(this.carro).then(resposta =>{
        this.carro = {}
          alert('Atualizado com sucesso!')
          this.listar()
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },

    editar(carro){
      this.carro = carro
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
.btn-cadastrar{
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
