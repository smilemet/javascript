// 변수들 가져오기
const KAKAO_REST_KEY = '71676e7d7d63ac9908e5bd4166df7109';
let currentPage = 1;
let queryKeyword = null;
let isEnd = false;


// 폼 클릭 이벤트 만들기 (신규 검색)
document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();

  const queryField = document.querySelector('#query');
  queryKeyword = queryField.value.trim();

  // 검색어가 비었을 때
  if(!queryKeyword) {
    alert('검색어를 입력해주세요.')
    queryField.focus();
    return;
  }

  // 신규 검색
  currentPage = 1;
  searchQuery();
})


// 스크롤 이벤트 만들기 (추가 검색)
window.addEventListener('scroll', e => {
  // 마지막 페이지 or 로딩 중
  if (isEnd || document.querySelector('#loading').classList.contains('active')) {
    return;
  }

  const scrollTop = window.scrollY;
  const windowHeight = window.screen.availHeight;
  const documentHeight = document.body.scrollHeight;

  // 최하단에서 추가페이지
  if (scrollTop + windowHeight >= documentHeight) {
    currentPage++;
    searchQuery();
  }
})


// JSON 데이터 가져오는 함수 만들기 (검색 기능)
const searchQuery = async () => {
  // 로딩바 띄우기
  const loading = document.querySelector('#loading');
  loading.classList.add('active');

  // 페이지 초기화
  const list = document.querySelector('#list');
  if (currentPage === 1) {
    Array.from(list.getElementsByTagName('li')).forEach(v => {
      list.removeChild(v);
    });
  }

  // 소스 가져오기
  const source = document.querySelector('#source');
  const sourceName = source.value;
  let json = null;

  try {
    json = await axios.get(`https://dapi.kakao.com/v2/search/${sourceName}`, {
      params: {
        query: queryKeyword,
        page: currentPage
      },
      headers: {
        Authorization : `KakaoAK ${KAKAO_REST_KEY}`
      }
    });
  } catch (e) {
    alert('요청을 처리하는데 실패했습니다.');
    return;
  } finally {
    loading.classList.remove('active');
  }

  if(json !== null) {
    const {data} = json;
    console.log(json);

    isEnd = data.meta.is_end;
    data.documents.map(v => {
      const fac = new CreateElement();

      const li = fac.setAttr('li');
      const a = fac.setAttr('a', 'href', v.url);
      const img = fac.setAttr('img', 'src', v.thumbnail);
      const p = fac.innerHTML('p', v.contents);
      const span1 = fac.innerHTML('span', v.title);
        span1.classList.add('info');
      const span2 = fac.innerHTML('span', v.datetime);
        span1.classList.add('info');

      let h2 = null;
      if (sourceName === 'blog') {
        h2 = fac.innerHTML('h2', v.blogname);
      } else {
        h2 = fac.innerHTML('h2', v.cafename);
      }

      // 엑박 처리
      let imgThumb = img.getAttribute('src');
      if (!imgThumb) {
        img.setAttribute('src','img/noimage.jpg');
      }

      // 요소 추가
      a.appendChild(img);
      a.appendChild(h2);
      a.appendChild(p);
      a.appendChild(span1);
      a.appendChild(span2);
      li.appendChild(a);
      list.appendChild(li);
    })
  }
} 

class CreateElement {
  setAttr(ele, attr, data) {
    ele = document.createElement(ele);
    if (!attr || !data) {
      return ele;
    } else {
      ele.setAttribute(attr, data);
      return ele;
    }
  }

  innerHTML(ele, txt) {
    ele = document.createElement(ele);
    ele.innerHTML = txt;
    return ele;
  }
}