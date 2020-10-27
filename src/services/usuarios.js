import axios from "axios"

export default {
  async getUsuario() {
    let res = await axios.get("http://localhost:8000/Usuario");
    return res.data;
  },
  listar:() => {
      return axios.get('http://localhost:8000/Usuario')
  },

  salvar:(usuario) => { 
    return axios.post('http://localhost:8000/Usuario', usuario)
    .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },

  atualizar:(id, usuario)=>{
    return axios.put('http://localhost:8000/Usuario'+id, usuario);
    },

    apagar:(id, usuario)=>{
		return axios.delete('http://localhost:8000/Usuario'+id, usuario)
  },
  
}