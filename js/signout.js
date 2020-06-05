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
function signOutEShop(){
    sessionStorage.removeItem('user');
    currentlyLoggedIn = {
        status: 9,
        email: "guest"
    };
    console.log(currentlyLoggedIn);
   document.getElementById('signIn').style.display = "block";
   document.getElementById('signUp').style.display = "block";
   document.getElementById('signOut').style.display = "none";
   document.getElementById('shops').style.display = "none";
   document.getElementById('welcome-user').style.display = "none";
   document.getElementById('eshop-header').style.display = "none";
}

