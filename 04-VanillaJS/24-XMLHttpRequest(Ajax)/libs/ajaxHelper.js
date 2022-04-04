/**
 * ajax 요청을 처리하고 결과(json)을 콜백함수에게 전달한다.
 * ex) ajaxHelper('backend/simple.json,'get', json => { ... });
 * @param {string} url
 * @param {string} method
 * @param {function} success
 */

function ajaxHelper (url, method, success) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = e => {
    const ajax = e.target;

    if (ajax.readyState === XMLHttpRequest.DONE) {
      if (ajax.status === 200) {
        if (success !== undefined) {
          const json = JSON.parse(ajax.responseText);
          success(json);
        }
      } else {
        const s = parseInt(ajax.status / 100);
        if (s === 4) {
          alert (`[${ajax.status}] ${ajax.statusText} - 요청 주소가 잘못되었습니다.`)
        } else if (s === 5) {
          alert (`[${ajax.status}] ${ajax.statusText} - 서버의 응답이 없습니다.`)
        } else {
          alert (`[${ajax.status}] ${ajax.statusText} - 요청이 실패했습니다.`)
        }
      }
    } // end if
  };

  xhr.open(method, url);
  xhr.send();
}