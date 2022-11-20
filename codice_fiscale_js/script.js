//modifica dark light
function change_theme() {
  let toggle_theme = document.querySelector(".dark_light_Bt");
  const el = document.documentElement;
  if (el.getAttribute("data-theme") == "light") {
    el.setAttribute("data-theme", "dark");
    toggle_theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path
            d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z" />
    </svg>`;
  } else {
    el.setAttribute("data-theme", "light");
    toggle_theme.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"/></svg>`;
  }

}

//reset
function reset(){
  window.location.reload();
}

//cambiapagina
function cambiapagina(){
  window.location.href="codInverso.html";
}

//form
const form = document.querySelector('form');

//...calendario
//......mese
let valore_mese = "";
let id_mese = "";
function selectMese() {
  valore_mese = form.elements.mese.value;
  arr_mese = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
  id_mese = arr_mese.indexOf(valore_mese);
  document.querySelector("#meseNascosto").value = id_mese;
  //console.log(id_mese, valore_mese);
  selectGiorno();
}
//......anno
let now = new Date();
let annoCorrente = now.getFullYear();
//console.log(annoCorrente);
let selAnno = document.querySelector("#anno");
let outAnno = "";
for (let i = annoCorrente; i >= 1900; i--) {
  outAnno += `<option>${i}</option>`;
}
selAnno.innerHTML = outAnno;
let annoSelezionato = "";
let ultCifreAnno = "";
function selectAnno() {
  annoSelezionato = form.elements.anno.value;
  ultCifreAnno = annoSelezionato[2] + annoSelezionato[3];
  //console.log(annoSelezionato, ultCifreAnno);
  selectGiorno();
}
//......giorno
function selectGiorno() {
  let giorniInMese = new Date(form.elements.anno.value, Number(form.elements.meseNascosto.value) + 1, 0).getDate();
  // console.log(giorniInMese);
  // console.log(Number(form.elements.meseNascosto.value)+1);
  let selGiorno = document.querySelector("#giorno");
  let out_giorni = "";
  for (i = 1; i < giorniInMese + 1; i++) {
    out_giorni += `<option>${i}</option>`;
  }
  selGiorno.innerHTML = out_giorni;
}
selectAnno();
selectGiorno();

//selezione stato o nazione
function selectLuogo() {
  let selectComune = document.querySelector(".comune");
  let selectStato = document.querySelector(".stato");
  if (form.elements.luogo.value == "Italia") {
    selectComune.classList.remove("d-none");
    selectStato.classList.add("d-none");
    document.querySelector("#citta").required = true;
    document.querySelector("#stato").required = false;
  }
  if (form.elements.luogo.value == "Estero") {
    selectComune.classList.add("d-none");
    selectStato.classList.remove("d-none");
    document.querySelector("#citta").required = false;
    document.querySelector("#stato").required = true;
  }
}
selectLuogo();

//elenco comuni
let citta = document.querySelector("#citta");
citta.addEventListener("keyup", autocomplete);
let elComuni = document.querySelector(".elencoComuni");
let arr_comuni = "";
fetch("/json/comuni.json")
  .then(response => response.json())
  .then(data => {
    arr_comuni = data.map(el => el.COMUNE);
    console.log(arr_comuni);
  });

function autocompleteMatch(e) {
  if (e.target.value == "") {
    return [];
  }
  const reg = new RegExp(e.target.value);
  return arr_comuni.filter(term => {
    if (term.match(reg)) {
      return term;
    }
  });
}

function autocomplete(valore) {
  elComuni.innerHTML = "";
  citta.value = citta.value.toUpperCase();
  citta.value.length > 0 ? elComuni.classList.remove("d-none") : elComuni.classList.add("d-none");
  let list = "";
  const terms = autocompleteMatch(valore);
  terms.forEach(element => {
    list += `<li onclick="seleziona(event)">${element}</li>`;
  });
  elComuni.innerHTML = `<ul>${list}</ul>`;
}
function seleziona(e) {
  elComuni.innerHTML = "";
  elComuni.classList.add("d-none");
  citta.value = e.target.textContent;
}

//elenco stati
let stato = document.querySelector("#stato");
stato.addEventListener("keyup", autocomplStato);
let elStati = document.querySelector(".elencoStati");
let arr_stati = "";
fetch("/json/codici_esteri_it.json")
  .then(response => response.json())
  .then(data => {
    arr_stati = data.map(el => el.DENOMINAZIONE.toUpperCase());
    console.log(arr_stati);
  });

function autocompleteStMatch(e) {
  if (e.target.value == "") {
    return [];
  }
  const reg = new RegExp(e.target.value);
  return arr_stati.filter(term => {
    if (term.match(reg)) {
      return term;
    }
  });
}

function autocomplStato(valore) {
  elStati.innerHTML = "";
  stato.value = stato.value.toUpperCase();
  stato.value.length > 0 ? elStati.classList.remove("d-none") : elStati.classList.add("d-none");
  let list = "";
  const terms = autocompleteStMatch(valore);
  terms.forEach(element => {
    list += `<li onclick="selezionaSt(event)">${element}</li>`;
  });
  elStati.innerHTML = `<ul>${list}</ul>`;
}
function selezionaSt(e) {
  elStati.innerHTML = "";
  elStati.classList.add("d-none");
  stato.value = e.target.textContent;
}
/****************************/
/*generazione codice fiscale*/
/****************************/
const generateCF = (event) => {

  // prevent default del form
  event.preventDefault();

  // aggiungo classe per validazione di Bootstrap
  form.classList.add('was-validated');

  // se form è valido
  if (form.checkValidity()) {

    // prendo valori
    const cognome = calcoloLettera(form.elements.cognome.value);
    const nome = calcoloNome(form.elements.nome.value);
    const sesso = form.elements.sesso.value;
    const mese = form.elements.mese.value;
    const anno = ultCifreAnno;
    // calcolo giorno
    let giorno = sesso == 'M' ? + form.elements.giorno.value : + form.elements.giorno.value + 40;
    if (giorno < 10) giorno = "0" + giorno;
    //settaggio luogo
    let luogo = "";
    let codiceCAT = "";
    if (form.elements.luogo.value == "Italia") {
      luogo = citta.value;
      fetch("/json/comuni.json")
        .then(response => response.json())
        .then(data => {
          try {
            const comune = data.find(comune => comune.COMUNE.toLowerCase() == luogo.toLowerCase());
            codiceCAT = comune.CODICE;
            finale(codiceCAT);
          } catch (err) {
            citta.value = "";
            console.error(err, "Inserire il Comune corretto!");
            alert("Inserire il Comune corretto!");
          }
        });
    } else {
      luogo = stato.value;
      fetch("/json/codici_esteri_it.json")
        .then(response => response.json())
        .then(data => {
          try {
            const statoEs = data.find(statino => statino.DENOMINAZIONE.toLowerCase() == luogo.toLowerCase());
            codiceCAT = statoEs.CODICE;
            finale(codiceCAT);
          } catch (err) {
            stato.value = "";
            console.error(err, "Inserire lo Stato corretto!");
            alert("Inserire lo Stato corretto!");
          }
        });
    }
    function finale(codiceCAT) {
      // genero cf parziale
      const cfParziale = cognome + nome + anno + mese + giorno + codiceCAT;

      // genero codice controllo
      const codiceControllo = generoCodiceControllo(cfParziale);

      // genero codice fiscale
      const cf = cfParziale + codiceControllo;

      // stampo valore e cancello display none
      document.querySelector('h2').innerText = cf;
    }
  }
};
// aggiungo listener ad invio
form.addEventListener('submit', generateCF);

//filtro per nome e cognome

const vocali = ["a", "e", "i", "o", "u"];
const validLetter = /^[a-zA-Z]+$/;

const calcoloLettera = (stringa) => {

  let output = "";

  // ciclo ogni lettera del nome/cognome per inserire consonanti
  [...stringa].map(letter => {

    // se la lettera non è una vocale (quindi è consonante) e output non ha 3 caratteri e è una lettera valida
    if (!vocali.includes(letter) && output.length < 3 && validLetter.test(letter)) {
      // aggiungila alla variabile output
      output += letter;
    }
  });

  // controllo se output ha meno di 3 valori
  if (output.length < 3) {
    // ciclo ogni lettera del nome/cognome per inserire vocali
    [...stringa].map(letter => {
      // se la lettera è una vocale e outut non ha 3 caratteri e è una lettera valida
      if (vocali.includes(letter) && output.length < 3 && validLetter.test(letter)) {
        // aggiungila alla variabile output
        output += letter;
      }
      if (output.length == 2 && stringa.length < 3) {
        output += "x";
      }
    });
  }
  // return
  return output.toUpperCase();
};

//calcolo nome con 4 o + consonanti
const calcoloNome = (stringa) => {
  let output = "";
  let consonanti = "";
  [...stringa].map(letter => {
    if (!vocali.includes(letter) && validLetter.test(letter)) {
      // aggiungila alla variabile output
      consonanti += letter;
    }
  });
  if (consonanti.length >= 4) {
    output = consonanti[0] + consonanti[2] + consonanti[3];
  }
  if (output.length > 0) {
    return output.toUpperCase();
  }
  else {
    return calcoloLettera(stringa);
  }
};
