import { createStore, combineReducers } from "redux";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface Action {
  type: string;
  payload?: string | number;
}

export interface RootState {
  game: GameQuery;
}

const initialGameQuery: GameQuery = {
  genreId: 0,
  platformId: 0,
  sortOrder: "",
  searchText: "",
};

export function searchText(text: string) {
  return {
    type: "SEARCH TEXT",
    payload: text,
  };
}

export function selectGenreId(id: number) {
  return {
    type: "SELECT GENRE",
    payload: id,
  };
}

export function selectPlatformId(id: number | undefined) {
  return {
    type: "SELECT PLATFORM",
    payload: id,
  };
}

export function sortOrder(sortOrder: string) {
  return {
    type: "SORT ORDER",
    payload: sortOrder,
  };
}

function gameReducer(state: GameQuery = initialGameQuery, action: Action) {
  switch (action.type) {
    case "SEARCH TEXT":
      return { ...state, searchText: action.payload };
    case "SORT ORDER":
      return {
        ...state,
        sortOrder: action.payload,
      };
    case "SELECT GENRE":
      return { ...state, genreId: action.payload, searchText: undefined };
    case "SELECT PLATFORM":
      return {
        ...state,
        platformId: action.payload,
        searchText: undefined,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);
export default store;
