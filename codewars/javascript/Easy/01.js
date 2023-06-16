// Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//Option 1
a = [22, -6, 32, 82, 9, 25]
let multiple_of_index = a => a.filter((n, i) => n % i === 0);

console.log(multiple_of_index(a));

//Option 2
array = [22, -6, 32, 82, 9, 25]
function multipleOfIndex(array) {
    return array.filter((x,i) => x == 0 || x % i === 0)
  }
console.log(multipleOfIndex(array));