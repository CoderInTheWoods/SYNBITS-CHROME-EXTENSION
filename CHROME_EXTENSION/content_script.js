var val = ""; // input value that user is entering currently
$(document).ready(function() {
    var tags = [{ "key": "nm/", "value": "Patel Jaynil SunilKumar" }, { "key": "n/", "value": "Jaynil" }, { "key": "em/", "value": "Jainil@gmail.com" }];

    console.log("ready!");
    var isInput = false;
    $(":input").on("focus", function() {
        isInput = true;
        console.log("input focus", this);
        var inputRef = this;

        $(inputRef).autocomplete({
            source: function(request, response) {
                response($.map(tags, function(value, key) {
                    var shortcut = value.key.toUpperCase();
                    $(inputRef).keyup(function() {
                        console.log("value issss = ", inputRef.value);
                        if (inputRef.value == value.key) {
                            inputRef.value = value.value;
                            console.log("value current   = ", inputRef.value, value.value);
                        }
                    });

                    if ((shortcut.indexOf(request.term.toUpperCase()) != -1)) {
                        return {
                            label: value.key + " " + value.value,
                            value: value.value
                        }
                    } else {
                        return null;
                    }
                }));
            }
        });
    });


    $(document).on("click keyup", function() {
        if (isInput == false) {
            var inputRef = document.activeElement;
            console.log("document.activeElement = ", inputRef);

            $(inputRef).autocomplete({
                source: function(request, response) {
                    response($.map(tags, function(value, key) {
                        var shortcut = value.key.toUpperCase();
                        $(inputRef).keyup(function() {
                            console.log("value issss = ", inputRef.value);
                            if (inputRef.value == value.key) {
                                inputRef.value = value.value;
                                console.log("value current   = ", inputRef.value, value.value);
                            }
                        });
                        if ((shortcut.indexOf(request.term.toUpperCase()) != -1)) {
                            return {
                                label: value.key,
                                value: value.value
                            }
                        } else {
                            return null;
                        }
                    }));
                }
            });
        }
    });

});

// PREVIOUSLY WORKING BASE CODE


// $(":input").on("blur", function() {
//     val = "";
// });


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