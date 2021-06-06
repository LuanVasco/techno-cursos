<template>
  <div class="contact">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="data">
      <h2>{{ data.titulo }}</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData"
export default {
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  }
}
</script>