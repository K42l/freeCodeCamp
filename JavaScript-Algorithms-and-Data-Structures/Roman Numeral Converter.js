function convertToRoman(num) {
 let numero = num.toString();
 let splitedNum = numero.split("");
 //console.log(splitedNum)
 let romanNum = "";
 let romanNum2 = "";
 let romanNum3 = "";
 //console.log(splitedNum.length)
 //romanNum = "I";
 //console.log(romanNum);
 if (splitedNum.length == 1){
   switch(splitedNum[splitedNum.length - 1]){
     case "1":  
     case "2":
     case "3":
          romanNum = "I"
          return romanNum = romanNum.repeat(splitedNum);
     case "4":
          return romanNum = "IV"
     case "5":
          return romanNum = "V"
     case "6":
          return romanNum = "VI"
     case "7":
          return romanNum = "VII"
     case "8":
          return romanNum = "VIII" 
     case "9":
          return romanNum = "IX" 
   }

 } else if (splitedNum.length == 2){
    let test = (splitedNum[splitedNum.length - 2])
    //console.log(test)
    switch (splitedNum[splitedNum.length - 2]){
      case "1":
      case "2":
      case "3":
          romanNum = "X"
          romanNum = romanNum.repeat(splitedNum[0])
          break
      case "4":
          romanNum = "XL"
          break
      case "5":
          romanNum = "L"  
          break   
      case "6":
          romanNum = "LX" 
          break         
      case "7":
          romanNum = "LXX"  
          break        
      case "8":
          romanNum = "LXXX" 
          break         
      case "9":
          romanNum = "XC"
          break
    } switch (splitedNum[splitedNum.length - 1]){
      case "1":  
      case "2":
      case "3":
          //console.log("test")
          romanNum2 = "I"
          romanNum2 = romanNum2.repeat(splitedNum[1])
          romanNum += romanNum2
          //console.log(romanNum);
          return romanNum;
      case "4":
          return romanNum += "IV"
      case "5":
          return romanNum += "V"
      case "6":
          return romanNum += "VI"
      case "7":
          return romanNum += "VII"
      case "8":
          return romanNum += "VIII" 
      case "9":
          return romanNum += "IX" 
    }
 } else if (splitedNum.length == 3) {

    switch(splitedNum[splitedNum.length - 3]){
     case "1":  
     case "2":
     case "3":
          romanNum = "C"
          romanNum = romanNum.repeat(splitedNum);
          break
     case "4":
          romanNum = "CD"
          break
     case "5":
          romanNum = "D"
          break
     case "6":
          romanNum = "DC"
          break
     case "7":
          romanNum = "DCC"
          break
     case "8":
          romanNum = "DCCC" 
          break
     case "9":
          romanNum = "CM" 
          break
   } switch(splitedNum[splitedNum.length - 2]){
      case "0":
          romanNum = romanNum 
          break
      case "1":  
      case "2":
      case "3":
          romanNum2 = "X"
          romanNum += romanNum2.repeat(splitedNum);
          break
      case "4":
          romanNum += "XL"
          break
      case "5":
          romanNum += "L"
          break
      case "6":
          romanNum += "LX"
          break
      case "7":
          romanNum += "LXX"
          break
      case "8":
          romanNum += "LXXX" 
          break
      case "9":
          romanNum += "XC" 
          break
   } switch (splitedNum[splitedNum.length - 1]){
      case "0":
          return romanNum
      case "1":  
      case "2":
      case "3":
          //console.log("test")
          romanNum3 = "I"
          romanNum3 = romanNum3.repeat(splitedNum[2])
          romanNum += romanNum3
          //console.log(romanNum);
          return romanNum;
      case "4":
          return romanNum += "IV"
      case "5":
          return romanNum += "V"
      case "6":
          return romanNum += "VI"
      case "7":
          return romanNum += "VII"
      case "8":
          return romanNum += "VIII" 
      case "9":
          return romanNum += "IX" 

   }

 } else {

    switch(splitedNum[splitedNum.length - 4]){
     case "1":  
     case "2":
     case "3":
          romanNum = "M"
          romanNum = romanNum.repeat(splitedNum[0]);
          //console.log(romanNum)
          break
     
   } switch(splitedNum[splitedNum.length - 3]){
     case "1":  
     case "2":
     case "3":
          romanNum2 = "C"
          romanNum += romanNum2.repeat(splitedNum[1]);
          break
     case "4":
          romanNum += "CD"
          break
     case "5":
          romanNum += "D"
          break
     case "6":
          romanNum += "DC"
          break
     case "7":
          romanNum += "DCC"
          break
     case "8":
          romanNum += "DCCC" 
          break
     case "9":
          romanNum += "CM" 
          break
   } switch (splitedNum[splitedNum.length - 2]){
      case "0":
          romanNum = romanNum 
          break
      case "1":  
      case "2":
      case "3":
          romanNum2 = "X"
          romanNum += romanNum2.repeat(splitedNum[2]);
          break
      case "4":
          romanNum += "XL"
          break
      case "5":
          romanNum += "L"
          break
      case "6":
          romanNum += "LX"
          break
      case "7":
          romanNum += "LXX"
          break
      case "8":
          romanNum += "LXXX" 
          break
      case "9":
          romanNum += "XC" 
          break
    
 } switch (splitedNum[splitedNum.length - 1]){
      case "0":
          return romanNum
      case "1":  
      case "2":
      case "3":
          //console.log("test")
          romanNum3 = "I"
          romanNum3 = romanNum3.repeat(splitedNum[3])
          romanNum += romanNum3
          //console.log(romanNum);
          return romanNum;
      case "4":
           return romanNum += "IV"
           //console.log(romanNum)
      case "5":
          return romanNum += "V"
      case "6":
          return romanNum += "VI"
      case "7":
          return romanNum += "VII"
      case "8":
          return romanNum += "VIII" 
      case "9":
          return romanNum += "IX"
    }
  }
}

convertToRoman(1023);