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
    currentlyLoggedIn = {
        status: 9,
        email: "guest"
    };
    console.log(currentlyLoggedIn);
    document.getElementById('signUp').style.display = "block";
    document.getElementById('signIn').style.display = "block";
    document.getElementById('eshop').style.display = "none";
    document.getElementById('entry').style.display = "none";
    document.getElementById('sale').style.display = "none";
    document.getElementById('signOut').style.display = "none";
}