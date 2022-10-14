const AVATAR_RANGE = {
  min: 1,
  max: 6
};
const POSTS_COUNT = 25;
const PHOTO_RANGE = {
  min: 1,
  max: 25
};

const COMMENTS_MESSAGE_RANGE = {
  min: 1,
  max: 2
};

const COMMENTS_RANGE = {
  min: 1,
  max: 20
};

const LIKES_RANGE = {
  min: 15,
  max: 200
};

const ID_RANGE = {
  min: 1,
  max: 25
};

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отдыхаем',
  'Гуляем',
  'Мечтаем',
  'Кушаем',
  'Тратим деньги',
  'Путешествуем'
];


const USER_NAMES = [
  'Саша',
  'Андрей',
  'Жасур',
  'Артём',
  'Камиль',
  'Миша'
];

function getRandomInt(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (elements) => (
  elements[getRandomInt(0, elements.length - 1)]
);

function checkStringLength (input, maxLength) {
  return input.length <= maxLength;
}

const createCommentMessage = () =>
  Array.from({length: getRandomInt(COMMENTS_MESSAGE_RANGE.min, COMMENTS_MESSAGE_RANGE.max)},
    () => getRandomArrayElement(COMMENTS)).join(' ');

const createComment = () => ({
  id: getRandomInt(ID_RANGE.min, ID_RANGE.max),
  avatar: `img/avatar-${getRandomInt(AVATAR_RANGE.min, AVATAR_RANGE.max)}.svg`,
  message: createCommentMessage(),
  name: getRandomArrayElement(USER_NAMES)
});

const createPost = () => ({
  id: getRandomInt(PHOTO_RANGE.min, PHOTO_RANGE.max),
  url: `photos/${getRandomInt(PHOTO_RANGE.min, PHOTO_RANGE.max)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: Array.from({length: getRandomInt(COMMENTS_RANGE.min, COMMENTS_RANGE.max)}, () => createComment()),
  avatar: `img/avatar${getRandomInt(AVATAR_RANGE.min, AVATAR_RANGE.max)}.svg`,
  name:getRandomArrayElement(USER_NAMES),
});

const getPosts = () => Array.from({length: POSTS_COUNT}, () => createPost());


checkStringLength('', 5);
getPosts();

