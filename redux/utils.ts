import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialProps {
  isMenuOpen: boolean;
  tab: string
}

const initialState: InitialProps = {
  isMenuOpen: false,
  tab: "balance",
};

const setUtils = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setTab: (
      state,
      action: PayloadAction<string>
    ) => {
      state.tab = action.payload;
    },
  },
});

export const { setIsMenuOpen, setTab } = setUtils.actions;

export default setUtils.reducer;
