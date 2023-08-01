import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const getGenres = () => {
  return axiosInstance.get<Genre>("genres").then((res) => res.data);
};

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
