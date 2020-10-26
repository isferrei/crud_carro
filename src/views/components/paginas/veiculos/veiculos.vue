<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Relação de Veículos
          <vs-button border class="ml-auto btn-cadastrar" @click="cadastrar()"  color="#5444ce" name="cadastrar">
           + Cadastrar
          </vs-button>
          <vs-popup :active.sync="cadastrarVeiculo" title="">
            <cadastrar-veiculo :veiculo="veiculos"></cadastrar-veiculo>
          </vs-popup>
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
              <td><button @click="editar(carro.id)"><vs-icon icon="edit" size="small" color="#bdbdbd"></vs-icon></button></td>
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
  </vs-row>
</template>

<script>
import Carro from '../../../../services/carros';
import cadastrarVeiculo from '@/views/components/paginas/veiculos/cadastrarVeiculo';

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
    errors: []
    }
  },

  components: {
    cadastrarVeiculo,
  },

  mounted(){
    Carro.listar().then(resposta => {
      // console.log(resposta.data)
      this.veiculos = resposta.data
      console.log(this.veiculos)
    })
  },

  watch: {
    
  },
  methods: {
    cadastrar(){
      return this.cadastrarVeiculo = true;
    },

    editar(veiculos){
      return this.cadastrarVeiculo = true;
      // this.carro = carro
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
</style>
<style>
  .con-vs-popup .vs-popup {
    width: 50%;
    height: 500px;
    }
</style>
