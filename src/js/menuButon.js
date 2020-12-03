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
  document.querySelector('.menuButon').addEventListener('click', menuButonClickHandler);
};
function toggleMenu () {
  let lineTop, lineBottom;
  return function toggleMenuLineClass (e) {
    if (!lineTop || !lineBottom) {
      let button = e.currentTarget;
      lineTop = button.querySelector('.menuButon__iconLine--top');
      lineBottom = button.querySelector('.menuButon__iconLine--bottom');
    }
    lineTop.classList.toggle('menuButon__iconLine--transform-down');
    lineBottom.classList.toggle('menuButon__iconLine--transform-up');
  };
}
let menuButonClickHandler = toggleMenu();