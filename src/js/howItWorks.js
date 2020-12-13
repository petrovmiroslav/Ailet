/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */

export class HowItWorks {
  constructor (gsap, ScrollTrigger, Sphere) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.SphereHowItWorks = new Sphere(document.getElementById("canvasHowItWorks"));

    this.backgroundTimeline = this.gsap.timeline();

    this.Stages = ['Ailet AI', 'Stage 1', 'Stage 2'];
    this.StageContent = document.querySelector('.howItWorks__stageIndicatorHeader');
    this.stageImages = this.gsap.utils.toArray('.ST__stageImgContainer');
    this.stageImagesMobile = this.gsap.utils.toArray('.ST__stageImgContainer--mobile');
    this.StageIndicatorsMobile = this.gsap.utils.toArray('.howItWorks__stageIndicatorHeader--mobile');
    this.Blocks = this.gsap.utils.toArray('.ST__contentBlock--right');
    this.BlocksMobile = this.gsap.utils.toArray('.howItWorks__contentBlock--mobile');
    this.Container = document.querySelector('.ST__Container--desktop');
    this.ContainerMobile = document.querySelector('.ST__Container--mobile');

    this.LeftContent = document.querySelector('.ST__contentContainer--left');
    this.StageIndicatorContainer = document.querySelector('.ST__contentContainer--stage');
    

    this.currenStage = 0;

    this.setUpDesktop = this.setUpDesktop.bind(this);
    this.setUpDesktop2 = this.setUpDesktop2.bind(this);
    this.setUpMobile = this.setUpMobile.bind(this);
    this.setUpSphere = this.setUpSphere.bind(this);
  }

  init () {

    this.ScrollTrigger.matchMedia({
	
      // desktop
      "(min-width: 769px)": this.setUpDesktop2,
      //"(min-width: 769px)": this.setUpMobile,
      // mobile
      "(max-width: 768px)": this.setUpMobile,

      "all": this.setUpSphere,
    });
  }

  setUpSphere () {
    this.ScrollTrigger.create({
      trigger: '.howItWorks',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: ()=>{
        this.SphereHowItWorks.start();
      },
      onEnterBack: () => {
        this.SphereHowItWorks.start();
      },
      onLeave: () => {
        this.SphereHowItWorks.stop();
      },
      onLeaveBack: () => {
        this.SphereHowItWorks.stop();
      },
    });
  }

  setUpDesktop2 () {
    let stepsCount =  this.BlocksMobile.length - 1;

    this.ScrollTrigger.create({
      trigger: this.ContainerMobile,
      start: 'top top',
      end: () => "+=" + document.documentElement.clientHeight * stepsCount,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      animation: animationDesktop.call(this, stepsCount), 
    });

    function animationDesktop (stepsCount) {
      let timeline = this.gsap.timeline(),
      duration = 3,
      durationStage = 1;
      

      /* images */
      // for (let i = 1; i < this.Blocks.length; i++) {
      //   let img = this.stageImagesMobile[i - 1];
      //   timeline.fromTo(
      //     img,
      //     { opacity: 0,
      //       yPercent: 10 },
      //     { opacity: 1,
      //       yPercent: 0,
      //       duration: durationStage * 0.5 },
      //     durationStage * (i)
      //   );

      //   if (i === this.stageImagesMobile.length) continue;

      //   timeline.fromTo(
      //     img,
      //     { opacity: 1,
      //       yPercent: 0 },
      //     { opacity: 0,
      //       yPercent: -10,
      //       duration: durationStage * 0.5 },
      //     (durationStage * i) + durationStage * 0.5
      //   );
      // }
      for (let i = 0, progress = 0; i < this.BlocksMobile.length - 2; i++) {
        let img = this.stageImagesMobile[i];

        /* center => UP */
        timeline.fromTo(
          img,
          { yPercent: 0 },
          { yPercent: -10,
            duration: 0.25 },
          progress + 0.35
        )
        .fromTo(
          img,
          { opacity: 1 },
          { opacity: 0,
            duration: 0.1 },
          progress + 0.45
        );

        progress = progress + 0.4 + 0.1;
      }

      //except 1 elem
      for (let i = 0, progress = 0; i < this.BlocksMobile.length - 1; i++) {
        let img = this.stageImagesMobile[i];
        /* DOWN => center */
        timeline.fromTo(
          img,
          { yPercent: 10 },
          { yPercent: 0,
            duration: 0.25 },
          progress + 0.1
        )
        .fromTo(
          img,
          { opacity: 0 },
          { opacity: 1,
            duration: 0.1 },
          progress + 0.1
        );

        progress = progress + 0.4 + 0.1;
      }

      /* stages NO CHANGED*/

      for (let i = 0, progress = 0; i < this.BlocksMobile.length - 1; i++) {
        let stage = this.StageIndicatorsMobile[i];
        timeline.fromTo(
          stage,
          { opacity: 1 },
          { opacity: 0,
            duration: 0.05 },
          progress + 0.1
        );

        progress = progress + 0.4 + 0.1;
      }
      for (let i = 1, progress = 0; i < this.BlocksMobile.length; i++) {
        let stage = this.StageIndicatorsMobile[i];
        timeline.fromTo(
          stage,
          { opacity: 0 },
          { opacity: 1,
            duration: 0.05 },
          progress + 0.15
        );

        progress = progress + 0.4 + 0.1;
      }

      /* blocks mobile */

      // timeline.fromTo(
      //   this.BlocksMobile[0],
      //   { y: 0 },
      //   { y: ()=> -document.documentElement.clientHeight,
      //     duration: 0.5 },
      //   0
      // );
      
      // timeline.fromTo(
      //   this.BlocksMobile[1],
      //   { y: ()=> document.documentElement.clientHeight },
      //   { y: 0,
      //     duration: 0.5 },
      //   0
      // )
      // .fromTo(
      //   this.BlocksMobile[1],
      //   { y: 0 },
      //   { y: ()=> -document.documentElement.clientHeight,
      //     duration: 0.5 },
      //   0.75
      // );

      // timeline.fromTo(
      //   this.BlocksMobile[2],
      //   { y: ()=> document.documentElement.clientHeight },
      //   { y: 0,
      //     duration: 0.5 },
      //   0.75
      // )
      // .fromTo(
      //   this.BlocksMobile[2],
      //   { y: 0 },
      //   { y: ()=> -document.documentElement.clientHeight,
      //     duration: 0.5 },
      //   1.5
      // );
      

      //except last elem
      for (let i = 0, progress = 0; i < this.BlocksMobile.length - 1; i++) {
        let block = this.BlocksMobile[i];

        /* center => UP */
        timeline.fromTo(
          this.BlocksMobile[i],
          { y: 0 },
          { y: ()=> -document.documentElement.clientHeight,
            duration: 0.4 },
          progress
        )
        .fromTo(
          this.BlocksMobile[i],
          { opacity: 1 },
          { opacity: 0,
            duration: 0.05 },
          progress + 0.0
        );

        progress = progress + 0.4 + 0.1;
      }

      //except 1 elem
      for (let i = 1, progress = 0; i < this.BlocksMobile.length; i++) {
        let block = this.BlocksMobile[i];
        /* DOWN => center */
        timeline.fromTo(
          this.BlocksMobile[i],
          { y: ()=> document.documentElement.clientHeight },
          { y: 0,
            duration: 0.4 },
          progress
        )
        .fromTo(
          this.BlocksMobile[i],
          { opacity: 0 },
          { opacity: 1,
            duration: 0.1 },
          progress + 0.15
        );

        progress = progress + 0.4 + 0.1;
      }
      
      // for (let i = 0; i < this.Blocks.length; i++) {
      //   let block = this.BlocksMobile[i];
      //   // timeline.fromTo(
      //   //   block,
      //   //   { y: i === 0 ? 0 : ()=> document.documentElement.clientHeight * 0.5},
      //   //   { y: 0,
      //   //     duration: durationStage * 0.3 },
      //   //   durationStage * (i)
      //   // )
      //   // .fromTo(
      //   //   block,
      //   //   { y: 0 },
      //   //   { y: i === this.Blocks.length - 1 ? 0 : ()=> -document.documentElement.clientHeight * 0.5,
      //   //     duration: durationStage * 0.3 },
      //   //   durationStage * i + (durationStage - 0.3)
      //   // );

      //   // timeline.fromTo(
      //   //   block,
      //   //   { opacity: i > 0 ? 0 : 0 },
      //   //   { opacity: 1,
      //   //     duration: durationStage * 0.5 },
      //   //   durationStage * (i)
      //   // );

      //   // if (i + 1 === this.BlocksMobile.length) continue;

      //   // timeline.fromTo(
      //   //   block,
      //   //   { opacity: 1 },
      //   //   { opacity: 0,
      //   //     duration: durationStage * 0.5 },
      //   //   (durationStage * i) + durationStage * 0.5
      //   // );

      //   if (i > 0) {
      //     timeline.fromTo(
      //       block,
      //       { y: ()=> document.documentElement.clientHeight * 0.5 },
      //       { y: 0,
      //         duration: 0.3 },
      //       //((i - 1) / stepsCount) + 0
      //       i - 0.5
      //     )
      //     .fromTo(
      //       block,
      //       { opacity: 0 },
      //       { opacity: 1,
      //         duration: 0.3 },
      //       //((i - 1) / stepsCount) + 0
      //       i - 0.5
      //     );
      //   }

      //   if (i < 2) {
      //     timeline
      //     .fromTo(
      //       block,
      //       { y: 0 },
      //       { y: ()=> -document.documentElement.clientHeight * 0.5,
      //         duration: 0.5 },
      //       //i / stepsCount + 0
      //       i
      //     )
      //     .fromTo(
      //       block,
      //       { opacity: 1 },
      //       { opacity: 0,
      //         duration: 0.5 },
      //       //i / stepsCount + 0
      //       i
      //     );
      //   }

        
      // }

      return timeline;
    }
  }

  setUpDesktop () {
    this.pinLeftSide();

    this.pinStageIndicator();
    
    this.Blocks.forEach((block, i)=>{

      /* FADEOUT */
      let fadeOut = this.gsap.timeline();
  
      if (i > 0) {
        this.addFadeOutAnimToRightBlock(fadeOut, block);
        this.addFadeOutAnimToStageImg(fadeOut, this.stageImages[i - 1]);
      }
        
      this.ScrollTrigger.create({
        trigger: block,
        start: 'top 50%',
        end: 'top 10%',
        animation: fadeOut,
        scrub: 1,
        onEnter: i > 0 && this.stageIncAnim.bind(this),
        onLeaveBack: i > 0 && this.stageDecAnim.bind(this),
      });
  
      /* FADEIN */
      let fadeIn = this.gsap.timeline();
  
      if (i < this.Blocks.length - 1) {
        this.addFadeInAnimToRightBlock(fadeIn, block);
      }
  
      if (i > 0 && i < this.stageImages.length) {
        this.addFadeInAnimToStageImg(fadeIn, this.stageImages[i - 1]);
      }
  
      this.ScrollTrigger.create({
        trigger: block,
        start: 'bottom 90%',
        end: 'bottom 50%',
        animation: fadeIn,
        scrub: 1,
      });
  
    });

    this.setBlocksInitState();
  }

  setUpMobile () {
    this.ScrollTrigger.create({
      trigger: this.ContainerMobile,
      start: 'top top',
      end: () => "+=" + document.documentElement.clientHeight * this.BlocksMobile.length,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      animation: animationMoblie.call(this), 
    });

    function animationMoblie () {
      let timeline = this.gsap.timeline(),
      duration = 3,
      durationStage = 1;

      /* images */
      for (let i = 1; i < this.BlocksMobile.length; i++) {
        let img = this.stageImagesMobile[i - 1];
        timeline.fromTo(
          img,
          { opacity: 0 },
          { opacity: 1,
            duration: durationStage * 0.5 },
          durationStage * (i)
        );

        if (i === this.stageImagesMobile.length) continue;

        timeline.fromTo(
          img,
          { opacity: 1 },
          { opacity: 0,
            duration: durationStage * 0.5 },
          (durationStage * i) + durationStage * 0.5
        );
      }

      /* stages */

      for (let i = 0; i < this.BlocksMobile.length; i++) {
        let stage = this.StageIndicatorsMobile[i];
        timeline.fromTo(
          stage,
          { opacity: i > 0 ? 0 : 1 },
          { opacity: 1,
            duration: durationStage * 0.5 },
          durationStage * (i)
        );

        if (i + 1 === this.StageIndicatorsMobile.length) continue;

        timeline.fromTo(
          stage,
          { opacity: 1 },
          { opacity: 0,
            duration: durationStage * 0.5 },
          (durationStage * i) + durationStage * 0.5
        );
      }

      /* blocks mobile */
      for (let i = 0; i < this.BlocksMobile.length; i++) {
        let block = this.BlocksMobile[i];
        timeline.fromTo(
          block,
          { opacity: i > 0 ? 0 : 1 },
          { opacity: 1,
            duration: durationStage * 0.5 },
          durationStage * (i)
        );

        if (i + 1 === this.BlocksMobile.length) continue;

        timeline.fromTo(
          block,
          { opacity: 1 },
          { opacity: 0,
            duration: durationStage * 0.5 },
          (durationStage * i) + durationStage * 0.5
        );
      }

      return timeline;
    }
  }



  stageIncAnim () {
    this.gsap.timeline()
      .to(this.StageContent, {autoAlpha: 0, duration: 0.2})
      .call(this.stageInc.bind(this))
      .to(this.StageContent, {autoAlpha: 1, duration: 0.2});
  }
  stageDecAnim () {
    this.gsap.timeline()
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
    let blocksArr = this.gsap.utils.toArray('.ST__contentBlock--right');
  
    blocksArr.shift();
  
    this.gsap.set(
      blocksArr,
      {opacity: 0}
    );
  
    this.gsap.set(
      this.stageImages, 
      { autoAlpha: 0,
        yPercent: 10 });
  }

  pinLeftSide () {
    this.ScrollTrigger.create({
      trigger: this.Container,
      start: 'top top',
      end: 'bottom bottom',
      pin: this.LeftContent,
      anticipatePin: 1,
      refreshPriority: -1
    });
  }

  pinStageIndicator () {
    this.ScrollTrigger.create({
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