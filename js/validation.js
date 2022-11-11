const input = document.querySelector('#upload-file');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const cancelBtn = document.querySelector('.img-upload__cancel');

const pristine = new Pristine(form);
const regex = /^#[a-zа-яё0-9\s]{1,19}$/;

const containsDuplicates = (array) => {
  const result = array.some(element => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }
    return false;
  })
  return result;
};

const checkForm = () => {
  const tags = hashtagInput.value.split(' ');
  console.log('Duplicates: ' + containsDuplicates(tags));

  const allTagsValid = (tag) => {
    return regex.test(tag);
  }

  console.log('All words are valid: ' + tags.every(allTagsValid));

  if (tags.length > 5) {
    console.log('too many words');
  }

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Valid');
  } else {
    console.log('Not Valid');
  }
};

export {checkForm}
