import axios from "axios"

export default {
  async getCliente() {
    let res = await axios.get("http://localhost:8000/Cliente");
    return res.data;
  },
  listar:() => {
      return axios.get('http://localhost:8000/Cliente')
  },

  salvar:(cliente) => {
    return axios.post('http://localhost:8000/Cliente', cliente)
    .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  atualizar:(id, cliente)=>{
    return axios.put('http://localhost:8000/Cliente'+id, cliente);
    },

    apagar:(id)=>{
      return axios.delete('http://localhost:8000/Cliente/'+id)
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    }

}