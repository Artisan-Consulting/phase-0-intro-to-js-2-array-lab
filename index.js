// Test 1: Initialisation - delcare a list of famous cartoon cats (cats array)
const cats = ["Milo","Otis","Garfield"]; {
    // where cats is an Array Object 
    // with a list of famous cartoon cat names
 };
 // ***********************************************
 // Functions
 // ***********************************************
// Test 2: Adds a new cat to the bottom of the list (cats array)
    function destructivelyAppendCat(name) {
    cats.push ('Ralph'); // where cats is an Array Object
 };

 // Test 3: Adds a new cat to the top of the list (cats array)
    function destructivelyPrependCat (name) {
    cats.unshift ('Bob');
 };

 // Tetst 4: Removes the last cat from the list (cats array)
    function destructivelyRemoveLastCat (name) {
    cats.pop ();
 };

// Test 5: Remove the first cat from the list (cats array)
    function destructivelyRemoveFirstCat (name) {
    cats.shift();
};

// Test 6: Add a cat but non-destrively
    function appendCat (name) {
      let copyOfCat = [...cats]; {
          copyOfCat.push ('Broom');
          return copyOfCat;
          }
      }

// Test 7: Prepend a cat - Add a cat to the top of the list non-destructively
    function prependCat (name) {
        let copyOfCat = [...cats]; {
            copyOfCat.unshift('Arnold');
            return copyOfCat;
        }
    };

// Test 8: Remove the last cat from list
    function removeLastCat () {
        let copyOfCat = [...cats];
        copyOfCat.pop();
        return copyOfCat;
    };

// Test 9: Remove the first cat from list
    function removeFirstCat () {
    let copyOfCat = [...cats] ;
        copyOfCat.shift()
        return copyOfCat;
    }
 
 
