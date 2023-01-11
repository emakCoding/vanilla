// user
const gunting = document.querySelector("#gunting");
const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const kolomUser = document.querySelector("#user");

[gunting, batu, kertas].forEach(function (elm) {
  elm.addEventListener("click", function () {
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
  setTimeout(() => alert(`Kamu ${hasil}`));
  if (hasil == "MENANG!") {
    document.location.href = "porto.html";
  }
});

kertas.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✋";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`));
  if (hasil == "MENANG!") {
    document.location.href = "porto.html";
  }
});

batu.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✊";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`));
  if (hasil == "MENANG!") {
    document.location.href = "porto.html";
  }
});
