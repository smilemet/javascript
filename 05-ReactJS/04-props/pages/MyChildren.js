import React from "react";
import MyChildrenSub from "../components/MyChildrenSub";
import Meta from "../components/Meta";

const MyChildren = () => {
  return (
    <div>
      {/* Route처리를 적용받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 됨 */}
      <Meta title="MyChildren.js" description="여기는 MyChildren.js 파일입니다." url={window.location.href}></Meta>
      <h2>MyChildren</h2>    

      {/* prop 전달시 문자열 이외의 데이터타입은 중괄호로 묶어야 함 */}
      {/* children은 특별한 프로퍼티로, 
        시작-끝태그 사이에 있는 content가 자동으로 컴포넌트에 전달됨 */}
      <MyChildrenSub width={400} height={100}><b>Hello World</b></MyChildrenSub>
      <MyChildrenSub width={300} height={80}><b>안녕 React</b></MyChildrenSub>
      <MyChildrenSub width={200} height={50}/>
    </div>
  );
}

export default MyChildren;