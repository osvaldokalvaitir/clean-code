// Regras em condicionais

// Negação dentro de ifs

// Evite negações

// Errado
const isUserOlderThan18Years = true;
const isUserLiveOnBrazil = true;

if(!isUserOlderThan18Years && !isUserLiveOnBrazil) {

}

// Correto
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if(isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {

}

// Early return vs else

// Com else
function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  } else {
    return user.age >= 18;
  }
}

// Com early return
function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  }
 
  return user.age >= 18;    
}

// Evite condicionais aninhadas (uma condicional dentro de outra)

// Errado
user.age >= 18 ? user.age === 18 ? :  : 

// Correto
if (user.age > 18) {
  return;
}

if () {

}