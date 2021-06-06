<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
       <div v-if="data" class="conteudo">
        <div>
          <h1>Sobre a {{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design">
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData"
export default {
  name: 'Home',
  mixins: [ fetchData ],
  created() {
    this.fetchData('/home');
  },
  methods: {
    rating() {
      
      console.log("Chegou",)
    },
  },
}
</script>

<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.card {
  width: 26%;
  height: 200px;
  background: #F7F7F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.30);
  margin: 2rem 0;
  padding: 1rem 2rem;
}

.card .title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.875rem;
  color: #000;
  margin-bottom: 1rem;
}

.card .description {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #000;
  text-align: center;
}

.card .rating {
  position: relative;
}
.card .star {
  position: relative;
  
  display: inline-block;
  width: 0;
  height: 0;
  
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid #FC0;
  border-left:   .3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 0.625rem;
}
.card .star:before, .star:after {
  content: '';
  
  display: block;
  width: 0;
  height: 0;
  
  position: absolute;
  top: .6em;
  left: -1em;

  border-right:  1em solid transparent;
  border-bottom: .7em  solid #FC0;
  border-left:   1em solid transparent;

  transform: rotate(-35deg);
}
.card .star:after {  
  transform: rotate(35deg);
}
.card .star {
  position: relative;
  
  display: inline-block;
  width: 0;
  height: 0;
  
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid #234;
  border-left:   .3em solid transparent;

  font-size: 0.625rem;
}
.card .star:before, .star:after {
  content: '';
  
  display: block;
  width: 0;
  height: 0;
  
  position: absolute;
  top: .6em;
  left: -1em;

  border-right:  1em solid transparent;
  border-bottom: .7em  solid #234;
  border-left:   1em solid transparent;

  transform: rotate(-35deg);
}
.card .star.active,
.card .star.active:before, .star.active:after {
  border-bottom: .7em  solid #FC0;
}
.card .star:after {  
  transform: rotate(35deg);
}
</style>