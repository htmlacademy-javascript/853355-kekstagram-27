import { isEscapeKey } from './utils.js';

const pictureDialog = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture__img');
const pictureDialogClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML =
   '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentsList.append(fragment);
};

const renderPostDetails = ({url, likes, description}) => {
  pictureDialog.querySelector('.big-picture__img img').src = url;
  pictureDialog.querySelector('.big-picture__img img').alt = description;
  pictureDialog.querySelector('.likes-count').textContent = likes;
  pictureDialog.querySelector('.social__caption').textContent = description;
};

const showPopup = (data) => {
  pictureDialog.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);

  renderPostDetails(data);
  renderComments(data.comments);
};

const hidePopup = () => {
  pictureDialog.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

pictureDialogClose.addEventListener('click', () => {
  hidePopup();
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePopup();
  }
};

export {showPopup};
