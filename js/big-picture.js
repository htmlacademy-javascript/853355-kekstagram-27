import { isEscapeKey } from './utils.js';

const pictureDialog = document.querySelector('.big-picture');
const pictureDialogClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');

const COMMENT_COUNT = 5;
let commetMultiplier = 1;

const showMoreComments = () => {
  const allComments = document.querySelectorAll('.social__comment');
  const allCommentsArray = Array.from(allComments);

  let currentCommentsCount = COMMENT_COUNT * commetMultiplier;
  if (currentCommentsCount > allCommentsArray.length) {
    currentCommentsCount = allCommentsArray.length;
  }

  if (currentCommentsCount > allCommentsArray.length || currentCommentsCount == allCommentsArray.length) {
    commentsLoader.classList.add('hidden');
  }

  const visibleCommentsArray =  allCommentsArray.slice(0, currentCommentsCount);

  commentsCount.innerHTML = `${currentCommentsCount} из <span class="comments-count">${allCommentsArray.length}</span> комментариев`;

  visibleCommentsArray.forEach((element) => {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    }
  })

  commetMultiplier++;
};

commentsLoader.addEventListener('click', function() {
  showMoreComments();
});

const resetComments = () => {
  commetMultiplier = 1;
  commentsLoader.classList.remove('hidden');
};

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML =
   `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35"><p class="social__text">${message}</p>`;
  comment.classList.add('social__comment');
  comment.classList.add('hidden');
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
  const bigPicture = pictureDialog.querySelector('.big-picture__img img');
  pictureDialog.querySelector('.likes-count').textContent = likes;
  pictureDialog.querySelector('.social__caption').textContent = description;
  bigPicture.src = url;
  bigPicture.alt = description;
};

const hidePopup = () => {
  pictureDialog.classList.add('hidden');
  body.classList.remove('modal-open');
  resetComments();
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePopup();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const showPopup = (postData) => {
  pictureDialog.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);

  renderPostDetails(postData);
  renderComments(postData.comments);
  showMoreComments();
};

pictureDialogClose.addEventListener('click', () => {
  hidePopup();
});

export {showPopup};
