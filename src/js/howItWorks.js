import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export class HowItWorks {
  constructor () {

    this.backgroundTimeline = gsap.timeline();

    this.Stages = ['Ailet AI', 'Stage 1', 'Stage 2'];
    this.StageContent = document.querySelector('.howItWorks__stageIndicatorHeader');
    this.stageImages = gsap.utils.toArray('.ST__stageImgContainer');
    this.Blocks = gsap.utils.toArray('.ST__contentBlock--right');
    this.Container = document.querySelector('.ST__Container');
    this.LeftContent = document.querySelector('.ST__contentContainer--left');
    this.StageIndicatorContainer = document.querySelector('.ST__contentContainer--stage');
    

    this.currenStage = 0;
  }

  init () {
    this.pinLeftSide();
  
    this.pinStageIndicator();
    
    this.Blocks.forEach((block, i)=>{

      /* FADEOUT */
      let fadeOut = gsap.timeline();
  
      if (i > 0) {
        this.addFadeOutAnimToRightBlock(fadeOut, block);
        this.addFadeOutAnimToStageImg(fadeOut, this.stageImages[i - 1]);
      }
        
      ScrollTrigger.create({
        trigger: block,
        start: 'top 50%',
        end: 'top 10%',
        animation: fadeOut,
        scrub: 1,
        onEnter: i > 0 && this.stageIncAnim.bind(this),
        onLeaveBack: i > 0 && this.stageDecAnim.bind(this),
      });
  
      /* FADEIN */
      let fadeIn = gsap.timeline();
  
      if (i < this.Blocks.length - 1) {
        this.addFadeInAnimToRightBlock(fadeIn, block);
      }
  
      if (i > 0 && i < this.stageImages.length) {
        this.addFadeInAnimToStageImg(fadeIn, this.stageImages[i - 1]);
      }
  
      ScrollTrigger.create({
        trigger: block,
        start: 'bottom 90%',
        end: 'bottom 50%',
        animation: fadeIn,
        scrub: 1,
      });
  
    });
  
    this.setBlocksInitState();
  }

  stageIncAnim () {
    gsap.timeline()
      .to(this.StageContent, {autoAlpha: 0, duration: 0.2})
      .call(this.stageInc.bind(this))
      .to(this.StageContent, {autoAlpha: 1, duration: 0.2});
  }
  stageDecAnim () {
    gsap.timeline()
      .to(this.StageContent, {autoAlpha: 0, duration: 0.2})
      .call(this.stageDec.bind(this))
      .to(this.StageContent, {autoAlpha: 1, duration: 0.2});
  }
  stageInc () {
    if (this.currenStage + 1 > this.Stages.length) return;
    if (this.Stages[++this.currenStage] === undefined) return;
    this.StageContent.innerHTML = this.Stages[this.currenStage];
  }
  stageDec () {
    if (this.currenStage - 1 < -1) return;
    if (this.Stages[--this.currenStage] === undefined) return;
    this.StageContent.innerHTML = this.Stages[this.currenStage];
  }

  setBlocksInitState () {
    let blocksArr = gsap.utils.toArray('.ST__contentBlock--right');
  
    blocksArr.shift();
  
    gsap.set(
      blocksArr,
      {opacity: 0}
    );
  
    gsap.set(
      this.stageImages, 
      { autoAlpha: 0,
        yPercent: 10 });
  }

  pinLeftSide () {
    ScrollTrigger.create({
      trigger: this.Container,
      start: 'top top',
      end: 'bottom bottom',
      pin: this.LeftContent,
      anticipatePin: 1,
    });
  }

  pinStageIndicator () {
    ScrollTrigger.create({
      trigger: this.Container,
      start: 'top top',
      end: 'bottom bottom',
      pin: this.StageIndicatorContainer,
    });
  }

  addFadeOutAnimToRightBlock (timeline, element) {
    timeline.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1,
        duration: 2 });
  }

  addFadeOutAnimToStageImg (timeline, element) {
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

  addFadeInAnimToRightBlock (timeline, element) {
    timeline.fromTo(
      element,
      { opacity: 1 },
      { opacity: 0,
        duration: 2 });
  }
  
  addFadeInAnimToStageImg (timeline, element) {
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

}