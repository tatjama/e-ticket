function setLocalStorage(a, b, c, d) {
        let start = document.getElementById(a);
        let signing = document.getElementById(b); 
        let signIn = document.getElementById(c);
        let signUp = document.getElementById(d);
      
        start.style.display = "none";
        signing.style.display ="inherit";
        signIn.style.display = "block";
        signUp.style.display = "block";
    
    }
