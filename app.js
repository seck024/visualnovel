
document.getElementById("jeux").addEventListener("click", function(){
   window.location.href = "index1.html";

});


document.addEventListener("DOMContentLoaded", function() {
  var amadou = document.getElementById("amadou");
  var contenu = amadou.innerHTML.replace(/\s+/g, ' ').trim(); // Supprime les espaces inutiles et les sauts de ligne redondants
  amadou.innerHTML = ''; // Efface le texte initial

  // Fonction pour afficher le texte progressivement
  function afficherTexte(i) {
    if (i < contenu.length) {
      if (contenu[i] === '<') {
        var finBalise = contenu.indexOf('>', i) + 1;
        amadou.innerHTML += contenu.substring(i, finBalise);
        setTimeout(function() {
          afficherTexte(finBalise);
        }, 50); // Délai entre chaque balise (50ms)
      } else {
        amadou.innerHTML += contenu[i];
        setTimeout(function() {
          afficherTexte(i + 1);
        }, 50); // Délai entre chaque caractère (50ms)
      }
    }
  }

  afficherTexte(0); // Commence l'animation d'écriture
});


