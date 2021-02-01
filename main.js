document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});

const btn = document.getElementById("toggle-password-visibility")
const motDePasse = document.getElementById("password")

btn.addEventListener("click", () => {
  motDePasse.type = motDePasse.type === 'password' ? 'text' : 'password';
})