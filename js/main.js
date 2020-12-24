var swiperStories = new Swiper('.swiper-stories', {
  slidesPerView: 'auto',
  grabCursor: true
});

// variable
const sidebar = document.querySelector('.sidebar')
const bottomShowMenu = document.querySelector('.bottom-show-menu')
const closeSidebar = document.querySelector('.close-sidebar')
const closeSidebarDekstop = document.querySelector('.close-sidebar-dekstop')
const bottomNav = document.querySelector('.bottom-nav')
const stories = document.querySelector('.stories')
const feed = document.querySelector('.feed')

// event mobile
bottomShowMenu.addEventListener('click', () => {
  sidebar.classList.add('active')
  document.body.style.overflowY = 'hidden';

})
closeSidebar.addEventListener('click', () => {
 sidebar.classList.remove('active')
 document.body.style.overflowY = 'scroll';
})

// event desktop
closeSidebarDekstop.addEventListener('click', function() {
 this.classList.toggle('active-desktop')
 sidebar.classList.toggle('active-desktop')
 bottomNav.classList.toggle('active-desktop')
 feed.classList.toggle('active-desktop')
 stories.classList.toggle('active-desktop')
})


window.addEventListener('scroll', () => {

 const scrollable = document.documentElement.scrollHeight - window.innerHeight;
 if(window.scrollY === scrollable) {
  bottomNav.classList.add('active'); 
 } else {
  bottomNav.classList.remove('active'); 
 }

})

window.addEventListener('resize', function() {
 console.log(window.innerWidth)
 if(window.innerWidth >= 1024) {
   document.body.style.overflowY = 'scroll'
 }

})
