window.url = "https://cvapicurriculum.herokuapp.com"
window.sendEmailEndpoint = "https://sendemailcv1919.herokuapp.com";

if (window.location.href.includes('netlify')){
    window.url = "https://cvapicurriculum.herokuapp.com";
    window.sendEmailEndpoint = "https://sendemailcv1919.herokuapp.com";
} else {
    window.url = "http://localhost:1337"
    window.sendEmailEndpoint = "http://localhost:3500";
}

// https://cvapicurriculum.herokuapp.com/
let url2 = "https://cvapicurriculum.herokuapp.com/api/cvs?populate=*";
const fetchUrl = `${window.url}/api/cvs?populate=*`;
// let url2 = "http://localhost:1337/api/cvs?populate=*";


function addDom(selector, contenido) {
    try {
      const item = document.querySelector(selector);
      if (!item) return; 
      item.innerText = contenido;
    } catch (error) {
      console.log('🚀error >>',error);
    }
}


function populateHome(respuesta){
    const nombre = respuesta.data[0]?.attributes?.nombre;
    const subtitulo = respuesta.data[0]?.attributes?.subtitulo;
    const subtitulo2 = respuesta.data[0]?.attributes?.subtitulo2;
    console.log('🚀respuesta >>',respuesta);
    const url = window.url;   
    const fileUrl = url + respuesta.data[0]?.attributes?.hojadevida?.data?.attributes?.url;
    const fileName = respuesta.data[0]?.attributes?.hojadevida?.data?.attributes?.name;
    const downloadButton = document.querySelector("#download-file");

    downloadButton.setAttribute("href",fileUrl);
    downloadButton.setAttribute("download",fileName);

    addDom("#name-user", nombre);
    addDom("#name-user-2", nombre);
    addDom("#subtitulo", subtitulo);
    addDom("#subtitulo2", subtitulo2);
    const acerca = respuesta.data[0]?.attributes?.acerca;
    //cargar foto
    const foto = respuesta.data[0]?.attributes?.foto;
    const urlFoto =
    url + foto?.data?.attributes?.url;
    const picDom = document.querySelector("#profile-picture");
    picDom.setAttribute("src", urlFoto);
    if (!acerca || !foto) return;
    // acerca
    const {
      titulo,
      descripcion,
      edad,
      residencia,
      direccion,
      email,
      telefono,
    } = respuesta.data[0]?.attributes?.acerca;
    addDom("#acerca-titulo", titulo);
    addDom("#acerca-desc", descripcion);
    addDom("#acerca-year", edad);
    addDom("#acerca-lugar", residencia);
    addDom("#acerca-direccion", direccion);
    addDom("#acerca-email", email);
    addDom("#acerca-telefono", telefono);

}

function populateTareas(respuesta){
    const tareas = respuesta.data[0]?.attributes?.tareas;
    if (!tareas) return;
    const {
      titulo,
      titulo1,
      desc1,
      titulo2,
      desc2,
      titulo3,
      dec3,
      titulo4,
      desc4,
    } = tareas;
    addDom("#tareas-titulo", titulo);
    addDom("#tareas-titulo1", titulo1);
    addDom("#tareas-desc1", desc1);
    addDom("#tareas-titulo2", titulo2);
    addDom("#tareas-desc2", desc2);
    addDom("#tareas-titulo3", titulo3);
    addDom("#tareas-desc3", dec3);
    addDom("#tareas-titulo4", titulo4);
    addDom("#tareas-desc4", desc4);
}

function populateEducation(respuesta){
    const educacion = respuesta.data[0]?.attributes?.educacion;
    if (!educacion) return;
    const {
      titulo1,
      desc1,
      lugar1,
      year1,
      titulo2,
      desc2,
      lugar2,
      year2,
    } = educacion;

    addDom("#educacion-titulo1", titulo1);
    addDom("#educacion-desc1", desc1);
    addDom("#educacion-year1", year1);
    addDom("#educacion-lugar1", lugar1);

    addDom("#educacion-titulo2", titulo2);
    addDom("#educacion-desc2", desc2);
    addDom("#educacion-year2", year2);
    addDom("#educacion-lugar2", lugar2);
}

function populateTrabajo(respuesta){
    const { id, ...trabajo } = respuesta.data[0]?.attributes?.trabajo;
    for (const key in trabajo) {
      addDom(`#trabajo-${key}`, trabajo[key]);
    }
    const conocimientos = respuesta.data[0]?.attributes?.conocimientos;
    addDom("#conocimientos-titulo", conocimientos.titulo);
    const conocimientosLista =
      conocimientos.conocimientosLista.split(",");
    const ulConociomientos = document.querySelector(
      "#conocimientos-lista"
    );
    conocimientosLista.forEach((c) => {
      const li = document.createElement("li");
      li.innerHTML = c;
      ulConociomientos.appendChild(li);
    });

    //contacto populate
    const { ...contacto } = respuesta.data[0]?.attributes?.contacto;
    for (const key in contacto) {
      if (key === "id") continue;
      addDom(`#contacto-${key}`, contacto[key]);
    }
}

function populateConocimientos(respuesta){
    const { id, ...trabajo } = respuesta.data[0]?.attributes?.trabajo;
    for (const key in trabajo) {
      addDom(`#trabajo-${key}`, trabajo[key]);
    }
    const conocimientos = respuesta.data[0]?.attributes?.conocimientos;
    addDom("#conocimientos-titulo", conocimientos.titulo);
    const conocimientosLista =
      conocimientos.conocimientosLista.split(",");
    const ulConociomientos = document.querySelector(
      "#conocimientos-lista"
    );
    conocimientosLista.forEach((c) => {
      const li = document.createElement("li");
      li.innerHTML = c;
      ulConociomientos.appendChild(li);
    });

    //contacto populate
    const { ...contacto } = respuesta.data[0]?.attributes?.contacto;
    for (const key in contacto) {
      if (key === "id") continue;
      addDom(`#contacto-${key}`, contacto[key]);
    }
}

function populateSkills(respuesta){
    const skills = respuesta.data[0]?.attributes?.skills;
    if (!skills) return;
    const {
      titulo,
      titulo1,
      porcentaje1,
      titulo2,
      porcentaje2,
      titulo3,
      porcentaje3,
      titulo4,
      porcentajr4,
    } = skills;

    addDom("#skill-titulo", titulo);

    addDom("#skill-titulo1", titulo1);
    addDom("#skill-porc1", porcentaje1);

    addDom("#skill-titulo2", titulo2);
    addDom("#skill-porc2", porcentaje2);

    addDom("#skill-titulo3", titulo3);
    addDom("#skill-porc3", porcentaje3);

    addDom("#skill-titulo4", titulo4);
    addDom("#skill-porc4", porcentajr4);

}

function populateAboutMe(){

}

function populateResume(){

}

function populateContact(){}

function fetchAndSetAll(...fnList){
    return function (respuesta){
        for (const fn of fnList){
            fn(respuesta)
        }
    }
}
// first page
fetch(fetchUrl)
  .then((response) => response.json())
  .then((respuesta) => {
    fetchAndSetAll(
        populateHome,
        populateTareas,
        populateEducation,
        populateTrabajo,
        populateConocimientos,
        populateSkills
    )(respuesta); //closure
  });






