import { createStore, combineReducers } from "redux";

export interface GameQueryStore {
  genreId?: number;
  platformId?: number;
  sortOrder?: number;
  searchText?: string;
}

interface Action {
  type: string;
  payload?: string | number;
}

export interface RootState {
  game: GameQueryStore;
}

const GameQueryStore = <GameQueryStore>{
  genreId: 0,
  platformId: 0,
  sortOrder: 0,
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

function gameReducer(gameQuery: GameQueryStore, action: Action) {
  switch (action.type) {
    case "SEARCH TEXT":
      return { ...gameQuery, searchText: action.payload };
    case "SELECT GENRE":
      return { ...gameQuery, genreId: action.payload, searchText: undefined };
    case "SELECT PLATFORM":
      return {
        ...gameQuery,
        platformId: action.payload,
        searchText: undefined,
      };
    case "SORT ORDER":
      return {
        ...gameQuery,
        sortOrder: action.payload,
      };
    default:
      return gameQuery;
  }
}

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);
export default store;
