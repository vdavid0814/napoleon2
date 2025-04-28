let jatekos = '';

function teszt_inditasa() {
  const nev_input = document.getElementById('jatekos_nev');
  jatekos = nev_input.value.trim();

  if (jatekos === '') {
    alert('Kérlek add meg a neved!');
    return;
  }

  document.getElementById('kezdo').style.display = 'none';
  document.getElementById('kerdesek').style.display = 'block';
}

function teszt_ellenorzes() {
  let pontszam = 0;
  let eredmeny = '';


  const szuletesiEv = document.getElementById('szuletesi_ev').value;
  if (szuletesiEv === '1769') {
    pontszam++;
  }


  const csata = document.querySelector('input[name="csata"]:checked');
  if (csata && csata.value === 'Waterloo') {
    pontszam++;
  }

  let allitasok_helyes = true;
  
  const allitas1 = document.getElementById('allitas1').checked;
  if (!allitas1) allitasok_helyes = false;
  
  const allitas2 = document.getElementById('allitas2').checked;
  if (!allitas2) allitasok_helyes = false;
  
  const allitas3 = document.getElementById('allitas3').checked;
  if (allitas3) allitasok_helyes = false;
  
  if (allitasok_helyes) {
    pontszam++;
  }

  // Kérdés 4: Fontos csata
  const fontosCSata = document.getElementById('fontos_csata').value.toLowerCase().trim();
  const helyesCSatak = ['austerlitz', 'jena', 'wagram', 'pyramids', 'marengo', 'piramis', 'jéna'];
  if (helyesCSatak.some(csata => fontosCSata.includes(csata))) {
    pontszam++;
  }

  // Kérdés 5: Halál helyszíne
  const halalHelyszin = document.querySelector('input[name="halalhelyszin"]:checked');
  if (halalHelyszin && halalHelyszin.value === 'Szent Ilona') {
    pontszam++;
  }

  // Eredmény megjelenítése
  document.getElementById('kerdesek').style.display = 'none';
  document.getElementById('vegeredmeny').style.display = 'block';
  
  if (pontszam === 5) {
    eredmeny = `Gratulálok, ${jatekos}! Tökéletes eredmény!`;
  } else if (pontszam >= 3) {
    eredmeny = `Jó munka, ${jatekos}! ${pontszam} pont az 5-ből.`;
  } else {
    eredmeny = `${jatekos}, próbáld újra! Csak ${pontszam} pontot szereztél az 5-ből.`;
  }
  
  document.getElementById('uzenet').textContent = eredmeny;
  document.getElementById('pontszam').textContent = pontszam;
}