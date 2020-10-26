import axios from "axios"

export default {
  async getLocacao() {
    let res = await axios.get("http://localhost:8000/Locacao");
    return res.data;
  },
  listar:() => {
      return axios.get('http://localhost:8000/Locacao')
  },

  salvar:(locacao) => {
    return axios.post('http://localhost:8000/Locacao')
    .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  atualizar:(id, locacao)=>{
    return axios.put('http://localhost:8000/Locacao'+id, Locacao);
    },

    apagar:(id, locacao)=>{
		return axios.delete('http://localhost:8000/Locacao'+id, locacao)
	}

}