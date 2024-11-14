// Evite Syntactic Sugars

const numberInString = '2345';

const number = +numberInString;
const number = parseInt(numberInString);
const isNumberNotNull = !!number;

// Utilizar o constructor da classe 

const number = Number(numberInString);
const isNumberNotNull = Boolean(number);
const numberAsString = String(number);