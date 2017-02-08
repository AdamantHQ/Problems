let contents = document.getElementById("contents");

contents.addEventListener("click", function(e) {
  if (e.target.closest("a")) {
    if (confirm("Do you really want to leave?")) {
      return;
    }
    e.preventDefault();
  }
});
