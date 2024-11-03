// Inicializa el SDK de EmailJS
emailjs.init("MM7Sp8gsp_sqBoL7q"); // Reemplaza con tu User ID de EmailJS

// Agrega el evento 'submit' al formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Parámetros de EmailJS
  const serviceID = "service_f39ulpc";  // Reemplaza con tu Service ID de EmailJS
  const templateID = "template_gge2n6w"; // Reemplaza con tu Template ID de EmailJS

  // Envía el correo usando EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Correo enviado con éxito!");
    }, (err) => {
      alert("Error al enviar el correo: " + JSON.stringify(err));
    });
});
