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

let currenStage = 0;
const Stages = ['Ailet AI', 'Stage 1', 'Stage 2'];
const StageContent = document.querySelector('.howItWorks__stageIndicatorHeader');
const stageImages = gsap.utils.toArray('.ST__stageImgContainer');
const Blocks = gsap.utils.toArray('.ST__contentBlock--right');

function stageIncAnim () {
  gsap.timeline()
    .to(StageContent, {autoAlpha: 0, duration: 0.2})
    .call(stageInc)
    .to(StageContent, {autoAlpha: 1, duration: 0.2});
}
function stageDecAnim () {
  gsap.timeline()
    .to(StageContent, {autoAlpha: 0, duration: 0.2})
    .call(stageDec)
    .to(StageContent, {autoAlpha: 1, duration: 0.2});
}
function stageInc () {
  if (currenStage + 1 > Stages.length) return;
  if (Stages[++currenStage] === undefined) return;
  StageContent.innerHTML = Stages[currenStage];
}
function stageDec () {
  if (currenStage - 1 < -1) return;
  if (Stages[--currenStage] === undefined) return;
  StageContent.innerHTML = Stages[currenStage];
}

function setBlocksInitState () {

  let blocksArr = gsap.utils.toArray('.ST__contentBlock--right');

  blocksArr.shift();

  gsap.set(
    blocksArr,
    {opacity: 0}
  );

  gsap.set(
    stageImages, 
    { autoAlpha: 0,
      yPercent: 10 });

}

function pinLeftSide () {
  ScrollTrigger.create({
    trigger: '.ST__Container',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.ST__contentContainer--left',
    anticipatePin: 1,
  });
}

function pinStageIndicator () {
  ScrollTrigger.create({
    trigger: '.ST__Container',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.ST__contentContainer--stage',
  });
}

function addFadeOutAnimToRightBlock (timeline, element) {
  timeline.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1,
      duration: 2 });
}

function addFadeOutAnimToStageImg (timeline, element) {
  timeline
    .fromTo(
      element, 
      { autoAlpha: 0 },
      { autoAlpha: 1,
        duration: 1 }, 0)
    .fromTo(
      element,
      { yPercent: 10 },
      { yPercent: 0,
        duration: 2 }, 0);
}

function addFadeInAnimToRightBlock (timeline, element) {
  timeline.fromTo(
    element,
    { opacity: 1 },
    { opacity: 0,
      duration: 2 });
}

function addFadeInAnimToStageImg (timeline, element) {
  timeline
    .fromTo(
      element, 
      { autoAlpha: 1 },
      { autoAlpha: 0,
        duration: 1 }, 0)
    .fromTo(
      element,
      { yPercent: 0 },
      { yPercent: -10,
        duration: 2 }, 0);
}

function init () {

  pinLeftSide();
  
  pinStageIndicator();

  Blocks.forEach((block, i)=>{

    /* FADEOUT */
    let fadeOut = gsap.timeline();

    if (i > 0) {
      addFadeOutAnimToRightBlock(fadeOut, block);
      addFadeOutAnimToStageImg(fadeOut, stageImages[i - 1]);
    }
      
    ScrollTrigger.create({
      trigger: block,
      start: 'top 50%',
      end: 'top 10%',
      animation: fadeOut,
      scrub: 1,
      onEnter: i > 0 && stageIncAnim,
      onLeaveBack: i > 0 && stageDecAnim,
    });

    /* FADEIN */
    let fadeIn = gsap.timeline();

    if (i < Blocks.length - 1) {
      addFadeInAnimToRightBlock(fadeIn, block);
    }

    if (i > 0 && i < stageImages.length) {
      addFadeInAnimToStageImg(fadeIn, stageImages[i - 1]);
    }

    ScrollTrigger.create({
      trigger: block,
      start: 'bottom 90%',
      end: 'bottom 50%',
      animation: fadeIn,
      scrub: 1,
    });

  });

  setBlocksInitState();
  
}