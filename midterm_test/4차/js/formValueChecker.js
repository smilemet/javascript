/**
 * @filename    : formValueChecker
 * @author      : 방미소
 * @description : 폼 유효성 체크 이벤트
 */


/**
 * >> 아이디 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 * 값이 적합할 경우 '멋진 아이디네요!' 메시지 출력
 */
document.querySelector('#user_id').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();

  try {
    regexHelper.value('#user_id', '필수 정보입니다.');
    regexHelper.valueLen('#user_id', 5, 20, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
    regexHelper.checkId('#user_id', '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
  } catch (e) {
    alert(e.message);
    return;
  }

  alert('멋진 아이디네요!');
});


/**
 * >> 비밀번호 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 * 값이 아무것도 입력되지 않았을 때는 회색 자물쇠
 * 값이 입력되었으나 부적합할 때는 빨간 자물쇠 + 오류 메시지
 * 값이 입력되었고 적합할 때는 녹색 자물쇠로 변화
 */
document.querySelector('#user_pw').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();
  const icon = document.querySelector('.pw-icon');
  const msg = document.querySelector('.pw-check-msg')

  try {
    regexHelper.value('#user_pw', '필수 정보입니다.');
    regexHelper.valueLen('#user_pw', 8, 16, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    regexHelper.checkPw('#user_pw', '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
  } catch (e) {
    alert(e.message);

    const current = document.querySelector('#user_pw').value.trim();

    // 아이콘 & 메시지
    if ( current !== '') {
      icon.classList.remove('checked');
      icon.classList.add('error');
      msg.innerHTML = '사용불가'
      msg.style.color = 'red'
    }

    return;
  }

  // 아이콘 & 메시지
  icon.classList.remove('error');
  icon.classList.add('checked');
  msg.innerHTML = '안전'
  msg.style.color = '#03C75A'
});


/**
 * >> 비밀번호 일치여부 체크
 * 검사 내용 : 값의 유무 / 값의 일치 여부
 * 
 * 값이 아무것도 입력되지 않았을 때는 회색 자물쇠
 * 값이 입력되었고 일치할 때는 녹색 자물쇠로 변화
 */
document.querySelector('#user_pw_re').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();
  const icon = document.querySelector('.pw-icon2');

  try {
    regexHelper.value('#user_pw_re', '필수 정보입니다.');
    regexHelper.compareTo('#user_pw', '#user_pw_re', '비밀번호가 일치하지 않습니다.')
  } catch (e) {
    alert(e.message);
    icon.classList.remove('correct');
    return;
  }

  // 아이콘
  icon.classList.add('correct');
});


/**
 * >> 이름 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 * 글자수에는 제한이 없지만 한글의 경우 자음/모음 단독 사용 불가(ex: ㄱㄴㄷ)
 */
document.querySelector('#user_name').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();

  try {
    regexHelper.value('#user_name', '필수 정보입니다.');
    regexHelper.checkName('#user_name', '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)')
  } catch (e) {
    alert(e.message);
    return;
  }
});


/**
 * >> 생년월일 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 * 어떤 칸을 클릭하든 년 > 월 > 일 순서로 유효성 체크하도록 설정
 * 만약 나이 입력값이 만 14세 이하일 경우 보호자 동의 화면 출력
 */
document.querySelectorAll('.birth').forEach(v => {
  v.addEventListener('blur', e => {
    const regexHelper = new RegexHelper();
  
    try {
      regexHelper.value('#birth-yy', '태어난 년도 4자리를 정확하게 입력하세요.')
      regexHelper.valueLen('#birth-yy', 4, 4, '태어난 년도 4자리를 정확하게 입력하세요.')
      regexHelper.value('#birth-mm', '태어난 월을 선택하세요.')
      regexHelper.value('#birth-dd', '태어난 일(날짜) 2자리를 정확하게 입력하세요.')
      regexHelper.valueLen('#birth-dd', 2, 2, '태어난 일(날짜) 2자리를 정확하게 입력하세요.')
    } catch (e) {
      alert(e.message);
      return;
    }

    // 만 14세 이하 여부 체크
    // 해당할 경우 해당 컨테이너들의 display 상태 변화
    const yy = document.querySelector('#birth-yy').value;
    const mm = document.querySelector('#birth-mm').value;
    const dd = document.querySelector('#birth-dd').value;
    const today = new Date();
  
    let userAge = today.getFullYear()-yy;
    const m = today.getMonth()-mm;
    if (m < 0 || (m === 0 && today.getDate() < dd)) {
      userAge--;
    }
  
    if (userAge < 14) {
      const tap = document.querySelectorAll('.tap-container');
      tap.forEach(v => {
        v.classList.toggle('hide')
      });
    }
  })
})


/**
 * >> 성별 입력값 체크
 * 검사 내용 : 값의 선택 여부
 * 
 * 특이사항 없음
 */
document.querySelector('#gender').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();

  try {
    regexHelper.value('#gender', '필수 정보입니다.');
  } catch (e) {
    alert(e.message);
    return;
  }
});


/**
 * >> 이메일 유효성 체크
 * 검사 내용 : 값의 유효성
 * 
 * 필수입력값이 아니므로 값의 유무는 검사하지 않음
 */
document.querySelector('#email').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();
  const current = e.currentTarget.value;

  if (current == "") {
    return true;
  }

  try {
    regexHelper.checkEmail('#email', '이메일 주소를 다시 확인해주세요.');
  } catch (e) {
    alert(e.message);
    return;
  }
});


/**
 * >> 휴대전화 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 */
document.querySelector('#phoneno').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();
  
  try {
    regexHelper.value('#phoneno', '필수 정보입니다.');
    regexHelper.checkPhone('#phoneno', '형식에 맞지 않는 번호입니다.');
  } catch (e) {
    alert(e.message);
    return;
  }
  
  const num = regexHelper.checkPhone('#phoneno', '형식에 맞지 않는 번호입니다.');
  e.currentTarget.value = num;
});


// submit 버튼
document.querySelector('#sign-up-btn').addEventListener('click', e => {
  const regexHelper = new RegexHelper();

  try {
    regexHelper.value('#user_id', '필수 정보입니다.');
    regexHelper.valueLen('#user_id', 5, 20, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
    regexHelper.checkId('#user_id', '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
  } catch (e) {
    alert(e.message);
    return;
  }
  
});


/*********************************************
 만 14세 미만 창
 *********************************************/ 

/**
 * >> 보호자 이름 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 * 
 * 글자수에는 제한이 없지만 한글의 경우 자음/모음 단독 사용 불가(ex: ㄱㄴㄷ)
 */
 document.querySelector('#nok_name').addEventListener('blur', e => {
  const regexHelper = new RegexHelper();

  try {
    regexHelper.value('#nok_name', '필수 정보입니다.');
    regexHelper.checkName('#nok_name', '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)')
  } catch (e) {
    alert(e.message);
    return;
  }
});


/**
 * >> 생년월일 유효성 체크
 * 검사 내용 : 값의 유무 / 값의 유효성
 */
document.querySelectorAll('.nok_birth').forEach(v => {
  v.addEventListener('blur', e => {
    const regexHelper = new RegexHelper();
  
    try {
      regexHelper.value('#nok_birth_yy', '태어난 년도 4자리를 정확하게 입력하세요.')
      regexHelper.valueLen('#nok_birth_yy', 4, 4, '태어난 년도 4자리를 정확하게 입력하세요.')
      regexHelper.value('#nok_birty_mm', '태어난 월을 선택하세요.')
      regexHelper.value('#nok_birty_dd', '태어난 일(날짜) 2자리를 정확하게 입력하세요.')
      regexHelper.valueLen('#nok_birty_dd', 2, 2, '태어난 일(날짜) 2자리를 정확하게 입력하세요.')
    } catch (e) {
      alert(e.message);
      return;
    }
  })
})