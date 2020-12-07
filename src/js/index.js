import '../css/index.css';
//import './sphere.js';
import {Hero as HeroModule} from './hero.js';
import '../css/link.css';
import '../css/sphere.css';
import '../css/sphereSection.css';
import '../css/scroll-sections-horisontal.css';
import '../css/navbar.css';
import './menuButon.js';
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
	const Hero = new HeroModule();
	Hero.init();

	const WhatIs = new WhatIsModule();
	WhatIs.init();

	const HowItWorks = new HowItWorksModule();
	HowItWorks.init();

	const Accordion = new AccordionModule();
	Accordion.init();

	const Why = new WhyModule();
	Why.init();

	/* document.querySelector('.preloaderCover').style.display = 'none'; */
}