import { gsap } from "gsap";

export class Accordion {
  constructor () {
    this.currBlockActive = 0,
    this.accordionImages = document.querySelectorAll('.accordionSection__imgContainer');
    this.accordionBlocks = this.getAccordionBlocks(document.querySelectorAll('.accordion__block')),
    

    this.blockContentAnimationDuration = 0.35,
    this.blockImgAnimationDuration = 0.7;

    this.blockContentStateON = {
      height: 'auto',
      duration: this.blockContentAnimationDuration,
    };

    this.blockContentStateOFF = {
      height: 0,
      duration: this.blockContentAnimationDuration,
    };

    this.blockImgStateON = {
      opacity: 1,
      duration: this.blockImgAnimationDuration,
    };

    this.blockImgStateOFF = {
      opacity: 0,
      duration: this.blockImgAnimationDuration,
    };


    this.accordion_Header_Click_Handler = this.accordion_Header_Click_Handler.bind(this);
  }

  init () {
    this.addEventListenersToHeaders();

    this.set1BlockInitState();
  }

  createBlock (currBlock, i) {
    const block = { 
      block: currBlock,
      header: currBlock.querySelector('.accordion__header'),
      content: currBlock.querySelector('.accordion__content'),
      img: this.accordionImages[i]};
    
    block.header.dataset.accordionIndex = i;

    return block;
  }

  getAccordionBlocks (elements) {
    return (
      Array.from(elements).map(this.createBlock.bind(this))
    );
  }

  addEventListenersToHeaders () {
    this.accordionBlocks.forEach(this.addClickListenerToHeaders.bind(this));
  }

  addClickListenerToHeaders (elem) {
    elem.header.addEventListener('click', this.accordion_Header_Click_Handler);
  }
  
  accordion_Header_Click_Handler (event) {
    if (this.currBlockActive === +event.currentTarget.dataset.accordionIndex) return;

    this.currBlockActive = +event.currentTarget.dataset.accordionIndex;

    this.accordionBlocks.forEach((block, i) => {
      this.currBlockActive === i 
        ? this.blockTurnON(block, i)
        : this.blockTurnOFF(block, i);
    });
  }

  set1BlockInitState () {
    let block = this.accordionBlocks[0];
    gsap.timeline()
    .to(block.content, this.blockContentStateON)
    .to(block.img, this.blockImgStateON, 0);
  }

  blockTurnON (block, index) {
    block.block.classList.add('accordion__block--active');

    let turnONTimeline = gsap.timeline();
    turnONTimeline
      .to(block.content, this.blockContentStateON)
      .to(block.img, this.blockImgStateON, 0);
  }

  blockTurnOFF (block, index) {
    block.block.classList.remove('accordion__block--active');

    let turnOFFTimeline = gsap.timeline();
    turnOFFTimeline
      .to(block.content, this.blockContentStateOFF)
      .to(block.img, this.blockImgStateOFF, 0);
  }

}