import { getPosts } from './data.js';

const postsContainer = document.querySelector('.pictures');
const userPostTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const usersPostsData = getPosts();

const usersPostsFragment = document.createDocumentFragment();

usersPostsData.forEach(({url, likes, comments}) => {
  const userPostElement = userPostTemplate.cloneNode(true);
  userPostElement.querySelector('.picture__img').src = url;
  userPostElement.querySelector('.picture__comments').textContent = comments.length;
  userPostElement.querySelector('.picture__likes').textContent = likes;
  usersPostsFragment.appendChild(userPostElement);
});

postsContainer.appendChild(usersPostsFragment);
