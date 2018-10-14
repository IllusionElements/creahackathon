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
    this.vars.imageInfo[0] = "https://cdn.realtor.ca/listing/TS636708244926700000/reb27/highres/3/sk745623_1.jpg";
    this.vars.imageInfo[1] = "https://cdn.realtor.ca/listing/TS636708174202500000/reb28/highres/0/sk745550_3.jpg";
    this.vars.imageInfo[2] = "https://cdn.realtor.ca/listing/TS636708035616230000/reb28/highres/0/sk745610_5.jpg";
    this.vars.housename[0] = "Lot 3 Park Meadow LN";
    this.vars.housedes[0] = "Living is easy in this impressive generously spacious acreage located in quiet Park Meadow estates only 3 minutes north of Prince Albert This beautiful cul de sac of acreages has a man made lake and pavement through out providing an excellent walking biking or running path year round The open floor plan encompasses 6 spacious bedrooms with plenty of room for study sleep and storage 3 luxurious bathrooms and a sleek and stylish gourmet kitchen that flows through to the dining and living room areas the dining room opens up to a spacious rear screened in 3 season sun room overlooking the privately treed back yard The Master bedroom complete with a walkin closet and ensuite ensures parents have plenty of private space All closets have been professionally designed as well as the entrance and laundry rooms Large bonus room above the 3 car attachedheated garage allowing a getaway to watch movies or entertain This 5300 sq ft home is located on 26 acres with a 3 car attached garage a 2 car detached garage  Please allow 24 hours notice for viewings |Satellite Dish Microwave Freezer Window Coverings Garage door opener remotes Central Vacuum Stove|School Bus|Acreage Treed Rectangular Double width or more driveway|Deck|2 Level|2014|2014|Electric|5300 sqft|5pc Bathroom Bedroom Bedroom Bedroom Bedroom Laundry room Family room Games room Foyer Dining room 2pc Bathroom Laundry room Bedroom 5pc Bathroom Master bedroom Living room Kitchen|Second level Second level Second level Second level Second level Second level Second level Second level Main level Main level Main level Main level Main level Main level Main level Main level Main level|15 ft 2 in x 7 ft 11 ft x 11 ft 15 ft 6 in x 14 ft 1 in 14 ft 1 in x 14 ft 1 in 14 ft 1 in x 14 ft 1 in 3 ft 1 in x 5 ft 8 in 11 ft x 20 ft 21 ft 9 in x 38 ft 1 in 17 ft x 9 ft 15 ft 9 in x 11 ft 5 ft x 5 ft 9 ft 1 in x 5 ft 1 in 14 ft x 13 ft 6 in 20 ft 6 in x 10 ft 15 ft 9 in x 15 ft 9 in 15 ft 9 in x 18 ft 15 ft 9 in x 14 ft|26 ac|Lawn Underground sprinkler"
    this.vars.housename[1] = "811 Thompson ST SW";
    this.vars.housedes[1] = "Great starter home located in a great area 977 sqft The kitchen is located off the porch and front entrance there are lots of cupboards for storage open concept to the dining area There is an office space located off the front entrance You could use this space for a main floor laundry  The living room is large offering lots of space There is two bedrooms and a four piece bath The shingles and siding are in good shape as well as most of the windows  The basement is unfinished with a 3pc bath  ready for your final touches The yard is large with a great big garden there is an attached single garage the driveway is paved  You never has to worry about power outages this home has it own generator Call me now to view this house 3068537288|Washer Refrigerator Dryer Hood Fan Storage Shed Stove|Treed Rectangular Sump Pump|Bungalow|1980|1980|977 sqft|Other Office Bedroom 4pc Bathroom Bedroom Living room Dining room Kitchen|Basement Main level Main level Main level Main level Main level Main level Main level|26 ft 5 in x 36 ft 9 in 8 ft 2 in x 7 ft 5 in 8 ft 6 in x 11 ft 8 in 8 ft 2 in x 4 ft 9 in 11 ft 8 in x 7 ft 9 in 18 ft 8 in x 12 ft 7 in 9 ft 2 in x 8 ft 6 in 9 ft 4 in x 8 ft 4 in|Partially fenced|66 ft|10098 sqft|Lawn Garden Area";
    this.vars.housename[2] = "200 Railway AVE";
    this.vars.housedes[2] = 'Want to live on an acreage  Good size parcel of land almost 20 acres located in the RM of Lumsden approximately 1 mile from Regina Beach  Zoned for Residential could build a home shop barn etc and have livestock  ie horse goats  Could apply to subdivide into 2 or more parcels  Will need a well  neighbors have 29 ft with good recovery    Natural Prairie land has been used for grazing  Completely fenced   Some land work done to create a road from the roadside half of the acreage to the back side  Quiet location  very close to town for ease of services and commute for work etc   Google map this property to truly see the topography and size  For more information contact listing agent|Rolling Rectangular|Fence|659 ft|1994 ac","IsResidential';
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
      loc[i].getElementsByClassName('descrption')[0].textContent = this.vars.housedes[i].substring(0, 300) + "...";
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
