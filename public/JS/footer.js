function openPopup() {
  const overlay = document.getElementById("overlay");
  const formPopup = document.getElementById("work_form");

  overlay.style.display = "block";
  formPopup.style.display = "block";

  // Aplicar clase para la animación
  setTimeout(function() {
    formPopup.classList.add("show");
  }, 0);

  window.onclick = function(event) {
    if (event.target == overlay || event.target == formPopup) {
      formPopup.classList.remove("show");
      overlay.style.display = "none";
      // Eliminar la clase después de la animación
      setTimeout(function() {
        formPopup.style.display = "none";
      }, 300); // El tiempo debe coincidir con la duración de la animación
    }
  }
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  var formPopup = document.getElementById("work_form");

  formPopup.classList.remove("show");
  overlay.style.display = "none";

  // Eliminar la clase después de la animación
  setTimeout(function() {
    formPopup.style.display = "none";
  }, 300); // El tiempo debe coincidir con la duración de la animación
}

document.addEventListener("DOMContentLoaded", function() {
  // Encuentra el botón por su clase
  const sendRequestButton = document.querySelector(".sendRequest");

  // Agrega un evento de clic al botón
  sendRequestButton.addEventListener("click", function(event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault();

    // Ejecuta el código de SweetAlert al hacer clic
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Tu solicitud se ha enviado con exito!",
      showConfirmButton: false,
      timer: 2000
    });

    // Puedes ocultar el formulario aquí después de mostrar SweetAlert
    const formPopup = document.getElementById("work_form");
    formPopup.classList.remove("show");
    setTimeout(function() {
      formPopup.style.visibility = "hidden";
      document.getElementById("overlay").style.display = "none";
    }, 300); // El tiempo debe coincidir con la duración de la animación

    formPopup.style.transform = "translate(-50%, -50%) scale(0)";
        formPopup.style.opacity = "0";
        formPopup.style.visibility = "hidden";

        overlay.style.display = "none";
      }, 300);
  });