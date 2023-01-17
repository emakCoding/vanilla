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

function sendMail() {
  const pesan = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  const serviceID = "service_7tyysrk";
  const templateID = "template_2i52mdm";

  emailjs
    .send(serviceID, templateID, pesan)
    .then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      console.log(res);
      alert("Pesan Kamu telah Terkirim.");
    })
    .catch((err) => console.log(err));
}
