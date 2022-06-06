import { configureStore } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import KakaoSlice from "./slices/KakaoSlice";

const store = configureStore({
  reducer: {
    kakao: KakaoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});
