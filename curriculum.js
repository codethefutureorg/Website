var coll = document.getElementsByClassName("collapsible");
var i;

document.addEventListener("DOMContentLoaded", function() {
	let icon = document.getElementsByClassName("download-icon")[0];
	let button = document.getElementsByClassName("download-all")[0];

	button.addEventListener("mouseover", function() {
		icon.style.backgroundImage = "url(img/curriculum/download-white.png)";
	});

	button.addEventListener("mouseout", function() {
		icon.style.backgroundImage = "url(img/curriculum/download.png)";
	});

});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeC");
    this.classList.toggle("round");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});