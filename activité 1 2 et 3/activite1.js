////////////////////////////
/// Programme principal
////////////////////////////

var mesImages = ["alpes.jpg", "gordes.jpg", "lavandes.png"];
var i = 1;

afficher_titre('Diaporama Alcatraena'); // Appel de la fonction afficher_titre() avec le texte 'Diaporama Alcatraena'
creerBouton();
var cible = document.querySelector("#cible");

// Affichage du titre
function afficher_titre(texte) {
    let titre = document.createElement('div');
    titre.setAttribute('class', 'alpha');
    titre.innerHTML = texte;
    document.body.appendChild(titre);
}

function creerBouton ()
{
	var cible = document.querySelector("#cible");
	for ( let i = 0; i < mesImages.length; i++)
	{
		var para = document.createElement("a");
		para.innerHTML = mesImages[i];
		cible.addEventListener("click",afficherImage);
		cible.appendChild(para);
	}
}

// Affichage de la bonne photo
function afficherImage(e) {
    var nom_image = e.target.innerHTML; // On récupère dans l'évènement l'objet balise concerné
    let ma_diapo = document.querySelector('#la_diapo');
    ma_diapo.src = "images/" + nom_image; // On modifie l'attribut "src" de <img id="la_diapo">
    info.innerHTML = nom_image; // Afficher le nom de la photo dans la zone de texte de la balise <figcaption id="info">
}

// Fonction utilisée dans l'activité 2
function automatic() {
    let nomImage = mesImages[i]; // On récupère le nom de l'image dans le tableau
    let ma_diapo = document.querySelector('#la_diapo');
    ma_diapo.src = "images/" + nomImage; // On modifie l'attribut "src" de <img id="la_diapo">
    info.innerHTML = nomImage; // Afficher le nom de la photo dans la zone de texte de la balise <figcaption id="info">
}

// 2 fonctions pour l'activité 2
function suivant() { i++; automatic(); }

function precedent() { i--; automatic(); }
