import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export class Hero {
  constructor () {

    this.backgroundTimeline = gsap.timeline();
    this.sphereTimeline = gsap.timeline();

    this.heroContainer = document.querySelector(".scroll-sections-horisontal");
    this.BGLogo = document.querySelector('.backgoundLogo__img');
    this.sphereSection = document.querySelector('.sphereSection');
    this.heroSection = document.querySelector('.heroSection');
  }

  init () {
    this.setUpBGLogo();
    this.setUpHorisontalScrollSection();

    
  }

  setUpBGLogo () {
    this.backgroundTimeline
    .to(
      this.BGLogo,
      { opacity: 1,
        xPercent: 0,
        duration: 1 })
      .to(
        this.BGLogo,
        { opacity: 1,
          xPercent: -100,
          duration: 2 });

    ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: this.BGLogo,
      anticipatePin: 1,
      animation: this.backgroundTimeline,
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
    });

    gsap.set(this.BGLogo, {opacity: 0});
  }

  setUpHorisontalScrollSection () {

    this.sphereTimeline
      .to(
        this.sphereSection,
        {xPercent: -100})
      .to(
        this.heroSection,
        {xPercent: -100},
        0);

    ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: true,
      anticipatePin: 1,
      animation: this.sphereTimeline,
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
    });
  }

}