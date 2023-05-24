const headerOptions = document.querySelectorAll(".header-option");

headerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Elimina la clase "selected" de todas las opciones
    headerOptions.forEach((opt) => opt.classList.remove("isActive"));

    // Agrega la clase "selected" a la opción seleccionada
    this.classList.add("isActive");
  });
});

const header = document.querySelector(".header");
const gaming = document.querySelector(".gaming");

function updateHeaderColors(isScrolled) {
  header.style.backgroundColor = isScrolled ? "#c4983a" : "#151136";
  gaming.style.color = isScrolled ? "#1d1546" : "#c4983a";

  if (isScrolled) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", function () {
  const isScrolled = window.scrollY > 0;
  updateHeaderColors(isScrolled);
});

// ! Buscar cards
const inputBuscar = document.querySelector("#buscar");
const cardContainer = document.querySelector(".tarjetas");
const cards = cardContainer.getElementsByClassName("tarjeta");

let timeoutId;

inputBuscar.addEventListener("keyup", () => {
  clearTimeout(timeoutId); // Cancelar el timeout anterior si existe

  // Establecer un nuevo timeout de 0.5 segundos
  timeoutId = setTimeout(() => {
    const filter = inputBuscar.value.toLowerCase();

    Array.from(cards).forEach((item) => {
      let title = item.querySelector(".title");
      if (title.innerText.toLowerCase().indexOf(filter) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }, 500); // 500 milisegundos
});