// Números mágicos

// Simples 

// setTimeOut, setInterval

// Errado
setTimeout(() => {

}, 2592000000)

// Correto
setTimeout(() => {

}, 1000 * 60 * 24 * 30) // 30 days

// Correto
const INTERVAL_30_DAYS = 1000 * 60 * 24 * 30;

setTimeout(() => {

}, INTERVAL_30_DAYS)

// Para números grandes pode colocar _ para dividir as casas decimais
// sem ter efeito no valor

// Errado
2592000000

// Correto
2_592_000_000

// Avançado

// Errado
function calculateDiscount(price, discountAmount) {
  // retorna desconto
}

// Correto
function calculateDiscount(priceInCents, discountAmountInPercentage) {
  // retorna desconto
}