// const headerOptions = document.querySelectorAll(".header-option");

//   headerOptions.forEach((option) => {
//     option.addEventListener("click", function () {
//       // Elimina la clase "selected" de todas las opciones
//       headerOptions.forEach((opt) => opt.classList.remove("selected"));

//       // Agrega la clase "selected" a la opción seleccionada
//       this.classList.add("selected");
//     });
//   });

// const header = document.querySelector(".header");
// const gaming = document.querySelector(".gaming");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 0) {
//       header.style.backgroundColor = "#c4983a";
//       gaming.style.color = "#1d1546"

//     } else {
//       header.style.backgroundColor = "#151136";
//       gaming.style.color = "#c4983a"
//     }
//   });

const headerOptions = document.querySelectorAll(".header-option");

headerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Elimina la clase "selected" de todas las opciones
    headerOptions.forEach((opt) => opt.classList.remove("selected"));

    // Agrega la clase "selected" a la opción seleccionada
    this.classList.add("selected");
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

// ! Creacion de los comentarios

const btnAddComent = document.getElementById("btnComentar");
const areaComents = document.querySelector(".article_coments-body");
const coments = document.querySelector(".coment");
let count = 1;
btnAddComent.addEventListener("click", (e) => {
  e.preventDefault();

  if (document.formAddComents.txtComent.value == "") {
    alert("Para hacer un comentario debe escribir una palabra por lo menos.");
    return false;
  } else {
    let spanComent = document.createElement("div");
    let imgUser = document.createElement("img");
    let nameUser = document.createElement("h5");
    // * LE DOY UNA IMAGEN ESTA TICA AL USER
    imgUser.src = "./../../assets/Component/user.svg";
    // * NOMBRE DE USER
    nameUser.innerText = "User " + count++;
    // * OBTENIEDO EL TEXTAREA DEL FORM Y HACIENDO LA PRIMERA LETRA EN MAYUSCULA
    let pComent = document.createElement("p");
    pComent.innerText =
      document.formAddComents.txtComent.value[0].toUpperCase() +
      document.formAddComents.txtComent.value.slice(1);

    // * AL DIV CREADO LE AGREMO MIS 3 ELEMENTOS PRINCIPALES PARA EL COMENTARIO
    spanComent.appendChild(nameUser);
    spanComent.appendChild(imgUser);
    spanComent.appendChild(pComent);

    // * AHORA AGREGO TODOS LOS COMENTARIOS EN UNA CAJA
    coments.appendChild(spanComent);
    document.formAddComents.txtComent.value = "";
    alert("Se comentó con exito.");
  }
});
