/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */


export class Hero {
  constructor (gsap, ScrollTrigger) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;

    this.backgroundTimeline = this.gsap.timeline();
    this.sphereTimeline = this.gsap.timeline();

    this.heroContainer = document.querySelector(".scroll-sections-horisontal");
    this.BGLogo = document.querySelector('.backgoundLogo__img');
    this.sphereSection = document.querySelector('.sphereSection');
    this.sphereInner = document.querySelector('.sphereSection__inner');
    this.heroSection = document.querySelector('.heroSection');

    this.logoLight = document.querySelector('.navBar__logo--light');
    this.logoDark = document.querySelector('.navBar__logo--dark');
  }

  init () {
    this.pinNavBar();
    this.setUpBGLogo();
    this.setUpHorisontalScrollSection();
  }

  pinNavBar () {
    this.ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: '.navBar',
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
    });
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

    this.ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: this.BGLogo,
      anticipatePin: 1,
      animation: this.backgroundTimeline,
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
    });

    this.gsap.set(this.BGLogo, {opacity: 0});
  }

  setUpHorisontalScrollSection () {

    let logosIsChanged = false;
    function checkProgress ({progress, direction, isActive}) {
      if (logosIsChanged) {
        if (progress < 0.7) {
          logosIsChanged = false;
          
          this.logoLight.classList.remove('navBar__logo--opacity-0');
          this.logoDark.classList.add('navBar__logo--opacity-0');
        }
      } else {
        if (progress > 0.7) {
          logosIsChanged = true;
          
          this.logoLight.classList.add('navBar__logo--opacity-0');
          this.logoDark.classList.remove('navBar__logo--opacity-0');
        }
      }
    }

    this.sphereTimeline
      .to(
        this.sphereSection,
        { xPercent: -100,
          duration: 4 })
      .to(
        this.heroSection,
        { xPercent: -100,
          duration: 4 },
        0)
      .to(
        this.sphereInner,
        { xPercent: 25,
          duration: 1 },
        0);

    this.ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: true,
      anticipatePin: 1,
      animation: this.sphereTimeline,
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
      onUpdate: checkProgress.bind(this)
    });
  }

}