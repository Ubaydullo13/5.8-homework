// Data Manipulation with Spread and Object Literals
// 1
const originalIngredients = ["flour", "sugar", "eggs", "butter"];

// New ingredient to prepend
const newIngredient = "vanilla";

// Creating a new array by adding a new ingredient at the beginning
const newIngredientsArray = [newIngredient, ...originalIngredients];

console.log(newIngredientsArray);


// 2

// Original object with user information
const originalUser = {
    username: "john_doe",
    email: "john@example.com",
    age: 30,
  };
  
  // Additional properties to include in the new object
  const additionalProperties = {
    isActive: true,
    lastLogin: new Date(),
  };
  
  // Creating a new object with the same information and additional properties
  const newUser = {
    ...originalUser,
    ...additionalProperties,
  };
  
  console.log(newUser);
  

//   3
const user1 = {
    name: 'John',
    age: 30,
    gender: 'male',
    occupation: 'engineer',
  };
  
  const user2 = {
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
  };
  
  // Combine data using rest and spread operators
  const combinedUser = { ...user1, ...user2 };
  
  console.log(combinedUser);

//   2 Array and Function Calls with Spread
// 1
const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Using spread operator to create a copy of the array and sort it
const sortedArray = [...originalArray].sort();

console.log("Original Array:", originalArray);
console.log("Sorted Array:", sortedArray);

// 2

function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  const numbersArray = [3, 8, 1, 4, 6, 2];
  
  // Using spread operator to pass array elements as individual arguments to the function
  const maxNumber = findMax(...numbersArray);
  
  console.log("Maximum Value:", maxNumber);

//   3

function combineProperties(...objects) {
    return objects.reduce((combined, currentObject) => {
      return [...combined, ...Object.values(currentObject)];
    }, []);
  }
  
  const objectsArray = [
    { name: "John", age: 25, city: "New York" },
    { hobby: "Gardening", profession: "Engineer" },
    { language: "JavaScript", framework: "React" }
  ];
  
  // Using spread operator to pass each object's properties as separate arguments
  const combinedProperties = combineProperties(...objectsArray);
  
  console.log("Combined Properties:", combinedProperties);
  
  
  