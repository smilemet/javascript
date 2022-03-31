/**
 * @filename    : RegexHelper.js
 * @author      : 방미소
 * @description : 정규표현식 체크
 */

class RegexHelper {

  /**
   * >> 값이 존재하는지 확인
   * @param {string} selector 검사 대상의 CSS 선택자
   * @param {string} msg      값이 존재하지 않을 경우 표시될 메시지
   */

  value(selector, msg) {
    const content = document.querySelector(selector).value;

    if (content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
      throw new ErrorException(msg, selector);
    }

    return true;
  }

  /** 
   * >> 값이 지정된 글자수를 초과하거나 미달했는지 확인
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {int}     minlen    최소 글자수
   * @param {int}     maxlen    최대 글자수
   * @param {string}  msg       글자수가 맞지 않을 경우 표시될 메시지
   */

  valueLen(selector, minlen, maxlen, msg) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;

    if(content.trim().length < minlen || content.trim().length > maxlen) {
      throw new ErrorException(msg, selector);
    }
    
    return true;
  }

  /** 
   * >> 두 값의 동일여부 확인
   * @param {string}  origin  비교 대상의 CSS 선택자
   * @param {string}  compare 검사 대상의 CSS 선택자
   * @param {string}  msg     값이 일치하지 않을 경우 표시될 메시지
   */

  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    let org = document.querySelector(origin).value.trim();
    let cpr = document.querySelector(compare).value.trim();

    if (org != cpr) {
      throw new ErrorException(msg, origin);
    }

    return true;
  }


  /** 
   * >> 입력값이 정규표현식에 맞는지 확인
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       오류 시 표시할 메시지
   * @param {object}  regexExpr 검사할 정규표현식
   */

  field(selector, msg, regexExpr) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;
    const src = content.trim();

    // 검사 오류 시
    if(!regexExpr.test(src)) {
      throw new ErrorException(msg, selector);
    }

    return true;
  }

  /**
   * ID : 영문 소문자, 숫자, 특수기호(_)(-)
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */
  checkId(selector, msg) {
    return this.field(selector, msg, /^[a-z0-9-_]*$/)
  }

  /**
   * PW : 영문 대/소문자, 숫자, 특수기호
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */
  checkPw(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z0-9#?!@$%^&*-]*$/)
  }
  
  /**
   * 이름 : 한글, 영문 대/소문자 (특수기호/공백X)
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */
  checkName(selector, msg) {
    return this.field(selector, msg, /^[가-힣a-zA-Z]*$/);
  }
  
  /**
   * 생년월일 : 숫자
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */
  checkBirth(selector, msg) {
    return this.field(selector, msg, /^[0-9]*$/);
  }


  /**
   * 이메일 : 한글, 영문 대/소문자 (특수기호/공백X)
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */

   checkEmail(selector, msg) {
    return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
  }


  /**
   * 휴대전화 : 전화번호 형식
   * @param {string}  selector  검사 대상의 CSS 선택자
   * @param {string}  msg       표시할 메시지
   */
   checkPhone(selector, msg) {
    const content = document.querySelector(selector).value;
    const arr = content.split('');
    let num = '';
    arr.forEach(v => {
      if (v !== '-') {
        num += v;
      }
    })

    // 검사 오류 시
    const regexExpr = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

    if(!regexExpr.test(num)) {
      throw new ErrorException(msg, selector);
    }

    return num;
  }
}