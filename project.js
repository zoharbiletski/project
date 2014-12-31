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

function validateSelection(){
	var source = document.getElementById('source');
	if(source.value == "Please Choose"){
		alert('Please Choose a source city');
		source.focus();
		return false;
	}
	
	if(dest.value == "Please Choose"){
		alert('Please Choose a destinaion city');
		dest.focus();
		return false;
	}
	else{
		return true;
	}
}


function madeSelection(){
	if (validateSelection()) {
		getPrice();
	}
	
}

var city =[{source:'Tel Aviv',dest:'Jerusalem', dist:60},
          {source:'Eilat',dest:'Tel Aviv',dist:200},
          {source:'haifa',dest:'Tel Aviv',dist:350},
          {source:'Jerusalem',dest:'haifa',dist:250},
          {source:'Jerusalem',dest:'Eilat',dist:350}
          ]


function getPrice(){
    
    obj = JSON.parse(city);
    
    if(obj.city.dist == 60){
    document.getElementById('price').innerHTML = 'Your price is 350'; 
        return false;
    }
    
     if(obj.city.dist == 200){
    document.getElementById('price').innerHTML = 'Your price is 400';
          return false;
}
    if(obj.city.dist == 350){
    document.getElementById('price').innerHTML = 'Your price is 250';
         return false;
}
    return true;
}
