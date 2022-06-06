import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// 1. 미들웨어
import { createLogger } from "redux-logger";
// 2. 슬라이스
import counterSlice from "./slices/CounterSlice";
import departmentSlice from "./slices/DepartmentSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
    counter: counterSlice,
    department: departmentSlice,
  },
  // 미들웨어
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
  // redux-devtools-extension을 사용하지 않을 경우 false 혹은 명시 X
  devTools: true,
});

export default store;
