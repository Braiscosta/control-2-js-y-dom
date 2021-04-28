"use strict";

function conversor(num, base) {
  if (base === 10) {
    let bin = 0;
    let reverseNum = num.toString().split("").reverse().join("");

    for (let i = 0; i < reverseNum.length; i++) {
      bin += reverseNum[i] * 2 ** i;
    }
    return bin;
  } else if (base === 2) {
    return +num.toString(base);
  } else {
    return "calculo no valido";
  }
}

console.log(conversor(101, 10));
