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

  // String contcatenation
const firstname = 'Romero';
const lastname = 'Dong Ullo';
firstname.trim() +' '+ lastname.trim();

// Tempalte literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(1);
`${firstname.trim()} ${lastname.trim()}`.chartAt(0);
`${firstname.trim()} .charAt())}${lastname.trim().charAt()};`
`${firstname.trim()} .charAt())}${lastname.trim().charAt()};`
`${lastname.trim().charAt()}; {firstname.trim().charAt()};`

// Write a function that will ass a participant to our google classrooom

const participants= [];
function addParticipant(email) {
  // check if email is valid
  if(!email) {
    return 'Email not provided';
  }
  // check if email is valid
  if(!email.includes('@')) {
     return 'invalid email provided';
  }
  // Add email to participants
  participants.push(email);
  // Notify them via mail
  // return response
   return 'Participant added!';
}

addParticipant('dongromerot@gmail.com');


// Arrays in Javascript

const alphabets= ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');

const user = {
  firstname: 'Joe',
  lastname: 'Ganner',
}

function fullname(user){
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}
fullname(user);

// Array Map
const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephen', lastname: 'Grider'},
  {firstname: 'Elon', lastname: 'Musk'} 
]
users.map(fullname);

// Map and return squares of numbers
function square(number){
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square)

// filter and return even numbers
function even(number){
  return number % 2 === 0;
}
numbers.filter(even)

// write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false

// const user = {
//   name: 'Martin King',
//   dateOfBirth: '2024-06-12',
// }

function ItsYourBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth()=== birthDate.getMonth() && today.getDate() === birthDate.getDate()){
    return true;
  } else {
    return false;
  }
}

ItsYourBirthday(user);

function birthdayGreeting(){
  if (ItsYourBirthday(user)){
    return 'Happy Birthday, ${user.name}';
  } else{
    return 'Not yet';
  }
}

birthdayGreeting(user);


