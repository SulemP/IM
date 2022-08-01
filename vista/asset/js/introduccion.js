let seccionHome = document.getElementById("seccionHome");
let seccionIntroduccion = document.getElementById("seccionIntroduccion");

setTimeout(() => {
  seccionHome.setAttribute("class", "invisible");
  seccionIntroduccion.setAttribute("class", "invisible");
  seccionHome.removeAttribute("class", "invisible");
  seccionHome.setAttribute("class", "home");
}, 5000);