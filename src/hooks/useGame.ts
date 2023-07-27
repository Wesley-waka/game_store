import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import axios from "axios";
// import Game from '../entities/Game';
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const get = (id: number | string) => {
  return axiosInstance.get<Game>("games" + "/" + id).then((res) => res.data);
};

console.log(get(1));
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => get(slug),
  });

export default useGame;
