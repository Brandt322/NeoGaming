const form = document.querySelector('.form');
const alertaUserEmail = document.getElementById('alertUserEmail')

fetch('../../user.json')
  .then(response => response.json())
  .then(data => {
    const form = document.querySelector('.form');
    const alertaUserEmail = document.getElementById('alertUserEmail');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const inputs = new FormData(form);
      const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

      
      const email = inputs.get("email");
      const password = inputs.get("password");

      if (!regUserEmail.test(email)) {
        alertaUserEmail.textContent = "Email inválido";
        return console.log("Formato de email inválido");
      }
      
      const user = data.users.find((user) => user.email === email && user.password === password);

      if (!user) {
        alertaUserEmail.style.display = "block"
        alertaUserEmail.textContent = "Email o contraseña incorrectos";
        alertaUserEmail.style.color = "red";
        return console.log("Email o contraseña incorrectos");
      }

      // Redireccionar al index.html (cambia la ruta de acuerdo a tu estructura de archivos)
      window.location.href = "../usuario/usuario.html";
    });
})
.catch(error => {
  console.error('Error al cargar el archivo JSON:', error);
});
