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
  let sections = gsap.utils.toArray(".panel");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-sections-horisontal",
      pin: true,
      scrub: 1,
      /* snap: 1 / (sections.length - 1), */
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: () => "+=" + document.querySelector(".scroll-sections-horisontal").offsetWidth
    }
  });
}