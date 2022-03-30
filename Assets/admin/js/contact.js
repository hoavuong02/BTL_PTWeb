var modalDesc = document.querySelector(".modal-desc")
        var actionPlus = document.querySelector(".action-plus")
        var actionFix = document.querySelector(".action-fix")
        var actionRemove = document.querySelector(".action-remove")
        var modaldescSave = document.querySelector(".modaldesc__save")
        var modaldescCancle = document.querySelector(".modaldesc__Cancle")


        actionPlus.addEventListener("click",function(){
            modalDesc.style.display = "block"
        })
        actionFix.addEventListener("click",function(){
            modalDesc.style.display = "block"
        })
        actionRemove.addEventListener("click",function(){
            modalDelete.style.display = "block"
        })
        modaldescSave.addEventListener("click",function(){
            modalDesc.style.display = "none"
        })
        modaldescCancle.addEventListener("click",function(){
            modalDesc.style.display = "none"
        })