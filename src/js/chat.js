import Choices from 'choices.js'
import "choices.js/public/assets/styles/choices.min.css";
import validator from 'validator';

export class Chat {
  constructor (Sphere) {
    this.SphereChat = new Sphere(document.getElementById('canvasChat'));
    this.SphereON = false;

    this.chatIsOpen = false;

    this.chat = document.querySelector('.chat');
    this.chatButton = document.querySelector('.navBar__chatButon');
    this.chatCloseButton = document.querySelector('.chat__closeButton');
    this.chatHomePageLink = document.querySelector('.chat__messageLink');

    this.form = document.querySelector('.chat__form');
    this.inputs = document.querySelectorAll('.form__input');
    this.selects = document.querySelectorAll('.form__input--select');
    this.submit = document.querySelector('.form__input--submit');


    this.toggleChat = this.toggleChat.bind(this);
    this.toggleChatBlock = this.toggleChatBlock.bind(this);
    this.toggleBodyScrollLock = this.toggleBodyScrollLock.bind(this);
    this.inputChangeListener = this.inputChangeListener.bind(this);
    this.formSubmitClickListener = this.formSubmitClickListener.bind(this);
    /* this.dropDownEventListener = this.dropDownEventListener.bind(this); */

    this.addChatButtonClickListener = this.addChatButtonClickListener.bind(this);
  }

  init () {
    this.addChatButtonClickListener();
    this.addInputsChangeListeners();
    this.addFormSubmitClickListener();
    //this.addSelectsDropDownEventListener();
    this.setUpSelections();  
  }

  /* addSelectsDropDownEventListener () {
    this.selects.forEach(((input) => {
      input.addEventListener('showDropdown', this.dropDownEventListener);
      input.addEventListener('hideDropdown', this.dropDownEventListener);
    }).bind(this));
  } */

  /* dropDownEventListener (event) {
    let input = this.getChoicesIfInputIsSelect(event.currentTarget);
    input.classList.toggle('form__input--showDropdown');
  } */

  addInputsChangeListeners () {
    this.inputs.forEach(((input) => {
      input.addEventListener('change', this.inputChangeListener);
    }).bind(this));
  }

  getChoicesIfInputIsSelect (input) {
    let elem = input;
    if (elem.tagName !== 'SELECT') {
      return input;
    }
    while(elem = elem.parentElement) {
      if (elem.classList.contains('choices')) {
        return elem;
      }
    }
    return input;
  }

  inputChangeListener (event) {
    let input = event.currentTarget,
    inputValueIsValid = this.inputIsValid(input);

    this.toggleInput(input, inputValueIsValid);
  }

  toggleInput (input, isValid) {
    let inputIsEmpty = input.value === '' ? true : false,
    inputOrChoices = this.getChoicesIfInputIsSelect(input);

    inputOrChoices.classList.toggle('form__input--filled', !inputIsEmpty);

    inputOrChoices.classList.toggle('form__input--error', !isValid);
  }

  createChoices (select) {
    let options = {
      renderChoiceLimit: -1,
      maxItemCount: 1,
      position: 'bottom',
      searchEnabled: select.classList.contains('form__input--searchEnabled'),
      searchFields: ['value'],
      shouldSort: false,
      placeholder: false,
      searchPlaceholderValue: 'Search',
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices form__input',
      },
    };
    let choices = new Choices(select, options);
  }

  setUpSelections () {
    this.selects.forEach(this.createChoices);
  }

  addChatButtonClickListener () {
    this.chatButton.addEventListener('click', this.toggleChat);
    this.chatCloseButton.addEventListener('click', this.toggleChat);
    this.chatHomePageLink.addEventListener('click', this.toggleChat);
  }

  toggleSphere () {
    if (this.SphereON) {
      this.SphereChat.stop();
      this.SphereON = false;
      return;  
    }
    this.SphereChat.start();
    this.SphereON = true;
  }

  toggleChat () {
    this.toggleChatBlock();
    this.toggleBodyScrollLock();
    this.hideSubmitMessage();
    this.toggleSphere();
    this.chatIsOpen = this.chatIsOpen ? false : true;
  }

  toggleChatBlock () {
    this.chat.classList.toggle('chat--open', !this.chatIsOpen);
  }

  toggleBodyScrollLock () {
    document.body.classList.toggle('body--scroll-lock', !this.chatIsOpen);
  }

  inputIsValid (input) {
    let value = String(input.value),
    valueIsEmpty = validator.isEmpty(value),
    valueIsValid = true;

    if (!input.required) {
      return valueIsValid;
    }

    switch (input.type) {
      case 'text':
        valueIsValid = !valueIsEmpty;
        break;
      case 'email':
        valueIsValid = validator.isEmail(value);
        break;
      case 'tel':
        valueIsValid = validator.isMobilePhone(value);
        break;
      default:
        break;
    }

    return valueIsValid;
  }

  addFormSubmitClickListener () {
    this.submit.addEventListener('click', this.formSubmitClickListener);
  }

  formSubmitClickListener (event) {
    event.preventDefault();

    let formIsValid = this.checkAllInputs(this.inputs);

    formIsValid && this.submitForm();
  }

  checkAllInputs (inputs) {
    let isValid = true;
    inputs.forEach((input => {
      let inputValueIsValid = this.inputIsValid(input);
      
      this.toggleInput(input, inputValueIsValid);
      
      inputValueIsValid || (isValid = false);
      
    }).bind(this));
    return isValid;  
  }

  submitForm () {
    let url = this.form.action;
    fetch(url, {
      method: 'POST',
      body: new FormData(this.form)
    }).then(this.fetchResultHandler.bind(this), 
    this.fetchErrorHandler.bind(this));
  }

  fetchResultHandler (response) {
    /* put in response.ok!!!!!!!!!!! */
    this.displaySubmitMessage();
    if (response.ok) {
      
    } else {
      
    }
  }

  fetchErrorHandler (error) {

  }

  displaySubmitMessage () {
    this.chat.classList.add('chat--submit');

    window.setTimeout(this.autoToggleChat.bind(this), 5000);
  }

  hideSubmitMessage () {
    this.chat.classList.remove('chat--submit');
  }

  autoToggleChat (){
    this.chatIsOpen && this.toggleChat();
  }

}