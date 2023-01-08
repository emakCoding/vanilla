// user
const gunting = document.querySelector("#gunting");
const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const kolomUser = document.querySelector("#user");

[gunting, batu, kertas].forEach(function (elm) {
  elm.addEventListener("click", function () {
    // console.log(kolomUser);
    // console.log(this);
    kolomUser.innerHTML = this.innerHTML;
  });
});

// computer
function getComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "✌️";
  if (comp >= 0.34 && comp < 0.67) return "✋";
  return "✊";
}

// const computer = document.querySelector("#computer");
// computer.innerHTML = getComputer();

// hasil
function getHasil(kolomUser, comp) {
  // menentukan rules
  if (kolomUser == comp) return "SERI!";
  if (kolomUser == "✌️") return comp == "✋" ? "MENANG!" : "KALAH!";
  if (kolomUser == "✋") return comp == "✊" ? "MENANG!" : "KALAH!";
  if (kolomUser == "✊") return comp == "✌️" ? "MENANG!" : "KALAH!";
}

gunting.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✌️";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);

  console.log(pilihanUser);
  console.log(pilihanComputer);
  console.log("hasil = " + hasil);
});

kertas.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✋";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);

  console.log(pilihanUser);
  console.log(pilihanComputer);
  console.log("hasil = " + hasil);
});

batu.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✊";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);

  console.log(pilihanUser);
  console.log(pilihanComputer);
  console.log("hasil = " + hasil);
});

