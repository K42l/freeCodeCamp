function telephoneCheck(str) {
  let valid = /^1?\s?(\d{3}|\(\d{3}\))(-|\s)?\d{3}(-|\s)?\d{4}$/gm
  //console.log(valid.test(str))
  return valid.test(str);
}

telephoneCheck("555-555-5555");