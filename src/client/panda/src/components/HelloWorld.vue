<template>

  <div class="hello">
    <div class="jumbotron">
    <h1>{{ msg }}</h1>
    </div>
    <h3>{{ instruction }}</h3>
    <div class="search">
      <div class="input-group">
        <input class="form-control" placeholder="Location" aria-label="location" id="searchbar">
            <button type="button" class="btn btn-info" v-on:click="goButtonClicked()" id="gobutton">Go!</button>
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
      msg: 'Find the right property for you',
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
      if (document.getElementById("searchbar").value != "") {
        // Extract input value (city) -> add to query
        console.log(document.getElementById("searchbar").value);
      }
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
h3 {
  margin-top:60px;
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
  margin-top: 60px;
}
#searchbar {
  width:1000px;
  height:45px;
}
#gobutton {
  height:45px;
  width:100px;
}

</style>
