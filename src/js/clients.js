/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 */

export class Clients {
  constructor (gsap, ScrollTrigger) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;

    this.parallaxBlocks = gsap.utils.toArray('.clients__parallaxBlock');
  }

  init () {
    this.setUpwhatIsBlock();
  }

  getTween (element, isLeftLayout) {
    return this.gsap.fromTo(element, 
      { xPercent: isLeftLayout ? 0 : -50
      },
      { xPercent: isLeftLayout ? -50 : 0,
      });
  }

  setUpwhatIsBlock () {
    this.parallaxBlocks.forEach((header, i)=>{
      let leftLayout = (i % 2 > 0) ? false : true;
      let tween = this.getTween(header, leftLayout);

      this.ScrollTrigger.create({
        trigger: header,
        start: 'top bottom',
        end: 'bottom top',
        animation: tween,
        scrub: 1,
      });
    });
  }

}