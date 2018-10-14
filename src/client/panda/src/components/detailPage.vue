<template>
  <div class="hello">
    <div class="w3-row-padding row" style="margin-top:40px; margin-bottom: 40px">
      <div class="w3-col m4">
        <div class="w3-card" style="width:100%">
          <img src="../assets/PANDAAAA.jpg" style="width:100%">
          <div class="w3-container">
            <h4><b>PANDA</b></h4>
            <p>The panda of the panda</p>
          </div>
        </div>
      </div>
      <div class="w3-col m8">
        <p>Some information can be placed here!!!</p>
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
      msg: 'DETAIL'
    }
  },
  created() {
    //initialize data set for this page
    this.vars = {
      data : this.$route.params.houseid,
      latlngArray : [],
      googleLatLng : [],
    }
  },
  mounted() {
    
  },
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
