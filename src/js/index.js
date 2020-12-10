import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import '../css/index.css';
//import './sphere.js';
import {Hero as HeroModule} from './hero.js';
import '../css/link.css';
import '../css/sphere.css';
import '../css/menu.css';
import {Menu as MenuModule} from './menu.js';
import {Chat as ChatModule} from './chat.js';
import '../css/chat.css';
import '../css/sphereSection.css';
import '../css/scroll-sections-horisontal.css';
import '../css/navbar.css';
//import './menuButon.js';
import '../css/heroSection.css';
import '../css/whatIsBlock.css';
import {WhatIs as WhatIsModule} from './whatIs.js';
import '../css/borderTopHeader.css';
import '../css/trigger.css';
import '../css/howItWorks.css';
import {HowItWorks as HowItWorksModule} from './howItWorks.js';
import '../css/solutions.css';
import {Accordion as AccordionModule} from './accordion.js';
import '../css/why.css';
import {Why as WhyModule} from './why.js';
import '../css/clients.css';
import {Clients as ClientsModule} from './clients.js';
import '../css/contacts.css';

(function () {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
})();
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
  //init();
};

/* window.addEventListener('load', init); */
window.addEventListener('load', setBodyClassReady);
function setBodyClassReady () {
	document.body.classList.remove('hiddenPopUps');
}

init();

function init () {
	const Hero = new HeroModule(gsap, ScrollTrigger);
	Hero.init();

	const Menu = new MenuModule(gsap, ScrollTrigger);
	Menu.init();

	const Chat = new ChatModule();
	Chat.init();

	const WhatIs = new WhatIsModule(gsap, ScrollTrigger);
	WhatIs.init();

	const HowItWorks = new HowItWorksModule(gsap, ScrollTrigger);
	HowItWorks.init();

	const Accordion = new AccordionModule(gsap, ScrollTrigger);
	Accordion.init();

	const Why = new WhyModule(gsap, ScrollTrigger);
	Why.init();

	const Clients = new ClientsModule(gsap, ScrollTrigger);
	Clients.init();
	/* document.querySelector('.preloaderCover').style.display = 'none'; */
}