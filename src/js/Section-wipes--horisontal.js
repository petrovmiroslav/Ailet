import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

DOMready();
function DOMready() {
  if (document.readyState != 'loading'){
    DOMContentLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded);
  }
}
function DOMContentLoaded () {
  document.removeEventListener('DOMContentLoaded', DOMContentLoaded);
  init();
};

function init () {
  /* let sections = gsap.utils.toArray(".panel");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-sections-horisontal",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector(".scroll-sections-horisontal").offsetWidth
    }
  }); */




  const BGTL = gsap.timeline();
  BGTL
  .to(
    '.backgoundLogo',
    {xPercent: 0,
     duration: 1})
    .to(
      '.backgoundLogo',
      {xPercent: -100,
       duration: 2});

  ScrollTrigger.create({
    trigger: '.scroll-sections-horisontal',
    pin: '.backgoundLogo',
    anticipatePin: 1,
    animation: BGTL,
    scrub: 1,
    start: 'top top',
    end: () => "+=" + document.querySelector(".scroll-sections-horisontal").offsetWidth//(document.documentElement.clientWidth * 1),
  });
  
  const SphereTL = gsap.timeline();
  SphereTL
    .to(
      '.sphereSection',
      {xPercent: -100})
    .to(
      '.heroSection',
      {xPercent: -100},
      0);
  
  ScrollTrigger.create({
    trigger: '.scroll-sections-horisontal',
    pin: true,
    anticipatePin: 1,
    animation: SphereTL,
    scrub: 1,
    start: 'top top',
    end: () => "+=" + document.querySelector(".scroll-sections-horisontal").offsetWidth,
  });
}