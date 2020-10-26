<template>
 <vs-popup>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
      <vs-card>
        <h3 class="card-title d-flex">
          Registrar-se
        </h3>
        <br>
        <h5>Preencha as informações abaixo para realizar seu cadastro:</h5>
        <br>
        <hr/>
        <table>
          <tr>
            <td><vs-input label-placeholder="Nome" color="dark" class="inputx" v-model="nome"/></td>
            <td><vs-input label-placeholder="Email" color="dark" class="inputx" v-model="email"/></td>
            <td><vs-input label-placeholder="Senha" color="dark" class="inputx" v-model="senha"/></td>
          </tr>
          <br>
          <br>
          <tr>
            <td></td>
            <td></td>
            <td><vs-button border color="#ffa726" style="float: right; font-size: 16px">Cadastrar</vs-button></td></tr>
        </table>
      </vs-card>
    </vs-col>
  </vs-row>
</vs-popup>
</template>

<script>

export default {
  name: "Cadastrar veiculo",
  data: () => ({
    title: "Cadastrar veiculo"
  }),
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
