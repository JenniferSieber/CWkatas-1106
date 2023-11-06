// www.codewars.com
// KATA 1 7kyu
const getCount = str => (str.match(/[aeiou]/gi) || []).length;

console.log(getCount("abracadabra"));
console.log(getCount("pear tree"));

// KATA 2 7kyu
const disemvowel = str => str.split('').filter(letter => letter != letter.match(/[aeiou]/gi)).join('');

console.log(disemvowel('This website is for losers LOL!'));


// KATA 3 7kyu
const getMiddle = str => {
  let mid = str.length / 2
  return str.length % 2 === 0 
  ? str.slice(mid -1, mid +1)
  : str.slice(mid, mid + 1)
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('rate'));
console.log(getMiddle('rates'));


