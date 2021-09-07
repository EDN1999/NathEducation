burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')
fauser = document.querySelector('.fa-user')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-nav-resp');
    navlist.classList.toggle('v-nav-resp');
    fauser.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})