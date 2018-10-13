<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ instruction }}</h3>
    <div class="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Location" aria-label="location" aria-describedby="basic-addon2" id="searchbar">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" v-on:click="goButtonClicked()" type="button" id = "gobutton">Go!</button>
          </div>
      </div>
    </div>

  </div>
</template>

<script>

import router from "../router"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Panda, your personal assistant for housing service',
      instruction: 'Enter a city,'
    }
  },
  methods: {
    /*servercall(weblink, if successful(userdata)
    {
      router.push({name: "Page2", params: {json:userdata}});
    }, else fail
      router.push(404page);
    )
    */

    dontdoit() {
      router.push({ name: "Page2"});
    },
    goButtonClicked() {
      router.push({ name: "Page2"});
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
.search {
  display: inline-block;
}
#searchbar {
  width:1000px;
  height:45px;
}
#gobutton {
  height:45px;
}
</style>
