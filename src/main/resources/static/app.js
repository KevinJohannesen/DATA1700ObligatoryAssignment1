let billetter = [];

function visFeilmelding(id, melding) {
    const errorSpan = document.getElementById('error-' + id);
    errorSpan.textContent = melding;
    errorSpan.style.display = 'inline'; // Viser feilmelding
}

function skjulFeilmeldinger() {
    const feilmeldinger = document.querySelectorAll('.error-message');
    feilmeldinger.forEach(function(melding) {
        melding.style.display = 'none'; // Skjuler alle feilmeldinger
    });
}

function kjopBillett() {
    // Start med å skjule eksisterende feilmeldinger
    skjulFeilmeldinger();

    let erGyldig = true;
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const email = document.getElementById('email').value;

    // Input-validering
  /*  if (!film || antall <= 0 || antall > 20 || !fornavn.match(/[A-Za-z]+/) || !etternavn.match(/[A-Za-z]+/) || telefonnr.length !== 8 || !email.includes('@')) {
        alert("Vennligst fyll ut alle feltene korrekt.");
        return;
    }
*/
    if (!film) {
        visFeilmelding('film', 'Vennligst velg en film.');
        erGyldig = false;
    }
    if (antall <= 0 || antall > 20) {
        visFeilmelding('antall', 'Vennligst fyll ut antall billetter (1-20).');
        erGyldig = false;
    }
    if (!fornavn.match(/^[A-Za-z\s]+$/)) {
        visFeilmelding('fornavn', 'Vennligst fyll ut fornavn korrekt.');
        erGyldig = false;

    }
    if (!etternavn.match(/^[A-Za-z\s]+$/)) {
        visFeilmelding('etternavn', 'Vennligst fyll ut etternavn korrekt.');
        erGyldig = false;
    }
    if (telefonnr.length !== 8) {
        visFeilmelding('telefonnr', 'Telefonnummeret må inneholde 8 sifre.');
        erGyldig = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
        visFeilmelding('email', 'Vennligst fyll ut en gyldig e-postadresse.');
        erGyldig = false;
    }

    // Hvis noe av valideringen feiler, stopper funksjonen her
    if (!erGyldig) {
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
