let etape = 1; // Étape initiale de l'histoire

function choisir(choix) {
    if (etape === 1) {
        if (choix === 'gauche') {
            // choix de bateau
            document.getElementById('histoire').innerHTML = "Perdu ici c’est l’endroit préfère du serpent qui aime se nourrir de rongeur";
            document.getElementById('choix').innerHTML = '<button class="btn" id="retour" style="display:;" onclick="retour()">Recommencer</button>';
            document.getElementById('image').src = "image/serp.jpg"; // Changement d'image
            document.getElementById('image').style.width ="400px"

           /* document.getElementById('image1').src = "https://tse1.mm.bing.net/th?id=OIP.ZpaC6NT1Rx3oJuQsHVZfqwHaEo&pid=Api&rs=1&c=1&qlt=95&w=189&h=118"; // Changement d'image
            document.getElementById('image1').style.display = "inline";*/
            etape = 6; // fin de histoir
        } else if (choix === 'droite') {
            // choix d'un bateau
            document.getElementById('histoire').innerHTML = "Chemin de droite Bravo, c’était judicieux de choisir ce chemin vu qu’il mène directement vers le village <br> Maintenant tu dois traverser le lac pour atteindre l’ile ou le roi est retenu prisonnier <br>Pour ce là tu dois acheter un bateau pour faire la traverser tu as <span>2000$</span> <br>le Bateau-1 coute <span>500$</span> et le Bateau-2 coute<span>400$</span>" ;
            document.getElementById('choix').innerHTML = '<button class="btn" onclick="choisir(\'bateau1\')">Bateau-1</button>' + '<button class="btn" onclick="choisir(\'bateau2\')">Bateau-2</button>';
            document.getElementById('image').src = "image/bat1.jpg"; // Changement d'image
            document.getElementById('image1').src = "image/bat2.jpg"; // Changement d'image
            document.getElementById('image1').style.display = "inline";
            document.getElementById('image1').style.height ="300px"
            document.getElementById('image1').style.width ="328px"
            document.getElementById('image').style.height ="300px"
            document.getElementById('image').style.width ="366px"
            // Ajout de l'image à la page

            etape = 2; // Passe à l'étape suivante
        }
    } else if (etape === 2) {
        if (choix === 'bateau1') {
            // choisi  des ames
            document.getElementById('histoire').innerHTML = "Bienvenue sur l’ile ou est retenue le roi Pour délivré le roi tu dois acheter une arme choisi ton arme";
            document.getElementById('choix').innerHTML = '<button class="btn" onclick="choisir(\'arm1\')"> <i class="fa-solid fa-lock-open"></i> 1500$</button>' + '<button class="btn" id="lock" onclick="choisir(\'arm2\')"> <i class="fa-solid fa-lock"></i> 1600$</button>';
            document.getElementById('image').src = "image/arme2.jpg"; // Changement d'image
            document.getElementById('image1').src = "image/arm5.jpg"; // Changement d'image
            document.getElementById('image1').style.display = "inline";
            document.getElementById('image1').style.height ="auto"
            document.getElementById('image1').style.width ="156px"
            document.getElementById('image').style.height ="auto"
            document.getElementById('image').style.width ="156px"
            etape = 3; // Passe à l'étape suivante
        } else if (choix === 'bateau2') {
            // choissi des armes
            document.getElementById('histoire').innerHTML = "Bienvenue sur l’ile ou est retenue le roi Pour délivré le roi tu dois acheter une arme choisi ton arme";
            document.getElementById('choix').innerHTML = '<button class="btn" onclick="choisir(\'arm21\')"> <i class="fa-solid fa-lock-open"></i> 1500$</button>' + '<button class="btn" onclick="choisir(\'arm22\')"> <i class="fa-solid fa-lock-open"></i> 1600$</button>';
            document.getElementById('image').src = "image/arme2.jpg"; // Changement d'image
            document.getElementById('image1').src = "image/arm5.jpg"; // Changement d'image
            document.getElementById('image1').style.display = "inline";
            document.getElementById('image1').style
            document.getElementById('image1').style.height ="auto"
            document.getElementById('image1').style.width ="156px"
            document.getElementById('image').style.height ="auto"
            document.getElementById('image').style.width ="156px"
            etape = 4; // Passe à l'étape suivante
        }
    } else if (etape === 3) {
        if (choix === 'arm1') {
            // apres choix du arme
            document.getElementById('histoire').innerHTML = "Vous avez perdu cette arme n’est pas assez puissant pour tuer le dragon";
            document.getElementById('choix').innerHTML =  '<button class="btn" id="retour" style="display:;" onclick="retour()">Recommencer</button>';
            document.getElementById('image').src = "image/ilacn9.webp"; // Changement d'image
            document.getElementById('image1').style.display = "none";
            document.getElementById('image').style.width ="400px"
            etape = 6; // Fin de l'histoire
        }else if (choix === 'arm2') {
            // apres choix arm
            alert("vous n'avais pas de budger pour cette arme");
        }
    } else if (etape === 4) {
        if (choix === 'arm21') {
            // apres choi arm
            document.getElementById('histoire').innerHTML = "Vous avez perdu cette arme n’est pas assez puissant pour tuer le dragon ";
            document.getElementById('choix').innerHTML =  '<button class="btn" id="retour" style="display:;" onclick="retour()">Recommencer</button>';
            document.getElementById('image').src = "image/ilacn9.webp"; // Changement d'image
            document.getElementById('image1').style.display = "none";
            document.getElementById('image').style.width ="400px"

            etape = 6; // Fin de l'histoire
        }else if (choix === 'arm22') {
            //
            document.getElementById('histoire').innerHTML = "Bravo c’était le bon choix vous avez tuez le dragon et libéré le roi";
            document.getElementById('choix').innerHTML =  '<button class="btn" id="retour" style="display:" onclick="retour()">Recommencer</button>';
            document.getElementById('image').src = "image/oussss.jpg"; // Changement d'image
            document.getElementById('image1').style.display = "none";
            document.getElementById('image').style.width ="400px"
            etape = 6; // // Fin de l'histoire
        }

    }
    // ici plus histoires
}

function retour() {
    // Fonction pour revenir en arrière
        document.getElementById('histoire').innerHTML = "Bienvenue <br>\n" +
            "        Te voici dans le repère du serpent a 3 têtes tu as <span>2 chemins </span><br>\n" +
            "        l’un d’eux te ramène vers l’ile des sirènes ou tu dois te rendre et l’autre te ramène directement vers le serpent En sachant que <br>\n" +
            "        le chemin de C-gauche te ramènera vers l’habitat des rongeurs <br>\n" +
            "        le chemin de C-droite vers le village des pêcheurs";
        document.getElementById('choix').innerHTML = '<button class="btn" onclick="choisir(\'gauche\')">C-gauche</button>' + '<button class="btn" onclick="choisir(\'droite\')">C-droite</button>';
        document.getElementById('image').src = "image/perso-2.png"; // Changement d'image
        document.getElementById('image1').style.display = "none";
    document.getElementById('image').style.width ="156px"
        etape = 1; // Retour à l'étape initiale
}
//fonction pour changer la couleur du background
document.addEventListener('DOMContentLoaded',function(e) {

})
document.addEventListener('DOMContentLoaded', function () {

    const checkbox = document.getElementById('flexSwitchCheckDefault');
   // const btn = document.querySelectorAll('.btn');
    checkbox.addEventListener('click', function () {
        if (this.checked) {
            document.body.style.color= "white";
            document.body.style.backgroundImage = "url('image/bg.png')"; // Changez  la couleur

            //btn.style.backgroundColor= "white";

        } else {
            document.body.style.backgroundImage = "url('')"; // Rétablissez la couleur de fond par défaut si le bouton est décoché
            document.body.style.color = "black"; //

        }
    });
});
//
document.getElementById("mame").addEventListener('click', function () {
    window.location.href ="index.html";
});
                                                                                                                                                                  