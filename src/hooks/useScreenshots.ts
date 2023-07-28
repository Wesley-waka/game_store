import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d",
  },
});

const getAll = (gameId: number) => {
  return axiosInstance
    .get<FetchResponse<Screenshot>>(`/games/${gameId}/screenshots`)
    .then((res) => res.data);
};

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => getAll(gameId),
  });

export default useScreenshots;
