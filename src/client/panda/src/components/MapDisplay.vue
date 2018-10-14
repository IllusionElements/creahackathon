<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="text-align: center;">
      <div id="googleMap" style="display: inline-block; width:80%; height:500px;"></div>
    </div>
    
    <div class="w3-row-padding row" style="text-align: center; margin-top:40px; margin-bottom: 40px">
      <div class="w3-col m4 w3-center" id="location2">
        <div class="w3-card" style="width:100%">
          <img class="displayimage" src="../assets/PANDAAAA.jpg" style="width:100%">
          <div class="w3-container">
            <h4 class="name"><b>PANDA</b></h4>
            <p class="descrption">The panda of the panda</p>
          </div>
        </div>
      </div>
      <div class="w3-col m4 w3-center" id="location1">
        <div class="w3-card" style="width:100%">
          <img class="displayimage" src="../assets/PANDAAAA.jpg" style="width:100%">
          <div class="w3-container">
            <h4 class="name"><b>PANDA</b></h4>
            <p class="descrption">The panda of the panda</p>
          </div>
        </div>
      </div>
      <div class="w3-col m4 w3-center" id="location3">
        <div class="w3-card" style="width:100%">
          <img class="displayimage" src="../assets/PANDAAAA.jpg" style="width:100%">
          <div class="w3-container">
            <h4 class="name"><b>PANDA</b></h4>
            <p class="descrption">The panda of the panda</p>
          </div>
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
      msg: 'Here are your results,'
    }
  },
  created() {
    //initialize data set for this page
    this.vars = {
      data : this.$route.params.houseid,
      latlngArray : [],
      googleLatLng : [],
      imageInfo: [],
      housename: [],
      housedes: [],
    }
    this.vars.latlngArray[0] = {x: 51.508742, y: 6.300850}
    this.vars.latlngArray[1] = {x: 48.522382, y: -0.151292}
    this.vars.latlngArray[2] = {x: 52.394490, y: 12.225968}

    for (var i = 0; i < this.vars.latlngArray.length; i++)
    {
      this.vars.googleLatLng[i] = new google.maps.LatLng(this.vars.latlngArray[i].x, this.vars.latlngArray[i].y)
      this.vars.imageInfo[i] = "https://image.ibb.co/njaKzU/pandapointersmallpin.png";
      this.vars.housename[i] = "THIS IS A PANDA";
      this.vars.housedes[i] = "it is just a panda!!!";
    }
  },
  mounted() {
    
    var mapCanvas = document.getElementById("googleMap");
    var mapCenter = this.vars.googleLatLng[0];

    var mapOptions = {center: mapCenter, zoom: 5}
    var map = new google.maps.Map(mapCanvas, mapOptions)
    //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    var image = "https://image.ibb.co/gfMgDp/pandapointersmall.png";
    var imageshadow = "https://image.ibb.co/fkOiR9/pandapointersmallshadow.png";
    var imagepin = "https://image.ibb.co/njaKzU/pandapointersmallpin.png";
    var marker = new google.maps.Marker({
      position: mapCenter,
      icon: imagepin,
      animation: google.maps.Animation.BOUNCE
    });
    var markershadow = new google.maps.Marker({
      position: mapCenter,
      icon: imageshadow,
    })

    var marker2 = new google.maps.Marker({
      position: this.vars.googleLatLng[1],
      icon: image,
    });

    var marker3 = new google.maps.Marker({
      position: this.vars.googleLatLng[2],
      icon: image,
    })
    marker.setMap(map);
    markershadow.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);

    //set up the house information to the box
    var loc = [];
    loc[0] = document.getElementById("location1");
    loc[1] = document.getElementById("location2");
    loc[2] = document.getElementById("location3");
    for (var i = 0; i < loc.length; i++)
    {
      loc[i].getElementsByClassName('name')[0].textContent = this.vars.housename[i];
      loc[i].getElementsByClassName('descrption')[0].textContent = this.vars.housedes[i];
      loc[i].getElementsByClassName("displayimage")[0].setAttribute("src", this.vars.imageInfo[i]);
    }
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
