<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <transition>
      <section v-if="data">
        <header>
          <h2>{{data.nome}}</h2>
        </header>
        <article class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${data.youtube}`"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </article>
      </section>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "aula",
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  }
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
