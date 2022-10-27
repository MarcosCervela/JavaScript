/*const COLUMN_CLASS = 'columna'


function allowDrop(event) {
    event.preventDefault();
}

function handleDrag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function handleDrop(event) {
    if (!event.target.className?.includes(COLUMN_CLASS)) {
        return
    }

    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
ondrop="handleDrop(event)" ondragover="allowDrop(event)"
*/


//Drag and Drop

/*
const fill = document.querySelectorAll('.cardbody');
const empties = document.querySelectorAll('.columna');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}



function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}


*/


//Creación de tarjetabox1

const title1 = document.getElementById("recipient-title1");
const description1 = document.getElementById("recipient-descrip1");
const addBtn1 = document.getElementById("btnAddCard1");
const cardContainer1 = document.getElementById("card-container1");
const empty1 = document.querySelector(".empty");




addBtn1.addEventListener("click", (e) =>{
    e.preventDefault();
    //var UID = "id-" + Math.floor(Math.random() * 999999);
    
    const titlecard1 = title1.value;
    const discripcard1 = description1.value;

    //Generador de IDs
    function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
  }
    
    
    

    if(titlecard1 !== "" && discripcard1 !== ""){
      
        const card = document.createElement("div");
        const p = document.createElement("h3");
        const p1 = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const modifBtn = document.createElement("button");

        
        p.textContent = titlecard1;
        p1.textContent = discripcard1;

        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.style = "";

        modifBtn.textContent = "Modificar"
        modifBtn.className = "btn btn-warning m-2"

        
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(deleteBtn);
        card.appendChild(modifBtn);
        
        
        

        card.className += "container-fluid cardbody";
        card.id += generateUUID();
        card.draggable += "true";
        
        
        cardContainer1.appendChild(card);



        deleteBtn.addEventListener("click", (e) => {

            const item = e.target.parentElement;
            cardContainer1.removeChild(item);

            



        })
        
        
        title1.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
        description1.value ="";
        empty1.style.display = "none"; //Ponemos le display a 0
        

      

      }
    
});



//Creación de tarjetabox2
const title2 = document.getElementById("recipient-title2");
const description2 = document.getElementById("recipient-descrip2");
const addBtn2 = document.getElementById("btnAddCard2");
const cardContainer2 = document.getElementById("card-container2");
const empty = document.querySelector(".empty");




addBtn2.addEventListener("click", (e) =>{
    e.preventDefault();

    const titlecard2 = title2.value;
    const discripcard2 = description2.value;

    //Generador de IDs
    function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
  }

    if(titlecard2 !== "" && discripcard2 !== ""){

        const card = document.createElement("div");
        const p = document.createElement("h3");
        const p1 = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const modifBtn = document.createElement("button");

        p.textContent = titlecard2;
        p1.textContent = discripcard2;

        deleteBtn.textContent ="Eliminar";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.style = "";

        modifBtn.textContent = "Modificar"
        modifBtn.className = "btn btn-warning m-2"

        
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(deleteBtn);
        card.appendChild(modifBtn);
        
        

        card.className += "container-fluid cardbody";
        card.id += generateUUID();
        card.draggable += "true";
        
        
        cardContainer2.appendChild(card);



        deleteBtn.addEventListener("click", (e) => {

            const item = e.target.parentElement;
            cardContainer2.removeChild(item);

            



        })
        
        
        title2.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
        description2.value ="";
        empty.style.display = "none"; //Ponemos le display a 0
        



      }

});






//CreacionSubelementosBox3


const title3 = document.getElementById("recipient-title3");
const description3 = document.getElementById("recipient-descrip3");
const addBtn3 = document.getElementById("btnAddCard3");
const cardContainer3 = document.getElementById("card-container3");
const empty3 = document.querySelector(".empty");




addBtn3.addEventListener("click", (e) =>{
    e.preventDefault();

    const titlecard3 = title3.value;
    const discripcard3 = description3.value;

    //Generador de IDs
    function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
  }

    if(titlecard3 !== "" && discripcard3 !== ""){

        const card = document.createElement("div");
        const p = document.createElement("h3");
        const p1 = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const modifBtn = document.createElement("button");


        p.textContent = titlecard3;
        p1.textContent = discripcard3;

        //Boton Eliminar
        deleteBtn.textContent ="Eliminar";
        deleteBtn.className = "btn btn-danger btn_eliminar";
        deleteBtn.style = "";

        //Boton Modificar
        modifBtn.textContent = "Modificar"
        modifBtn.className = "btn btn-warning m-2"

        
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(deleteBtn);
        card.appendChild(modifBtn);
        

        card.className += "container-fluid cardbody";
        card.id += generateUUID();
        card.draggable += "true";
        
        
        cardContainer3.appendChild(card);



        deleteBtn.addEventListener("click", (e) => {

            const item = e.target.parentElement;
            cardContainer3.removeChild(item);

            



        })
        
        
        title3.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
        description3.value ="";
        empty3.style.display = "none"; //Ponemos le display a 0
        



      }

});

