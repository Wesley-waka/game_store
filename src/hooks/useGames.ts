import { useInfiniteQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import axios, { AxiosRequestConfig } from "axios";
import useGameQueryStore from "../store";
import ms from "ms";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

interface Publisher {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const axiosinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const getGames = (config: AxiosRequestConfig) => {
  return axiosinstance
    .get<FetchResponse<Game>>("/games", config)
    .then((res) => res.data);
};

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      getGames({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};
// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {get
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
