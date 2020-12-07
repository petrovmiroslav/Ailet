import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export class WhatIs {
  constructor () {
    this.headers = gsap.utils.toArray('.whatIsBlock__sliderHeader');
  }

  init () {
    this.setUpwhatIsBlock();
  }

  getTween (element, isLeftLayout) {
    return gsap.fromTo(element, 
      { xPercent: isLeftLayout ? -10 : 10
      },
      { xPercent: isLeftLayout ? 10 : -10,
      });
  }

  setUpwhatIsBlock () {
    this.headers.forEach((header, i)=>{
      let leftLayout = (i % 2 > 0) ? false : true;
      let tween = this.getTween(header, leftLayout);

      ScrollTrigger.create({
        trigger: header,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart complete reverse complete',
        animation: tween,
        scrub: 1,
      });
    });
  }

}