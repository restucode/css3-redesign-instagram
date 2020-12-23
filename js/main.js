var swiperStories = new Swiper('.swiper-stories', {
  slidesPerView: 'auto',
  grabCursor: true
});

// variable
const sidebar = document.querySelector('.sidebar')
const bottomShowMenu = document.querySelector('.bottom-show-menu')
const closeSidebar = document.querySelector('.close-sidebar')
// event
bottomShowMenu.addEventListener('click', () => {
  sidebar.classList.add('active')
  document.body.style.overflowY = 'hidden';

})
closeSidebar.addEventListener('click', () => {
 sidebar.classList.remove('active')
 document.body.style.overflowY = 'scroll';
})

window.addEventListener('scroll', () => {
 let footer = document.querySelector('#footer');
 const bottomNav = document.querySelector('.bottom-nav');
 const scrollable = document.documentElement.scrollHeight - window.innerHeight;
 if(window.scrollY === scrollable) {
  bottomNav.classList.add('active'); 
 } else {
  bottomNav.classList.remove('active'); 
 }

})
