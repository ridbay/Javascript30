
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const displayFullArrayListInDom = (arrays, className, otherParams) => {

  if(otherParams === undefined){
    const list = arrays.map((array, idx) => ( `<div> ${idx + 1}. first: ${array.first}, last: ${array.last}, year: ${array.year}, passed: ${array.passed} </div>`));
    return document.querySelector(`.${className}`).innerHTML = list.join(" ");
  } else {
    const list = arrays.map(array => `<li>First: ${array.first} | ${otherParams}: ${array[otherParams]}</li>`).join(" ");
    return document.querySelector(`.${className}`).innerHTML = list;
  }
}

const setHeading = (que, id) => (document.querySelector(`.que${id}`).innerHTML = que);
// Display Full array in DOM
displayFullArrayListInDom(inventors, "inventors");


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const que1 = "1. Filter the list of inventors for those who were born in the 1500's";
setHeading(que1, 1);
const filterArray = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600);
displayFullArrayListInDom(filterArray, "filter")



// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const que2 = "2. Give us an array of the inventors' first and last names";
setHeading(que2, 2);
displayFullArrayListInDom(inventors, "map", 'last');


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const que3 = `3. Sort the inventors by birthdate, oldest to youngest`;
setHeading(que3, 3);
const sortInventorsByBD = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
displayFullArrayListInDom(sortInventorsByBD, 'sortByBD', 'year');


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const que4 = `4. How many years did all the inventors live?`;
setHeading(que4, 4);
const yearLived = inventors.reduce((acc, curr) => acc + (curr.passed - curr.year), 0);
document.querySelector('.yearLived').innerHTML = `All the inventors lived <b>${yearLived}</b> in total`;



// 5. Sort the inventors by years lived
const que5 = `5. Sort the inventors by years lived`;
setHeading(que5, 5);
const sortByYear = inventors.sort((a, b) => (a.passed -a.year) > (b.passed - b.year) ? 1: -1)

displayFullArrayListInDom(sortByYear, 'sortByYear');



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const que6 = `6. create a list of Boulevards in Paris that contain 'de' anywhere in the name; https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris`;
// setHeading(que6, 6);

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'))

// 7. sort Exercise
// Sort the people alphabetically by last name

const que7 = `7. Sort the people alphabetically by last name`;
setHeading(que7, 7);
const alpha = people.sort((a,b)=> {
  const [aFirst, aLast] = a.split(', ');
  const [bFirst, bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
} )
const list = alpha.map(array => `<li>LastName: ${array.split(', ')[1]} | FirstName: ${array.split(', ')[0]}</li>`).join(" ");
document.querySelector('.people').innerHTML = list;


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const que8 = `8. Sum up the instances of each of these`;
setHeading(que8, 8);

const transportation = data.reduce((acc, curr)=> {
  if(!acc[curr]){
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {})

const result = Object.keys(transportation).map(key => {
  const newArray = [key, transportation[key]];
  return newArray;
})

for (let key in transportation) {
  if (transportation.hasOwnProperty(key)) {

    const newItem = `<li>Number of ${key} is ${transportation[key]}</li>`
    
    document.querySelector('.reduce').innerHTML += newItem;
  }
}



