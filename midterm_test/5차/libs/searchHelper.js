/** 
 * @filename: searchHelper.js
 * @author: 방미소
 * @description: 카카오 검색 API를 활용하여 입력된 값에 대한 검색 결과를 출력한다.
*/

let currentPage = 1;
let isEnd = false;
let queryKeyword, querySort, querySize;

const KAKAO_REST_KEY = '71676e7d7d63ac9908e5bd4166df7109';


const letSearch = async () => {
  // 로딩
  const loading = document.querySelector('#loading');
  loading.classList.add('active');

  // 페이지 초기화
  const booklist = document.querySelector('#bookList')
  if (currentPage === 1) {
    Array
    .from(booklist.getElementsByTagName('li'))
    .forEach(v => {
      booklist.removeChild(v);
    });
  }
  

  // API 전달 파라미터 설정
  queryKeyword = document.querySelector('#query').value;
  querySort = document.querySelector('#sort').value;
  querySize = document.querySelector('#size').value;

  const K_URL = 'https://dapi.kakao.com/v3/search/book';
  const K_VALUE = {
    params: {
      query: queryKeyword,
      sort: querySort,
      size: querySize,
      page: currentPage
    },
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_KEY}`
    }
  };

  // Axios
  let json = null;

  try {
    json = await axios.get(K_URL, K_VALUE);
    console.log(json);
  } 
  catch (err) {
    alert('요청 처리 중 오류가 발생하였습니다.');
    return;
  } 
  finally {
    loading.classList.remove('active');
  }

  if (json !== null) {
    const {data} = json;
    isEnd = data.meta.is_end;

    data.documents.map(v => {
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const span4 = document.createElement('span');

      a.setAttribute('class', 'flex-row');
      a.setAttribute('hef', v.url);
      div1.setAttribute('class', 'img-con');
      div2.setAttribute('class', 'text-con');
      img.setAttribute('src', v.thumbnail || 'img/noimage.jpg');

      h2.innerHTML = v.title;
      p.innerHTML = v.contents;
      span1.innerHTML = v.authors;
      span2.innerHTML = v.publisher;
      span3.innerHTML = v.price;
      span4.innerHTML = (v.sale_price === -1 ? '할인가 없음' : v.sale_price);

      div1.appendChild(img);
      div2.appendChild(h2);
      div2.appendChild(p);
      div2.appendChild(span1);
      div2.appendChild(span2);
      div2.appendChild(span3);
      div2.appendChild(span4);
      a.appendChild(div1);
      a.appendChild(div2);
      li.appendChild(a);
      booklist.appendChild(li);
    })
  }
}


// 신규 검색
document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();

  const queryField = document.querySelector('#query');
  queryKeyword = queryField.value.trim();
  console.log(queryKeyword);

  if(!queryKeyword) {
    alert('검색어를 입력하세요.');
    queryField.focus();
    return;
  }

  currentPage = 1;
  letSearch();
})


// 추가 검색 (스크롤)
window.addEventListener('scroll', e => {
  const loading = document.querySelector('#loading');
  if(isEnd || loading.classList.contains('active')) {
    return;
  }

  const scrollTop = window.scrollY;
  const windowHeight = window.screen.availHeight;
  const documentHeight = document.body.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight) {
    currentPage++;
    letSearch();
  }
})