import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  isSearching: boolean;
}

const initialState: SearchState = {
  query: "",
  isSearching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    resetSearch: (state) => {
      state.query = "";
      state.isSearching = false;
    },
  },
});

export const { setSearchQuery, setIsSearching, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;