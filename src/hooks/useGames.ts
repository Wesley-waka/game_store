import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import axios from "axios";

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

const getGames = () => {
  return axiosinstance.get<Game>("/games").then((res) => res.data);
};

const useGames = () =>
  useQuery({
    queryKey: ["games"],
    queryFn: () => getGames,
  });

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
