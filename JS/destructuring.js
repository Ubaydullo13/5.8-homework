// 1. Destructuring
const prices = [10.99, 5.45, 23.00, 7.86];

// 1. Extract the first and last element of the prices array


const [firstElement, , , lastElement] = prices;

console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);


// 2. Swap the first and second elements using destructuring
const [secondElement, firstElement1, ...rest] = prices;
const swappedPrices = [firstElement1, secondElement, ...rest];

console.log("Original Prices:", prices);
console.log("Swapped Prices:", swappedPrices);

//3. Extract the second and third elements into a new array
const [secondElement1, thirdElement] = prices.slice(1, 3);

// Multiply each element by 2
const multipliedArray = [secondElement1 * 2, thirdElement * 2];

console.log("Original Prices:", prices);
console.log("Extracted and Multiplied Array:", multipliedArray);



// 2 Let's say you have two objects containing movie information.
const movie1 = { title: "The Matrix", director: "The Wachowskis", year: 1999 };
const movie2 = { genre: "Science fiction", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] };

//1  Combine information from both objects using destructuring
const combinedMovie = { ...movie1, ...movie2 };

console.log("Combined Movie:", combinedMovie);


//2 Destructure the combined object to extract specific data points
const { title, director, genre, cast } = combinedMovie;

console.log("Title:", title);
console.log("Director:", director);
console.log("Genre:", genre);
console.log("Cast:", cast);


// 3 Create a function that takes two objects as arguments and returns a new object combining their data using destructuring.

function combineObjects(obj1, obj2) {
    // Combine information from both objects using destructuring
    const combinedObject = { ...obj1, ...obj2 };
    return combinedObject;
  }
  
  // Example usage:
  const movie3 = { title: "The Matrix", director: "The Wachowskis", year: 1999 };
  const movie4 = { genre: "Science fiction", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] };
  
  const combinedMovie1 = combineObjects(movie3, movie4);
  
  console.log("Combined Movie:", combinedMovie1);
  

