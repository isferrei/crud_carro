<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Relação de Clientes
          <vs-button border class="ml-auto btn-cadastrar"  to="/cadastrarClientes" color="#5444ce" name="cadastrar">
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
              <td><button><vs-icon icon="edit" size="small" color="#bdbdbd"></vs-icon></button></td>
              <td><button><vs-icon icon="cancel" size="small" color="#c30000"></vs-icon></button></td>
            </tr>
            </table>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import Cliente from '../../../../services/clientes';

export default {
  name: "veiculos",
  data: () => ({
    title: "veiculos",
    defaultlist: false,
    headerlist: false,
    iconlist: false,
    contentlist: false,
    avatarlist: false,
    pessoas: []
  }),

  mounted(){
    Cliente.listar().then(resposta => {
      this.pessoas = resposta.data
      console.log(this.pessoas)
    })
  },
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
