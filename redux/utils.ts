import { IResults } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialProps {
  isMenuOpen: boolean;
  tab: string;
  showOverlay: boolean;
  item: IResults | null;
}

const initialState: InitialProps = {
  isMenuOpen: false,
  tab: "balance",
  showOverlay: false,
  item: null
};

const setUtils = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setTab: (state, action: PayloadAction<string>) => {
      state.tab = action.payload;
    },
    setShowOverlay: (state, action: PayloadAction<boolean>) => {
      state.showOverlay = action.payload;
    },
    setItem: (state, action: PayloadAction<IResults>) => {
      state.item = action.payload;
    }
  },
});

export const { setIsMenuOpen, setTab, setShowOverlay, setItem } = setUtils.actions;

export default setUtils.reducer;
