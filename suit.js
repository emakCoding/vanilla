// user
console.log(alert("Pilih gunting, kertas atau batu."));

const gunting = document.querySelector("#gunting");
const batu = document.querySelector("#batu");
const kertas = document.querySelector("#kertas");
const kolomUser = document.querySelector("#user");
const pic = ["✊", "✋", "✌️"];
let i = 0;

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

[batu, kertas, gunting].forEach((elm, idx) => {
  elm.addEventListener("click", () => {
    const computer = document.querySelector("#computer");
    const interval = setInterval(() => {
      i++;
      if (i == pic.length) i = 0;
      computer.innerHTML = pic[i];
      kolomUser.innerHTML = pic[i];
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      computer.innerHTML = "";
      kolomUser.innerHTML = "";
      setTimeout(() => {
        setPilihanUser(pic[idx]);
      }, 500);
    }, 5500);
  });
});

//

function setPilihanUser(pilihanUser) {
  const pilihanComputer = getComputer();
  const computer = document.querySelector("#computer");
  computer.innerHTML = pilihanComputer;

  kolomUser.innerHTML = pilihanUser;
  const hasil = getHasil(pilihanUser, pilihanComputer);
  setTimeout(() => {
    alert(`Kamu ${hasil}`);
    if (hasil == "MENANG!") {
      document.location.href = "porto.html";
    }
  }, 1000);
}
