var xhr = new XMLHttpRequest();



function modifTexteBase()
{
  window.onload = document.getElementById('main').innerHTML = 'Welcome To Connect Four';
}

function modifTexteHello()
{
  window.onload = document.getElementById('main').innerHTML = ('Hello '+sessionStorage.getItem('clé'));
}

function popupUser()
{
  if(sessionStorage.getItem('clé')== null)
   {
     var user = window.prompt("Choisir votre Nom d'utilisateur");
     sessionStorage.setItem('clé', user);
   }
}

function appli()
{
  modifTexteBase();
  
  console.log(sessionStorage.getItem('clé'));

  popupUser();
  
  console.log(sessionStorage.getItem('clé'));
  
  modifTexteHello();
}

appli();

xhr.open("POST", "connect/"+sessionStorage.getItem("clé"));
xhr.send();
xhr.onload = function(event) {
  console.log('Success');
}