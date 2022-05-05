const name = document.querySelector("#form_name");
const email = document.querySelector("#form_email");
const subject = document.querySelector("#form_subject");
const message = document.querySelector("#form_message");

function reset() {
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  window.location.href = window.location.pathname+"#home"
}

function checkNoEmpties(dataForm){
  const isValid = Object.values(dataForm).every(val => !!val);
  if (!isValid){
    Swal.fire({
      title: "Ups!",
      text: "Parece que ta falto llenar un campo",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return false;
  }
  return true;
}

function sendEmail(body){
  // send email
  const serviceUrl = window.sendEmailEndpoint;
  fetch(`${serviceUrl}/sendEmail`, {
    method: "POST",
    body: JSON.stringify(body),   
    headers: { "Content-type": "application/json; charset=UTF-8", },
  }).then(res => res.json()).then(res => console.log(res));
}



const url = window.url;
//enviar formulario
const form = document.querySelector("#contact_form");
const button2 = document.querySelector("#submit-button-bonito");
button2.addEventListener("click", () => {

  const body = { name:name.value, email:email.value, subject:subject.value, message:message.value };
 
  if (!checkNoEmpties(body)) return;

  console.log("boom >> ", body);

  fetch(`${url}/api/formularios`, {
    method: "POST",
    body: JSON.stringify({ data: body }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      Swal.fire({
        title: "Excelente!",
        text: "Has enviado tu mensaje con exito",
        icon: "success",
        confirmButtonText: "Gracias",
      });
      reset();
      sendEmail(body)
    });
});
