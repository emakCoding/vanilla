const header = document.querySelector(".header");
document.querySelector(".tombol").onclick = () => {
  header.classList.toggle("active");
};

const tombol = document.querySelector(".tombol");

document.addEventListener("click", function (e) {
  if (!tombol.contains(e.target) && !header.contains(e.target)) {
    header.classList.remove("active");
  }
});
