// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let unique = [];
    if (!alphabet || alphabet.length !== 26) return false;
    for (i = 0; i < alphabet.length; i++) {
      if (!unique.includes(alphabet[i])) {
        unique.push(alphabet[i])
      } else { return false }
    }
    console.log('given alphabet:', alphabet)
    console.log('given input:', input)
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const userInput = input.toLowerCase().split("");
    const userAlphabet = alphabet.toLowerCase().split("");
    let currentLetter;


    //====================================================================
    //                            ENCODE

    if (encode) {
      const mapped = userInput.map((letter) => {
        if (letter == ' ') {
          return letter
        } else {

          currentLetter = actualAlphabet.indexOf(letter);
          console.log('given index:', currentLetter)

          return userAlphabet[currentLetter]
        }
      })
      console.log(mapped.join(''))
      return mapped.join('')
    }


    //====================================================================
    //                            DECODE
    if (!encode) {
      const mapped = userInput.map((letter) => {
        if (letter == ' ') {
          return letter
        } else {

          currentLetter = userAlphabet.indexOf(letter);
          return actualAlphabet[currentLetter]
        }
      })
      console.log(mapped.join(''))
      return mapped.join('')
    }



  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
