let billetter = [];

function kjopBillett() {
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const email = document.getElementById('email').value;

    // Input-validering
    if (!film || antall <= 0 || antall > 20 || !fornavn.match(/[A-Za-z]+/) || !etternavn.match(/[A-Za-z]+/) || telefonnr.length !== 8 || !email.includes('@')) {
        alert("Vennligst fyll ut alle feltene korrekt.");
        return;
    }

    const billett = { film, antall, fornavn, etternavn, telefonnr, email };
    billetter.push(billett);
    oppdaterBillettListe();
    document.querySelector('form').reset(); // Resetter form etter registrering
}

function oppdaterBillettListe() {
    const liste = document.getElementById('billettListe');
    liste.innerHTML = ''; // Tømmer listen før ny oppdatering
    billetter.forEach((billett, index) => {
        liste.innerHTML += `<div>Billett ${index + 1}: ${billett.film}, ${billett.antall} stk, ${billett.fornavn} ${billett.etternavn}, Tlf: ${billett.telefonnr}, Email: ${billett.email}</div>`;
    });
}

function slettAlleBilletter() {
    billetter = [];
    oppdaterBillettListe();
}

document.getElementById('telefonnr').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});
