// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const favColor = 'blue';
function returnFaveColor(){
  return favColor;
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let newCount = 0
    return () => {
      newCount++;
        return newCount;
    }
};

const newCounter= counter;
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  
    const increment = () => {
      count++;
        return count;
    }
    const decrement = () => {
      count--;
        return count;
    }

};
