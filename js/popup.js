//pop-up prozor logovanje
function showLoginForm() {
    document.getElementById("pickUp_signIn").style.display = "block";
}


function hideLoginForm() {
    document.getElementById("pickUp_signIn").style.display = "none";
}
//pop-up prozor registracija
function showSignUpForm() {
    document.getElementById("pickUp_signUp").style.display = "block";
}

function hideSignUpForm() {
    document.getElementById("pickUp_signUp").style.display = "none";
}
function signOut(){
 trenutnoUlogovani = {
        status: 9,
        email: "gost"
    };
    console.log(trenutnoUlogovani);
    document.getElementById('registracija').style.display = "block";
            document.getElementById('eshop2').style.display = "none";
            document.getElementById('unos').style.display = "none";
            document.getElementById('prodaja').style.display = "none";
            document.getElementById('signout').style.display = "none";
}