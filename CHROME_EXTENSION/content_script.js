var val = ""; // input value that user is entering currently
var myJson = "";

const userAction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

   myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
};

userAction();

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }



$(":input").on("focus", function () {
  // when input field is in focus

  $(":input").keyup(function (e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 191) {
      val = val + e.key;
      if (val.charAt(val.length - 1) == "/") {
        console.log("value= ", val);
        var res = myJson[val.slice(0,-1)];
        val = "";
        this.value = res; 
      }
    }
   
  });
});

// PREVIOUSLY WORKING BASE CODE

// var val = ""; // input value that user is entering currently

// $(":input").on("focus", function () { //when input field is in focus

//   if (this.id == null || this.id == "" || this.id == undefined) { // when the input field element is not having an 'id'
//     $(":input").keyup(function (e) {
//       val = val + e.key;
//       if (val.charAt(val.length - 1) == " ") {
//         val = "";
//         this.value = "My Full Name";
//       }
//     });
//   } else {
//     console.log(this.id);
//     var inp = document.getElementById(this.id);
//     inp.addEventListener("keyup", function () {
//       if (inp.value == "nm") {
//         inp.value = "My Full Name";
//       }
//     });
//   }
// });
