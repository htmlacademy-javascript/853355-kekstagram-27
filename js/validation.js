const hashtagInput = document.querySelector('.text__hashtags');

const regex = /^#[a-zа-яё0-9\s]{1,19}$/;

const containsDuplicates = (array) => {
  const result = array.some((element) => {
    return array.indexOf(element) !== array.lastIndexOf(element) ? true : false;
    });
  return result;
};

const checkLength = (tagsArray) => {
  return tagsArray.length <= 5 ? true : false;
};

const isTagValid = (tag) => regex.test(tag);

const checkForm = () => {
  const tags = hashtagInput.value.trimEnd().split(' ');

  const allChecks = [checkLength(tags), !containsDuplicates(tags), tags.every(isTagValid)];
  return allChecks.every((fun) => fun);
};

export {checkForm};
