import { configureStore } from "@reduxjs/toolkit";
import gameQueryReducer from "./index";

const store = configureStore({
  reducer: {
    gameQuery: gameQueryReducer,
  },
});

export default store;
