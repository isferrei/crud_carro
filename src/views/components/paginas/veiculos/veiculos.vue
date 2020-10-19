<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Relação de Veículos
          <vs-button border class="ml-auto btn-cadastrar" color="#5444ce" name="cadastrar">
           + Cadastrar
          </vs-button>
        </h3>

        <vs-list>
          <vs-list-header title="Veículos" color="#5444ce"></vs-list-header>
          <vs-list-item title="Ford KA" subtitle="Classe econômica">
            <table>
            <tr><td>
              <img src="@/assets/images/veiculos/ford.png" class="miniature-list"/>
              </td>
              <td><p>kwn-3124</p></td>
              <td><p>Ford</p></td>
              <td><p>2014 flex/hatch</p></td>
              <td><vs-chip color="danger">alugado</vs-chip></td>
              <td><button><vs-icon icon="edit" size="small" color="#bdbdbd"></vs-icon></button></td>
              <td><button><vs-icon icon="cancel" size="small" color="#c30000"></vs-icon></button></td>
            </tr>
            </table>
          </vs-list-item>
          <vs-list-item title="Acura" subtitle="Classe SUV">
            <tr><td>
              <img src="@/assets/images/veiculos/acura.png" class="miniature-list"/>
            </td>
            <td><p>kwn-3124</p></td>
            </tr>
          </vs-list-item>
        </vs-list>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "list",
  data: () => ({
    title: "List",
    defaultlist: false,
    headerlist: false,
    iconlist: false,
    contentlist: false,
    avatarlist: false
  })
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
