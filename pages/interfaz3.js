const COLUMN_CLASS = 'columna'


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



//Creación de tarjeta
const title2 = document.getElementById("recipient-title");
const description2 = document.getElementById("recipient-descrip");
const addBtn2 = document.querySelector(".btn-add");
const card2 = document.getElementById("cardbody2");
const empty2 = document.querySelector(".empty");


addBtn2.addEventListener("Click", (e) =>{
    e.preventDefault();

    const titlecard2 = title2.value;
    const discripcard2 = description2.value;

    if(titlecard2 !== "" && discripcard2 !== ""){

        const p = document.createElement("p");
        const p1 = document.createElement("p");
        p.textContent = titlecard2;
        p1.textContent = description2;

        card2.appendChild(p);
        card2.appendChild(p1);
        
        title2.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
        description2.value ="";
        empty.style.display = "none"; //Ponemos le display a 0
        

    }





})



//Creaccion de subelemento


 
const title3 = document.getElementById("recipient-title");
const description3 = document.getElementById("recipient-descrip");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("listbox3")
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text1 = title3.value;
  const text2 =  description3.value;

  if (text1 !== "" && text2!== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const li1 = document.createElement("li");
    const p1 = document.createElement("p");
    p.textContent = text1;
    p1.textContent = text2;

    li.appendChild(p);
    li.appendChild(p1);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    title3.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
    description3.value ="";
    empty.style.display = "none"; //Ponemos le display a 0
    
  }
});






function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

    


