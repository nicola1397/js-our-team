const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const cardContainer = document.getElementById("cardContainer");

for (let person of team) {
  memberCard(person);
  console.log("Nome:" + person.name);
  console.log("Ruolo:" + person.role);
  console.log("Immagine:" + person.image);
}

function memberCard(person) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");

  const picture = document.createElement("img");
  picture.src = `img/${person.image}`;
  newDiv.appendChild(picture);
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");
  newDiv.appendChild(bodyDiv);
  const title = document.createElement("h5");
  title.classList.add("card-title");
  bodyDiv.appendChild(title);

  title.innerText = person.name;
  const text = document.createElement("p");
  text.classList.add("card-text");
  text.innerText = person.role;
  bodyDiv.appendChild(text);

  cardContainer.appendChild(newDiv);
}
