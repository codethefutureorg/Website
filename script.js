//Curriculum Dropdown Bar
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("down").classList.toggle("rotate");
}

//Mobile Curriculum Dropdown Bar
function myMobileFunction() {
  document.getElementById("myDropdown-mobile").classList.toggle("show");
  document.getElementById("down").classList.toggle("rotate");
}

//Sandwich Mobile Dropdown Bar
function sandwichFunction() {
  $("#nav-icon3").toggleClass('open');
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Curriculum Dropdown Bar - Closes dropdown if clicked outside of dropdown
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
  var myToggle = document.getElementById("down");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
      myToggle.classList.remove('rotate');
    }
  }
}

// Email collection
window.onload = () => {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js';
  document.body.appendChild(script);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxkYPn2VevwT4e5_YPN6puJspYEL_udrNJ9v5Bsa3AFJRhIlQ3v/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      var button = document.getElementById("submit");
      button.innerHTML = "You're added! ✓";
      button.style.border = "2px solid #0995E3";
      button.style.backgroundColor = "#0995E3";
      button.disabled = true;
  })
}