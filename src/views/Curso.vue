<template>
  <div class="course">
     <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <section v-if="data" class="conteudo">
        <header>
          <h1>{{data.nome}}</h1>
          <p>{{data.descricao}}</p>
        </header>
        <article>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in data.aulas" :key="aula.id">{{aula.nome}}</li>
          </ul>
        </article>
      </section>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
export default {
  name: "curso",
  mixins: [ fetchData ],
  props: ["curso"],
  created() {
    this.fetchData(`/curso/${this.curso}`)
  }
}
</script>

<style>
.aulas li {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>