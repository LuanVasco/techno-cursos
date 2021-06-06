export default {
  data() {
    return {
      loading: true,
      data: null,
    }
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000${url}`)
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          this.data = response;
          this.loading = false;
        }, 1000)
      })
    }
  },
}