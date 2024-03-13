const reponse = await fetch ("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const stockElement = document.createAttribute("p");
stockElement.innerHTML = article.disponibilite ? "En stock" : "Rupture de stock";

const descriptionElement = document.createElement("p");
descriptionElement.innerHTML=article.description ?? "Pas de description pour le moment";

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);
document.body.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);