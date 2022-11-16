const hashtagInput = document.querySelector('.text__hashtags');

const regex = /^#[a-zа-яё0-9\s]{1,19}$/;

const containsDuplicates = (array) => array.some((element) => array.indexOf(element) !== array.lastIndexOf(element));

const checkLength = (tagsArray) => tagsArray.length <= 5;

const isTagValid = (tag) => regex.test(tag);

const checkForm = () => {
  const tags = hashtagInput.value.trimEnd().split(' ');

  const allChecks = [checkLength(tags), !containsDuplicates(tags), tags.every(isTagValid)];
  return allChecks.every((fun) => fun);
};

export {checkForm};
