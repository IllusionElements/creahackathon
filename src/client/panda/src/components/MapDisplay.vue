<template>
  <div class="hello">
    <div style="position: absolute; top: 70px; left: 10px" @click="lastpage()"><img style="height: 50px;" src="../assets/back.png"/> </div>
    <div style="position: absolute; top: 70px; right: 10px" @click="refresh()"><img style="height: 50px;" src="../assets/refresh.png"/> </div> 
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
      location: this.$route.params.location,
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
      this.vars.housedes[i] = "it is just a house!!!";
    }
    this.vars.imageInfo[0] = "https://www.pcgloanfund.org/sites/default/files/Wash%20St%20Exterior.jpg";
    this.vars.imageInfo[1] = "data:image/jpeg;base64,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";
    this.vars.imageInfo[2] = "https://i.ytimg.com/vi/EJHGZBEW0-8/maxresdefault.jpg"
    this.vars.housename[0] = "Harry Potter somewhere";
    this.vars.housename[1] = "Beautiful neighbourhood";
    this.vars.housename[2] = "Cutie housy";
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
  methods: {
    lastpage() {
      router.push({ name: "Page2", params: { location : this.vars.location }})
    },
    refresh(){
      alert("you refreshed!!!!!!!!!!");
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
