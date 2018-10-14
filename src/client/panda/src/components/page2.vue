<template>
  <div class="hello" align="center">
    <h1 id="question">Start</h1>
    <br/><br/>
    <div class="form-group">

      <select class="form-control" id="optionsDrop">

      </select>

      <br/>

      <button type="button" class="btn btn-info" v-on:click="nextButtonClicked()" id="nextbutton">Next</button>
      <button type="button" class="btn btn-primary btn-outline btn-lg" v-on:click="showButtonClicked()" id="showbutton">Show</button>
    </div>

  </div>
</template>

<script>
import router from "../router"

var q1 = {
  question: "Bedrooms",
  options: ["1","2","3","4","5"],
  answer: "wrong answer"
};

var q2 = {
  question: "Pool",
  options: ["Yes","No"],
  answer: "wrong answer"
};

var q3 = {
  question: "Size of Yard",
  options: ["Large","Medium","Small"],
  answer: "wrong answer"
};

var q4 = {
  question: "Network Connectivity",
  options: ["Strong","Weak"],
  answer: "wrong answer"
};

var count = 0

 var questions = [
   q2, q1, q3, q4
 ];

 var message = "I told you not to click on this what the hell are you doing!!!"


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: message,
      questions: questions
    }
  },
  methods:{
    nextButtonClicked() {
      console.log("previous answer for q: " + questions[count].question + " is " + questions[count].answer);

      var selectDrop = document.getElementById("optionsDrop");
      questions[count].answer = selectDrop.value;

      console.log("current answer for q: " + questions[count].question + " is " + questions[count].answer);
      nextQuestion();
    },
    showButtonClicked() {
      router.push({ name: "Map"});
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
  /* background-color: red;
  border-color: red; */
}
</style>
