<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <section v-if="data" class="conteudo">
        <header>
          <h1>{{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
        </header>
        <section>
          <article v-for="curso in data.cursos" :key="curso.id" class="cursos-list">
            <h2>
              <router-link
                :to="{name: 'curso', params: {curso: curso.id}}"
              >{{curso.nome}} – {{curso.totalAulas}} aulas | {{curso.horas}} horas</router-link>
            </h2>
            <p>{{curso.descricao}}</p>
          </article>
        </section>
      </section>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData"
export default {
  name: 'Cursos',
  mixins: [ fetchData ],
  
  created() {
    this.fetchData('/cursos');
  }
}
</script>

<style>
.cursos-list {
  margin-bottom: 40px;
}
</style>