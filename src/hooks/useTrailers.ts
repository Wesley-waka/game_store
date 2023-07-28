import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const get = (gameId: number, config: AxiosRequestConfig) => {
  return axiosInstance
    .get<Trailer>(`/games/${gameId}/movies`, config)
    .then((res) => res.data);
};

const useTrailers = (gameId: number) =>
  useQuery([
    {
      queryKey: ["trailers", gameId],
      queryFn: () => get,
    },
  ]);

export default useTrailers;
