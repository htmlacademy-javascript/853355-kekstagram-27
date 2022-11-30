import { renderPosts } from "./posts.js";

fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((posts) => {
    renderPosts(posts);
});
