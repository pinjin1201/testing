$(function() {
  function runImage() {
    function two() {
      $('img').attr('src', `static/header/header-img-2.jpg`).hide()
      $('img').fadeIn()
    }
    setTimeout(two, 3000)
    function three() {
      $('img').attr('src', `static/header/header-img-3.jpg`).hide()
      $('img').fadeIn()
    }
    setTimeout(three, 6000)
    function one() {
      $('img').attr('src', `static/header/header-img-1.jpg`).hide()
      $('img').fadeIn()
    }
    setTimeout(one, 9000)
  }
  runImage()
  setInterval(runImage, 9000)
})