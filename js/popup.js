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
function signOut(a, b, c, d, e, f){
    sessionStorage.removeItem('user');
    currentlyLoggedIn = {
        status: 9,
        email: "guest"
    };
    console.log(currentlyLoggedIn);
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "block";
    document.getElementById(c).style.display = "none";
    document.getElementById(d).style.display = "none";
    document.getElementById(e).style.display = "none";
    document.getElementById(f).style.display = "none";
}

