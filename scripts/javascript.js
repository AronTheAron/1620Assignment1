document.getElementById("darkmode").addEventListener("click", darktoggle);
function darktoggle() {
  document.body.classList.toggle("darkmode");
  if (document.querySelector(".darktheme").innerText == "Dark Theme")
    document.querySelector(".darktheme").innerText = "Light Theme";
  else document.querySelector(".darktheme").innerText = "Dark Theme";
}

document.getElementById("cancel").addEventListener("click", cancel);
function cancel() {
  document.getElementById("notearea").style.display = "none";
  document.getElementById("save").style.display = "none";
  document.getElementById("cancel").style.display = "none";
}

document.getElementById("newnote").addEventListener("click", newnote);
function newnote() {
  document.getElementById("notearea").style.display = "block";
  document.getElementById("save").style.display = "block";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("notearea").value = "Insert your notes here!";
}

let notesArray = [
  {
    title: "debug one",
    body: "This is a test note to check if the array works!"
  }
];
let noteslist = document.getElementById("noteslist");

document.getElementById("save").addEventListener("click", save);
function save() {
  let titletext = prompt("Please enter a title for this note!:", "");
  let bodytext = document.getElementById("notearea").value;
  if (titletext == null || titletext == "") {
    alert("No text detected; cancelling save");
  } else {
    alert("Successfully saved note as " + titletext + "!");
    let newobj = new Object();
    newobj["title"] = titletext;
    newobj["body"] = bodytext;
    notesArray.push(newobj);

    let noteslist = document.getElementById("noteslist");
    let object = notesArray[notesArray.length - 1];
    let li = document.createElement("li");
    let libut = document.createElement("button");
    li.innerText = "";
    libut.innerText = object.title;
    li.appendChild(libut);
    noteslist.appendChild(li);
    li.setAttribute("id", "hi");
    libut.addEventListener("click", retrieve);
  }
}

let retrieve = function retrieve() {
  let note = notesArray.find(
    (noteobj) => noteobj.title === document.querySelector("#hi").innerText
  );
  document.getElementById("notearea").value = note["body"];
};
