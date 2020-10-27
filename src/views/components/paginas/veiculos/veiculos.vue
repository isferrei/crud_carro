<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Relação de Veículos
          <vs-button border class="ml-auto btn-cadastrar" @click="cadastrar()"  color="#5444ce" name="cadastrar">
           + Cadastrar
          </vs-button>
        </h3>

        <vs-list>
          <vs-list-header title="Veículos" color="#5444ce"></vs-list-header>
          <vs-list-item title="Classe A" subtitle="Classe econômica">
            <table>
            <tr v-for="carro of veiculos" :key="carro.id"><td>
              <img src="img" class="miniature-list"/>
              </td>
              <td><p>{{carro.placa}}</p></td>
              <td><p>{{carro.marca}}</p></td>
              <td><p>{{carro.modelo}}</p></td>
              <td><p>{{carro.anoFab}}</p></td>
              <td><p>{{carro.km}}km</p></td>
              <td>
                <vs-chip v-if="carro.status=='Disponivel'" color="success" class="status" :value="carro.status">{{carro.status}}</vs-chip>
                <vs-chip v-else color="danger" class="status" :value="carro.status">{{carro.status}}</vs-chip>
              </td>
              <td><button @click="editar(carro)"><vs-icon icon="edit" size="small" color="#bdbdbd"></vs-icon></button></td>
              <td><button @click="remover(carro)"><vs-icon icon="cancel" size="small" color="#c30000"></vs-icon></button></td>
            </tr>
            </table>
          </vs-list-item>
          <!-- <vs-list-item title="Acura" subtitle="Classe SUV">
            <tr><td>
              <img src="@/assets/images/veiculos/acura.png" class="miniature-list"/>
            </td>
            <td><p>kwn-3124</p></td>
            </tr>
          </vs-list-item> -->
        </vs-list>
      </vs-card>
    </vs-col>
      <vs-col v-show="cadastrarVeiculo" class="cadastro" vs-justify="center" vs-align="center" vs-lg="11" vs-xs="12">
        <div>
        <h3 class="card-title d-flex">
          Cadastrar Veículo
        </h3>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
        <br>
        <h5>Preencha as informações abaixo para cadastrar um veículo:</h5>
        <br>
        <hr/>
        <form @submit.prevent="salvar">
        <table style="display: flex; flex-direction: column; align-items: center;">
          <tr>
            <td><vs-input label-placeholder="Marca" color="dark" class="inputx" name="marca" v-model="carro.marca"/></td>
            <td><vs-input label-placeholder="Modelo" color="dark" class="inputx" name="modelo" v-model="carro.modelo"/></td>
            <td><vs-input label-placeholder="Ano" color="dark" class="inputx" name="ano" v-model="carro.anoFab"/></td>
          </tr> 
          <tr>
            <td><vs-input label-placeholder="Placa" color="dark" class="inputx" name="placa" masked="true" mask="###-####" v-model="carro.placa"/></td>
            <td><vs-input label-placeholder="Kilometragem" color="dark" class="inputx" name="km" v-model="carro.km"/></td>
            <td><vs-input label-placeholder="Status" color="dark" class="inputx" name="status" v-model="carro.status"/></td>
          </tr>
          <tr>
            <td float="left">
              <vs-input label-placeholder="Categoria" color="dark" class="inputx" name="categoria" v-model="carro.categoria"/></td>
            <td><vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload"  text="Carregar imagem" v-model="carro.img" /></td>
          </tr>
          <br>
          <tr style="width: 67%;"><input type="submit" @click="$vs.notify({title:'Salvo com sucesso!',color:'success',position:'top-center'})" class="btn-cadastrar-item" value="Salvar"></tr>
        </table></form>
        </vs-col>
        </div>
      </vs-col>
  </vs-row>
</template>

<script>
import Carro from '../../../../services/carros';
import {TheMask} from 'vue-the-mask';
import { Select } from 'iview';

export default {
  name: "list",
  data(){
    return{
    title: "List",
    defaultlist: false,
    headerlist: false,
    iconlist: false,
    contentlist: false,
    avatarlist: false,
    statusColor: "danger",
    veiculos: [],
    cadastrarVeiculo: false,
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
      img: '',
      errors: [],
    },
    title: "Cadastrar veiculo",
    }
  },
  components: {
    TheMask,
    Select
  },

  mounted(){
    Carro.listar().then(resposta => {
      this.veiculos = resposta.data
      console.log(this.veiculos)
    })
  },

  watch: {
    
  },
  methods: {
     successUpload(){
      this.$vs.notify({color:'success'})
    },

    listar(){
      Carro.listar().then(resposta => {
        this.veiculos = resposta.data
      })
    },

    salvar(){
      Carro.salvar(this.carro).then(resposta => {
      })
    },

    atualizar(){
       this.carro = {}
    },

    cadastrar(){
      if(this.cadastrarVeiculo == true){
        this.cadastrarVeiculo = false;
      }else{
        this.cadastrarVeiculo = true;
      }
    },

    editar(carro){
      this.carro = carro
      this.cadastrarVeiculo = true;
    },

    remover(carro){
      if(confirm('Deseja excluir o veículo?')){
        Carro.apagar(carro).then(resposta => {
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
  .con-vs-popup .vs-popup {
    width: 50%;
    height: 500px;
    }
  .cadastro{
    background-color: #fff;
    padding: 20px !important;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    transition: all .3s ease;
    border-radius: 8px;
  }
</style>
