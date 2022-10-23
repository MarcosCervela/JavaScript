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
