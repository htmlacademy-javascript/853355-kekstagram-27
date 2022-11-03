let currentCommentID = 0;
let currentUserID = 0;

function getUniqueID() {
  if (currentUserID >= 25) {
    currentUserID = 0;
  }
  currentUserID++;
  return currentUserID;
}

const getCommentID = () => currentCommentID++;

function getRandomInt(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (elements) => (
  elements[getRandomInt(0, elements.length - 1)]
);

function isInputLengthOk (input, maxLength) {
  return input.length <= maxLength;
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getUniqueID, getCommentID, getRandomInt, getRandomArrayElement, isInputLengthOk, currentUserID, isEscapeKey, isEnterKey};
