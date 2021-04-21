

const caesarModule = (() => {
  const BOUNDARIES = {
    start: "a".charCodeAt(),
    end: "z".charCodeAt(),
  };
  function caesar(input, shift, encode = true) {
    if (!shift) return false;
    if (shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    input = input.toLowerCase();
    return input.split("").reduce((result, char) => { 
      const code = char.charCodeAt();
      if (code < BOUNDARIES.start || code > BOUNDARIES.end) return result + char;
      let shifted = code + shift;
      
      if (shifted > BOUNDARIES.end) {
        shifted = BOUNDARIES.start + (shifted - BOUNDARIES.end - 1);
      } else if (shifted < BOUNDARIES.start) {
        shifted = BOUNDARIES.end - (BOUNDARIES.start - shifted - 1);
      }
      return result + String.fromCharCode(shifted);
    }, ""); 
  }
  return { caesar };
})();
module.exports = { caesar: caesarModule.caesar };