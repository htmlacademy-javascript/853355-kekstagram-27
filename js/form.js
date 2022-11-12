import { isEscapeKey } from './utils.js';
import { checkForm } from './validation.js';

const uploadImg = document.querySelector('#upload-file');
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
  uploadImg.value = null;
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
    if (hashtagsInput === document.activeElement || descriptionInput === document.activeElement) {
      console.log('Cant close. Have focus.');
    } else {
      hideOverlay();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  }
};

uploadImg.oninput = showOverlay;

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  checkForm();
});

