const noteContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

function showNote() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        noteContainer.innerHTML = storedNotes;
    }
}
showNote();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputbox = document.createElement("div");
    inputbox.className = "inputbox";
    let text = document.createElement("p");
    text.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "./images/delete.jpg";

    inputbox.appendChild(text);
    inputbox.appendChild(img);
    noteContainer.appendChild(inputbox);

});

noteContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

noteContainer.addEventListener("input", () => {
    updateStorage();
});
