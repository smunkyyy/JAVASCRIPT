// Klasa za organizaciju i praćenje statusa zadataka
class UpraviteljZadataka {
  constructor() {
    // Inicijalizacija praznog polja za pohranu zadataka
    this.zadaci = [];
  }

  // Metoda za dodavanje novog zadatka sa zadanim statusom dovrseno: false
  dodajZadatak(naziv) {
    this.zadaci.push({ naziv, dovrseno: false });
  }

  // Metoda za označavanje zadatka dovršenim prema njegovom indeksu u polju
  dovrsiZadatak(indeks) {
    // Provjera postoji li zadatak na traženom indeksu prije izmjene
    if (this.zadaci[indeks]) {
      this.zadaci[indeks].dovrseno = true;
    }
  }

  // Dodana metoda za pregledan ispis svih zadataka u konzolu
  ispisiZadatke() {
    console.log('--- Popis zadataka ---');
    this.zadaci.forEach((zadatak, i) => {
      const status = zadatak.dovrseno ? '[X]' : '[ ]';
      console.log(`${i + 1}. ${status} ${zadatak.naziv}`);
    });
  }
}

// Stvaranje nove instance upravitelja i dodavanje zadataka
const sustav = new UpraviteljZadataka();
sustav.dodajZadatak('Naučiti JS osnove');
sustav.dodajZadatak('Napraviti prezentaciju');

// Označavanje prvog zadatka (indeks 0) kao dovršenog
sustav.dovrsiZadatak(0);

// Ispis stanja zadataka u konzolu
sustav.ispisiZadatke();