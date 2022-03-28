var showSideBar = document.querySelector('.sidebar-btn')
var sidebar = document.getElementById('sidebar')
function showSidebar() {
    sidebar.classList.toggle('show')

}
showSideBar.addEventListener('click', showSidebar)

var logOut = document.querySelector('.log-out')
var helloAdmin = document.querySelector('.header__hello')
helloAdmin.addEventListener('click', function () {
    logOut.classList.toggle('show')
})


var openPostsNavIcon = document.querySelector('.js-posts--open')
var onOffpostsNav = document.querySelector('.posts__nav')

function showPosts() {
    onOffpostsNav.classList.toggle('posts--open')
}

openPostsNavIcon.addEventListener('click', showPosts)