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



//Creaccion de subelemento


 
const title = document.getElementById("recipient-title");
const description = document.getElementById("recipient-descrip");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("listbox3")
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text1 = title.value;
  const text2 =  description.value;

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

    title.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
    description.value ="";
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

    


