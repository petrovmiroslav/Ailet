/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */


export class Hero {
  constructor (gsap, ScrollTrigger, Sphere) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.SphereMain = new Sphere(document.getElementById("canvasOne"));
    
    

    this.backgroundTimeline = this.gsap.timeline();
    this.sphereTimeline = this.gsap.timeline();

    this.heroContainer = document.querySelector(".scroll-sections-horisontal");
    this.BGLogo = document.querySelector('.backgoundLogo__img');
    this.navBarButtons = document.querySelector('.navBar__inner');
    this.sphereSection = document.querySelector('.sphereSection');
    this.sphereInner = document.querySelector('.sphereSection__inner');
    this.heroSection = document.querySelector('.heroSection');

    this.logoLight = document.querySelector('.navBar__logo--light');
    this.logoDark = document.querySelector('.navBar__logo--dark');
  }

  init () {
    this.startSphere();
    this.pinNavBar();
    //this.setUpBGLogo();
    this.setUpHorisontalScrollSection();
  }

  startSphere () {
    this.SphereMain.start();
    window.addEventListener('load', ()=>{
      document.getElementById("canvasOne").classList.add('sphere__canvas--reduced');
    });
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

  // setUpBGLogo () {
  //   this.backgroundTimeline
  //   .fromTo(
  //     this.BGLogo,
  //     { opacity: 0,
  //       xPercent: 100, },
  //     { opacity: 1,
  //       xPercent: 100,
  //       duration: 1 })
  //     .to(
  //       this.BGLogo,
  //       { opacity: 1,
  //         xPercent: 0,
  //         duration: 2 });

  //   this.ScrollTrigger.create({
  //     trigger: this.heroContainer,
  //     pin: '.backgoundLogo'/* this.BGLogo */,
  //     anticipatePin: 1,
  //     animation: this.backgroundTimeline,
  //     scrub: 1,
  //     start: 'top top',
  //     /* refreshPriority: -1, */
  //     end: () => "+=" + /* document.documentElement.clientWidth */this.heroContainer.offsetWidth,
  //   });
  // }

  setUpHorisontalScrollSection () {

    let logosIsChanged = false,
    buttonsOn = false;

    function toggleNavBarButtons (progress) {
      if (buttonsOn) {
        if (progress < 0.05) {
          buttonsOn = false;
          
          this.navBarButtons.classList.add('navBar__buttons--hidden');
        }
      } else {
        if (progress > 0.05) {
          buttonsOn = true;
          
          this.navBarButtons.classList.remove('navBar__buttons--hidden');
        }
      }
    }

    function toggleNavBarLogo (progress) {
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

    function checkProgress ({progress, direction, isActive}) {
      toggleNavBarButtons.call(this, progress);
      toggleNavBarLogo.call(this, progress);
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
        0)
      .fromTo(
        this.BGLogo,
        { opacity: 0,
          xPercent: 100, },
        { opacity: 1,
          xPercent: 50,
          duration: 1 },
          0)
        .to(
          this.BGLogo,
          { opacity: 1,
            xPercent: 0,
            duration: 3 },
          1);

    this.ScrollTrigger.create({
      trigger: this.heroContainer,
      pin: true,
      anticipatePin: 1,
      animation: this.sphereTimeline,
      scrub: 1,
      start: 'top top',
      end: () => "+=" + this.heroContainer.offsetWidth,
      onUpdate: checkProgress.bind(this),
      onLeave: () => { 
        this.SphereMain.stop();
      },
      onEnterBack: () => { 
        this.SphereMain.start();
      },
    });
  }

}