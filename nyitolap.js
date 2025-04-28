function frissitido() {
    let most = new Date();
    let napok = ["Vasárnap", "Hétfő", "kedd", "Szerda", "Csütörtök", "Péntek", "szombat"];
    let napnev = napok[most.getDay()];
    let ora = most.getHours().toString().padStart(2, "0");
    let perc = most.getMinutes().toString().padStart(2, "0");
    let masodperc = most.getSeconds().toString().padStart(2, "0");

    ido.innerHTML = "Mai nap: " + napnev + "<br>idő: " + ora + ":" + perc + ":" + masodperc;
}
setInterval(frissitido, 1000);
frissitido();