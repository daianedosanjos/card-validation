const validator = {

  isValid(creditCardNumber){
    const arrayCard = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
      const digit = parseInt(creditCardNumber[i]); //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
      arrayCard.push(digit);
      //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
    }
    const NumberReverse = arrayCard.reverse(); //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    for (let i = 0; i < NumberReverse.length; i++) { //A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0. 
      if ((i + 1) % 2 === 0) {
        NumberReverse[i] = NumberReverse[i] * 2;
      }
      if (NumberReverse[i] >= 10) {
        NumberReverse[i] = NumberReverse[i] - 9; // todo numero maior que 10 e menor que 20, se vc subtrair 9 o resultado é a soma deles
      }
    }
    
    let sumTotal = 0;
    for (let i = 0; i < NumberReverse.length; i++) {
      sumTotal = sumTotal + NumberReverse[i];
    }
    return sumTotal % 10 === 0
  },

  maskify(creditCardNumber) {
    const maskNum = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        maskNum.push("#");
      } else {
        maskNum.push(creditCardNumber[i]);
      }
    }
    const masked = maskNum.join(""); //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string
    return masked;
  },  
    
}
export default validator;

