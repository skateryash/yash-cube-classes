function validate() {
  var FName = document.getElementById("Name").value;
  var com = document.getElementById("ci").value;
  var Ntext = /([A-Za-z\.-]{2,30})/;
  var cmtext = /([A-Za-z0-9\.-]{1,})/;
  var Etext = document.getElementById("Email").value;
  var Eregx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,8})(.[a-z]{2,8})?$/; //[a - zA - Z0 - 9\-] == \w

  // ...............Comment.........................................
  if (cmtext.test(com)) {
  } else {
    alert("Fill the comment box ");
    ci.focus();
    document.getElementById("ci").style.borderColor = "black";
  }

  // ...............E-mail.........................................
  if (Eregx.test(Etext)) {
  } else {
    alert("InValid E-mail Id, Please enter a valide Email Id ");
    Email.focus();
    document.getElementById("Email").style.borderColor = "black";
  }

  // ...............Name.........................................
  if (Ntext.test(FName)) {
    // Send information to the server
  } else {
    alert("Enter the name please");
    Name.focus();
    document.getElementById("Name").style.borderColor = "black";
  }

  if (Ntext.test(FName) && Eregx.test(Etext) && cmtext.test(com)) {
    alert("Thanks for comment");
    // Send all information to the server.
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("ci").value = "";
  }

  return false;
}
