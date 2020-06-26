//trenutno nista ne radi
function user(){
    let lang = language();
   
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.getItem('user') === null){
           // console.log('Nema usera');
        }else{
        var currentlyLoggedIn = JSON.parse(sessionStorage.getItem('user'));
       // console.log('ima usera');
      //  console.log(currentlyLoggedIn.status);
       /* console.log('ulogovani korisnik je '+ currentlyLoggedIn.name +
        " " + currentlyLoggedIn.surname + ' sa E-mailom ' 
        + currentlyLoggedIn.email + ' i passwordom ' + 
        currentlyLoggedIn.password + ". Status korisnika je " + currentlyLoggedIn.status)*/
       
        }
        console.log(lang);
    console.log('kraj');
    }else{
        alert('Your browser does not support web storage. Sorry...' );
    }

    

}
