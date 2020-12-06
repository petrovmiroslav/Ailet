import { gsap } from "gsap";

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
  let currBlockActive = 0,
  accordionBlocks = document.querySelectorAll('.accordion__block'),
  accordionImages = document.querySelectorAll('.accordionSection__imgContainer');

  accordionBlocks = Array.from(accordionBlocks).map((currBlock, i)=>{
    const block = { 
      block: currBlock,
      header: currBlock.querySelector('.accordion__header'),
      content: currBlock.querySelector('.accordion__content'),
      img: accordionImages[i]};
    
    block.header.dataset.accordionIndex = i;

    block.header.addEventListener('click', accordion_Header_Click_Handler);

    return block;
  });

  function accordion_Header_Click_Handler (event) {
    if (currBlockActive === +event.currentTarget.dataset.accordionIndex) return;

    currBlockActive = +event.currentTarget.dataset.accordionIndex;

    accordionBlocks.forEach((block, i) => {
      currBlockActive === i 
        ? blockTurnON(block, i)
        : blockTurnOFF(block, i);
    });
  }

  const blockContentAnimationDuration = 0.35,
  blockImgAnimationDuration = 0.7;

  const blockContentStateON = {
    height: 'auto',
    duration: blockContentAnimationDuration,
  };

  const blockContentStateOFF = {
    height: 0,
    duration: blockContentAnimationDuration,
  };

  const blockImgStateON = {
    opacity: 1,
    duration: blockImgAnimationDuration,
  };

  const blockImgStateOFF = {
    opacity: 0,
    duration: blockImgAnimationDuration,
  };

  set1BlockInitState();
  function set1BlockInitState () {
    let block = accordionBlocks[0];
    gsap.timeline()
    .to(block.content, blockContentStateON)
    .to(block.img, blockImgStateON, 0);
  }

  function blockTurnON (block, index) {
    block.block.classList.add('accordion__block--active');

    let turnONTimeline = gsap.timeline();
    turnONTimeline
      .to(block.content, blockContentStateON)
      .to(block.img, blockImgStateON, 0);
  }

  function blockTurnOFF (block, index) {
    block.block.classList.remove('accordion__block--active');

    let turnOFFTimeline = gsap.timeline();
    turnOFFTimeline
      .to(block.content, blockContentStateOFF)
      .to(block.img, blockImgStateOFF, 0);
  }

}