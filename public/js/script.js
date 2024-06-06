const myButton = document.getElementById('btn');
myButton.onclick = function() {
   const name = prompt('Enter Your Full Name.');
   document.getElementById('name').innerText = name;
}

// Varibles
const pi = 3.142;
let name = 'King'; 
let age = 56;
let present = false;
console.log(name);

// Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'pink',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'King',
        driver: {
            name: 'Romero'
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car); 

car.owner.driver.name = 'Eunice';

console.log(car.owner.driver.name);


const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1 
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweet: 0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  //Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours()==16) { console.log('Class has ended!');
  } else {
    console.log('Class is in session!')
  }
  
  // For loop
  for (let i = 0; i <= 9; i++) {
    console.log('Notify Friends!', i);
  }