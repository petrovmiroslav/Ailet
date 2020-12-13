
export class HowItWorks {
  constructor (gsap, ScrollTrigger, Sphere) {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.SphereHowItWorks = new Sphere(document.getElementById("canvasHowItWorks"));


    this.stageImagesMobile = this.gsap.utils.toArray('.ST__stageImgContainer--mobile');
    this.StageIndicatorsMobile = this.gsap.utils.toArray('.howItWorks__stageIndicatorHeader--mobile');
    this.BlocksMobile = this.gsap.utils.toArray('.howItWorks__contentBlock--mobile');
    this.ContainerMobile = document.querySelector('.ST__Container--mobile');


    this.setUpDesktop = this.setUpDesktop.bind(this);
    this.setUpMobile = this.setUpMobile.bind(this);
    this.setUpSphere = this.setUpSphere.bind(this);
  }

  init () {

    this.ScrollTrigger.matchMedia({
	
      "(min-width: 769px)": this.setUpDesktop,

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

  setUpDesktop () {
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

      return timeline;
    }
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
}