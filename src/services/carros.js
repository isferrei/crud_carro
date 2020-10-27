import axios from "axios"

export default {
  async getCarro() {
    let res = await axios.get("http://localhost:8000/Carro");
    return res.data;
  },
  listar:() => {
      return axios.get('http://localhost:8000/Carro')
  },

  salvar:(carro) => {
    return axios.post('http://localhost:8000/Carro')
    .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  atualizar:(id, carro)=>{
    return axios.put('http://localhost:8000/Carro', carro);
    },

    apagar:(id, carro)=>{
		return axios.delete('http://localhost:8000/Carro'+id, carro)
	}
}