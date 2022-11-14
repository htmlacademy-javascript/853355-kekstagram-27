const hashtagInput = document.querySelector('.text__hashtags');

const regex = /^#[a-zа-яё0-9\s]{1,19}$/;

const containsDuplicates = (array) => {
  const result = array.some((element) => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }
    return false;
  });
  return result;
};

const checkLength = (tagsArray) => {
  if (tagsArray.length <= 5) {
    return true;
  };
  return false;
};

const allTagsValid = (tag) => regex.test(tag);

const checkForm = () => {
  const tags = hashtagInput.value.trimEnd().split(' ');

  const allChecks = [checkLength(tags),  !containsDuplicates(tags), tags.every(allTagsValid)];
  const isTrue = (fun) => fun === true;
  return allChecks.every(isTrue);
};

export {checkForm};
