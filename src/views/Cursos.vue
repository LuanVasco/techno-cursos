<template>
  <div class="course">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="data">
      <h2>{{ data.titulo }}</h2>
      <p>{{ data.descricao }}</p>

      <article v-for="(item, index) in data.cursos" :key="index">
        <h3>{{ item.nome }}</h3>
        <p>{{ item.descricao }}</p>
      </article>
    </div>
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