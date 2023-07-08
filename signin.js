function view(){
    var x= document.getElementById("view");
    if (x.type === "password") {
        x.type = "text";
      } 
      else {
        x.type = "password";
      }
    }

