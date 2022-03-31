/**
 * @filename    : ErrorException
 * @author      : 방미소
 * @description : 에러 반환 기본 클래스
 */

class ErrorException extends Error {
  constructor(msg = '내용을 확인해주세요.', selector = null) {
    super(msg);
    this._selector = selector;
  }

  get selector() {
    return this._selector;
  }

  set selector(param) {
    this._selector = param; 
  }
}