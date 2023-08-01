import { createStore } from "redux";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: number;
  searchText?: string;
}

const GameQuery = <GameQuery>{
  genreId: 0,
  platformId: 0,
  sortOrder: 0,
  searchText: "",
};

interface Action {
  type: string;
  payload?: string | number;
}

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

export function selectPlatformId(id: number) {
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

function reducer(gameQuery: GameQuery, action: Action) {
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

const store = createStore(reducer);
export default store;
