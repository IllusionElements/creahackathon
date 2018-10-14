<template>
  <div class="hello" align="center">
    <h1 id="question">Start</h1>
    <br/><br/>
    <div class="form-group">

      <select class="form-control" id="optionsDrop">

      </select>

      <br/>

      <button type="button" class="btn btn-primary btn-outline btn-lg" v-on:click="nextButtonClicked()" id="nextbutton">Next</button>
      <button type="button" class="btn btn-primary btn-outline btn-lg" v-on:click="bothButtonClicked()" id="bothbutton">Both</button>
      <button type="button" class="btn btn-primary btn-outline btn-lg" v-on:click="showButtonClicked()" id="showbutton">Show</button>
    </div>

  </div>
</template>

<script>
import router from "../router"


var q1 = {
  question: "How many bedrooms do you need?",
  options: ["1","2","3","4","5"],
  answer: [],
  optional: false
};

var q2 = {
  question: "Pool",
  options: ["Yes","No"],
  answer: [],
  optional: false
};

var q3 = {
  question: "Size of Yard",
  options: ["Large","Medium","Small"],
  answer: [],
  optional: false
};

var q4 = {
  question: "Network Connectivity",
  options: ["Strong","Weak"],
  answer: [],
  optional: false
};

var q5 = {
  question: "How many bathrooms do you need?",
  options: ["1","2","3","4","5"],
  answer: [],
  optional: true
};

var q6 = {
  question: "Do you prefer a stroll down the street or to a park?",
  options: ["Street","Park"],
  answer: [],
  optional: true
};

var q7 = {
  question: "Do you have children?",
  options: ["Yes","No"],
  answer: [],
  optional: true
};

var q8 = {
  question: "Do you take public transit or drive to work?",
  options: ["Public Transit","Drive"],
  answer: [],
  optional: true
};


var count = 0

 var questions = [
   q2, q1, q3, q4, q5, q6, q7, q8
 ];

 var message = ""


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: message,
      questions: questions
    }
  },
  created() {
    this.vars = {
      location: this.$route.params.location,
    }
  },
  methods:{
    nextButtonClicked() {
      console.log("previous answer for q: " + questions[count].question + " is a:" + questions[count].answer);

      var selectDrop = document.getElementById("optionsDrop");
      questions[count].answer = [selectDrop.value];

      console.log("current answer for q: " + questions[count].question + " is a:" + questions[count].answer);

      nextQuestion();
    },
    bothButtonClicked() {
      console.log("previous answer for q: " + questions[count].question + " is a:" + questions[count].answer);

      var selectDrop = document.getElementById("optionsDrop");
      questions[count].answer = questions[count].options;

      console.log("current answer for q: " + questions[count].question + " is a:" + questions[count].answer);

      nextQuestion();
    },
    showButtonClicked() {
      /*servercall(weblink, if successful(userdata)
    {
      router.push({name: "Page2", params: {json:userdata}});
    }, else fail
      router.push(404page);
    )
    */
      //call the post request so that data will be from the server
      router.push({ name: "Map", params: { location : this.vars.location }});
    }
  }
}


function nextQuestion() {
  var text = document.getElementById("question");
  count++;
  count = count % questions.length;
  text.innerHTML = questions[count].question;



  var selectDrop = document.getElementById("optionsDrop");

  for (var i = 0; i < selectDrop.options.length; i++) {
      selectDrop.options[i] = null;
  }
  selectDrop.options.length = 0;

  for (var i = 0; i < questions[count].options.length; i++) {

    var option = document.createElement("OPTION");

    option.innerHTML = questions[count].options[i];

    option.value = questions[count].options[i];

    selectDrop.options.add(option);
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
/* a {
  color: #42b983;
} */

#optionsDrop {
  width:200px;
  height:45px;
}

#nextbutton {
  height:45px;
  width:100px;
}
#showbutton {
  height:45px;
  width:100px;
}
#bothbutton {
  height:45px;
  width:100px;
}
</style>
