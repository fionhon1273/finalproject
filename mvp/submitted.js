var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('ans1')); // true
console.log(urlParams.get('ans1')); // "edit"

console.log(urlParams.has('ans2')); // true
console.log(urlParams.get('ans2'));

// console.log(urlParams.has('ans1')); // true
// console.log(urlParams.get('ans1'));
