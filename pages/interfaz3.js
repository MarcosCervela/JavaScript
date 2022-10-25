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



const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("listbox3")
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = ""; // Para que el valor una vez le des al boton de añadir vuelva a estar vacio el imput
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

    


