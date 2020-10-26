<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Locações
        </h3>
        <vs-list>
          <vs-list-header title="" color="#5444ce"></vs-list-header>
            <table>
            <tr v-for="locacao of itens" :key="locacao.id"><td>
              <img src="@/assets/images/veiculos/ford.png" class="miniature-list"/>
              </td>
              <td><p>{{locacao.usuarioId}}</p></td>
              <td><p>{{locacao.carroId}}</p></td>
              <td><p>{{locacao.valor}}</p></td>
              <td><p>{{locacao.createdAt}}</p></td>
              <td><button><vs-icon icon="edit" size="small" color="#bdbdbd"></vs-icon></button></td>
              <td><button><vs-icon icon="cancel" size="small" color="#c30000"></vs-icon></button></td>
            </tr>
            </table>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import Locacao from '../../../../services/locacaos';

export default {
  name: "Locações",
  data: () => ({
    title: "Locações",
    defaultlist: false,
    headerlist: false,
    iconlist: false,
    contentlist: false,
    avatarlist: false,
    itens: []
  }),

   mounted(){
    Locacao.listar().then(resposta => {
      console.log(resposta.data)
      this.itens = resposta.data
      console.log(this.itens)
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
