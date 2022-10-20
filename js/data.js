import {getUniqueID, getCommentID, getRandomInt, getRandomArrayElement, isInputLengthOk, currentUserID} from './utils.js';

const AVATAR_RANGE = {
  min: 1,
  max: 6
};
const POSTS_COUNT = 25;

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


const getCommentMessage = () =>
  Array.from({length: getRandomInt(COMMENTS_MESSAGE_RANGE.min, COMMENTS_MESSAGE_RANGE.max)},
    () => getRandomArrayElement(COMMENTS)).join(' ');

const createComment = () => ({
  id: getCommentID(),
  avatar: `img/avatar-${getRandomInt(AVATAR_RANGE.min, AVATAR_RANGE.max)}.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(USER_NAMES)
});

const createPost = () => ({
  id: getUniqueID(),
  url: `photos/${currentUserID}.jpg`, //read-only
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: Array.from({length: getRandomInt(COMMENTS_RANGE.min, COMMENTS_RANGE.max)}, () => createComment()),
  avatar: `img/avatar${getRandomInt(AVATAR_RANGE.min, AVATAR_RANGE.max)}.svg`,
  name:getRandomArrayElement(USER_NAMES),
});

const getPosts = () => Array.from({length: POSTS_COUNT}, () => createPost());

isInputLengthOk('', 5);
getPosts();


