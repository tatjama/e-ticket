function setLocalStorage(a, b, c, d) {
        let start = document.getElementById(a);
        let signing = document.getElementById(b); 
        let signIn = document.getElementById(c);
      
        start.style.display = "none";
        signing.style.display ="inherit";
        signIn.style.display = "block";
        signUp.style.display = "block";

    var userStorage = [
        { name: "ADMINISTRATOR", surname: "ADMIN", email: "admin@admin.com", password: "admin", status: "0" },
        { name: "TATJANA", surname: "MARKOVIC", email: "tanja120a@gmail.com", password: "tanja", status: "0" },
        { name: "TANJA", surname: "MARKOVIC", email: "tanja120@gmail.com", password: "tanja", status: "0" },
        { name: "USER", surname: "USER", email: "user@user.com", password: "user", status: "1" },
        { name: "PERA", surname: "PERIC", email: "pera@gmail.com", password: "pera", status: "1" },
        { name: "MITAR", surname: "MIRIC", email: "mitar@gmail.com", password: "mitar", status: "1" },
        { name: "IVAN", surname: "IVANOVIC", email: "ivan@gmail.com", password: "ivan", status: "1" }

    ];
    
    var currentlyLoggedIn = {
        status: 9,
        email: "guest"
    }  
    console.log(userStorage);    
    console.log(currentlyLoggedIn);
    
  localStorage.removeItem('currentlyLoggedInUser');
   
    if(JSON.parse(localStorage.getItem('userStorage')) ===null){
        localStorage.setItem('userStorage', JSON.stringify(userStorage));
    }
    
    localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedIn));
}
