import React, { memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// 이 경로에 적절한 이미지를 직접 배치해야 한다.
import sample from "./assets/img/sample.png";

const Meta = memo((props) => {
  return (
    <HelmetProvider>
      df getDefaultMiddlewarefd df
      <App />
    </HelmetProvider>
  );
});
