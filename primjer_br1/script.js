// Polje (array) objekata koje predstavlja proizvode u košarici
const kosarica = [
  { naziv: 'Tipkovnica', cijena: 80 },
  { naziv: 'Miš', cijena: 40 }
];

// Funkcija prima listu stavki i postotak popusta (zadana vrijednost je 10%)
function izracunajUkupno(stavke, popustPostotak = 10) {
  let zbroj = 0;

  // Prolazak kroz svaku stavku u košarici i zbrajanje cijena
  for (let item of stavke) {
    zbroj += item.cijena;
  }

  // Izračun iznosa popusta i oduzimanje od ukupnog zbroja
  const popust = (zbroj * popustPostotak) / 100;
  return zbroj - popust;
}

// Poziv funkcije i ispis rezultata u konzolu
const ukupnoZaPlatiti = izracunajUkupno(kosarica);
console.log('Broj artikala u košarici:', kosarica.length);
console.log('Konačna cijena s popustom (10%):', ukupnoZaPlatiti + ' EUR');
console.log('Konačna cijena bez popusta:', izracunajUkupno(kosarica, 0) + ' EUR');