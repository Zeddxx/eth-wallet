import { configureStore } from "@reduxjs/toolkit";
import setUtils from "@/redux/utils";

export const store = configureStore({
  reducer: {
    setUtils: setUtils,
  },
});

export type RootState = ReturnType<typeof store.getState>;
