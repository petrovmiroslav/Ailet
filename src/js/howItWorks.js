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
  gsap.defaults({overwrite: 'auto'});

  gsap.set(/* ".left-content > *" */['.imageToShow', '.textToShow'], {xPercent: -50, yPercent: -50});

  const ST = ScrollTrigger.create({
    trigger: ".content-container",
    start: "top top",
    end: "bottom bottom",
    onUpdate: getCurrentSection,
    pin: ".left-content"
  });

  const contentMarkers = gsap.utils.toArray(".contentMarker");

  // Set up our content behaviors
  contentMarkers.forEach(marker => {
    marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

    marker.content.enter = function() {
      gsap.fromTo(marker.content, {autoAlpha: 0, translateY: '20%'}, {duration: 0.3, autoAlpha: 1, translateY: 0});
    }
    
    marker.content.leave = function() {
      /* gsap.fromTo(marker.content, {translateY: 30}, {duration: 0.3, autoAlpha: 0, translateY: -30}); */
      gsap.to(marker.content, {duration: 0.3, autoAlpha: 0, translateY: "-20%"});
      /* gsap.to(marker.content, {duration: 0.1, autoAlpha: 0}); */
    }
    
  });

  // Handle the updated position
  let lastContent;
  function getCurrentSection() {
    let newContent;
    const currScroll = scrollY;
    
    // Find the current section
    contentMarkers.forEach(marker => {
      if(currScroll > marker.offsetTop - document.documentElement.clientHeight * 0.5) {
        newContent = marker.content;
      }
    });


    
    // If the current section is different than that last, animate in
    if(newContent
    && (lastContent == null 
      || !newContent.isSameNode(lastContent))) {
      // Fade out last section
      if(lastContent) {
        lastContent.leave();
      }
      
      // Animate in new section
      newContent.enter();
      
      lastContent = newContent;
    }
  }

  const media = window.matchMedia("screen and (max-width: 600px)");
  ScrollTrigger.addEventListener("refreshInit", checkSTState);
  checkSTState();

  function checkSTState() {
    if(media.matches) {
      ST.disable();
    } else {
      ST.enable();
    }
  }
}