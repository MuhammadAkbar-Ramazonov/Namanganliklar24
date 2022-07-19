var elOpenModelBtn = document.querySelector(".js-modal-btn");
var elOpenModel = document.querySelector(".modal")
var elCloseModel = document.querySelector(".modal-btn")
var elExitModel = document.querySelector(".modal-link")

elOpenModelBtn.addEventListener("click", function(){
    elOpenModel.classList.add("modal-open");
});


elCloseModel.addEventListener("click", function(){
    elOpenModel.classList.remove("modal-open");
});

elExitModel.addEventListener("click", function(){
    elOpenModel.classList.remove("modal-open");
});