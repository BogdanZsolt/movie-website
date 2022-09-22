const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, index) => {
  const itemNumber = movieLists[index].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener('click', ()=>{
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if(itemNumber - (6 + clickCounter) + (6-ratio)>= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[index].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
    // console.log('Item Number: ',itemNumber,' ratio: ',ratio);
  })

})

// Color Toggle

const ball = document.querySelector(".color-toggle");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .sidebar__icon, .color-toggle__ball"
);

ball.addEventListener('click', () => {
  ball.classList.toggle('active');
  items.forEach(item => {
    item.classList.toggle('active');
  })
})