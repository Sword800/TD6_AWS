

window.onload = document.getElementById('main').innerHTML = 'Welcome To Connect Four';



if(sessionStorage.getItem('clé',null))
   {
     var user = window.prompt("Choisir votre Nom d'utilisateur");
      sessionStorage.setItem('clé', user);
   }


console.log(sessionStorage.getItem('clé'));