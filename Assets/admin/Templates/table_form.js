var edit = document.querySelectorAll(".action-edit")
var Delete = document.querySelectorAll(".action-delete")
var modal = document.querySelector(".modal")
var modalDelete = document.querySelector(".modal-Delete")
var modelCancle = document.querySelector(".modal__Cancle")
var modelDeleteCancle = document.querySelector(".but-cancle")
var Add = document.querySelector(".action-add")

edit.forEach(function (i) {
    i.addEventListener("click", function () {
        modal.style.display = "block";
    })
})
modelCancle.addEventListener("click", function () {
    modal.style.display = "none";
})

Delete.forEach(function (i) {
    i.addEventListener("click", function () {
        modalDelete.style.display = "block";
    })

})
modelDeleteCancle.addEventListener("click", function () {
    modalDelete.style.display = "none";
})

Add.addEventListener("click", function () {
    modal.style.display = "block";
})