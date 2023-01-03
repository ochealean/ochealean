window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop < 80) {
    document.getElementById("myP").className = "header";
  } else {
    document.getElementById("myP").className = "test";
  }
}