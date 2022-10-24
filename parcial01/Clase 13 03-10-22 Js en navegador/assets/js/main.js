let data =[
    { name: "Name 1", carnet: "000000001"},
    { name: "Name 2", carnet: "000000002"},
    { name: "Name 3", carnet: "000000003"},
    { name: "Name 4", carnet: "000000004"},
    { name: "Name 5", carnet: "000000005"},
    { name: "Name 6", carnet: "000000006"}
];


let titleElement        = null;

let buttonElement       = null;
let buttonElements      = null;

let toggleSectBtn       = null;
let showModalBtn        = null;

let infoModal = null; //Section modal

let elementsSection = null;

const bindElements = () => {
    titleElement = document.querySelector("#title");

    buttonElement = document.querySelector("button");
    buttonElements = document.querySelectorAll("button");

    toggleSectBtn = document.querySelector("#toggle-sect-btn"); 

    showModalBtn = document.querySelector("#show-modal-btn");
    infoModal = document.querySelector("#modal") //Section modal

    elementsSection = document.querySelector("#elements-section");
}

const bindListeners = () => {
    //Eventos
    /* buttonElement.onclick = () => {
        alert("Esta es una alerta!")
    } */

    buttonElement.addEventListener("click", () => {
        alert("Esta es una alerta!")
    });

    /* buttonElements.forEach((btn, i) => { //Por cada boton recorre la lista y se le agrega un listener a cada boton
        btn.addEventListener("click", () => {
            alert(`Alerta de botón ${i+1}`);
        });
    }); */

    toggleSectBtn.addEventListener("click", () => {
        const sections = document.querySelectorAll(".test-section");

        sections.forEach(section => {
          section.classList.toggle("hidden");  //Quita y pone clase
        })
    });

    showModalBtn.addEventListener("click", () => {
        infoModal.classList.add("visible")
    });

    infoModal.addEventListener("click", () => {
        infoModal.classList.remove("visible")
    });

    
    
}

const renderElements = () => {
    data.forEach((elementInfo) => {
      const element = document.createElement("article");
      element.innerHTML = `
        <h3> ${elementInfo.name} </h3>
        <p> ${elementInfo.carnet} </p>
      `;
  
      element.dataset.id = elementInfo.carnet;
      elementsSection.appendChild(element);
    })
}

let Main = () => {
    
    bindElements();
    bindListeners();

    renderElements();

    console.log(titleElement);
    titleElement.innerHTML = "Titulo dinámico v2"
}

window.onload = Main;