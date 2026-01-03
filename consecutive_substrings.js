function consecutiveSubstrings(string) {
  // type your code here
  const result = [];

  // Loop through each starting position
  for (let i = 0; i < string.length; i++) {
    let substring = "";

    // Build consecutive substrings from the current index
    for (let j = i; j < string.length; j++) {
      substring += string[j];
      result.push(substring);
    }
  }

  return result;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


