<template>
  <div class="hello">
    <h1>{{ firstname }}</h1>
    <h2>{{ lastname}}</h2>
    <h2>{{ email}}</h2>
    <h2>{{ msg2}}</h2>
  </div>
</template>

<script>
import func from '../public/func.js'
import api from '../public/api.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      firstname: 'Welcome to Your Vue.js App',
      lastname: '',
      email: '',
      msg2: ''
    }
  },
  methods: {
    getMsg () {
      func.ajaxGet(api.users.users, res => {
        console.log(res);
        this.firstname = res.data[0].firstName
        this.lastname = res.data[0].lastName
        this.email = res.data[0].email
      })
      func.ajaxGet(api.auth.login, res => {
        this.msg2 = res.data
      })
    }
  },
  mounted () {
    this.getMsg()
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
