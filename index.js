const navbar=document.getElementsByClassName('navbar-list')[0]
const button=document.getElementsByClassName('menu')[0]
const nav=document.getElementsByClassName('navbar')[0];

button.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    nav.classList.toggle('activee')
})


const crsr=document.querySelector(".cursor");

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
});

gsap.to("#navu",{
    backgroundColor:"black",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#navu",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to(".main",{
    backgroundColor:"black",
    duration:1,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -60%",
        scrub:1,
    }
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });