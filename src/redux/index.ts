import { createSlice } from "@reduxjs/toolkit";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryState {
  gameQuery: GameQuery;
}
export interface RootState {
  gameQuery: GameQueryState;
  // Add other slices and their state interfaces here
}

export const initialState: GameQueryState = {
  gameQuery: {},
};

const gameQuerySlice = createSlice({
  name: "gameQuery",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.gameQuery.searchText = action.payload;
    },
    setGenreId: (state, action) => {
      state.gameQuery.genreId = action.payload;
      state.gameQuery.searchText = undefined;
    },
    setPlatformId: (state, action) => {
      state.gameQuery.platformId = action.payload;
      state.gameQuery.searchText = undefined;
    },
    setSortOrder: (state, action) => {
      state.gameQuery.sortOrder = action.payload;
    },
  },
});

export const { setSearchText, setGenreId, setPlatformId, setSortOrder } =
  gameQuerySlice.actions;

export default gameQuerySlice.reducer;
