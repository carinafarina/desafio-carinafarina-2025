class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, animaisParaAvaliar) {
  
  const ANIMAIS = {
  Rex:     { tipo: 'cão',    brinquedos: ['RATO', 'BOLA'] },
  Mimi:    { tipo: 'gato',   brinquedos: ['BOLA', 'LASER'] },
  Fofo:    { tipo: 'gato',   brinquedos: ['BOLA', 'RATO', 'LASER'] },
  Zero:    { tipo: 'gato',   brinquedos: ['RATO', 'BOLA'] },
  Bola:    { tipo: 'cão',    brinquedos: ['CAIXA', 'NOVELO'] },
  Bebe:    { tipo: 'cão',    brinquedos: ['LASER', 'RATO', 'BOLA'] },
  Loco:    { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] },
};

const brinquedosValidados = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];
// Preparar brinquedos das pessoas
      const p1 = brinquedosPessoa1;
      const p2 = brinquedosPessoa2;
      
 // Validar brinquedos
      if ( p1 !== p2.length) {
        return { erro: 'Brinquedo inválido' };
      }
 // Preparar animais
      const listaAnimais = animaisParaAvaliar;

// Validar animais
      if (listaAnimais !== listaAnimais.length) {
        return { erro: 'Animal inválido' };
      }
 

}}

export { AbrigoAnimais as AbrigoAnimais };