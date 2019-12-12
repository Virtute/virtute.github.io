window.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector('header-bar').onclick = handlePresentationClick;
})

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.fontWeight = "200";
    tablinks[i].style.color = "#9E9E9E";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.fontWeight = "1000";
  elmnt.style.color = "white";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function handlePresentationClick(e) {
  var header = document.querySelector('header-bar.unclicked');
  var navbar = document.querySelector('navigation-bar.unclicked');
  var content = document.querySelector('main-content.unclicked')
  header.classList.remove('unclicked');
  header.classList.add('clicked');
  navbar.classList.remove('unclicked');
  navbar.classList.add('clicked');
  content.classList.remove('unclicked');
  content.classList.add('clicked');

}
