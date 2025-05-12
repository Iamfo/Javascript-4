/**
 * Dobbiamo costruire in componente che contiene un <h1> vuoto e un <button>. Al click sul bottone dobbiamo far si che all'interno dell'h1 si visualizzi il testo "My Custom Title":

 * 1. Scriviamo i commenti in alto che dividono il codice in piccoli pezzi
 * 2. Selezioniamo l'HTML
 * 3. Scriviamo lo state con la chiave text con valore di default stringa vuota
 * 4. Scriviamo la funzione updateText che internamente aggiorna il valore di text con la stringa "My Custom Title"
 * 5. Scriviamo la funzione render che mette il valore di state.text dentro l'HTML del nostro h1
 * 6. Scriviamo la funzione che gestisce gli event listeners
 * 7. Al click nell'event listners prima dobbiamo aggiornare il valore dello state e poi renderizzare
 * 8. Scriviamo la funzione init all'interno della quale prima faremo il primo rendering (anche detto mount) e poi andremo ad avviare gli event listeners
 * 9. Eseguimo la funzione init

Dovremmo a questo punto vedere in pagina un bottone, al click si visualizzerà subito sopra il testo "My Custom Title".
 */

//2. Selezioniamo l'HTML
const $titleelement = document.querySelector("#title");
const $btnelement = document.querySelector("#button");

//3. Scriviamo lo state con la chiave text con valore di default stringa vuota
const state = {
    text:'',
};

//4. Scriviamo la funzione updateText che internamente aggiorna il valore di text con la stringa "My Custom Title"
function updateText () {
    state.text = "My Custom Title";
};

//5. Scriviamo la funzione render che mette il valore di state.text dentro l'HTML del nostro h1
function render() {
    $titleelement.innerHTML = state.text;
};

//6. Scriviamo la funzione che gestisce gli event listeners e
//7. Al click nell'event listners prima dobbiamo aggiornare il valore dello state e poi renderizzare
function manageListeners () {
    $btnelement.addEventListener("click", () => {
        updateText();
        render();
    })
};

//8. Scriviamo la funzione init all'interno della quale prima faremo il primo rendering (anche detto mount) e poi andremo ad avviare gli event listeners
function init() {
    render(); // aka: mount
    manageListeners();
};

//9. Eseguimo la funzione init

init();