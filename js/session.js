//trenutno nista ne radi
function user(){
    let lang = language();
   
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.getItem('user') === null){           
        }else{
        var currentlyLoggedIn = JSON.parse(sessionStorage.getItem('user'));       
        }
        console.log(lang);
    console.log('kraj');
    }else{
        alert('Your browser does not support web storage. Sorry...' );
    }
}
function clearStorage(){
    localStorage.clear();
    sessionStorage.clear();
}
