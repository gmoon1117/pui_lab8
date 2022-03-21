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

/*** Document Load ****/
function onLoad () {

  // get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  //use a boolean to keep track of whether you have saved an animal
  var hasSavedAnimal = false;

  // arrary of animals
  var current_animals = [];

  //check if the saved animal exists in local storage
  if (animal === null)
  {
    //if there is no saved animal, the button should display the Save Animal text
    document.getElementById("button-storage").textContent = "Save Animal";

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
  }
  else
  {

    //if there is a saved animal, the button should display Clear Animal text
    document.getElementById("button-storage").textContent = "Clear Animal";

    //change the boolean to note that this animal has been saved
    hasSavedAnimal = true;
  }

  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);


  document.getElementById("button-storage").addEventListener("click", function() {
    //when we are clearing the animal
    if (hasSavedAnimal)
    {
      // clear the animal from the local storage
      localStorage.removeItem("savedAnimal");

      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }
    //when we are saving the animal
    else
    {
      // save the animal to the local storage
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      current_animals.push(JSON.stringify(animal));
      document.getElementById("current-animals").innerHTML = current_animals;


      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });

};
