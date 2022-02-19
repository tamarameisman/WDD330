import Hikes from './hikes.js';
import Comments from './comments.js';
//on load grab the array and insert it into the page
const myComments = new Comments('comments')
const myHikes = new Hikes('hikes', myComments);
window.addEventListener('load', () => {
  myHikes.showHikeList();
  myComments.showCommentsList();
  
});
