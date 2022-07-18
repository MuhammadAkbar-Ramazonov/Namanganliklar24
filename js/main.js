var elOpenModelBtn = document.querySelector(".js-modal-btn");
var elOpenModel = document.querySelector(".modal")
var elCloseModel = document.querySelector(".modal-btn")


elOpenModelBtn.addEventListener("click", function(){
    elOpenModel.classList.add("modal-open");
});


elCloseModel.addEventListener("click", function(){
    elOpenModel.classList.remove("modal-open");
});