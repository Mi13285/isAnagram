const isAnagram = function (test, original) {
  let testOne = test.toLowerCase().split("").sort().join("");
  let originalOne = original.toLowerCase().split("").sort().join("");
  if (testOne == originalOne) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("dumble", "bumble"));
