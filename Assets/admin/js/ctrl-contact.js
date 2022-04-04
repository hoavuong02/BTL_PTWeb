var modalDelete = document.querySelector(".modal-Delete")
var modelDeleteCancle = document.querySelector(".but-cancle")
var butDelete = document.querySelector(".but-delete")
var Delete = document.querySelectorAll(".action-delete")
var modalView = document.querySelectorAll(".contact__modal")
var modalViewFirst = document.querySelector(".contact__modal-first")
var modalViewSecond = document.querySelector(".contact__modal-second")
var ViewModalFirst = document.querySelector(".action-view-first")
var ViewModalSecond = document.querySelector(".action-view-second")
var Close = document.querySelectorAll(".modalContact-close")
var changeSee = document.querySelector(".change-see")
Delete.forEach(function (i) {
    i.addEventListener("click", function () {
        modalDelete.style.display = "block";
    })

})
modelDeleteCancle.addEventListener("click", function () {
    modalDelete.style.display = "none";
})
butDelete.addEventListener("click", function () {
    modalDelete.style.display = "none";
})
ViewModalSecond.addEventListener("click", function () {
    modalViewSecond.style.display = "block";
    changeSee.innerHTML = "Already seen"
})
ViewModalFirst.addEventListener("click", function () {
    modalViewFirst.style.display = "block";
})

Close.forEach(function (i) {
    i.addEventListener("click", function () {
        modalView.forEach(function (x) {
            x.style.display = "none";
        }
        )
    })

})


