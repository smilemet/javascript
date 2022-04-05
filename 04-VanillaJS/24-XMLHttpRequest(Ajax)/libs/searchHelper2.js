const $ = (item) => document.querySelector(item);
const getElem = (tagName, str = null, className = null) => {
  const newElem = document.createElement(tagName);
  newElem.innerHTML = str;
  if(className) newElem.classList.add(className);
  return newElem;
};
let currentPage = 1;
let isEnd = false;
let queryString;
let source;

const getSearchedData = async = () => {
  $('.loading').classList.add('active');

  if (currentPage === 1) {
    Array.from($('.result').getElementByTagName('li')).forEach((elem) => {
      $('.result').removeChild(elem);
    });
  }

  let 
}

