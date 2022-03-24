//manejador de estados
import { createStore } from 'vuex'

export default createStore({
  //estado: variables, estados de cambio
  state: {
    contador: 0
  },
  //metodo para recuperar la info
  getters: {

    cuadrado(state){
      return state.contador * state.contador;
    }

  },
  //modifica estados, solo se usan aqui
  mutations: {

    subirContador(state,random){
      state.contador += random;
    },
    bajarContador(state,random){
      state.contador -= random;
    }

  },
  //modifica estados, se puede tener codigo asincrono. Recomendado para API
  actions: {

    async subirContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirContador",results);      
    },
    async bajarContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarContador",results);      
    }

  },
  //Para asignación de los anteriores en ciertas paginas del sitio
  modules: {
  }
})
