$(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
    })
  });
const scrolltop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
document.querySelector(".home").onclick = scrolltop
const scrollsequoi = () => {
  window.scroll({
    top: 700,
    behavior: "smooth",
  });
};
document.querySelector(".sequoia").onclick = scrollsequoi
const purchasing = () => {
  window.scroll({
    top: 2000,
    behavior: "smooth",
  });
};
document.querySelector(".purchasing").onclick = purchasing

const classic = () => {
  window.scroll({
    top: 3000,
    behavior: "smooth",
  });
};
document.querySelector(".classic").onclick = classic
const airdrop = () => {
  window.scroll({
    top: 3800,
    behavior: "smooth",
  });
};
document.querySelector(".airdrop").onclick = airdrop
const tokemonics = () => {
  window.scroll({
    top: 4000,
    behavior: "smooth",
  });
};
document.querySelector(".tokemonics").onclick = tokemonics
const roadmap = () => {
  window.scroll({
    top: 4800,
    behavior: "smooth",
  });
};
document.querySelector(".roadmap").onclick = roadmap
const team = () => {
  window.scroll({
    top: 5200,
    behavior: "smooth",
  });
};
document.querySelector(".team").onclick = team

gsap.from("#m1" , {
  scrollTrigger : {
      scrub: true
  },
  x: 2000,
})
document.body.onload = function() {
  setTimeout(function(){
    var preloader = document.getElementById("loading")
    if( !preloader.classList.add('done'))
    {
      preloader.classList.add('done')
    }
  }, 1000)
}