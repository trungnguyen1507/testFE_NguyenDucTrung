let listImg = document.querySelectorAll('.hero__section .hero__img img')
let listDot = document.querySelectorAll('.slider__dot--item')
let heroSlide = document.querySelector('.hero__section .hero__img')
let heroNext = document.querySelector('.hero__control.next')
let heroPrev = document.querySelector('.hero__control.prev')

let tipsList = document.querySelector('.tips-trick .tips__list .tips__list--slide')
let itemList = document.querySelectorAll('.tips-trick .tips__list .tips__item')
let tipsPrev = document.querySelector('.tips__control.tips--prev')
let tipsNext = document.querySelector('.tips__control.tips--next')
let listTipsDot = document.querySelectorAll('.tips__dot--item')

let currentIndex = 0
let tipsCurrentIndex = 0

function handleChangeHeroSlide() {
  if (currentIndex == listImg.length - 1) {
    currentIndex = 0
    heroSlide.style.transform = 'translateX(0px)'
  } else {
    currentIndex++
    let width = listImg[0].offsetWidth
    heroSlide.style.transform = `translateX(${width * -1 * currentIndex}px)`
  }

  listDot.forEach((item) => {
    item.classList.remove('active')
  })

  listDot[currentIndex].classList.add('active')
}

let handleChangeHeroSlideInterval = setInterval(handleChangeHeroSlide, 4000)

listDot.forEach((item, index) => {
  item.addEventListener('click', () => {
    clearInterval(handleChangeHeroSlideInterval)
    currentIndex = index
    let width = listImg[0].offsetWidth
    heroSlide.style.transform = `translateX(${width * -1 * currentIndex}px)`

    listDot.forEach((item) => {
      item.classList.remove('active')
    })

    listDot[currentIndex].classList.add('active')
    handleChangeHeroSlideInterval = setInterval(handleChangeHeroSlide, 4000)
  })
})

heroNext.addEventListener('click', () => {
  clearInterval(handleChangeHeroSlideInterval)
  handleChangeHeroSlide()
  handleChangeHeroSlideInterval = setInterval(handleChangeHeroSlide, 4000)
})

heroPrev.addEventListener('click', () => {
  clearInterval(handleChangeHeroSlideInterval)
  if (currentIndex == 0) {
    currentIndex = listImg.length - 1
    let width = listImg[0].offsetWidth
    heroSlide.style.transform = `translateX(${width * -1 * currentIndex}px)`
  } else {
    currentIndex--
    let width = listImg[0].offsetWidth
    heroSlide.style.transform = `translateX(${width * -1 * currentIndex}px)`
  }

  listDot.forEach((item) => {
    item.classList.remove('active')
  })

  listDot[currentIndex].classList.add('active')
  handleChangeHeroSlideInterval = setInterval(handleChangeHeroSlide, 4000)
})

// handleTipsSlide

function handleChangeTipsSlide() {
  if (tipsCurrentIndex == itemList.length - 3) {
    tipsCurrentIndex = 0
    tipsList.style.transform = `translateX(0px)`
  } else {
    tipsCurrentIndex++
    let width = itemList[0].offsetWidth
    tipsList.style.transform = `translateX(${width * -1 * tipsCurrentIndex}px)`
  }

  listTipsDot.forEach((item) => {
    item.classList.remove('active')
  })

  listTipsDot[tipsCurrentIndex].classList.add('active')
}

let handleChangeTipsSlideInterval = setInterval(handleChangeTipsSlide, 4000)

listTipsDot.forEach((item, index) => {
  item.addEventListener('click', () => {
    clearInterval(handleChangeTipsSlideInterval)
    tipsCurrentIndex = index
    let width = itemList[0].offsetWidth
    tipsList.style.transform = `translateX(${width * -1 * tipsCurrentIndex}px)`

    listTipsDot.forEach((item) => {
      item.classList.remove('active')
    })

    listTipsDot[tipsCurrentIndex].classList.add('active')
    handleChangeTipsSlideInterval = setInterval(handleChangeTipsSlide, 4000)
  })
})

tipsNext.addEventListener('click', () => {
  clearInterval(handleChangeTipsSlideInterval)
  handleChangeTipsSlide()
  handleChangeTipsSlideInterval = setInterval(handleChangeTipsSlide, 4000)
})

tipsPrev.addEventListener('click', () => {
  clearInterval(handleChangeTipsSlideInterval)
  if (tipsCurrentIndex == 0) {
    tipsCurrentIndex = itemList.length - 3
    let width = itemList[0].offsetWidth
    tipsList.style.transform = `translateX(${width * -1 * tipsCurrentIndex}px)`
  } else {
    tipsCurrentIndex--
    let width = itemList[0].offsetWidth
    tipsList.style.transform = `translateX(${width * -1 * tipsCurrentIndex}px)`
  }
  listTipsDot.forEach((item) => {
    item.classList.remove('active')
  })

  listTipsDot[tipsCurrentIndex].classList.add('active')
  handleChangeTipsSlideInterval = setInterval(handleChangeTipsSlide, 4000)
})
