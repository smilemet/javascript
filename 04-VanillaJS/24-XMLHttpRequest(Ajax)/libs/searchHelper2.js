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

  let json = null;
  let source = $('#source').value;
  const url = `~~~${source}`;
  const REST_API_KEY = '~~~~';
  const params = {
    query: queryString,
    page: currentPage
  };
  const headers = {
    Authorization: `Kakao~~~${REST_API_KEY}`
  };

  try {
    json = await axios.get(url, {params: params, headers: headers});
  } catch (error) {
    console.error(error);
    alert (errlr.msg);
  } finally {
    $('.loading').classList.remove('active');
  }

  if (!json) return;
  json.data.document.forEach(data => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const h2 = getElem('h2', data.title);
    const p = getElem('p', data.content);
    const sourceInfo =
      source === 'blog' 
      ? getElem('span', data.blogname, 'info') 
      : getElem('span', data.cafename, 'info');
    const datetime = new Date(data.datetime);
    
  })

}

