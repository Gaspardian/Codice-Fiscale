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
function reset() {
    window.location.reload();
}

//cambiapagina
function cambiapagina() {
    window.location.href = "index.html";
}

/*************************/

// stabilisco le variabili per i campi dei risultati
let cognome = document.querySelector("#risulCognome");
let nome = document.querySelector("#risulNome");
let data = document.querySelector("#risulData");
let luogo = document.querySelector("#risulLuogo");
let sesso = document.querySelector("#risulSesso");

// stabilisco le variabili per i campi del form
let input = document.querySelector("#inputCodice");
const form = document.querySelector('form');

input.addEventListener("keyup", typingInput);
function typingInput() {
    cognome.value = "";
    nome.value = "";
    data.value = "";
    luogo.value = "";
    sesso.value = "";
    form.classList.remove('was-validated');
}
const codiciMese = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    H: 5,
    L: 6,
    M: 7,
    P: 8,
    R: 9,
    S: 10,
    T: 11
}

/****************************/
/*generazione codice inverso*/
/****************************/
const generateCF = (event) => {

    // prevent default del form
    event.preventDefault();

    // aggiungo classe per validazione di Bootstrap
    form.classList.add('was-validated');
    input.value = input.value.toUpperCase();

    // se form è valido
    if (form.checkValidity()) {
        let codFiscale = form.elements.codice.value;
        let codControllo = [...codFiscale].pop();
        let cfParziale = [...codFiscale].slice(0, 15);
        let codCognome = cfParziale.slice(0, 3).toString().replaceAll(",", "");
        let codNome = cfParziale.slice(3, 6).toString().replaceAll(",", "");
        let codAnno = cfParziale.slice(6, 8).toString().replaceAll(",", "");
        let codMese = cfParziale.slice(8, 9).toString()
        let codGiorno = cfParziale.slice(9, 11).toString().replaceAll(",", "");
        let codLuogo = cfParziale.slice(11, 15).toString().replaceAll(",", "");
        //variabili di uscita
        let risulAnno = "";
        let risulMese = "";
        let risulGiorno = "";
        let risulLuogo = "";
        let risulSesso = "";

        //verifico il luogo
        let lettLuogo = codLuogo[0];
        if (lettLuogo != "Z") {
            fetch("/json/comuni.json")
                .then(response => response.json())
                .then(data => {
                    try {
                        const comune = data.find(comune => comune.CODICE.toLowerCase() == codLuogo.toLowerCase());
                        risulLuogo = comune.COMUNE;
                        continuaVerifica() ;
                    } catch (err) {
                        alert("Il codice catastale " + codLuogo + " è errato, " + err);
                        form.classList.remove('was-validated');
                        input.focus();
                        return;
                    }
                });
        } else {
            fetch("/json/codici_esteri_it.json")
                .then(response => response.json())
                .then(data => {
                    try {
                        const stato = data.find(stato => stato.CODICE.toLowerCase() == codLuogo.toLowerCase());
                        risulLuogo = stato.DENOMINAZIONE;
                        continuaVerifica();
                    } catch (err) {
                        alert("Il codice catastale " + codLuogo + " è errato, " + err);
                        form.classList.remove('was-validated');
                        input.focus();
                        return;
                    }
                });
        }
        //inglobo tutto in una funzione da richiamare all'interno del fetch causa ritardo di risposta dello stesso
        function continuaVerifica() {
            //verifico la anno
            let date = new Date();
            let annoCorrente = date.getFullYear().toString();
            if (Number(codAnno)) {
                if (codAnno > Number((annoCorrente[2] + annoCorrente[3]))) {
                    risulAnno = "19" + codAnno;
                } else {
                    risulAnno = "20" + codAnno;
                }
            } else {
                alert("Il valore dell'anno è errato!");
                form.classList.remove('was-validated');
                input.focus();
                return;
            }
            //verifico mese
            if (codiciMese[codMese] == undefined) {
                alert("Il valore del mese è errato!");
                form.classList.remove('was-validated');
                input.focus();
                return;
            } else {
                risulMese = codiciMese[codMese] + 1;
            }
            if (risulMese < 10) {
                risulMese = "0" + risulMese;
            }
            //verifico giorno e sesso
            if (Number(codGiorno)) {
                let giorniInMese = new Date(Number(risulAnno), Number(risulMese), 0).getDate();
                if (codGiorno < 72) {
                    if (codGiorno > 40) {
                        risulSesso = "Femminile";
                        if ((codGiorno - 40) > giorniInMese) {
                            alert("Il valore del giorno o del mese è errato!");
                            form.classList.remove('was-validated');
                            input.focus();
                            return;
                        } else {
                            risulGiorno = codGiorno - 40;
                        }
                    } else {
                        risulSesso = "Maschile";
                        if (codGiorno > giorniInMese) {
                            alert("Il valore del giorno o del mese è errato!");
                            form.classList.remove('was-validated');
                            input.focus();
                            return;
                        } else {
                            risulGiorno = codGiorno;
                        }
                    }

                } else {
                    alert("Il valore del giorno è errato!");
                    form.classList.remove('was-validated');
                    input.focus();
                    return;
                }
            } else {
                alert("Il valore del giorno è errato!");
                form.classList.remove('was-validated');
                input.focus();
                return;
            }

            // verifico il codice controllo
            const codiceControllo = generoCodiceControllo(cfParziale);
            if (codControllo == codiceControllo) {
                cognome.value = codCognome;
                nome.value = codNome;
                luogo.value = risulLuogo;
                data.value = risulGiorno + "/" + risulMese + "/" + risulAnno;
                sesso.value = risulSesso;
            } else {
                alert("Il codice di controllo " + codControllo + " è errato, quello giusto è " + codiceControllo);
                form.classList.remove('was-validated');
                input.focus();
                return;
            }
        }
    }
};
// aggiungo listener ad invio
form.addEventListener('submit', generateCF);
