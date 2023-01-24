// user
console.log(alert("Pilih gunting, kertas atau batu."));

const gunting = document.querySelector("#gunting");
const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const kolomUser = document.querySelector("#user");
const pic = ["✊", "✋", "✌️"];
let i = 0;

[batu, kertas, gunting].forEach((elm, idx) => {
  elm.addEventListener("click", () => {
    const interval = setInterval(() => {
      i++;
      if (i == pic.length) i = 0;
      pilihanComputer.innerHTML = pic[i];
      kolomUser.innerHTML = pic[i];
    }, 500);

    setTimeout(() => {
      pilihanComputer.innerHTML = pic[idx];
      kolomUser.innerHTML = pic[idx];
      clearInterval(interval);
    }, 10000);

    kolomUser.innerHTML = elm.innerHTML;
  });
});

// computer
function getComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "✌️";
  if (comp >= 0.34 && comp < 0.67) return "✋";
  return "✊";
}

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
  setTimeout(() => alert(`Kamu ${hasil}`), 10000);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});

kertas.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✋";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`), 10000);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});

batu.addEventListener("click", function () {
  const pilihanComputer = getComputer();
  const pilihanUser = "✊";
  const computer = document.querySelector("#computer");
  computer.innerText = pilihanComputer;

  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => alert(`Kamu ${hasil}`), 10000);
  if (hasil == "MENANG!") {
    // document.location.href = "porto.html";
  }
});
