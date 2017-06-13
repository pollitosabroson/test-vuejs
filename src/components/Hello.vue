<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>TEST</h2>
    <div v-for="record in usuarios" class="col-md-4 m-b-lg">
      <div class="panel panel-default panel-profile m-b-0">
        <div class="panel-body text-center">
          <img class="panel-profile-img" :src="record.picture.large">
          <h5 class="panel-title">{{ record.name.first }} {{ record.name.last }}</h5>
          <p class="m-b">{{ record.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var apiURL = 'https://randomuser.me/api/?results=500'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Prueba de los templates',
      usuarios: this.$http.get(apiURL).then(response => {
        // success callback
        this.usuarios = response.body.results
      }, response => {
        // error callback
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
