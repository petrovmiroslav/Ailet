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
  
  gsap.utils.toArray('.whyParallax__contentBlock').forEach((sideBlock, i) => {
    let leftLayout = (i % 2 > 0) ? false : true;
    let tween = gsap.fromTo(sideBlock, 
      { yPercent: leftLayout ? -10 : 10
      },
      { yPercent: leftLayout ? 10 : -10,
      });

    ScrollTrigger.create({
      trigger: '.whyParallax',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart complete reverse complete',
      animation: tween,
      scrub: 1,
    });
  });
}