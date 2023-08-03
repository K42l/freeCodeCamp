function rot13(str) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphaRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  str = str.replace(/[A-Z]/gi, function(letter) { 
  return alphaRot13[alpha.indexOf(letter)]
  });
  //console.log(str)
  return str;
}