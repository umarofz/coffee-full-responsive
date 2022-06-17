var elForm = document.querySelector(".plan__right")

elForm.addEventListener("click", function(evt) {
  var clickedItem = evt.target.classList;

  if (clickedItem == "plan__r-btn" || clickedItem == "plan__r-arrow") {
    var parentClass = evt.target.parentNode.closest(".plan__r-item")

    parentClass.classList.toggle("plan__r-item--open")
  }
})


var elBtn = document.querySelector(".plan__btn")
var elModal = document.querySelector(".plan__modal")
var elModalHeader = document.querySelector(".plan__modal-heading")

elBtn.addEventListener("click", function () {
  elModal.classList.add("plan__modal--active")
})

elModalHeader.addEventListener("click", function () {
  elModal.classList.remove("plan__modal--active")
})