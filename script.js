
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('body'),
//   smooth: true 
// });
gsap.from("#navbar", {
  y: -50,
  duration: 1,
  opacity: 0
})
const tl = gsap.timeline()
gsap.from("#hero-text h1", {
  duration: 2,
  opacity: 0
})
gsap.from("#hero-text h2", {
  y: -100,
  duration: 1,
  opacity: 0
})
gsap.from("#cards #card", {
  opacity: 0,
  delay: 0.3,
  duration: 2,
  y: 50,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 80%",
  }
})
gsap.from(".card", {
  opacity: 0,
  delay: 0.3,
  duration: 2,
  y: 50,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%",
  }
})