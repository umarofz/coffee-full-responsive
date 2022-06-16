var elForm = document.querySelector(".plan__right")

elForm.addEventListener("click", function(evt) {
  var clickedItem = evt.target.classList;

  if (clickedItem == "plan__r-btn" || clickedItem == "plan__r-arrow") {
    var parentClass = evt.target.parentNode.closest(".plan__r-item")

    parentClass.classList.toggle("plan__r-item--open")
  }
})