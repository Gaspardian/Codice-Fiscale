
// Come generare codice di controllo
const generoCodiceControllo = (cfParziale) => {

    console.log('parziale', cfParziale);
  
    // prendo caratteri pari
    const pari = [...cfParziale].filter((letter, index) => (index + 1) % 2 == 0);
  
    // prendo caratteri dispari
    const dispari = [...cfParziale].filter((letter, index) => (index + 1) % 2 > 0);
  
    // genero matrici
    const matricePari = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'A': 0,
      'B': 1,
      'C': 2,
      'D': 3,
      'E': 4,
      'F': 5,
      'G': 6,
      'H': 7,
      'I': 8,
      'J': 9,
      'K': 10,
      'L': 11,
      'M': 12,
      'N': 13,
      'O': 14,
      'P': 15,
      'Q': 16,
      'R': 17,
      'S': 18,
      'T': 19,
      'U': 20,
      'V': 21,
      'W': 22,
      'X': 23,
      'Y': 24,
      'Z': 25,
    }
    const matriceDispari = {
      '0': 1,
      '1': 0,
      '2': 5,
      '3': 7,
      '4': 9,
      '5': 13,
      '6': 15,
      '7': 17,
      '8': 19,
      '9': 21,
      'A': 1,
      'B': 0,
      'C': 5,
      'D': 7,
      'E': 9,
      'F': 13,
      'G': 15,
      'H': 17,
      'I': 19,
      'J': 21,
      'K': 2,
      'L': 4,
      'M': 18,
      'N': 20,
      'O': 11,
      'P': 3,
      'Q': 6,
      'R': 8,
      'S': 12,
      'T': 14,
      'U': 16,
      'V': 10,
      'W': 22,
      'X': 25,
      'Y': 24,
      'Z': 23,
    }
    const matriceResto = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  
    // sommo valore pari
    const sommaPari = pari.reduce((tot, el) => tot + matricePari[el], 0);
    // console.log('pari', pari);
    // console.log('somma pari', sommaPari);
  
    // sommo valore dispari
    const sommaDispari = dispari.reduce((tot, el) => tot + matriceDispari[el], 0);
    // console.log('dispari', dispari);
    // console.log('somma dispari', sommaDispari);
  
    // somma totale
    const sommaTotale = sommaDispari + sommaPari;
    // console.log('somma totale', sommaTotale);
  
    // calcolo resto
    const resto = sommaTotale % 26;
    //console.log('resto', resto);
  
    // mapping resto
    const codiceControllo = matriceResto[resto];
    // console.log('codice controllo', codiceControllo);
  
    // return 
    return codiceControllo;
  
  }