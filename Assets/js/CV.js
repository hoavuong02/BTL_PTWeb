
//Drop down mobile
const mtMenu = document.querySelector(".mobile-tablet-menu")
const navList = document.querySelector(".header__nav-list") 

mtMenu.addEventListener('click',function(){
    navList.classList.toggle("show-header-nav")
})


var images = document.querySelectorAll('.portfolio-img')
var prew = document.querySelector('.prew')
var next = document.querySelector('.next')
var Close = document.querySelector('.gallery__close')
var galleryImg = document.querySelector('.galley__inner img')
var gallery = document.querySelector('.gallery')
var galleyInner = document.querySelector(".galley__inner")
var content1 = document.querySelectorAll(".portfolio-content__title")
var content2 = document.querySelectorAll(".portfolio-content__path")
var gallerycontentBox = document.querySelector(".gallery-content")
var galcontent1 = document.querySelector(".gallery-content__container h1")
var galcontent2 = document.querySelector(".gallery-content__container p")
var subClose = document.querySelector(".sub-close")
var Count = document.querySelector(".gallery-count__active")
var currenIndex = 0;



function Showgallery(){
    galleryImg.src = images[currenIndex].src
    Count.textContent = currenIndex + 1
    gallery.classList.add("show")
    galleyInner.classList.add("show2")
    galcontent1.textContent = content1[currenIndex].textContent
    galcontent2.textContent = content2[currenIndex].textContent
    // if(currenIndex == 0){
    //     prew.classList.remove("control__active")
    // }
}



images.forEach(function(item,index){
    item.addEventListener("click",function(){
        currenIndex = index
        Showgallery()
    })
})

//Close
Close.addEventListener("click",function(){
    gallery.classList.remove("show")
    galleyInner.classList.remove("show2")
    //Show gallery-content
    gallerycontentBox.classList.remove("hide-galleryContentBox")

})

//Prew image
prew.addEventListener("click",function(){
    if(currenIndex > 0){
        currenIndex--;
        Showgallery();
        activePrewControl()
    }
})
//Next image
next.addEventListener("click",function(){
    if(currenIndex< images.length-1 ){
        currenIndex++;
        Showgallery();
        activeNextControl()
    }

})
// Hide gallery-content
subClose.addEventListener("click",function(){
    gallerycontentBox.classList.add("hide-galleryContentBox")
})
//activeNextControl
function activeNextControl(){
    if(currenIndex == 0){
        next.classList.remove("control__active")
        prew.classList.remove("control__active")
    }
    else if(currenIndex){
        next.classList.add("control__active")
        prew.classList.remove("control__active")
    }
    else{
        prew.classList.add("control__active")
        next.classList.remove("control__active")
    }
}
//activePrewControl
function activePrewControl(){
    if(currenIndex == 0){
        next.classList.remove("control__active")
        prew.classList.remove("control__active")
    }

    else if(currenIndex){
        prew.classList.add("control__active")
        next.classList.remove("control__active")
    }
    else{
        next.classList.add("control__active")
        prew.classList.remove("control__active")
    }
}
