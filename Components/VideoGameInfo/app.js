// ! Creacion de los comentarios

const btnAddComent = document.getElementById("btnComentar");
const areaComents = document.querySelector(".article_coments-body");
const coments = document.querySelector(".coment");
btnAddComent.addEventListener("click", (e) => {
  e.preventDefault();
  let spanComent = document.createElement("div");
  let imgUser = document.createElement("img");
  imgUser.src = "./../../assets/Component/user.svg";
  spanComent.appendChild(imgUser);
  let pComent = document.createElement("label");
  pComent.innerText = document.formAddComents.txtComent.value;
  spanComent.appendChild(pComent);
  coments.appendChild(spanComent);
  document.formAddComents.txtComent.value = "";
});