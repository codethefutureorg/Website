function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("down").classList.toggle("rotate");
}

function myMobileFunction() {
  document.getElementById("myDropdown-mobile").classList.toggle("show");
  document.getElementById("down").classList.toggle("rotate");
}

function sandwichFunction() {
  $("#nav-icon3").toggleClass('open');
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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