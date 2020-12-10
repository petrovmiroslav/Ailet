/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */


export class Menu {
  constructor (gsap, ScrollTrigger) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;

    this.menuIsOpen = false;
    this.menuButton = {
      button: document.querySelector('.menuButon'),
      lineTop: document.querySelector('.menuButon__iconLine--top'),
      lineBottom: document.querySelector('.menuButon__iconLine--bottom') };
    this.menu = document.querySelector('.menu');

    this.logoLight = document.querySelector('.navBar__logo--light');
    this.logoDark = document.querySelector('.navBar__logo--dark');

    this.chatLogoDark = document.querySelector('.navBar__chatButtonLogo--dark');
    this.chatLogoGradient = document.querySelector('.navBar__chatButtonLogo--gradient');
    /* this.links = [
      {
        
      },
    ], */
    /* this.solutions = {
      element: document.querySelector('.solutions'),
      link: document.getElementById('LinkSolution'),
      id: 'LinkSolution',
      yCoord:  undefined}; */

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuBlock = this.toggleMenuBlock.bind(this);
    this.toggleBodyScrollLock = this.toggleBodyScrollLock.bind(this);
    this.toggleMenuButton = this.toggleMenuButton.bind(this);
    /* this.refreshElementsCoords = this.refreshElementsCoords.bind(this); */
    this.addMenuLinkClickListener = this.addMenuLinkClickListener.bind(this);
  }

  init () {
    this.addMenuButtonClickListener();
    this.addMenuLinksClickListener();
    /* this.solutions.link.addEventListener('click', this.goToSection.bind(this)); */
  }

  goToSection () {
    this.toggleMenu();
    //this.scrollToElementCoords(8401, 'auto');
  }

  addMenuButtonClickListener () {
    this.menuButton.button.addEventListener('click', this.toggleMenu);
  }

  addMenuLinksClickListener () {
    document.querySelectorAll('.menu__link--anchor').forEach(this.addMenuLinkClickListener);
  }

  addMenuLinkClickListener (link) {
    link.addEventListener('click', this.toggleMenu);
  }

  toggleMenu () {
    //this.menuIsOpen || this.refreshElementsCoords();
    this.toggleMenuButton();
    this.toggleMenuBlock();
    this.toggleBodyScrollLock();
    this.menuIsOpen = this.menuIsOpen ? false : true;
  }

  toggleMenuBlock () {
    this.menu.classList.toggle('menu--open');
  }

  toggleBodyScrollLock () {
    document.body.classList.toggle('body--scroll-lock', !this.menuIsOpen);
  }

  toggleMenuButton () {
    this.menuButton.lineTop.classList.toggle('menuButon__iconLine--transform-down');
    this.menuButton.lineTop.classList.toggle('menuButon__iconLine--active');
    
    this.menuButton.lineBottom.classList.toggle('menuButon__iconLine--transform-up');
    this.menuButton.lineBottom.classList.toggle('menuButon__iconLine--active');

    this.menuButton.button.classList.toggle('menuButon--active');

    this.toggleLogo();
  }

  toggleLogo () {
    if (this.menuIsOpen) {
      this.logoLight.classList.add('navBar__logo--opacity-0');
      this.chatLogoGradient.classList.add('navBar__logo--opacity-0');
      this.logoDark.classList.remove('navBar__logo--opacity-0');
      this.chatLogoDark.classList.remove('navBar__logo--opacity-0');
    } else {
      this.logoLight.classList.remove('navBar__logo--opacity-0');
      this.chatLogoGradient.classList.remove('navBar__logo--opacity-0');
      this.logoDark.classList.add('navBar__logo--opacity-0');
      this.chatLogoDark.classList.add('navBar__logo--opacity-0');
    }
  }

  toggleLogoOpacity (logo) {
    logo.classList.toggle('navBar__logo--opacity-0');
  }

  /* scrollToElementCoords (yCoord, behavior) {
    behavior || (behavior = "smooth");
    window.scrollTo({
      top: yCoord,
      behavior: behavior
    });
  }

  refreshElementsCoords () {
    this.solutions.yCoord = this.getYCoord(this.solutions.element);
  }

  getYCoord (element) {
    return element.getBoundingClientRect().top + pageYOffset;
  } */

}