<template>
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
        <form @submit.prevent="salvar()">
        <table>
          <tr>
            <td><vs-input label-placeholder="Nome" color="dark" class="inputx" v-model="usuario.nome"/></td>
            <td><vs-input label-placeholder="Email" color="dark" class="inputx" v-model="usuario.email"/></td>
            <td><vs-input type="password" label-placeholder="Senha" color="dark" class="inputx" v-model="usuario.senha"/></td>
          </tr>
          <tr>
            <td><vs-input label-placeholder="CPF" color="dark" class="inputx" :mask="['###.###.###-##', '##.###.###/####-##']" v-model="usuario.cpf"/></td>
          </tr>
          <br>
          <br>
          <tr>
            <td></td>
            <td></td>
            <td><input type="submit" @click="$vs.notify({title:'Salvo com sucesso!',color:'success',position:'top-center'})" class="btn-cadastrar" value="Salvar"></td></tr>
        </table>
        </form>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

  <script>
import Usuario from '../../../../services/usuarios';
import {mask} from 'vue-the-mask';

export default {
  name: "CadastrarUsuarios",
  data() {
    return{
    title: "Cadastrar usuario",
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    usuario:{
      nome: '',
      email: '',
      senha: '',
      cpf: '',
    errors: [],
    directives: {mask}
    },
    }
  },

  components: {
  },

  methods: {
  successUpload(){
    this.$vs.notify({color:'success'})
  },
  salvar(){
      Usuario.salvar(this.usuario).then(resposta => {
      })
    },
  }


};
</script>
<style scoped>
.btn-cadastrar{
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
</style>
