<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
}
</script>

<style scoped>
header {
  background: #234;
}
header a {
  color: #FFFFFF;
}

header a.router-link-active {
  color: #4b8;
}
nav {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
.logo {
  flex: 1;
}
header .logo a {
  font-size: 2rem;
  color: #FFF;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>