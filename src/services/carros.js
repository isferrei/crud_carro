import axios from "axios"

export default {
  async getCarro() {
    let res = await axios.get("http://localhost:8000/Carro");
    return res.data
    .catch(e => {
      console.e("There was an e!", e);
    });
  },
  listar:() => {
      return axios.get('http://localhost:8000/Carro')
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  salvar:(carro) => {
    return axios.post('http://localhost:8000/Carro')
    .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  atualizar:(id, carro)=>{
    return axios.put('http://localhost:8000/Carro', carro)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
    },

    apagar:(carro)=>{
    return axios.delete('http://localhost:8000/Carro', carro)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
	}
}