const hashtagInput = document.querySelector('.text__hashtags');

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

const checkLength = (tagsArray) => {
  if (tagsArray.length <= 5) {
    return true;
  }
  return false;
}

const allTagsValid = (tag) => {
  return regex.test(tag);
}

const checkForm = () => {
  const tags = hashtagInput.value.trimEnd().split(' ');
  console.log('Only 5 tags: ' + checkLength(tags));
  console.log('Unique tags: ' + !containsDuplicates(tags));
  console.log('Tags valid: ' + tags.every(allTagsValid));
};

export {checkForm}
