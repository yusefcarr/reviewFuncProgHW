function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort()
    return arr
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  //exercise 2//


  const globalArray = [5, 6, 3, 2, 9];

  function nonMutatingSort(arr) {
    // Only change code below this line
  return [].concat(arr).sort(function (a, b){
    return a - b;
  });
    // Only change code above this line
  }
  
  nonMutatingSort(globalArray);

//Exercise 3//

function splitify(str) {
  // Only change code below this line
const byNonWord = str.split(/\W+/);
  return byNonWord;

  // Only change code above this line
}

splitify("Hello World,I-am code");


//Exercise 4//

function sentensify(str) {
  // Only change code below this line
  const arr = str.split(/\W+/);
  const sentence = arr.join(" ");
  return sentence;
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you")); // "May the force be with you"

//Exercise 5//

// Only change code below this line
function urlSlug(title) {
  // Convert the title to lowercase
  const lowerCaseTitle = title.toLowerCase();
  
  // Split the title into an array of words
  const wordsArray = lowerCaseTitle.split(" ");
  
  // Filter out any empty strings that may result from extra spaces
  const filteredWordsArray = wordsArray.filter(word => word !== "");
  
  // Join the words with hyphens to form the slug
  const slug = filteredWordsArray.join("-");
  
  return slug;
}
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // "a-mind-needs-books-like-a-sword-needs-a-whetstone"


//Exercise 6//

function checkPositive(arr) {
  // Only change code below this line
  return arr.every(function(element) {
    return element > 0;
  });
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// Exercise 7//

function checkPositive(arr) {
  // Only change code below this line
return arr.some(function(element) {
    return element > 0;
  });

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

//Exercise 8//

function add(x) {
  // Only change code below this line
return function(y) {
  return function(z) {
    return x + y +z;
  }
}

const add = x => y => z => x + y+ z
  // Only change code above this line
}

add(10)(20)(30);
