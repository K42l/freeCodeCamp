function palindrome(str) {
  str = str.replace(/\W/gi,"")
  str = str.replace(/_/gi, "");
  //console.log(str)
  str = str.toLowerCase();
  //console.log(str)
  let splited = [];
  splited = str.split("");
  //console.log(splited);
  splited.reverse();
  splited = splited.join("");
  // console.log(str)
  // console.log(splited)
  // console.log(splited == str)
  return splited == str;
  
}

palindrome("_eye");