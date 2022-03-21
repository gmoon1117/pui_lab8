function Corgi(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "cute corgi";
  this.image = "corgi.png";
}

function Capybara(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "cute capybara";
  this.image = "capybara.png";
}

function Parakeet(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "cute parakeet";
  this.image = "parakeet.png";
}

let animals = [new Corgi(), new Capybara(), new Parakeet()];
let names = ["Isabella", "Anna", "Custard", "Toast", "Vanilla", "Fluffy", "Bella"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Corgi)
  {
    return new Corgi(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Capybara)
  {
    return new Capybara(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Parakeet)
  {
    return new Parakeet(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return getRandomIndex(5);
}

function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}
