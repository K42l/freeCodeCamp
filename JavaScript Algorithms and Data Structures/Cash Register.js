function checkCashRegister(price, cash, cid) {
  let currencyValue = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER":  0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
}
  let totalChange = cash - price;
  let totalRegister = 0;
  let change = [];
  for (let i = 0; i < cid.length; i++) {
              totalRegister += cid[i][1];
  }
  totalRegister = totalRegister.toFixed(2);
  
  if (totalChange > totalRegister){
    return { status: "INSUFFICIENT_FUNDS", change: []};
  } else if(totalChange == totalRegister){
    return {status: "CLOSED", change: cid};
  } else {
    cid.reverse();
    for (let i of cid) {
      //console.log(i)
      
      let value = [i[0], 0];
      //console.log(value)
      console.log(currencyValue[i[0]])
      console.log(i[0])
      //break
      
      while (totalChange >= currencyValue[i[0]] && i[1] > 0) {
        totalChange -= currencyValue[i[0]];
        totalChange = totalChange.toFixed(2);
        //console.log(totalChange)
        i[1] -= currencyValue[i[0]];
        value[1] += currencyValue[i[0]];
        
      }
      
      if (value[1] > 0) {
        change.push(value);
      }
    }
  }
  if (totalChange > 0){
    //console.log("test")
    return { status: "INSUFFICIENT_FUNDS", change: []};
  }
  //console.log(change)
  return { status: "OPEN", change: change};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])