const kifejezések = [
    'Napoleon', 'Elba', 'Waterloo', 'Szent Ilona',
    'Code Civil', 'forradalom', 'csaszar', 'hadvezeto'
  ];
  
  let jatekos = '';
  let megforditottak = [];
  let parok = [];
  let inditasi_ido;
  let idozito;
  
  function jatek_inditasa() {
    const nev_input = document.getElementById('jatekos_nev');
    jatekos = nev_input.value.trim();
  
    if (jatekos === '') {
      alert('Kerlek add meg a neved!');
      return;
    }
  
    document.getElementById('kezdo').style.display = 'none';
    document.getElementById('jatekter').style.display = 'block';
    document.getElementById('udvozles').textContent = `Sok sikert, ${jatekos}!`;
  
    keveres_es_megjelenites();
    indit_idomero();
  }
  
  function keveres_es_megjelenites() {
    const racs = document.getElementById('racs');
    const kartyak = [...kifejezések, ...kifejezések].sort(() => 0.5 - Math.random());
    racs.innerHTML = '';
  
    kartyak.forEach((szoveg, index) => {
      const kartya = document.createElement('div');
      kartya.classList.add('kartya');
      kartya.dataset.ertek = szoveg;
      kartya.dataset.index = index;
      kartya.addEventListener('click', kartya_forgatas);
      racs.appendChild(kartya);
    });
  }
  
  function kartya_forgatas(esemeny) {
    const kartya = esemeny.target;
  
    if (
      megforditottak.length === 2 ||
      kartya.classList.contains('kiforditva') ||
      parok.includes(kartya.dataset.index)
    ) {
      return;
    }
  
    kartya.textContent = kartya.dataset.ertek;
    kartya.classList.add('kiforditva');
    megforditottak.push(kartya);
  
    if (megforditottak.length === 2) {
      setTimeout(ellenorzes, 700);
    }
  }
  
  function ellenorzes() {
    const [elso, masodik] = megforditottak;
  
    if (elso.dataset.ertek === masodik.dataset.ertek) {
      parok.push(elso.dataset.index, masodik.dataset.index);
    } else {
      elso.textContent = '';
      masodik.textContent = '';
      elso.classList.remove('kiforditva');
      masodik.classList.remove('kiforditva');
    }
  
    megforditottak = [];
  
    if (parok.length === kifejezések.length * 2) {
      clearInterval(idozito);
      document.getElementById('jatekter').style.display = 'none';
      document.getElementById('vegeredmeny').style.display = 'block';
      document.getElementById('uzenet').textContent = `Gratulalok, ${jatekos}!`;
      document.getElementById('vegido').textContent = document.getElementById('ido').textContent;
    }
  }
  
  function indit_idomero() {
    inditasi_ido = Date.now();
    idozito = setInterval(() => {
      const eltelt = Math.floor((Date.now() - inditasi_ido) / 1000);
      document.getElementById('ido').textContent = eltelt;
    }, 1000);
  }
  