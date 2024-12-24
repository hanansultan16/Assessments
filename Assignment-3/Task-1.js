
// Answer following as Yes or No only

// A. If it is true that x > y and it is also true that x < z, does that mean y < z is true?
// B. If it is true that x >= y and it is also true that z == x, does that means that z == y is true?
// C. If it is true that x != y and it is also true that x != z, does that mean z != y is true?


    // First Statement
    let x = 5;
    let y = 3;
    let z = 7;
    x > y;  // true
    x < z;  // true
    y < z;  // true

    // Second statement
    x = 5;
    y = 3;
    z = 5;
    x >= y;  // true
    x == z;  // true
    y == z;  // false

    // Third Statment
    x = 5;
    y = 3;
    z = 3;
    x != y;  // true
    x != z;  // true
    y != z;  // false
