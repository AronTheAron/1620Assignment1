function darktoggle() {
    document.body.classList.toggle("darkmode");
    if(document.querySelector('.darktheme').innerText=='Dark Theme')document.querySelector('.darktheme').innerText='Light Theme';
    else
      document.querySelector('.darktheme').innerText='Dark Theme';
  }
  