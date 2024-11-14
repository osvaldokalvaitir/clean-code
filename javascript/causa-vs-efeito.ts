// Causa vs Efeito

// Variável isButtonDisabled foi criada a partir do
// efeito que ela irá ter na interface

// Errado
function Button() {
  const isButtonDisabled = true;

  return (
    <button disabled={isButtonDisabled}> 
      <span> 

      </span>
      {isButtonDisabled ? 'Carregando' : 'Enviar'}
    </button>
  )
}

// As variáveis deve ser criadas sempre pelo motivo
// da causa e não do efeito

// Certo
function Button() {
  const isFormSubmitting = true;

  return (
    <button disabled={isFormSubmitting}> 
      <span> 

      </span>
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </button>
  )
}