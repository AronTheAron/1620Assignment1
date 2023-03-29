function darktoggle() {
  document.body.classList.toggle("darkmode");
  if (document.querySelector(".darktheme").innerText == "Dark Theme")
    document.querySelector(".darktheme").innerText = "Light Theme";
  else document.querySelector(".darktheme").innerText = "Dark Theme";
}

function cancel() {
  document.getElementById("notearea").style.display = "none";
  document.getElementById("save").style.display = "none";
  document.getElementById("cancel").style.display = "none";
}

function newnote() {
  document.getElementById("notearea").style.display = "block";
  document.getElementById("save").style.display = "block";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("notearea").value = "Insert your notes here!";
}

