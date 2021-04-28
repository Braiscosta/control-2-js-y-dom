"use strict";

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

function repetidos(nombres){
 return nombres.sort().filter((item,i) => item !== nombres[i+1])
}

console.log(repetidos(names))