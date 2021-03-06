import React from "react";
import { Helmet } from "react-helmet";
import sample from "./assets/img/sample.png";

const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      {/* SEO 태그 */}
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      {/* SNS 등에서 데이터를 긁어갈 때 og 정보를 바탕으로 가져감 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />
      {/* 즐겨찾기 아이콘 이미지 */}
      <link rel="shortcut icon" href={props.image} type="image/png" />
      <link rel="icon" href={props.image} type="image/png" />

      {/* 추가적으로 적용해야할 외부 js나 css를 여기에 명시 가능 */}
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "React Example",
  description: "React.js 예제입니다.",
  keywords: "React",
  author: "name",
  image: sample,
  url: window.location.href,
};

export default Meta;
