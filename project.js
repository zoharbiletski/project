$(document).ready(rTime);

function rTime() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("rights").innerHTML = "all rights reserved " + n;
}

function validateForm()
{
 
   if( document.rentCar.username.value == "" )
       
   {
     alert( "Please provide your name!" );
     document.rentCar.username.focus() ;
     return false;
   }
    
   if( document.rentCar.id.value == "" )
       
   {
     alert( "Please provide your ID!" );
     document.rentCar.phone.focus() ;
     return false;
   }
   
     if( document.rentCar.phone.value == "" )
       
   {
     alert( "Please provide your Phone!" );
     return false;
   }
    
   if( document.rentCar.email.value == "" )
       
   {
     alert( "Please provide your E.mail!" );
     return false;
   }
   return( true );
}
