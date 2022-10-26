import { getPosts } from "./data.js";

const usersPosts = document.querySelector('.pictures');
const userPostTemplate = document.querySelector('#picture')
.content
.querySelector('.picture');

const usersPostsData = getPosts();

const usersPostsFragment = document.createDocumentFragment();

usersPostsData.forEach((post) => {
  const userPostElement = userPostTemplate.cloneNode(true);
  userPostElement.querySelector('.picture__img').src = post.url;
  userPostElement.querySelector('.picture__comments').textContent = post.comments;
  userPostElement.querySelector('.picture__likes').textContent = post.likes;
  usersPostsFragment.appendChild(userPostElement);
});

usersPosts.appendChild(usersPostsFragment);
