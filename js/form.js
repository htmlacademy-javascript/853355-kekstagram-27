import { isEscapeKey } from './utils.js';
import { checkForm } from './validation.js';
import { resetScale } from './scale.js';

const imageInput = document.querySelector('#upload-file');
const imagePreview = document.querySelector('#imagePreview')
const form = document.querySelector('.img-upload__form');
const imgOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelBtn = document.querySelector('.img-upload__cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');


const hideOverlay = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  cancelBtn.removeEventListener('click', hideOverlay);
  resetScale();
  imageInput.value = null;
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (hashtagsInput === document.activeElement || descriptionInput === document.activeElement) {
      evt.stopPropagation();
    } else {
      hideOverlay();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  }
};

const onImageInputChange = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  cancelBtn.addEventListener('click', hideOverlay);
  document.addEventListener('keydown', onPopupEscKeydown);
  imagePreview.src = URL.createObjectURL(imageInput.files[0]);
};


imageInput.addEventListener('change', onImageInputChange);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  checkForm();
});

