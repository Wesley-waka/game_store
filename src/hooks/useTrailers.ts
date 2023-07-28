import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const getAll = (gameId: number, config: AxiosRequestConfig) => {
  return axiosInstance
    .get<FetchResponse<Trailer>>(`/games/${gameId}/movies`, config)
    .then((res) => res.data);
};

const useTrailers = (gameId: number, config: AxiosRequestConfig) =>
  useQuery({
    queryKey: ["movies", gameId],
    queryFn: () => getAll(gameId, config),
  });

export default useTrailers;
