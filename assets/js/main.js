let listImg = document.querySelectorAll('.slider__control--dot img')
let listDot = document.querySelectorAll('.slider__control--dot')
let heroSlide = document.querySelector('.hero__section .hero__img')
let heroNext = document.querySelector('.hero__control.next')
let heroPrev = document.querySelector('.hero__control.prev')

let currentIndex = 0

setCurrentIndex(currentIndex)

function setCurrentIndex(index) {
  currentIndex = index
  heroSlide.src = listImg[currentIndex].src

  listDot.forEach((item) => {
    item.classList.remove('active')
  })

  listDot[currentIndex].classList.add('active')
}

listDot.forEach((item, index) => {
  item.addEventListener('click', () => {
    setCurrentIndex(index)
  })
})

heroNext.addEventListener('click', () => {
  if (currentIndex == listImg.length - 1) {
    currentIndex = 0
  } else currentIndex++

  heroSlide.style.animation = ''
  setTimeout(() => {
    setCurrentIndex(currentIndex)
    heroSlide.style.animation = 'heroSlideRightToLeft 1s ease-out forwards, heroSlideLeftToRight 1s ease-out forwards'
  }, 200)
})

heroPrev.addEventListener('click', () => {
  if (currentIndex == 0) currentIndex = listImg.length - 1
  else currentIndex--

  setCurrentIndex(currentIndex)
})
