import { getPosts } from './data.js';
import {showPopup} from './popup.js';

const postsContainer = document.querySelector('.pictures');
const userPostTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const usersPosts = getPosts();

const createPost = (data) => {
  const {comments, description, likes, url} = data;
  const userPostElement = userPostTemplate.cloneNode(true);
  userPostElement.querySelector('.picture__img').src = url;
  userPostElement.querySelector('.picture__img').alt = description;
  userPostElement.querySelector('.picture__comments').textContent = comments.length;
  userPostElement.querySelector('.picture__likes').textContent = likes;

  userPostElement.addEventListener('click', () => {
    showPopup(data);
  });

  return userPostElement
}

const renderPosts = (posts) => {
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    const postElement = createPost(post);
    fragment.append(postElement);
  });

  postsContainer.append(fragment);
};

renderPosts(usersPosts);

