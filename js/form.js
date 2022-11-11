import { isEscapeKey } from './utils.js';
import { checkForm } from './validation.js';

const input = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelBtn = document.querySelector('.img-upload__cancel');

const hideOverlay = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  cancelBtn.removeEventListener('click', hideOverlay);
  input.value = null;
}

const showOverlay = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  cancelBtn.addEventListener('click', hideOverlay);
  document.addEventListener('keydown', onPopupEscKeydown);
}

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideOverlay();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

input.oninput = showOverlay;

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  checkForm();
});

