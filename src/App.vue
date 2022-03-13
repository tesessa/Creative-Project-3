<template>
  <div id="app">
   <div id="menu">
      <router-link to="/">Home</router-link>  
     <router-link to="/about">About</router-link>
     <router-link to="/blog">Blog</router-link>
     </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
     }
   },
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#menu {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 5px;
	grid-template-areas: "none brand side";
	margin-bottom: 50px;
}

#menu a {
	color: #B84901;
}

</style>
