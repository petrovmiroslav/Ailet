/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 */

export class Why {
  constructor (gsap, ScrollTrigger) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;

    this.contentBlocks = this.gsap.utils.toArray('.whyParallax__contentBlock');

    this.setScrollTrigerToAllContentBlocks = this.setScrollTrigerToAllContentBlocks.bind(this);
  }

  init () {
    this.ScrollTrigger.matchMedia({
	
      "(min-width: 415px)": this.setScrollTrigerToAllContentBlocks,
    });
  }

  setScrollTrigerToAllContentBlocks () {
    this.contentBlocks.forEach((sideBlock, i) => {
      let leftLayout = (i % 2 > 0) ? false : true;
      let tween = this.gsap.fromTo(sideBlock, 
        { yPercent: leftLayout ? 10 : -10
        },
        { yPercent: leftLayout ? -10 : 10,
        });
  
      this.ScrollTrigger.create({
        trigger: '.whyParallax',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart complete reverse complete',
        animation: tween,
        scrub: 1,
      });
    });
  }
}