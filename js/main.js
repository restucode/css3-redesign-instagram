var swiperStories = new Swiper('.swiper-stories', {
  slidesPerView: 'auto',
  spaceBetween: 5,
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
