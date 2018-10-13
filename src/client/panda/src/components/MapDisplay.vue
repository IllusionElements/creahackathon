<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="googleMap" style="width:100%; height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HOLY CRAP THIS IS THE GOOGLE MAPPPPP'
    }
  },
  created() {

    //initialize data set for this page
    this.vars = {
      data : this.$route.params.houseid,
    }
  },
  mounted() {
    var mapCanvas = document.getElementById("googleMap");
    var mapCenter = new google.maps.LatLng(51.508742,-0.120850);
    var mapOptions = {center: mapCenter, zoom: 5}
    var map = new google.maps.Map(mapCanvas, mapOptions)
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    var image = "https://image.ibb.co/gfMgDp/pandapointersmall.png";
    var marker = new google.maps.Marker({
      position: mapCenter,
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
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
