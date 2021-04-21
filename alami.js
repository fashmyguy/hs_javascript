
function emFunction() {
    var mail = document.forms["myForm"]["login_email"].value;
	var pass =document.forms["myForm"]["login_password"].value;
    if( mail.length  === 0 ) {
  document.getElementById("lb1").innerHTML="Email"; }
  else {document.getElementById("lb1").innerHTML="";}
}

function  myFunction(){
            const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var product = urlParams.get('id');
    document.getElementById("login_email1513746127590152").value = product;
   
        }
function pmFunction() {
    var mail = document.forms["myForm"]["login_email"].value;
	var pass =document.forms["myForm"]["login_password"].value;
    if( pass.length  === 0 ) {
  document.getElementById("lb2").style.display = "block"; }
  else {document.getElementById("lb2").style.display = "none";}
}
