function validate() {
  var text;
     if( document.myForm.username.value == "" ) {
       text = "Name cannot be empty";
        document.getElementById("demo").innerHTML = text;
        document.myForm.name.focus() ;
        return false;
     }
     if( document.myForm.email.value == "" ) {
       text = "E-mail cannot be empty";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus() ;
        return false;
     }
var emailID = document.myForm.email.value;
atposn = emailID.indexOf("@");
dotposn = emailID.lastIndexOf(".");
if (atposn < 1 || ( dotposn - atposn < 2 )) {
text = "Please enter valid email ID";
document.getElementById("demo").innerHTML = text;
document.myForm.email.focus() ;
return false;
}
     if( document.myForm.mobilenumber.value == "" || isNaN( document.myForm.mobilenumber.value ) ||
        document.myForm.mobilenumber.value.length != 10 ) {
        text = "Please enter a valid 10-digit phone number";
        document.getElementById("demo").innerHTML = text;
        document.myForm.mobilenumber.focus() ;
        return false;
     }
     
     if( document.myForm.password.value == "" ) {
        text = "Please enter the password";
        document.getElementById("demo").innerHTML = text;
        document.myForm.password.focus() ;
        return false;
     }
     var passw=  document.myForm.password.value; 
     if(passw > "8" || passw <"12")
     { 
  
      return true;
     }   
  return(true);
  }